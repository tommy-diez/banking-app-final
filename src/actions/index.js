export const deposit = (_id, amt) => {
    return {
        type: 'DEPOSIT',
        payload: {
            _id, amt
        }
    }
}

export const withdrawal = (_id, amt) => {
    return {
        type: 'WITHDRAWAL',
        payload: {
            _id, amt
        }
    }
}

export const populateAccounts = accounts => {
    return {
        type: 'POPULATE',
        payload: {
            accounts
        }
    }
}

export const removeAccount = (id) => {
    return {
        type: 'REMOVE',
        payload: {
            id
        }
    }
}

export const addAccount = (accountName, accountBalance) => {
    return {
        type: 'ADD',
        payload: {
            accountName, accountBalance
        }
    }
}


