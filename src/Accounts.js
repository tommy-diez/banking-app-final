import React from 'react';
import {connect} from 'react-redux';

import { deposit } from './actions'
import { withdrawal } from './actions'
import { removeAccount } from './actions'

class Accounts extends React.Component {

    generateCard = (account) => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{account.name}</h5>
                    <h6 className="card-text">Balance: {account.balance}</h6>
                    <button onClick={()=>{this.props.deposit(account._id, 100)}} className="btn btn-outline-dark">Deposit</button>
                    <button onClick={()=>{this.props.withdrawal(account._id, 100)}} className="btn btn-outline-primary">Withdraw</button>
                    <button onClick={()=>{this.props.removeAccount(account._id)}} className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <h1>Accounts</h1>
                    <div className="row">
                        {this.props.accounts.map(account => this.generateCard(account))}
                    </div>
            </div>
        )
    }

}

const mapStateProps = (state) => {
    return {
        accounts: state.accounts.accounts
    }
}

export default connect(mapStateProps, {deposit, withdrawal, removeAccount})(Accounts)