import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <Link className="nav-link active" to="/">Accounts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/add_account">Add Account</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Navbar;