import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './Navbar'
import Accounts from './Accounts'

class App extends React.Component {

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

export default App;

