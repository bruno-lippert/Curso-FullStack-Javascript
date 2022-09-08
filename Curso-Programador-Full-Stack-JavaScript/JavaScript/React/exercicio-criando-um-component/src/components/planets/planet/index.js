import DescriptionWithLink from '../../shared/descriptionWithLink';
import GrayImg from '../../shared/gray_img';
const Planet = (props) => {
    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            <h4>{props.name}</h4>
            <DescriptionWithLink desciption = {props.desciption} link={props.link}/>
            <GrayImg img_url={props.img_url} />
        </div>
    )
}

export default Planet;