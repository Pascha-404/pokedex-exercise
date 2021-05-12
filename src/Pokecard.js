import React, {
    Component
} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        function addZeros(num, targetLength){
            return num.toString().padStart(targetLength, 0)
        }

        const {name, type, exp} = this.props;
        let { id } = this.props;

        const idEdit = addZeros(id, 3)
        return (
                <div className="Pokecard">
                    <h3 className="Pokecard-name">{name}</h3>
                    <img className="Pokecard-img" src={"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ idEdit +".png"}></img>
                    <p className="Pokecard-type">Type: {type}</p>
                    <p className="Pokecard-exp">EXP: {exp}</p>
                </div>
        )
    }
};

export default Pokecard;