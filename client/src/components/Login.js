import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);

                console.log('Log in props: ', this.props);
                this.props.history.push('/jokes');
            })
            .catch(err => console.log('error logging in'))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name='username'
                            type='text'
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name='password'
                            type='password'
                        />
                    </div>
                    <div>
                        <button type='submit'>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;