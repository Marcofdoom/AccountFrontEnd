import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            prize: ""
        }
    }

    handleFirstNameChange = event => {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange = event => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit = event => {

        event.preventDefault();

        const post = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };

        // axios.post(`http://localhost:8080/Account/postAccount`, post).then(res => {
        axios.post(`/registerfrontend/Account/postAccount`, post).then(res => {
            this.setState({
                prize: res.data.prize
            });
            document.getElementById("prize_message").innerText = res.data.prize;
        }).catch(e => console.log(e));
    }

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name:
                        <input type="text" name="firstName" id="firstName_id" onChange={this.handleFirstNameChange} />
                    </label>
                    <br />
                    <label>Last Name:
                        <input type="text" name="lastName" id="lastName_id" onChange={this.handleLastNameChange} />
                    </label>
                    <button type="submit">Post</button>

                    <span id="prize_message"></span>
                </form>
            </div>)
    }

}

export default Register;