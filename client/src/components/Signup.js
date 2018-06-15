import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

class Signup extends Component {

    state = {
        username: '',
        password: '',
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/users', this.state)
            .then(response => {
                localStorage.setItem('jwt', response.data.token);

                console.log('sign up props: ', this.props);
                this.props.history.push('/jokes');
            })
            .catch(err => console.log('error signing up'))
    }

    render() {
        return (
            <div className='signup'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='usernameDiv'>
                        <label className='usernameLabel'>Username: </label>
                        <input className='usernameInput'
                            value={this.state.username}
                            onChange={this.handleInputChange}
                            name='username'
                            type='text'
                        />
                    </div>
                    <div className='passwordDiv'>
                        <label className='passwordLabel'>Password: </label>
                        <input className='passwordInput'
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name='password'
                            type='password'
                        />
                    </div>
                    <div>
                        <button className='loginButton' type='submit'>Sign Up</button>
                    </div>
                </form>
                <Link className='loginLink' to='/login'>Already have an account? Log In Here</Link>
            </div>
        );
    }
}

export default Signup;