import React, { Component } from 'react';
import PodcastList from '../Components/PodcastList';

class PodcastContainer extends Component{
    constructor(props) {
        super(props)
        this.state = {
            podcasts: []
        };
    }

    componentDidMount() {
        const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        fetch(url)
            .then(res => res.json())
            .then(podcasts => this.setState({ podcasts: podcasts.feed.entry }))
        .catch(err => console.error)
    }

    render() {
        return (
            <div><PodcastList podcasts={this.state.podcasts}/></div>
            
        )
    }
}

export default PodcastContainer