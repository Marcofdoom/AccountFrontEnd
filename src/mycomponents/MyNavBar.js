import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Navbar } from 'reactstrap';

class MyNavBar extends Component {

    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <button>
                        <Link to="/">Register</Link>
                    </button>

                    <button>
                        <Link to="/AccountList">Account List</Link>
                    </button>
                </Navbar>
            </div>
        )
    }

}

export default MyNavBar;