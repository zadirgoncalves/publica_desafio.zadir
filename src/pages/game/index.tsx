import React from 'react';
import GameTable from '../../components/table';
import GameForm from '../../components/form';
import './styles.css';

const Game:React.FC = () => {
  return (
    <div className='main'>
      <GameForm/>
      <GameTable />
    </div>
  );
}

export default Game;

