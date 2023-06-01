import icon from "./Icon.jpg";
import cine from "./photo.jpg";
import Header from "../header/header";
import './about.css';

const About = () => {
    return (
        <>
            < Header page='about' />
            <div className="aboutbox">
                <h1>Light, Fast & Powerful</h1>
                <p className="para">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus
                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
                    massa quis enim.</p>

                <div className="card1">
                    <img src={icon} alt="" className="icon" />
                    <h5 className="card-title">Title Goes Here</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo
                        ligula
                        eget dolor. 
                    </p>
                </div>
                <div className="card2">
                    <img src={icon} alt="" className="icon" />
                    <h5 className="card-title">Title Goes Here</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo
                        ligula
                        eget dolor. 
                    </p>
                </div>
                <img src={cine} alt="" />
            </div>

        </>

    )
}

export default About;