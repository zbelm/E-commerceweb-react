import PropTypes from 'prop-types'

function OrderSummary({ items, title = 'Order Summary' }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="summary-box">
      <h3>{title}</h3>
      {items.map((item) => (
        <div key={item.id} className="summary-row">
          <span>
            {item.name} x {item.quantity}
          </span>
          <span>₱{(item.price * item.quantity).toLocaleString()}</span>
        </div>
      ))}
      <hr />
      <div className="summary-row">
        <span>Shipping</span>
        <span>FREE</span>
      </div>
      <div className="summary-row total">
        <span>Total</span>
        <span>₱{total.toLocaleString()}</span>
      </div>
    </div>
  )
}

OrderSummary.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
}

export default OrderSummary
