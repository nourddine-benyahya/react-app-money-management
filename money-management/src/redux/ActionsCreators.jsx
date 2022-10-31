import * as Actions from './ActionTypes'

export const modify = (id,amount,date,cat,pay) =>{
    return {
        type : Actions.MODIFY,
        id : id,
        amount :amount,
        date :date,
        cat:cat,
        pay:pay
    }
}
export const add = (id,amount,date,cat,pay) =>{
    return {
        type : Actions.ADD,
        id : id,
        amount :amount,
        date :date,
        cat:cat,
        pay:pay
    }
}
export const deleteit = (id) =>{
    return {
        type : Actions.DELETEIT,
        payload : id,
    }
}

export const deleteacc = (id) =>{
    return {
        type : Actions.DELETEACC,
        payload : id,
    }
}

export const addacc = (id,name,amount) =>{
    return {
        type : Actions.ADDACC,
        payload : id,
        name : name,
        amount : amount,

    }
}

export const addcat = (id,name) =>{
    return {
        type : Actions.ADDCAT,
        payload : id,
        name : name,
    }
}

export const deletecat = (id) =>{
    return {
        type : Actions.DELETECAT,
        payload : id,
    }
}


export const deletegoal = (id) =>{
    return {
        type : Actions.DELETEGOAL,
        payload : id,
    }
}



export const modifygoal = (id,name,deadline,to,paid) =>{
    return {
        type : Actions.MODIFYGOAL,
        payload : id,
        name :name,
        deadline:deadline,
        to:to,
        paid:paid
    }
}


export const addgoal = (id,name,deadline,to,paid) =>{
    return {
        type : Actions.ADDGOAL,
        payload : id,
        name :name,
        deadline:deadline,
        to:to,
        paid:paid
    }
}

