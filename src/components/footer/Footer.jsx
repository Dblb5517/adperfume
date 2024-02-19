import './footer.scss';
import Logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className='footerLeft'>
            <img src={Logo} alt="Logo" />
            <h1>Join our Newsletter!</h1>
            <p1>Receive Updates on New Arrivals and Special Promotions!</p1>
        </div>
        <div className="footerRight">
             
        </div>
    </div>
  )
}

export default Footer;