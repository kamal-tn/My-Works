import Button from "../button/button";
import Header from "../header/header";
import './contact.css';


const Contact = (props) => {

    return (
        <>
            < Header page='contact' />
            <div className="contactbox">
                    <div className="innerbox">
                    <h1>A Price To Suit Everyone</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
                    <div className="pricebox">
                        <h1>{props.value}</h1>
                        <span>UI Design Kit</span>
                    </div>
                    <div className="pricebutton">
                        <span>See, One price. Simple.</span>
                        < Button title='Purchase Now' id='buybutton' />
                    </div>
                    <div className="imgbox">
                        <img src='https://cdn-icons-png.flaticon.com/512/2175/2175193.png' alt=""/>
                        <img src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png' alt=""/>
                        <img src='https://cdn-icons-png.flaticon.com/512/1384/1384014.png' alt=""/>
                        <img src='https://cdn-icons-png.flaticon.com/512/733/733635.png' alt="" />
                        <img src='https://www.iconpacks.net/icons/1/free-youtube-icon-123-thumb.png' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Contact;