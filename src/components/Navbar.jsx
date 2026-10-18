import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({ cartCount = 0 }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          🛒 ShopEasy
        </Link>

        <ul className="nav-links">
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              Cart <span className="cart-count">{cartCount}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  cartCount: PropTypes.number,
}

export default Navbar
