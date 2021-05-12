import React, {
    Component
} from 'react';
import Pokecard from './Pokecard'
import pokeCollection from './pokeCollection'
import './Pokedex.css'


class Pokedex extends Component {
    render() {
        const renderPokemon = pokeCollection.map(pokemon => (
            <Pokecard name={pokemon.name} id={pokemon.id} type={pokemon.type} exp={pokemon.base_experience} />
        ))
        return ( 
        <div className = "Pokedex" >
            <h1 className = "Pokedex-title" > Pokedex </h1> 
            <div className="Pokecard-wrap">
                { renderPokemon }
            </div>
            </div>
        )
    }
};

export default Pokedex;