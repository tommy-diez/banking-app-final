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
        default :
            return state
    }
}

export default combineReducers({
    accounts: accountReducer
});