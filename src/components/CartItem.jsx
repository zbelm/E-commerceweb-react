import PropTypes from 'prop-types'

function CartItem({ item, increaseQty, decreaseQty, removeFromCart }) {
  const subtotal = item.price * item.quantity

  return (
    <tr>
      <td>
        <div className="cart-product">
          <img src={item.image} alt={item.name} className="cart-img" />
          <span>{item.name}</span>
        </div>
      </td>
      <td>₱{item.price.toLocaleString()}</td>
      <td>
        <div className="qty-box">
          <button
            className="qty-btn"
            onClick={() => decreaseQty(item.id)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className="qty">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => increaseQty(item.id)}
            disabled={item.quantity >= item.stock}
          >
            +
          </button>
        </div>
      </td>
      <td>₱{subtotal.toLocaleString()}</td>
      <td>
        <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </td>
    </tr>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    stock: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  increaseQty: PropTypes.func.isRequired,
  decreaseQty: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

export default CartItem
