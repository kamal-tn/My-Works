import { useNavigate } from "react-router-dom";
import './header.css';
import Button from "../button/button";


const Header = (props) => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/')
    }

    const navigateContact = () => {
        navigate('/contact')
    }

    const navigateAbout = () => {
        navigate('/about')
    }

    const navigateAbout1 = () => {
        navigate('/about1')
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className="container">
            <nav className="navbar">
                <li onClick={navigateHome} className={props.page === 'home' ? 'active' : ''}>Home</li>
                <li onClick={navigateAbout} className={props.page === 'about' ? 'active' : ''}>About</li>
                <li onClick={navigateContact} className={props.page === 'contact' ? 'active' : ''}>Contact</li>
                <div>
                    < Button page={navigateAbout1} title='Buy Now' className={props.page === 'about1' ? 'active' : ''} />
                </div>
                <img src='https://i.pinimg.com/originals/97/21/05/972105c5a775f38cf33d3924aea053f1.jpg' alt='' onClick={navigateLogin} />
            </nav>
        </div>


    )
}

export default Header;