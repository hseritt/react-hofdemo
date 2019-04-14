import React from 'react';
import Card from './Card';

const CardList = ({players}) => {
    console.log(players);
    const cardComponent = players.map((player, i) => {
        let imgFile = require('./' + players[i].imgFile);
        return(
            <Card
                key={i}
                id={players[i].id}
                name={players[i].name}
                nickname={players[i].nickname}
                imgFile={imgFile}
                description={players[i].description}
            />
        )
    });

    return (
        <div>
            {cardComponent}
        </div>
    );
};

export default CardList;
