import { combineReducers } from "redux";

const DEFAULT_STATE = {
    accounts: [

    ],
}

const getAccounts = (state) => {
    let newState = {
        accounts: [...state.accounts]
    }
    newState.accounts.forEach(accounts => {

    })
    return newState;
}

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case 'DEPOSIT':
            let depositId = state.accounts.findIndex(account => {
                return account._id === action.payload._id});
            console.log(typeof state.accounts[depositId].balance);
            console.log(action.payload.amt)
            state.accounts[depositId].balance += action.payload.amt;
            return getAccounts(state);
        case 'WITHDRAWAL':
            let withdrawalId = state.accounts.findIndex(account => {
                return account._id === action.payload._id});
            state.accounts[withdrawalId].balance -= action.payload.amt;
            return getAccounts(state);
        case 'POPULATE':
            return action.payload;
        case 'REMOVE':
            console.log(action.payload.id)
            let deleteIndex = state.accounts.findIndex(account => {
                return account._id === action.payload.id;
            })
            console.log(deleteIndex)
            state.accounts.splice(deleteIndex, 1);
            return getAccounts(state)
        case 'ADD':
            let accountName = action.payload;
            let accountBalance = action.payload.accountBalance;
            accountName.name = action.payload.name;
            accountName._id = state.accounts.length + 1;
            accountName.balance = accountBalance;
            state.accounts.push(accountName)
            return getAccounts(state)
        default :
            return state
    }
}

export default combineReducers({
    accounts: accountReducer
});