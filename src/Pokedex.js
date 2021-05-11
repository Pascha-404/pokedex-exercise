import React, {
    Component
} from 'react';
import Pokecard from './Pokecard'
import pokeCollection from './pokeCollection'
import './Pokedex.css'


class Pokedex extends Component {
    render() {
        return ( 
        <div className = "Pokedex" >
            <h1 className = "Pokedex-title" > Pokedex </h1> 
            <div className="Pokecard-wrap">
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
                <Pokecard name = "Eevee"
                img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
                type = "normal"
                exp = "65" />
            </div>
            </div>
        )
    }
};

export default Pokedex;