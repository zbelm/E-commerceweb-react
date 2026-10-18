import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import OrderSummary from '../components/OrderSummary'

function OrderSuccess({ orders }) {
  // get the latest order
  const order = orders[orders.length - 1]

  if (!order) {
    return (
      <div className="page-box center">
        <h2>No order yet</h2>
        <Link to="/" className="btn">
          Go Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="page-box center">
      <div className="success-icon">✔</div>
      <h2>Thank you for your order, {order.customer.fullName}!</h2>
      <p>
        Your order <b>{order.orderId}</b> has been placed on {order.date}.
      </p>
      <p>
        We will deliver it to <b>{order.customer.address}</b>. Please prepare ₱
        {order.total.toLocaleString()} for {order.customer.payment}.
      </p>

      <div className="success-summary">
        <OrderSummary items={order.items} title="Items Ordered" />
      </div>

      <Link to="/" className="btn">
        Continue Shopping
      </Link>
    </div>
  )
}

OrderSuccess.propTypes = {
  orders: PropTypes.array.isRequired,
}

export default OrderSuccess
