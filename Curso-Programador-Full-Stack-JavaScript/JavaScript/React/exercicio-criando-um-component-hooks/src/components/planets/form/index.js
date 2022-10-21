import React, { Fragment, useState } from 'react';

const initialState = {
    name: '',
    description: '',
    link: '',
    img_url: ''
}

const Form = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFielddsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value //usado para controlar múltiplos inputs

        //(event.target.value); target pega o elemento e value o valor 
    });


    const handleSubmit = event => {
        props.addPlanet(fields)//o primeiro name é o da api e o segundo é do useState
        event.preventDefault();//impede que a pagina atualize
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFielddsChange} />
                </div>
                <div>
                    <label htmlFor="description">Description: </label>
                    <input id="description" type="text" name="description" value={fields.description} onChange={handleFielddsChange} />
                </div>
                <div>
                    <label htmlFor="link">Link: </label>
                    <input id="link" type="text" name="link" value={fields.link} onChange={handleFielddsChange} />
                </div>
                <div>
                    <label htmlFor="img_url">img_url: </label>
                    <input id="img_url" type="text" name="img_url" value={fields.img_url} onChange={handleFielddsChange} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

export default Form;