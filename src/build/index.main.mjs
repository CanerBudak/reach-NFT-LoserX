// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  return {
    infos: {
      },
    views: {
      }
    };
  };

export async function Creator(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Object({
    id: ctc0,
    lifetime: ctc0,
    price: ctc0
    });
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Tuple([ctc0]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
  const v18 = await ctc.creationTime();
  
  const v22 = stdlib.protect(ctc1, await interact.getParams(), {
    at: './index.rsh:25:41:application',
    fs: ['at ./index.rsh:24:17:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)'],
    msg: 'getParams',
    who: 'Creator'
    });
  const v23 = v22.lifetime;
  const v24 = v22.price;
  const v25 = v22.id;
  
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc0], [v18, v23, v24, v25], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0, ctc0], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc4, [stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, 0)]);
    const [v27, v28, v29] = txn1.data;
    const v31 = txn1.time;
    const v26 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v33 = stdlib.add(v18, v27);
    const v35 = v33;
    const v36 = v26;
    const v120 = v31;
    const v121 = v18;
    
    if ((() => {
      const v43 = stdlib.sub(v35, v121);
      const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
      
      return v44;})()) {
      sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36, v120]);
      sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36]);
      sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      }
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc7, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
      sim_r.view = [ctc7, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v27, v28, v29] = txn1.data;
  const v31 = txn1.time;
  const v26 = txn1.from;
  ;
  const v33 = stdlib.add(v18, v27);
  let v35 = v33;
  let v36 = v26;
  let v120 = v31;
  let v121 = v18;
  
  while ((() => {
    const v43 = stdlib.sub(v35, v121);
    const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
    
    return v44;})()) {
    const txn2 = await (ctc.recv(3, 1, [ctc3], false, stdlib.checkedBigNumberify('./index.rsh:71:16:decimal', stdlib.UInt_max, 1024)));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0], [v27, v36, v120], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v36, v120]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v36]);
        const [] = txn3.data;
        const v115 = txn3.time;
        const v113 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv35 = v120;
        const cv36 = v36;
        const cv120 = v115;
        const cv121 = v120;
        
        (() => {
          const v35 = cv35;
          const v36 = cv36;
          const v120 = cv120;
          const v121 = cv121;
          
          if ((() => {
            const v43 = stdlib.sub(v35, v121);
            const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
            
            return v44;})()) {
            sim_r.nextSt = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36, v120]);
            sim_r.nextSt_noTime = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36]);
            sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc7, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, []);
            sim_r.view = [ctc7, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v115 = txn3.time;
      const v113 = txn3.from;
      ;
      const cv35 = v120;
      const cv36 = v36;
      const cv120 = v115;
      const cv121 = v120;
      
      v35 = cv35;
      v36 = cv36;
      v120 = cv120;
      v121 = cv121;
      
      continue;
      }
    else {
      const [v88] = txn2.data;
      const v94 = txn2.time;
      const v87 = txn2.from;
      const v90 = v88[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
      ;
      const v97 = v88[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
      ;
      const txn3 = await (ctc.recv(5, 0, [], false, false));
      const [] = txn3.data;
      const v108 = txn3.time;
      const v106 = txn3.from;
      ;
      const v110 = stdlib.add(v94, v27);
      const cv35 = v110;
      const cv36 = v97;
      const cv120 = v108;
      const cv121 = v94;
      
      v35 = cv35;
      v36 = cv36;
      v120 = cv120;
      v121 = cv121;
      
      continue;
      }
    }
  return;
  
  };
export async function Owner(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc2]);
  
  
  const v18 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc0], false, false));
  const [v27, v28, v29] = txn1.data;
  const v31 = txn1.time;
  const v26 = txn1.from;
  ;
  const v33 = stdlib.add(v18, v27);
  let v35 = v33;
  let v36 = v26;
  let v120 = v31;
  let v121 = v18;
  
  while ((() => {
    const v43 = stdlib.sub(v35, v121);
    const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
    
    return v44;})()) {
    const v66 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:38:45:application', stdlib.UInt_max, 65));
    const v70 = stdlib.sub(v35, v120);
    const v72 = stdlib.mul(v28, v70);
    const v73 = stdlib.div(v72, v27);
    const v75 = stdlib.protect(ctc1, await interact.purchase(v73), {
      at: './index.rsh:45:60:application',
      fs: ['at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
      msg: 'purchase',
      who: 'Owner'
      });
    const v77 = stdlib.addressEq(v66, v36);
    const v79 = v77 ? false : true;
    const v82 = v75 ? v79 : false;
    
    const v84 = [v73, v66];
    
    const txn2 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0, ctc3], [v27, v36, v120, v84], [v73, []], [ctc3], v82, false, stdlib.checkedBigNumberify('./index.rsh:71:16:decimal', stdlib.UInt_max, 1024), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), v27, v36, v120]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), v27, v36]);
      const [v88] = txn2.data;
      const v94 = txn2.time;
      const v87 = txn2.from;
      
      const v90 = v88[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
      sim_r.txns.push({
        amt: v90,
        kind: 'to',
        tok: undefined
        });
      const v97 = v88[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
      sim_r.txns.push({
        amt: v90,
        kind: 'from',
        to: v36,
        tok: undefined
        });
      sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 3), v27, v94, v97]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 3), v27, v97]);
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = false;
      
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0], [v27, v36, v120], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v36, v120]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v36]);
        const [] = txn3.data;
        const v115 = txn3.time;
        const v113 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const cv35 = v120;
        const cv36 = v36;
        const cv120 = v115;
        const cv121 = v120;
        
        (() => {
          const v35 = cv35;
          const v36 = cv36;
          const v120 = cv120;
          const v121 = cv121;
          
          if ((() => {
            const v43 = stdlib.sub(v35, v121);
            const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
            
            return v44;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36, v120]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v115 = txn3.time;
      const v113 = txn3.from;
      ;
      const cv35 = v120;
      const cv36 = v36;
      const cv120 = v115;
      const cv121 = v120;
      
      v35 = cv35;
      v36 = cv36;
      v120 = cv120;
      v121 = cv121;
      
      continue;
      }
    else {
      const [v88] = txn2.data;
      const v94 = txn2.time;
      const v87 = txn2.from;
      const v90 = v88[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
      ;
      const v97 = v88[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
      ;
      const v103 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:60:21:application', stdlib.UInt_max, 102));
      const v105 = stdlib.addressEq(v97, v103);
      if (v105) {
        stdlib.protect(ctc4, await interact.revealId(v29), {
          at: './index.rsh:62:32:application',
          fs: ['at ./index.rsh:60:21:application call to [unknown function] (defined at: ./index.rsh:60:25:function exp)', 'at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
          msg: 'revealId',
          who: 'Owner'
          });
        }
      else {
        }
      
      
      const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 1), [ctc0, ctc0, ctc2], [v27, v94, v97], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 3), v27, v94, v97]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 3), v27, v97]);
        const [] = txn3.data;
        const v108 = txn3.time;
        const v106 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v110 = stdlib.add(v94, v27);
        const cv35 = v110;
        const cv36 = v97;
        const cv120 = v108;
        const cv121 = v94;
        
        (() => {
          const v35 = cv35;
          const v36 = cv36;
          const v120 = cv120;
          const v121 = cv121;
          
          if ((() => {
            const v43 = stdlib.sub(v35, v121);
            const v44 = stdlib.gt(v43, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
            
            return v44;})()) {
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36, v120]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v36]);
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc8, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
            sim_r.view = [ctc8, []];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v108 = txn3.time;
      const v106 = txn3.from;
      ;
      const v110 = stdlib.add(v94, v27);
      const cv35 = v110;
      const cv36 = v97;
      const cv120 = v108;
      const cv121 = v94;
      
      v35 = cv35;
      v36 = cv36;
      v120 = cv120;
      v121 = cv121;
      
      continue;
      }
    }
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m3}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  stepargs: [null, {
    count: 9,
    size: 105
    }, null, {
    count: 9,
    size: 161
    }, {
    count: 8,
    size: 121
    }, {
    count: 8,
    size: 121
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
btoi
store 254
gtxna 0 ApplicationArgs 8
btoi
store 253
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:28:13:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxna 0 ApplicationArgs 5
btoi
load 255
+
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
gtxn 0 Sender
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`, null, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
store 254
gtxna 0 ApplicationArgs 8
store 253
// Handler 3
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
load 253
substring 0 8
btoi
store 252
// "CheckPay"
// "./index.rsh:38:45:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 253
substring 8 40
store 251
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
itob
concat
load 251
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 1024
+
dup
gtxn 0 LastValid
==
assert
dup
gtxn 1 LastValid
==
assert
dup
gtxn 2 LastValid
==
assert
dup
gtxn 3 LastValid
==
assert
dup
gtxn 4 LastValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
store 254
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:72:17:dot"
// "[at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxna 0 ApplicationArgs 5
btoi
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
pop
l0:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
gtxna 0 ApplicationArgs 5
btoi
int 1024
+
dup
gtxn 0 FirstValid
==
assert
dup
gtxn 1 FirstValid
==
assert
dup
gtxn 2 FirstValid
==
assert
dup
gtxn 3 FirstValid
==
assert
dup
gtxn 4 FirstValid
==
assert
pop
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 6
btoi
store 255
gtxna 0 ApplicationArgs 7
store 254
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 8
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 3
int 3
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:65:17:dot"
// "[at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
gtxna 0 ApplicationArgs 4
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxna 0 ApplicationArgs 5
btoi
load 255
+
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 254
concat
keccak256
gtxna 0 ApplicationArgs 1
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 0
==
assert
b done
// Check GroupSize
global GroupSize
int 4
==
assert
gtxna 0 ApplicationArgs 4
btoi
int 0
==
assert
// Check time limits
l0:
byte base64()
gtxna 0 ApplicationArgs 2
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
gtxna 0 ApplicationArgs 3
btoi
int 1
==
assert
b done
// Check GroupSize
global GroupSize
int 5
==
assert
gtxna 0 ApplicationArgs 4
btoi
gtxn 4 Fee
==
assert
// Check time limits
done:
int 1
return
`],
  unsupported: false,
  viewKeys: 0,
  viewSize: 0
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T8",
                "name": "v88",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v97",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v18",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v28",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v29",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address payable",
                    "name": "elem1",
                    "type": "address"
                  }
                ],
                "internalType": "struct T8",
                "name": "v88",
                "type": "tuple"
              }
            ],
            "internalType": "struct T9",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v36",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v94",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v97",
                "type": "address"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382528251808201845260008082529251815283518083018490529051818501528351808203850181526060909101909352825192019190912090556107e6806100826000396000f3fe6080604052600436106100435760003560e01c806327cefa391461004f5780632bf4f87314610064578063c4cb210114610077578063ec04f9f01461008a5761004a565b3661004a57005b600080fd5b61006261005d36600461065d565b61009d565b005b61006261007236600461065d565b61018c565b61006261008536600461064c565b610272565b61006261009836600461065d565b610403565b6040516100b1906003908390602001610757565b6040516020818303038152906040528051906020012060001c600054146100d757600080fd5b6000805534156100e657600080fd5b7fbc349596d5faaec98e28c8315dfa91543a70085db315d07189ddd0648440a202816040516101159190610735565b60405180910390a16101256105be565b805182359081905261013b90602084013561076b565b602082015152610151606083016040840161062b565b602080830180516001600160a01b0390931692820192909252815143604090910152905190830135606090910152610188816104fa565b5050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146101c957600080fd5b6000805534156101d857600080fd5b60408051823581526020808401359082015282820135818301526060808401359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a16102306105be565b805160208301359081905261024690833561076b565b6020808301805192909252815133910152805143604090910152518235606090910152610188816104fa565b604051610286906002908390602001610743565b6040516020818303038152906040528051906020012060001c600054146102ac57600080fd5b600080556102c0610400604083013561076b565b43106102cb57600080fd5b346060820135146102db57600080fd5b6102eb604082016020830161062b565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610326573d6000803e3d6000fd5b507f4baebf28593c2049707cdc0a76313ac2896083b38be37ceb1a4a65bae9e9440b8160405161035691906106cd565b60405180910390a161038b6040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b813581524360208201526103a560a083016080840161062b565b6001600160a01b039081166040838101918252805160036020808301919091528551928201929092529084015160608201529051909116608082015260a00160408051601f1981840301815291905280516020909101206000555050565b604051610417906002908390602001610743565b6040516020818303038152906040528051906020012060001c6000541461043d57600080fd5b60008055610451610400604083013561076b565b43101561045d57600080fd5b341561046857600080fd5b7effdbacc0a492158ec280b407a74d5ac43be90922459daa422bd4d68d47d104816040516104969190610705565b60405180910390a16104a66105be565b8051823590526020808201516040840180359091526104c691840161062b565b602080830180516001600160a01b039093169290910191909152805143604091820152905190830135606090910152610188815b60208101516060810151905160009161051291610783565b11156105b45761054560405180606001604052806000815260200160006001600160a01b03168152602001600081525090565b8151518152602080830180518201516001600160a01b03908116838501908152915160409081015181860190815281516002818701529551868301529251909116606085015290516080808501919091528151808503909101815260a0909301905281519101206000556105bb565b6000805533ff5b50565b6040805160608082018352600082840181815283528351608081018552818152602081810183905294810182905291820152909182015290565b80356001600160a01b038116811461060f57600080fd5b919050565b600060808284031215610625578081fd5b50919050565b60006020828403121561063c578081fd5b610645826105f8565b9392505050565b600060a08284031215610625578081fd5b60006080828403121561066e578081fd5b6106458383610614565b803582526001600160a01b03610690602083016105f8565b166020830152604090810135910152565b80358252602080820135908301526001600160a01b036106c3604083016105f8565b1660408301525050565b60a081016106db8284610678565b606083810135908301526001600160a01b036106f9608085016105f8565b16608083015292915050565b608081016107138284610678565b606083013580151580821461072757600080fd5b806060850152505092915050565b6080810161071382846106a1565b828152608081016106456020830184610678565b8281526080810161064560208301846106a1565b6000821982111561077e5761077e61079a565b500190565b6000828210156107955761079561079a565b500390565b634e487b7160e01b600052601160045260246000fdfea26469706673582212206cd0a2b68c8f54cb72f9511fec65c53aaabaa0d1f471be9d992c06e3b33582cd64736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

