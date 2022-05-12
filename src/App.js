import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

import Navbar from './Navbar'
import {populateAccounts} from "./actions";
import Accounts from './Accounts'
import AccountDetails from "./AccountDetails";
import AddAccount from "./AddAccount";

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
        const Wrapper = (props) => {
            const params = useParams();
            return <AccountDetails  {...{...props, match: {params}} } />
        }
        return (
            <div className="container">
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" exact element={<Accounts />} />
                        <Route path="/account/:id" element={<Wrapper />} />
                        <Route path="add_account" element={<AddAccount />} />
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
