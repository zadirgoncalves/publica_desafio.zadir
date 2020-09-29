import React  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './styles.css';

import { useDispatch } from "react-redux";
import { addGame } from "../../store/game/actions";

const GameForm:React.FC = () => {
    const dispatch = useDispatch();
    const [state, setState] = React.useState<{ placar: number | string }>({
      placar: ''
    });

  const clearValues = () => {
      setState({
        placar: ''
      });
  }

  const onChange = (event: React.ChangeEvent<{ id:string; value: string }>) => {
    const id = event.target.id as keyof typeof state;
    setState({
      ...state,
      [id]: Number(event.target.value)
    })
  };

  const onSubmitEvent = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      addGame({
        jogo:0,
        placar: state.placar ? Number(state.placar) : 0,
        minimo: 0,
        maximo: 0,
        quebra_maximo: 0,
        quebra_minimo: 0
      })
    );
    clearValues();
  }

  return (
    <form onSubmit={onSubmitEvent}>
        <div className='header-form'>
          <div className='header-form-fields'>
          <TextField value={state.placar} id="placar" type="number" label="Placar" variant="outlined" onChange={onChange}/>
          </div>
          <div className = 'header-form-buttom'>
            <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              >
              ADICIONAR
            </Button>
          </div>
        </div>
    </form>
  );
}

export default GameForm;
