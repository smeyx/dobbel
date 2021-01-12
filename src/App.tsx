import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
// prevents typescript errors 
// import {} from 'styled-components/cssprop';

import Game from './components/Game/Game';
import NewGame from './components/Game/NewGame';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

body {
  background-color: #f5f5f5;
  margin: 0;
  min-height: 100%;
}

*, *:before, *:after {
  box-sizing: inherit;
}`;

function App() /*  */{
  const game = false;

  return (
    <>
    <GlobalStyle />
      {
        game &&
        <Game />
      }

      {
        !game &&
        <NewGame />
      }
    </>
  )
}

export default App;
