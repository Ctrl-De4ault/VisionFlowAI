import { FiBell, FiMenu, FiSearch } from 'react-icons/fi'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <button className="menu-button" type="button" aria-label="Open navigation">
        <FiMenu />
      </button>
      <div>
        <p className="eyebrow">City operations</p>
        <h1>Traffic Overview</h1>
      </div>
      <div className="navbar-actions">
        <label className="search">
          <FiSearch />
          <input type="search" placeholder="Search cameras" aria-label="Search cameras" />
        </label>
        <button className="icon-button notification" type="button" aria-label="View alerts">
          <FiBell /><span />
        </button>
        <div className="live-status"><i /> All systems live</div>
      </div>
    </header>
  )
}

export default Navbar