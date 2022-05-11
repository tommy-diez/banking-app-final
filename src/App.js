import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux';

import Navbar from './Navbar'
import {populateAccounts} from "./actions";
import Accounts from './Accounts'

const PATH =  "https://my-json-server.typicode.com/bnissen24/project2DB";

class App extends React.Component {

    getData = () => {
        axios({
            method: 'get',
            url: PATH + '/accounts'
        }).then((response) => {
            this.props.populateAccounts(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error.message)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" exact element=<Accounts /> />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
        return {
            errorMessage: state.errors
        }
}

export default connect(mapStateToProps, { populateAccounts })(App)
