import Body4 from "./Body4";
import "./Body5.css";
import swirls from "../assets/swirls.svg";
import contactus from "../assets/Contact Us.svg";
import logo from '../assets/logo.svg'
import location from '../assets/location.svg'
import mobile from '../assets/mobile.svg'
import mail from '../assets/mail.svg'
import twitter from '../assets/twitterr.svg'
import facebook from '../assets/faceboook.svg'
import linkedin from '../assets/linkedinn.svg'

const Body5 = () => {
  return (
    <div>
      <Body4 />

      <div>
        <div>
          <div style={{position: 'relative'}}>
              <img className="swirls" src={swirls} alt="" />   
          </div>
              <img className="contact" src={contactus} alt="" />
          </div>

        <div className="form">
          <form action="action_page.php">
            <div className="topinput">
              <div>
                <label htmlFor="fname">Name</label>
                <div>
                  <input type="text" name="" id="" />
                </div>
              </div>

              <div>
                <label htmlFor="fname">Phone no</label>
                <div>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
            <div style={{marginTop: '61px'}}>
                 <label htmlFor="fname">Email</label>
            <div>
              <input type="text" name="" id="" />
            </div>
            </div>
           <div style={{marginTop: '61px'}}>
               <label htmlFor="fname">Message</label>
            <div>
              <input type="text" name="" id="" />
            </div>
           </div>
          </form>
        </div>

        <div className="footer">
            <div className="footerhalf"> 
            <div className="contactinfo">
                <div className="bottom">
                    <img src={logo} alt="" />
                    <p style={{color: 'black', fontStyle: 'normal', fontSize: '22px', fontWeight: '300'}}>Let's dance!</p>
                </div>
                <div className="bottom">
                    <img src={location} alt="" />
                    <p style={{width: '256px', fontStyle: 'normal', fontSize: '18px', fontWeight: '300'}}>50 Yourshire avenue, CA 8965 United Kingdom</p>
                </div>
                <div className="bottom">
                    <img src={mobile} alt="" />
                    <p style={{fontStyle: 'normal', fontSize: '20px', fontWeight: '300'}}>+44 869-498-345</p>
                </div>
                <div className="bottom">
                    <img src={mail} alt="" />
                    <p style={{fontStyle: 'normal', fontSize: '20px', fontWeight: '300'}}>letsdance@email.com</p>
                </div>
            </div>

            <div className="about" style={{marginLeft: '80px'}}>
                <p style={{fontWeight: '600'}}>About</p>
                <p>Who we are</p>
                <p>Services</p>
                <p>Awards</p>
                <p>Careers</p>
            </div>

            <div className="about" style={{marginLeft: '70px'}}>
                <p style={{fontWeight: '600'}}>Services</p>
                <p>Tutorials</p>
                <p>Online Lectures</p>
            </div>

        </div>

            <div className="footer2">
                <div>
                    <label htmlFor="fname">Subsribe to our Newsletter</label>
                    <div>
                    <input className="footersearch" type="text" name="" id="" />
                    </div>
                </div>
                <div className="socials">
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            
            
        </div>
        <p className="copyright">© Copyright(2022) Let's dance</p>

      </div>
    </div>
  );
};

export default Body5;
