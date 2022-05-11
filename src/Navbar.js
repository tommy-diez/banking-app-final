import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return(
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <Link to="/">Accounts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transactions">Transactions</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default Navbar;