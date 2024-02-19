import './header.scss';
import logo from '../../assets/images/logo.png';
import Menu from '../menu/Menu';
import RightTop from '../rightTop/RightTop';

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt="logo" className='logoHeader' />
        <Menu />
        <RightTop />
    </div>
  )
}

export default Header