import { combineReducers } from "redux";

const DEFAULT_STATE = {
    accounts: [
        { "_id": 1, "name": "Lannisters", "balance": 1189.78 },
        { "_id": 2, "name": "Starks", "balance": 567.71 },
        { "_id": 3, "name": "Baratheons", "balance": 31.26 },
        { "_id": 4, "name": "Targaryens", "balance": 34.75 },
        { "_id": 5, "name": "Greyjoys", "balance": 9.03 },
        { "_id": 6, "name": "Tyrells", "balance": 1133.45 },
        { "_id": 7, "name": "Martells", "balance": 737.90 },
        { "_id": 8, "name": "Tullys", "balance": 483.56 },
        { "_id": 9, "name": "Arryns", "balance": 1035.83 },
        { "_id": 10, "name": "Free Folk", "balance": -134.34 }
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

const accountReducer = (state, action) => {
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
        default :
            return !state ? DEFAULT_STATE : state
    }
}

export default combineReducers({
    accounts: accountReducer
});