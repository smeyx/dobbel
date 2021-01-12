import styled from 'styled-components';

export const ModeSelection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    `;

export const Modes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #0c0c0c;
    border-radius: 7px;
    `;

    export  const ModeContainer = styled.a<{ selected: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5vh 1vw;
    transition: ease-in 150ms;

    &:first-child {
      border-right: 2px solid #0c0c0c;
    }
    &:last-child {
      border-left: 2px solid #0c0c0c;
    }
    &:hover {
      cursor: pointer;
      background-color: #0c0c0c;
      color: #f5f5f5;
    }

    ${props => props.selected &&`
      background: #0c0c0c;
      color: #f5f5f5;
      `}
      `;
