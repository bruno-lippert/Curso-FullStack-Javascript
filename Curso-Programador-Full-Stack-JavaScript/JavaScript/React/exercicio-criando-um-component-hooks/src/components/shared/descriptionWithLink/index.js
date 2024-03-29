import { Fragment } from "react";

const DescriptionWithLink = (props) => {
if(!props.description) {
    return null;
}

    if (props.link) {
        return (
            <Fragment>
                <p>{props.description}</p>
                <p><a href={props.link} target="_blank">{props.link}</a></p>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p>{props.description}</p>
            </Fragment>
        )
    }

}

export default DescriptionWithLink;