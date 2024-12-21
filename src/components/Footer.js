import footerstyles from '../styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt,faMailBulk,faMapLocation,faLocationPin } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return <>
    <div className={footerstyles.footersection}>
        <div className={footerstyles.footerwrapper}>
            <div className={footerstyles.row}>
                <div className={footerstyles.column}>
                    <div className={footerstyles.iconTextContainer}>
                        <span className={footerstyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faPhoneAlt} size="2x" />
                        </span>
                        <div className={footerstyles.listItemText}>
                            <span>Phone Number</span>
                            <p>+974 3118 1843</p>
                        </div>
                    </div>
                </div>
                <div className={footerstyles.column}>
                    <div className={footerstyles.iconTextContainer}>
                        <span className={footerstyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faMailBulk} size="2x" />
                        </span>
                        <div className={footerstyles.listItemText}>
                            <span>Email Address</span>
                            <p>Elbrithcqhr@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className={footerstyles.column}>
                    <div className={footerstyles.iconTextContainer}>
                        <span className={footerstyles.circleIcon}>
                            <FontAwesomeIcon style={{ color: 'white' }} icon={faMapLocation} size="2x" />
                        </span>
                        <div className={footerstyles.listItemText}>
                            <span>Office Location</span>
                            <p> Ambassador Street, Zone 61,</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={footerstyles.row}>
                <div className={footerstyles.columnplain}>
                    <img src="/assets/elbrit-logo-fit.webp" style={{height:'80px' , width:'280px'}} alt="Logo" />
                </div>
                <div className={footerstyles.columnplain}>
                    <p style={{color:'white', fontSize:'13px'}}>Your health, physical and emotional well-being is important
                    to us. We are always by your side and have made it even
                    easier for you to find the necessary vitamins.</p>
                </div>
                <div className={footerstyles.columnplain}>
                <p></p>
                </div>
            </div>

            <div className={footerstyles.row}>
                <div className={footerstyles.columnplain}>
                <p style={{ color: 'white', margin:'0px' }}><FontAwesomeIcon  icon={faLocationPin} size="1x" />  Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
                </div>
            </div>

        </div>
    </div>
    </>
}