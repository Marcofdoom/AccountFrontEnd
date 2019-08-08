import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import MyNavBar from './MyNavBar';
import Register from './Register';
import AccountList from './AccountList';

class RouteHome extends Component {

    constructor() {
        super();

        this.state = {
            accounts: []
        }
    }

    componentDidMount() {
        this.getAll();
    }

    getAll = () => {
        axios.get("/registerfrontend/Account/getAllAccounts").then(res => {
            // axios.get("http://localhost:8080/Account/getAllAccounts").then(res => {
            this.setState({
                accounts: res.data

            })
            console.log(this.state.accounts);
        })
    }

    render() {
        return (<div>
            <Router>
                <MyNavBar />
                <Route exact path="/" component={() => <Register
                    getAll={this.getAll}
                />} />
                <Route path="/AccountList" component={() => <AccountList
                    accounts={this.state.accounts} updateTable={this.getAll}
                />} />
            </Router>
        </div>)
    }
}

export default RouteHome;