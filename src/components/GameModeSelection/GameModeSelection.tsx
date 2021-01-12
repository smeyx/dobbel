import React, { useState } from 'react';
import GameModeOptions from '../GameModeOptions/GameModeOptions';
import { ModeSelection, Modes, ModeContainer } from './GameModeSelection-styles';

type Mode = {
    id: number,
    name: string
}
const GameModeSelection: React.FC = () => {
    const modes:Array<Mode> = [
        { id: 1, name: '501' },
        { id: 2, name: 'Around The Clock' },
        { id: 3, name: 'Cricket' }
    ];

    const [gameMode, setGameMode] = useState<number>(1);
    const handleClick = (modeId: number) => setGameMode(modeId);

    return (
        <ModeSelection>
            <Modes>
                {
                    modes.map(mode => {
                        return (
                            <ModeContainer 
                                selected={ mode.id === gameMode } 
                                onClick={() => handleClick(mode.id)}
                            >
                                {mode}
                            </ModeContainer>
                        );
                    }
                    )
                }
            </Modes>
            <GameModeOptions modeId={ gameMode } />
        </ModeSelection>
    )
};

export default GameModeSelection;
