import React, { Component } from 'react';
import axios from 'axios';
import './Jokes.css';

class Jokes extends Component {

    state = {
        jokes: [],
    }

    componentDidMount () {
        const token = localStorage.getItem('jwt');

        const requestOptions = {
            headers: {
                Authorization: token,
            },
        };
        
        axios.get('http://localhost:5000/api/jokes', requestOptions)
            .then(response => {
                this.setState({ jokes: response.data });
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })

    }

    logout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
            this.props.history.push('/login');
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        return (
            <div className='jokes'>
                <button className='logoutButton' onClick={this.logout}>Log Out</button>
                    <div className='jokeCards'>
                        {this.state.jokes.map(joke => {
                            return (
                                <div className='jokeCard' key={joke.id}>
                                    <div className='setup'>{joke.setup}</div>
                                    <div className='punchline'>{joke.punchline}</div>
                                    <div className='type'># {joke.type}</div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        );
    }
}

export default Jokes;