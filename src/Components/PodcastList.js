import React from 'react'
import Podcast from './Podcast';

const PodcastList = (props) => {

    const podcastComponents = props.podcasts.map((podcastData, index) => {
        return (
            <Podcast
                key={index}
                title={podcastData.title.label}
                genre={podcastData.category.attributes.label}
                position={index}
            >
            </Podcast>
        )
    })

       return (<div> { podcastComponents } </div>)
}

export default PodcastList