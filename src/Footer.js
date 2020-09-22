import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
function Footer() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div className="footer">
      <a href="#" className="footer_backToTop">
        Back To Top
      </a>
      <div className="footer_contain">
        <div className="footer_section1">
          <h4>Get to know Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div className="footer_section">
          <h4>Connect with us</h4>
          <p>
            Facebook <FacebookIcon />
          </p>
          <p>
            Twitter
            <TwitterIcon />
          </p>
          <p>
            Instagram
            <InstagramIcon />
          </p>
        </div>
        <div className="footer_section">
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become an Affiliate</p>
          <p>Fulfillment by Amazon</p>
        </div>
        <div className="footer_section4">
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Return Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="footer_down">
        <img
          className="footer_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <h5 className="footer_user">
          <strong>{user?.email}</strong>
        </h5>
        <h4>
          Language <LanguageIcon />{" "}
        </h4>
      </div>
    </div>
  );
}

export default Footer;
