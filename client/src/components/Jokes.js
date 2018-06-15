import React, { Component } from 'react';
import axios from 'axios';

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
            <div>
                <button onClick={this.logout}>Log Out</button>
                <ul>
                    {this.state.jokes.map(joke => {
                        return (
                            <div key={joke.id}>
                                <li>Q: {joke.setup}</li>
                                <li>A: {joke.punchline}</li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Jokes;