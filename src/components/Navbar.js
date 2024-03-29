import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { useHistory } from 'react-router-dom';


function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const history = useHistory();

  return (
    <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='navbar-font-hover1'>T</div>
            <div className='navbar-font-hover2'>R</div> 
            <div className='navbar-font-hover3'>L</div> 
            <div className='navbar-font-hover4'>V</div> 
            <i class="fab fa-typo3 navbar-font-hover5"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
              <li className='nav-item'><Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link></li>
              <li className='nav-item'><Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link></li>
              <li className='nav-item'><Link to='/regist' className='nav-links' onClick={closeMobileMenu}>Sign Up</Link></li>
              <li className='nav-item'><Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>Sign In</Link></li>
            </ul>
            {button && <Button buttonStyle='btn--outline' onClick={() => history.push('/login')}>SIGN IN</Button>}
          </div>
        </nav>
    </>
  )
}

export default Navbar