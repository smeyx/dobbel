import React from 'react';
import styled from 'styled-components';

import PlayerList from '../PlayerList/PlayerList';

const PlayerBox = styled.div`
    background-color: #f3f3f3;
    display: flex;
    min-width: 65%;
    justify-content: center;
    align-items: center;
    `;

const PlayerSelection: React.FC = () => {
    const players = [
        { id: 1, name: 'Simon' },
        { id: 2, name: 'Svane' }
    ]
    return (
        <PlayerBox>
            <PlayerList players={ players }/>
        </PlayerBox>
    );
}

export default PlayerSelection;