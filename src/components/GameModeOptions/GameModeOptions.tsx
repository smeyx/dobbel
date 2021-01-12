import React from 'react';
import { OptionsContainer } from './GameModeOptions-styles';

type Props = {
  modeId: number
}

const GameModeOptions: React.FC<Props> = ({ modeId }) => {
  return (
    <OptionsContainer>showing options for</OptionsContainer>
  );
};

export default GameModeOptions;
