import React, {
    Component
} from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'


class Pokedex extends Component {
    render() {
        const { hand, handScore } = this.props;
        const renderPokemon = hand.map(pokemon => (
            <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type} exp={pokemon.base_experience} />
        ));
        let classes;
        let announcement        
        if(this.props.isWinner){
            classes = "Pokedex winner"
            announcement = "THIS HAND WINS!"
        } else{
            classes = "Pokedex looser"
        };
        return ( 
        <div className = {classes} >
            <h1 className = "Pokedex-title" > Pokedex </h1> 
            <h3 className = "Pokedex-totalExp">Total EXP: {handScore}</h3>
            <div className="Pokecard-wrap">
                { renderPokemon }
            </div>
            <p>{announcement}</p>
            </div>
        )
    }
};

export default Pokedex;