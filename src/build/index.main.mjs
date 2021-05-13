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
  const ctc4 = stdlib.T_Data({
    Owner: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc0]);
  
  
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
    sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, 0), v18]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc5, [stdlib.checkedBigNumberify('./index.rsh:28:13:dot', stdlib.UInt_max, 0)]);
    const [v27, v28, v29] = txn1.data;
    const v32 = txn1.time;
    const v26 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v34 = stdlib.add(v18, v27);
    const v36 = v34;
    const v37 = v26;
    const v136 = v32;
    const v137 = v18;
    
    if ((() => {
      const v41 = stdlib.sub(v36, v137);
      const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
      
      return v42;})()) {
      let v43;
      sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37, v136]);
      sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37]);
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
      sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:76:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  const v34 = stdlib.add(v18, v27);
  let v36 = v34;
  let v37 = v26;
  let v136 = v32;
  let v137 = v18;
  
  while ((() => {
    const v41 = stdlib.sub(v36, v137);
    const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
    
    return v42;})()) {
    let v43;
    
    
    const txn2 = await (ctc.recv(3, 1, [ctc4], false, stdlib.checkedBigNumberify('./index.rsh:71:16:decimal', stdlib.UInt_max, 1024)));
    if (txn2.didTimeout) {
      
      
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0], [v27, v37, v136], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v37, v136]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v37]);
        const [] = txn3.data;
        const v127 = txn3.time;
        const v124 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v131 = [v37, v136];
        v43 = v131;
        const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
        const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
        const cv36 = v133;
        const cv37 = v132;
        const cv136 = v127;
        const cv137 = v136;
        
        (() => {
          const v36 = cv36;
          const v37 = cv37;
          const v136 = cv136;
          const v137 = cv137;
          
          if ((() => {
            const v41 = stdlib.sub(v36, v137);
            const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
            
            return v42;})()) {
            let v43;
            sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37, v136]);
            sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37]);
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
            sim_r.view = [ctc5, [stdlib.checkedBigNumberify('./index.rsh:76:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v127 = txn3.time;
      const v124 = txn3.from;
      ;
      const v131 = [v37, v136];
      v43 = v131;
      const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
      const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
      const cv36 = v133;
      const cv37 = v132;
      const cv136 = v127;
      const cv137 = v136;
      
      v36 = cv36;
      v37 = cv37;
      v136 = cv136;
      v137 = cv137;
      
      continue;
      }
    else {
      const [v91] = txn2.data;
      const v100 = txn2.time;
      const v90 = txn2.from;
      let v92;
      switch (v91[0]) {
        case 'Owner': {
          const v93 = v91[1];
          const v95 = v93[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
          v92 = v95;
          
          break;
          }
        }
      ;
      let v101;
      switch (v91[0]) {
        case 'Owner': {
          const v102 = v91[1];
          v101 = true;
          
          break;
          }
        }
      stdlib.assert(v101, {
        at: './index.rsh:38:45:application',
        fs: ['at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
        msg: null,
        who: 'Creator'
        });
      switch (v91[0]) {
        case 'Owner': {
          const v106 = v91[1];
          const v107 = v106[stdlib.checkedBigNumberify('./index.rsh:54:29:array ref', stdlib.UInt_max, 0)];
          const v108 = v106[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
          ;
          
          
          const txn3 = await (ctc.recv(5, 0, [], false, false));
          const [] = txn3.data;
          const v120 = txn3.time;
          const v117 = txn3.from;
          ;
          const v122 = stdlib.add(v100, v27);
          const v130 = [v108, v122];
          v43 = v130;
          const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
          const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
          const cv36 = v133;
          const cv37 = v132;
          const cv136 = v120;
          const cv137 = v100;
          
          v36 = cv36;
          v37 = cv37;
          v136 = cv136;
          v137 = cv137;
          
          continue;
          
          break;
          }
        }}
    }
  return;
  
  };
export async function Owner(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc4 = stdlib.T_Data({
    Owner: ctc3
    });
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc0, ctc2, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc0, ctc0, ctc2]);
  
  
  const v18 = await ctc.creationTime();
  
  
  
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc0], false, false));
  const [v27, v28, v29] = txn1.data;
  const v32 = txn1.time;
  const v26 = txn1.from;
  ;
  const v34 = stdlib.add(v18, v27);
  let v36 = v34;
  let v37 = v26;
  let v136 = v32;
  let v137 = v18;
  
  while ((() => {
    const v41 = stdlib.sub(v36, v137);
    const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
    
    return v42;})()) {
    let v43;
    const v64 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:38:45:application', stdlib.UInt_max, 63));
    const v69 = stdlib.sub(v36, v136);
    const v71 = stdlib.mul(v28, v69);
    const v72 = stdlib.div(v71, v27);
    const v74 = stdlib.protect(ctc1, await interact.purchase(v72), {
      at: './index.rsh:45:60:application',
      fs: ['at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:42:13:function exp)', 'at ./index.rsh:38:45:application call to "runOwner0" (defined at: ./index.rsh:38:45:function exp)', 'at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)', 'at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
      msg: 'purchase',
      who: 'Owner'
      });
    const v76 = stdlib.addressEq(v64, v37);
    const v78 = v76 ? false : true;
    const v81 = v74 ? v78 : false;
    
    const v84 = [v72, v64];
    const v85 = ['Owner', v84];
    
    const txn2 = await (ctc.sendrecv(3, 1, stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0, ctc4], [v27, v37, v136, v85], [v72, []], [ctc4], v81, false, stdlib.checkedBigNumberify('./index.rsh:71:16:decimal', stdlib.UInt_max, 1024), (async (txn2) => {
      const sim_r = { txns: [] };
      sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), v27, v37, v136]);
      sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:38:45:dot', stdlib.UInt_max, 2), v27, v37]);
      const [v91] = txn2.data;
      const v100 = txn2.time;
      const v90 = txn2.from;
      
      let v92;
      switch (v91[0]) {
        case 'Owner': {
          const v93 = v91[1];
          const v95 = v93[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
          v92 = v95;
          
          break;
          }
        }
      sim_r.txns.push({
        amt: v92,
        kind: 'to',
        tok: undefined
        });
      let v101;
      switch (v91[0]) {
        case 'Owner': {
          const v102 = v91[1];
          v101 = true;
          
          break;
          }
        }
      stdlib.assert(v101, {
        at: './index.rsh:38:45:application',
        fs: ['at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
        msg: null,
        who: 'Owner'
        });
      switch (v91[0]) {
        case 'Owner': {
          const v106 = v91[1];
          const v107 = v106[stdlib.checkedBigNumberify('./index.rsh:54:29:array ref', stdlib.UInt_max, 0)];
          const v108 = v106[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
          sim_r.txns.push({
            amt: v107,
            kind: 'from',
            to: v37,
            tok: undefined
            });
          sim_r.nextSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 3), v27, v100, v108]);
          sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 3), v27, v108]);
          sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:59:19:after expr stmt semicolon', stdlib.UInt_max, 0)]];
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      })));
    if (txn2.didTimeout) {
      
      
      const txn3 = await (ctc.sendrecv(4, 0, stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), [ctc0, ctc2, ctc0], [v27, v37, v136], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v37, v136]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:72:17:dot', stdlib.UInt_max, 2), v27, v37]);
        const [] = txn3.data;
        const v127 = txn3.time;
        const v124 = txn3.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v131 = [v37, v136];
        v43 = v131;
        const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
        const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
        const cv36 = v133;
        const cv37 = v132;
        const cv136 = v127;
        const cv137 = v136;
        
        (() => {
          const v36 = cv36;
          const v37 = cv37;
          const v136 = cv136;
          const v137 = cv137;
          
          if ((() => {
            const v41 = stdlib.sub(v36, v137);
            const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
            
            return v42;})()) {
            let v43;
            sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37, v136]);
            sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37]);
            sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.nextSt = stdlib.digest(ctc9, []);
            sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
            sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:76:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
            sim_r.isHalt = true;
            }})();
        return sim_r;
        })));
      const [] = txn3.data;
      const v127 = txn3.time;
      const v124 = txn3.from;
      ;
      const v131 = [v37, v136];
      v43 = v131;
      const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
      const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
      const cv36 = v133;
      const cv37 = v132;
      const cv136 = v127;
      const cv137 = v136;
      
      v36 = cv36;
      v37 = cv37;
      v136 = cv136;
      v137 = cv137;
      
      continue;
      }
    else {
      const [v91] = txn2.data;
      const v100 = txn2.time;
      const v90 = txn2.from;
      let v92;
      switch (v91[0]) {
        case 'Owner': {
          const v93 = v91[1];
          const v95 = v93[stdlib.checkedBigNumberify('./index.rsh:52:22:array ref', stdlib.UInt_max, 0)];
          v92 = v95;
          
          break;
          }
        }
      ;
      let v101;
      switch (v91[0]) {
        case 'Owner': {
          const v102 = v91[1];
          v101 = true;
          
          break;
          }
        }
      stdlib.assert(v101, {
        at: './index.rsh:38:45:application',
        fs: ['at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
        msg: null,
        who: 'Owner'
        });
      switch (v91[0]) {
        case 'Owner': {
          const v106 = v91[1];
          const v107 = v106[stdlib.checkedBigNumberify('./index.rsh:54:29:array ref', stdlib.UInt_max, 0)];
          const v108 = v106[stdlib.checkedBigNumberify('./index.rsh:55:27:array ref', stdlib.UInt_max, 1)];
          ;
          const v114 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:60:21:application', stdlib.UInt_max, 113));
          const v116 = stdlib.addressEq(v108, v114);
          if (v116) {
            stdlib.protect(ctc5, await interact.revealId(v29), {
              at: './index.rsh:62:32:application',
              fs: ['at ./index.rsh:60:21:application call to [unknown function] (defined at: ./index.rsh:60:25:function exp)', 'at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)'],
              msg: 'revealId',
              who: 'Owner'
              });
            }
          else {
            }
          
          
          const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 1), [ctc0, ctc0, ctc2], [v27, v100, v108], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 3), v27, v100, v108]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:65:17:dot', stdlib.UInt_max, 3), v27, v108]);
            const [] = txn3.data;
            const v120 = txn3.time;
            const v117 = txn3.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v122 = stdlib.add(v100, v27);
            const v130 = [v108, v122];
            v43 = v130;
            const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
            const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
            const cv36 = v133;
            const cv37 = v132;
            const cv136 = v120;
            const cv137 = v100;
            
            (() => {
              const v36 = cv36;
              const v37 = cv37;
              const v136 = cv136;
              const v137 = cv137;
              
              if ((() => {
                const v41 = stdlib.sub(v36, v137);
                const v42 = stdlib.gt(v41, stdlib.checkedBigNumberify('./index.rsh:40:49:decimal', stdlib.UInt_max, 0));
                
                return v42;})()) {
                let v43;
                sim_r.nextSt = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37, v136]);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 2), v27, v37]);
                sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:38:45:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc9, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc9, []);
                sim_r.view = [ctc6, [stdlib.checkedBigNumberify('./index.rsh:76:13:after expr stmt semicolon', stdlib.UInt_max, 0)]];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn3.data;
          const v120 = txn3.time;
          const v117 = txn3.from;
          ;
          const v122 = stdlib.add(v100, v27);
          const v130 = [v108, v122];
          v43 = v130;
          const v132 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 0)];
          const v133 = v43[stdlib.checkedBigNumberify('./index.rsh:38:11:array', stdlib.UInt_max, 1)];
          const cv36 = v133;
          const cv37 = v132;
          const cv136 = v120;
          const cv137 = v100;
          
          v36 = cv36;
          v37 = cv37;
          v136 = cv136;
          v137 = cv137;
          
          continue;
          
          break;
          }
        }}
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
byte base64(dg==)
gtxna 0 ApplicationArgs 2
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
byte base64(dg==)
byte base64()
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
    size: 113
    }, null, {
    count: 9,
    size: 170
    }, {
    count: 8,
    size: 129
    }, {
    count: 8,
    size: 129
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
// CheckPay
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
gtxna 0 ApplicationArgs 5
btoi
load 255
+
dup
store 252
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
// check view bs
int 0
itob
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
// check view bs
int 0
itob
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
int 0
getbyte
int 0
==
bz l1
load 253
substring 1 41
dup
store 249
substring 0 8
btoi
store 250
l1:
l0:
// CheckPay
// "./index.rsh:38:45:dot"
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
-
load 250
==
assert
load 253
int 0
getbyte
int 0
==
bz l3
load 253
substring 1 41
store 248
int 1
store 249
l3:
l2:
// Nothing
// "./index.rsh:38:45:application"
// "[at ./index.rsh:38:45:application call to [unknown function] (defined at: ./index.rsh:38:45:function exp)]"
load 249
assert
load 253
int 0
getbyte
int 0
==
bz l5
load 253
substring 1 41
dup
store 248
substring 8 40
store 247
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 254
==
assert
gtxn 4 Amount
load 248
substring 0 8
btoi
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 3
int 3
itob
load 255
itob
concat
load 247
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
l5:
l4:
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
// CheckPay
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
load 254
gtxna 0 ApplicationArgs 5
concat
dup
store 253
substring 0 32
store 252
load 253
substring 32 40
btoi
dup
store 251
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 252
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
// check view bs
int 0
itob
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
// CheckPay
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
load 254
gtxna 0 ApplicationArgs 5
btoi
load 255
+
itob
concat
dup
store 253
substring 0 32
store 252
load 253
substring 32 40
btoi
dup
store 251
gtxna 0 ApplicationArgs 5
btoi
-
int 0
>
bz l0
// check view bs
int 0
itob
gtxna 0 ApplicationArgs 2
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
itob
concat
load 252
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
// check view bs
int 0
itob
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
  unsupported: false
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
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
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
                    "name": "_Owner",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v91",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
        "internalType": "struct T14",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v108",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
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
        "internalType": "struct T15",
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
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
                    "internalType": "enum _enum_T9",
                    "name": "which",
                    "type": "uint8"
                  },
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
                    "name": "_Owner",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T9",
                "name": "v91",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                "name": "v37",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
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
        "internalType": "struct T14",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v108",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a16040805160208082018352438252825180820184526000808252925181528351808301849052905181850152835180820385018152606090910190935282519201919091209055610aa5806100826000396000f3fe6080604052600436106100435760003560e01c806327cefa391461004f5780632bf4f87314610064578063dbea492414610077578063ec04f9f01461008a5761004a565b3661004a57005b600080fd5b61006261005d36600461088e565b61009d565b005b61006261007236600461088e565b6101bf565b61006261008536600461087d565b6102a9565b61006261009836600461088e565b610538565b6040516100b1906003908390602001610a02565b6040516020818303038152906040528051906020012060001c600054146100d757600080fd5b600080556100e3610711565b34156100ee57600080fd5b6100fe6060830160408401610842565b6020808301516001600160a01b0390921690915261012190833590840135610a2a565b60208083018051909101919091525181526040517fbc349596d5faaec98e28c8315dfa91543a70085db315d07189ddd0648440a202906101629084906109f4565b60405180910390a1610172610753565b805183359052815160209081015181830180519190915283515181516001600160a01b039091169083015280514360409091015251908401356060909101526101ba8161065f565b505050565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c600054146101fc57600080fd5b60008055341561020b57600080fd5b60408051823581526020808401359082015282820135818301526060808401359082015290517f2bb570a5feee0f446e450005a048c78efd478914692e1f0be1009bac144b11709181900360800190a1610263610753565b8051602083013590819052610279908335610a2a565b60208083018051929092528151339101528051436040909101525182356060909101526102a58161065f565b5050565b6040516102bd906002908390602001610a16565b6040516020818303038152906040528051906020012060001c600054146102e357600080fd5b600080556102ef61078f565b6102ff6104006040840135610a2a565b431061030a57600080fd5b600061031c6080840160608501610863565b801561033857634e487b7160e01b600052602160045260246000fd5b141561035b57610350368390038301608084016108a9565b602082018190525181525b8051341461036857600080fd5b600061037a6080840160608501610863565b801561039657634e487b7160e01b600052602160045260246000fd5b14156103bb576103ae368390038301608084016108a9565b6060820152600160408201525b80604001516103c957600080fd5b60006103db6080840160608501610863565b80156103f757634e487b7160e01b600052602160045260246000fd5b14156102a55761040f368390038301608084016108a9565b60808201526104246040830160208401610842565b6080820151516040516001600160a01b03929092169181156108fc0291906000818181858888f19350505050158015610461573d6000803e3d6000fd5b507f2f233ad60f9cb73aba98bf619005a40e5b7a1bc97b63f6b84b5a1a034aa6e81d82604051610491919061095d565b60405180910390a16104c66040518060600160405280600081526020016000815260200160006001600160a01b031681525090565b823581524360208083019182526080848101518201516001600160a01b03908116604080870191825280516003958101959095528651908501529351606084015292519092169181019190915260a0015b60408051601f198184030181529190528051602090910120600055506102a5565b60405161054c906002908390602001610a16565b6040516020818303038152906040528051906020012060001c6000541461057257600080fd5b6000805561057e610711565b61058e6104006040840135610a2a565b43101561059a57600080fd5b34156105a557600080fd5b6105b56040830160208401610842565b602080830180516001600160a01b039093169092528151604080860135919092015290518252517effdbacc0a492158ec280b407a74d5ac43be90922459daa422bd4d68d47d104906106089084906109c4565b60405180910390a1610618610753565b805183359052815160209081015181830180519190915283515181516001600160a01b039091169201919091528051436040918201529051908401356060909101526101ba815b6106676107e1565b60208201516060810151905160009161067f91610a42565b111561070a576106b260405180606001604052806000815260200160006001600160a01b03168152602001600081525090565b8251518152602080840180518201516001600160a01b0390811683850190815291516040908101518186019081528151600295810195909552855191850191909152915116606083015251608082015260a001610517565b6000805533ff5b60408051608081018252600091810182815260608201929092529081905b815260200161074e604080518082019091526000808252602082015290565b905290565b6040805160608082018352600082840181815283528351608081018552818152602081810183905294810182905291820152909182019061074e565b6040518060a00160405280600081526020016107bb604080518082019091526000808252602082015290565b81526000602082015260400161072f604080518082019091526000808252602082015290565b604080516060810182526000602082018181529282015290819061074e565b80356001600160a01b038116811461081757600080fd5b919050565b80356001811061081757600080fd5b60006080828403121561083c578081fd5b50919050565b600060208284031215610853578081fd5b61085c82610800565b9392505050565b600060208284031215610874578081fd5b61085c8261081c565b600060c0828403121561083c578081fd5b60006080828403121561089f578081fd5b61085c838361082b565b6000604082840312156108ba578081fd5b6040516040810181811067ffffffffffffffff821117156108e957634e487b7160e01b83526041600452602483fd5b604052823581526108fc60208401610800565b60208201529392505050565b80358252602080820135908301526001600160a01b0361092a60408301610800565b1660408301525050565b803582526001600160a01b0361094c60208301610800565b166020830152604090810135910152565b60c0810161096b8284610934565b6109776060840161081c565b6001811061099557634e487b7160e01b600052602160045260246000fd5b6060830152608083810135908301526001600160a01b036109b860a08501610800565b1660a083015292915050565b608081016109d28284610934565b60608301358015158082146109e657600080fd5b806060850152505092915050565b608081016109d28284610908565b8281526080810161085c6020830184610908565b8281526080810161085c6020830184610934565b60008219821115610a3d57610a3d610a59565b500190565b600082821015610a5457610a54610a59565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220fc12d080c5e437f9f947eacd52bb74f1b4cc7394e1ee79cf504affd36bfb4b7564736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

