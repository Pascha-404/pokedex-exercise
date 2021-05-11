import React, {
    Component
} from 'react';
import './Pokecard.css'

class Pokecard extends Component {
    render() {
        const {name, img, type, exp} = this.props;

        return (
                <div className="Pokecard">
                    <h3 className="Pokecard-name">{name}</h3>
                    <img className="Pokecard-img" src={img}></img>
                    <p className="Pokecard-type">Type: {type}</p>
                    <p className="Pokecard-exp">EXP: {exp}</p>
                </div>
        )
    }
};

export default Pokecard;