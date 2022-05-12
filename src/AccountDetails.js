import React from 'react';
import {connect} from "react-redux";
import {useParams} from 'react-router-dom'

import { deposit } from './actions'
import { withdrawal } from './actions'
import { removeAccount } from './actions'
import { useNavigate } from 'react-router-dom'

class AccountDetails extends React.Component {

    constructor(props) {
        super(props)
    }

    handleChange = (event) => {
        this.setState({amt: event.target.value})
    }

    generateCard = (account) => {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{account.name}</h5>
                    <h6 className="card-text">Balance: {account.balance}</h6>
                    <input onChange={this.handleChange} className="form-control mr-sm-2" type="text" />
                    <button onClick={()=>{this.props.deposit(account._id, parseFloat(this.state.amt))}} className="btn btn-outline-dark">Deposit</button>
                    <button onClick={()=>{this.props.withdrawal(account._id, parseFloat(this.state.amt))}} className="btn btn-outline-primary">Withdraw</button>
                    <br />
                </div>
            </div>
        )
    }

    render() {
        let {id} = this.props.match.params;
        console.log(id + " is the Id")
        //console.log(this.props.accounts);
        const accounts = this.props.accounts;
        console.log(accounts)
        const accountId = accounts.findIndex((account) => {
            return parseInt(id) === account._id
        })
        console.log(accountId)
        const account = this.props.accounts[accountId];
        return (
            <div>
                <h1>{account.name}</h1>
                <div>
                    {this.generateCard(account)}
                </div>
            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
    }
}

export default connect(mapStateToProps, {deposit, withdrawal, removeAccount})(AccountDetails)