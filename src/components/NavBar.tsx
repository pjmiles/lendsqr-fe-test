import logo from '../assests/Union.png'
import lendsqr from '../assests/lendsqr.png'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
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
              {<FaHome />}
            </i>
          </button>
        </form>
        <div className='group'>
          <NavLink to="/docs">Docs</NavLink>
          <div>notification</div>
          <div className='avatar'>
            <img alt='avatar' src='' />
            <select placeholder='Adedeji'>
              <option>Username</option>
            </select>
          </div>
        </div>
    </nav>
  )
}

export default NavBar