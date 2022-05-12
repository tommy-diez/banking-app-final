import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import { deposit } from './actions'
import { withdrawal } from './actions'
import { removeAccount } from './actions'
import AccountDetails from './AccountDetails'

class Accounts extends React.Component {

    generateCard = (account) => {
        return (
            <div className="card">
                <div className="card-body">
                    <Link to={`account/${account._id}`}>
                        <h5 className="card-title">{account.name}</h5>
                    </Link>
                    <h6 className="card-text">Balance: {account.balance}</h6>
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