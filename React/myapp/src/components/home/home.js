import photo from './Group.png';
import Button from '../button/button';
import Header from '../header/header';
import './home.css';

const Home = () => {
    return (
        <>
            < Header page='home' />
            <div className="homebox">
                
                    <h1>Introduce Your Product Quickly & Effectively</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                        enim.</p>
                    <img src={photo} alt=''></img>
             
                <div className="buttonbox">
                    < Button title='Purchase Kit' id='homebutton1'/>
                    < Button title='Learn More' id='homebutton2' />
                </div>
            </div>
        </>
    )
}

export default Home;