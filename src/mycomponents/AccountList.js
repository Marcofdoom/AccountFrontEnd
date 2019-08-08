import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Account from './Account';

class AccountList extends Component {

    componentDidMount() {
        this.props.updateTable();
    }

    tabRow() {
        return this.props.accounts.map((object, index) => {
            return <Account account={object} key={index} itemIndex={index} />;
        });
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Account List</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>)
    }
}

export default AccountList;