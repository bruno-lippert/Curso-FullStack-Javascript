import React, { Fragment } from 'react';
import Planet from './planet';

const clickOnPlanet = (name) => {
    alert(`Um click no planeta ${name}`)
}

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json') //serve para chamar uma api, nesse caso estamos chamando direto do arquivo
    let data = await response.json() //para receber o resultado da chamada da api
    return data
};

class Planets extends React.Component {
    constructor(props) {
        super(props); // o metodo super é vai passar as props para a classe que estamos erdando(React.Component)
        this.state = { //sepre que o state atualiza, nosso component é re-renderizado
            planets: [ ]
        }
    }

    componentDidMount() {   //roda quando o component for exibido
        getPlanets().then(data => {
            this.setState(state => ({   //depois de baixar as infos da api
                planets: data['planets'] //e colocamos as infos dentro de planets
                                        //o 'data['planets']' é para pegas as infos que estão dentro de planets na api
            }))
        })
    }

    removeLast = () => {
        let new_planets = [...this.state.planets] //o operador spread(...), extrai todas as propriedades de planets
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets
        }))
    }

    duplicateLastPlanet = () => {
        let last_planet = this.state.planets[this.state.planets.length -1]
        this.setState(state => ({
            planets: [...this.state.planets, last_planet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                <button onClick={this.removeLast}>Remove last</button>
                <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
                {this.state.planets.map((planet, index) => 
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                    // clickOnPlanet={clickOnPlanet}
                    // title_with_underline={true}
                />
                )}

            </Fragment>
        )

    }
}



export default Planets;