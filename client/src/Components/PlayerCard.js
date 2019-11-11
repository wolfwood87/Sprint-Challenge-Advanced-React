import React from 'react';

const PlayerCard = (props) => {
    return(
        <div data-test='play-Com'>
            <h1>Player: {props.player.name}</h1>
            <p>Country: {props.player.country}</p>
            <p>ID: {props.player.id}</p>
        </div>
    )
}

export default PlayerCard;