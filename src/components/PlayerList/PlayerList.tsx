import React from 'react';
import styled from 'styled-components';

type Player = {
    id: number,
    name: string,
}

type Props = {
    players: Player[]
}

const ListContainer = styled.div`
    background-color: #e0e0e0;
    padding: 10px;
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;
const PlayerList: React.FC<Props> = ({ players }) => {
    return (
        <ListContainer>
            { players.map((p: Player) => <p key={ p.id }>{ p.name }</p>)}
        </ListContainer>
    );
}

export default PlayerList;
