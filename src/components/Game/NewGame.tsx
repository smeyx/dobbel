import React from 'react';
import PlayerSelection from '../PlayerSelection/PlayerSelection';
import GameModeSelection from '../GameModeSelection/GameModeSelection';

const NewGame: React.FC = () => ( 
    <>
        <PlayerSelection />
        <GameModeSelection />
    </>
);

export default NewGame;