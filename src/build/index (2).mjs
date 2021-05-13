import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(100);

  const alice = await stdlib.newTestAccount(startingBalance);
  const bob = await stdlib.newTestAccount(startingBalance);
  const claire = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = alice.deploy(backend);
  const ctcBob = bob.attach(backend, ctcAlice.getInfo());
  const ctcClaire = claire.attach(backend, ctcAlice.getInfo());

  await Promise.all([
    backend.Creator(ctcAlice, {
      getParams: () => ({
        lifetime: 10,
        price: stdlib.parseCurrency(10),
        id: 12121212
      })
    }),
    backend.Owner(ctcBob, {
      purchase: async (price) => {
        const priceFormatted = stdlib.formatCurrency(price, 4);
        const waitTime = Math.floor(Math.random() * 100);
        console.log(`Bob waits for ${waitTime}`);
        await stdlib.wait(waitTime);
        console.log(`Bob will decide to buy for ${priceFormatted} ALGO`);
        return true;
      },
      revealId: (id) => console.log(`Bob saw ${stdlib.bigNumberToNumber(id)} \n ---`)
    }),
    backend.Owner(ctcClaire, {
      purchase: async (price) => {
        const priceFormatted = stdlib.formatCurrency(price, 4);
        const waitTime = Math.floor(Math.random() * 100);
        console.log(`Claire waits for ${waitTime}`);
        await stdlib.wait(waitTime);
        console.log(`Claire will decide to buy for ${priceFormatted} ALGO`);
        return true;
      },

      revealId: (id) => console.log(`Claire saw ${stdlib.bigNumberToNumber(id)} \n ---`)
    })
  ]);

  console.log('App finished!');
})();
