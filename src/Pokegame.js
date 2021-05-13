import React, {Component} from 'react';
import Pokedex from './Pokedex';
import pokeCollection from './pokeCollection'

class Pokegame extends Component {
render(){
    function randomPokemon(array){
        let pickedPokemon = []
        for(let i = 0; i <= 3; i++){
            pickedPokemon.push(array[Math.trunc(Math.random() * array.length)])
        }
        return pickedPokemon
    };

    function calcExp(array){
        let sum = 0;
        array.forEach(pokemon => {
            sum = pokemon.base_experience + sum
        });
        return sum
    };
    
    function isWinner(firstScore, secondScore){
        if(firstScore > secondScore){
            return <div className="Pokegame">
            <Pokedex hand={firstHand} handScore={firstHandScore} isWinner />
            <Pokedex hand={secondHand} handScore={secondHandScore} />
        </div>
        } else {
            return <div className="Pokegame">
            <Pokedex hand={firstHand} handScore={firstHandScore} />
            <Pokedex hand={secondHand} handScore={secondHandScore} isWinner />
        </div>
        }
    }

    const firstHand = randomPokemon(pokeCollection)
    const secondHand = randomPokemon(pokeCollection)
    const firstHandScore = calcExp(firstHand);
    const secondHandScore = calcExp(secondHand);

    const game = isWinner(firstHandScore, secondHandScore)

    return(
        game
    )
}
}

export default Pokegame