import React from 'react';
import {connect} from 'react-redux';

import {addAccount} from "./actions";

class AddAccount extends React.Component {

    state = {
        name: '',
        balance: ''
    }

    render() {
        return (
            <div>
                <h1>Create a new Account</h1>
                <form onSubmit={this.handleSubmitAccount}>
                    <div className="form-group">
                        <label htmlFor="name">Account Name: </label>
                        <input className="form-control" type="text" id="name" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="amount">Amount: </label>
                        <input className="form-control" type="text" id="amount" value={this.state.balance} onChange={(event)=>this.setState({balance: event.target.value})} />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-outline-primary">Create Account</button>
                </form>
            </div>
        )
    }

    handleSubmitAccount = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state.name, this.state.balance)
        this.setState({
            name: '',
            balance: ''
        })
    }

}

export default connect(null, {addAccount})(AddAccount);