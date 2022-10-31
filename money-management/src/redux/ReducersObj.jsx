import * as ActionTypes from "./ActionTypes";

const initial_state = {
  counter: [{ id: 123, cat: "VEHICLE", date: "2022-10-12", amount: 500, status: 'CIH' },
  { id: 166, cat: "VEHICLE", date: "2022-12-12", amount: 700, status: 'BMCE' },
  { id: 124, cat: "MEDICINE", date: "2022-10-12", amount: 1500, status: 'CIH' },
  { id: 144, cat: "FOOD", date: "2022-11-12", amount: 500, status: 'PAYPAL' },
  { id: 111, cat: "GAMING", date: "2022-30-12", amount: 600, status: 'PAYONEER' },






],
  catt :[
        {id:201,cat:"MEDICINE"},
        {id:203,cat:"VEHICLE"},
        {id:204,cat:"FOOD"},
        {id:205,cat:"GAMING"},


        ],
  acct :[{id:300,acc:"CIH",amount:1534},{id:301,acc:"BMCE",amount:9872},{id:302,acc:"PAYPAL",amount:68668},{id:303,acc:"PAYONEER",amount:6871}],
  goals :[{id:85,name:"NEW CAR" , deadline:"2023-12-12" , to:20000 , paid : 10},
          {id:86,name:"NEW HOME" , deadline:"2023-10-10" , to:50000 , paid : 50000},
          {id:87,name:"NEX SUMMER" , deadline:"2024-12-12" , to:10000 , paid : 2500}]
};

const ReducerCounter = (state = initial_state, action) => {
  let newState = { ...state };


    if(action.type===ActionTypes.MODIFY){
      newState.counter = newState.counter.map((item) =>{if (item.id!==action.id) {return item} else {return {id:Number(action.id),cat:action.cat,date:action.date,amount:Number(action.amount),status:action.pay}  } } )
      console.log(newState.counter)
    }else if(action.type===ActionTypes.ADD){
      newState.counter =([...newState.counter,{id:Number(action.id),cat:action.cat,date:action.date,amount:Number(action.amount),status:action.pay}])
    }else if (action.type===ActionTypes.DELETEIT){
      newState.counter= newState.counter.filter(item=> item.id!==action.payload )
    }else if(action.type===ActionTypes.ADDACC){
      newState.acct = ([...newState.acct,{id:action.payload,acc:action.name,amount:action.amount}])
    }else if(action.type===ActionTypes.DELETEACC){
      newState.acct = newState.acct.filter(item=>(item.id!==action.payload))
    }else if (action.type===ActionTypes.ADDCAT) {
      newState.catt = ([...newState.catt,{id:action.payload,cat:action.name}])
    }else if (action.type===ActionTypes.DELETECAT)  {
      newState.catt = newState.catt.filter(item=>(item.id!==action.payload))
    }else if (action.type===ActionTypes.DELETEGOAL)  {
      newState.goals = newState.goals.filter(item=>(item.id!==action.payload))
    }else if (action.type===ActionTypes.ADDGOAL) {
      newState.goals = ([...newState.goals,{id:Number(action.payload),name:action.name,deadline:action.deadline,to:Number(action.to),paid:Number(action.paid)}])
    }else if (action.type===ActionTypes.MODIFYGOAL){
      newState.goals = newState.goals.map((item) =>{if (item.id!==action.payload) {return item} else {return {id:Number(action.payload),name:action.name,deadline:action.deadline,to:Number(action.to),paid:Number(action.paid)}  } } )
    }




  return newState;
};


export default ReducerCounter;