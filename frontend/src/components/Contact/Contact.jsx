import fb from "./facebook.svg";
import twitter from "./twitter.svg";
import mail from "./mail.png";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
        <div className="socialmedia">
            <img src={fb} alt="facebook" />  
            <img src={twitter} alt="twitter" />  
        </div>
      <ul className="links">
        <li>Products</li>
        <li>Our Science</li>
        <li>Vision & Mission</li>
        <li>About Us</li>
      </ul>
      <hr />
      <div className="subscription">Subscribe to our Newsletter</div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter you email..."
      />
      <button><img src={mail} style={{paddingRight:'10px',verticalAlign:"middle"}}></img>Activate</button>
    </div>
  );
};

export default Contact;
