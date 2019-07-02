import React, {Fragment} from 'react'

const Podcast = (props) => (
    <Fragment>
        <h1>{props.position+1}</h1>
        <h1>{props.title}</h1>
        <h3>{props.genre}</h3>
    </Fragment>
)

export default Podcast