import React, { Fragment, useState, useEffect } from 'react';
//import React from "react";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import GrayImg from "../../shared/gray_img";

async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`); //serve para chamar uma api, nesse caso estamos chamando direto do arquivo
    let data = await response.json(); //para receber o resultado da chamada da api
    return data;
}

const Planet = (props) => {
    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])

    
        let title;
        if (props.title_with_underline) {
            title = (
                <h4>
                    <u>{props.name}</u>
                </h4>
            );
        } else {
            title = <h4>{props.name}</h4>;
        }
        return (
            <div onClick={() => props.clickOnPlanet(props.name)}>
                {props.title}
                <DescriptionWithLink
                    description={props.description}
                    link={props.link}
                />
                <GrayImg img_url={props.img_url} gray={props.gray} />

                <h4>Satélites</h4>
                <ul>
                {satellites.map((satellite, index) => 
                    <li key={index}>{satellite.name}</li>
                )}
                </ul>
            </div>
        );
    }

export default Planet;
