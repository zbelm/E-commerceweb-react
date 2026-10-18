import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import CartItem from '../components/CartItem'

function Cart({ cart, increaseQty, decreaseQty, removeFromCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return (
      <div className="page-box center">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/" className="btn">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="page-box">
      <h2>Shopping Cart</h2>

      <div className="table-wrap">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeFromCart={removeFromCart}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="cart-footer">
        <Link to="/" className="btn btn-outline">
          Continue Shopping
        </Link>
        <div className="cart-total">
          <p>Total Items: {totalItems}</p>
          <h3>Total: ₱{total.toLocaleString()}</h3>
          <Link to="/checkout" className="btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default Cart
