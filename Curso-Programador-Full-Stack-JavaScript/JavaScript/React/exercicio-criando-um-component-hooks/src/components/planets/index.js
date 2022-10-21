import React, { Fragment, useState, useEffect } from 'react';
import Planet from './planet';
import Form from './form';

const clickOnPlanet = (name) => {
    alert(`Um click no planeta ${name}`)
}

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json') //serve para chamar uma api, nesse caso estamos chamando direto do arquivo
    let data = await response.json() //para receber o resultado da chamada da api
    return data
};

// componentDidMount() {   //roda quando o component for exibido
//     getPlanets().then(data => {
//         this.setState(state => ({   //depois de baixar as infos da api
//             planets: data['planets'] //e colocamos as infos dentro de planets
//             //o 'data['planets']' é para pegas as infos que estão dentro de planets na api
//         }))
//     })
// }

const Planets = () => {
    const [planets, setPlanets] = useState([]) //declaração do state, valor dentro de 'useState(valorInicial)'

    useEffect(() => {           // o use efect roda tando no componentDidMount, quando o componente é preparado para aparecer na tela, tanto como no component de Update, o component de updade roda sempre que um estado é atualizado
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])//colocar dentro do array para rodar toda vez que um estado(o q vai dentro do array) for atualizado, se estiver vazio vai renderizar só uma vez, quando é montado

    // const removeLast = () => {
    //     let new_planets = [...planets]; //o operador spread(...), extrai todas as propriedades de planets
    //     new_planets.pop()
    //     setPlanets(new_planets)
    // }

    // const duplicateLastPlanet = () => {
    //     let last_planet = planets[planets.length - 1];
    //     setPlanets(...planets, last_planet);
    // }
    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr/>
            <Form addPlanet={addPlanet}/>
            <hr/>
            {/* <button onClick={removeLast}>Remove last</button>
            <button onClick={duplicateLastPlanet}>Duplicate last</button> */}
            {planets.map((planet, index) =>
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

export default Planets;