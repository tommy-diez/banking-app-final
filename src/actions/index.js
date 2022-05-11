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



