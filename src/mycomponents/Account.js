import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Account extends Component {

    render() {
        return (
            <tr>
                <td>
                    <h4>{this.props.account.accountNumber}</h4>
                </td>
            </tr>
        )
    }
}

export default Account;