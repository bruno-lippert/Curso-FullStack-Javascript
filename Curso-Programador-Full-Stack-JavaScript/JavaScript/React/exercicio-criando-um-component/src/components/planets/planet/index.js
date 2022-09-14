import React from "react";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import GrayImg from "../../shared/gray_img";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`); //serve para chamar uma api, nesse caso estamos chamando direto do arquivo
    let data = await response.json(); //para receber o resultado da chamada da api
    return data;
}

class Planet extends React.Component {
    constructor(props) {
        super(props); // o metodo super é vai passar as props para a classe que estamos erdando(React.Component)
        this.state = {
            //sepre que o state atualiza, nosso component é re-renderizado
            satellites: [],
        };
    }

    componentDidMount() {   //roda quando o component for exibido
        getSatellites(this.props.id).then((data) => {
            this.setState((state) => ({
                //depois de baixar as infos da api
                satellites: data["satellites"] //e colocamos as infos dentro de planets
                //o 'data['planets']' é para pegas as infos que estão dentro de planets na api
            }));
        });
    }

    render() {
        let title;
        if (this.props.title_with_underline) {
            title = (
                <h4>
                    <u>{this.props.name}</u>
                </h4>
            );
        } else {
            title = <h4>{this.props.name}</h4>;
        }
        return (
            <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
                {this.props.title}
                <DescriptionWithLink
                    description={this.props.description}
                    link={this.props.link}
                />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />

                <h4>Satélites</h4>
                <ul>
                {this.state.satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li>
                )}
                </ul>
            </div>
        );
    }
}

export default Planet;
