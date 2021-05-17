'reach 0.1';
'use strict';
/**
 * @dev Sürekli satın alım zorunlu fiyat kendini güncellemiyor,
 * Hep azalıyor
 */

export const main = Reach.App(
  {},
  [
    Participant('Creator', {
      getParams: Fun([], Object({
        lifetime: UInt,
        price: UInt,
        id: UInt
      })),
    }),
    ParticipantClass('Owner', {
      purchase: Fun([UInt], Bool),
      revealId: Fun([UInt], Null),
      seeOwner: Fun([Address], Null),
    })
  ],
  (Creator, Owner) => {
    Creator.only(() => {
      const _params = interact.getParams();
      const [lifetime, price, id] = declassify([_params.lifetime, _params.price, _params.id]);
    });
    Creator.publish(lifetime, price, id);

    // Calculate price
    const calcPrc = (remaining) => {
      return ((price * remaining) / lifetime);
    }

    //const [timeRemaining, keepGoing] = makeDeadline(lifetime);

    const deadlineTime = lastConsensusTime() + lifetime;
    const [owner, lastTime] = parallelReduce([Creator, deadlineTime])
      .invariant(balance() == 0)
      .while((lastTime - lastConsensusTime()) > 0)
      .case(Owner,
        (() => { // Local
          const timeRemaining = lastTime - lastConsensusTime();
          const rPrice = calcPrc(timeRemaining);
          const willPurchase = declassify(interact.purchase(rPrice));

          return {
            msg: [rPrice, this],
            when: willPurchase && this != owner
          };
        }),
        ((msg) => msg[0]), // Pay
        ((msg) => { // Consensus
          const rPrice = msg[0];
          const addr = msg[1];

          transfer(rPrice).to(owner);

          commit();
          Owner.only(() => {
            if (addr == this) {
              interact.revealId(id);
            } else {
              interact.seeOwner(addr);
            }
          });
          Owner.publish();

          const extendedTime = lastConsensusTime() + lifetime;
          return [addr, extendedTime];
        })
      )
      .timeout(1024, () => {
        Anybody.publish();
        return [owner, lastConsensusTime()];
      });

    commit();
  }
);

