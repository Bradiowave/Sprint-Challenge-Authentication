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

    render() {
        return (
            <ul>
                {this.state.jokes.map(joke => {
                    return (
                        <div key={joke.id}>
                            <li>{joke.setup}</li>
                            <li>{joke.punchline}</li>
                        </div>
                    )
                })}
            </ul>
        );
    }
}

export default Jokes;