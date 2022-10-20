import logo from '../assests/Union.png'
import lendsqr from '../assests/lendsqr.png'
import { NavLink } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosNotificationsOutline } from 'react-icons/io'
import profileImage from '../assests/profile-image.png'
import '../styles/NavBar.scss'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
          <img alt='logo' src={logo} />
          <img alt='lendsqr' src={lendsqr} />
        </div>
        <form className='search'>
          <input type="search" placeholder='Search for anything' className='search-input'/>
          <button>
            <i className='search-icon'>
              {<AiOutlineSearch />}
            </i>
          </button>
        </form>
        <div className='nav-links'>
          <ul>
            <li>
              <NavLink className="docs" to="/docs">Docs</NavLink>
            </li>
            <li>
              <p className='bell'>{<IoIosNotificationsOutline />}</p>
            </li>
            <li>
              <img
                className='profile-image' 
                alt='profile image' 
                src={profileImage} 
                />
                <p className='username'>Ayodeji</p>
            </li>
          </ul>
        </div>
    </nav>
  )
}

export default NavBar