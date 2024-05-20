import './header.scss';
import logo from '../../assets/images/logo.png';
import Menu from '../menu/Menu';
import RightTop from '../rightTop/RightTop';
import { Link } from 'react-router-dom';

const Header = ({searchValue, setSearchValue}) => {
  return (
    <div className='header'>
        <Link to="/">
          <img src={logo} alt="logo" className='logoHeader' />
        </Link>
        <Menu />
        <RightTop searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}

export default Header