import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import OrderSummary from '../components/OrderSummary'

function Checkout({ cart, placeOrder }) {
  const navigate = useNavigate()

  // controlled form, all inputs are saved in this state
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    payment: '',
  })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    // remove the error message of the field while typing
    setErrors({ ...errors, [name]: '' })
  }

  // custom javascript validation
  function validate() {
    const newErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phonePattern = /^09\d{9}$/

    if (form.fullName.trim() === '') {
      newErrors.fullName = 'Full name is required.'
    } else if (form.fullName.trim().length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters.'
    } else if (!/^[a-zA-Z\s.]+$/.test(form.fullName)) {
      newErrors.fullName = 'Full name should only contain letters.'
    }

    if (form.email.trim() === '') {
      newErrors.email = 'Email address is required.'
    } else if (!emailPattern.test(form.email)) {
      newErrors.email = 'Please enter a valid email (example: juan@gmail.com).'
    }

    if (form.phone.trim() === '') {
      newErrors.phone = 'Phone number is required.'
    } else if (!phonePattern.test(form.phone)) {
      newErrors.phone = 'Phone number must be 11 digits and start with 09 (example: 09123456789).'
    }

    if (form.address.trim() === '') {
      newErrors.address = 'Delivery address is required.'
    } else if (form.address.trim().length < 10) {
      newErrors.address = 'Please enter your complete address (at least 10 characters).'
    }

    if (form.payment === '') {
      newErrors.payment = 'Please select a payment method.'
    }

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = validate()
    setErrors(newErrors)

    // if there are errors, do not submit
    if (Object.keys(newErrors).length > 0) {
      return
    }

    placeOrder(form)
    navigate('/order-success')
  }

  if (cart.length === 0) {
    return (
      <div className="page-box center">
        <h2>Nothing to checkout</h2>
        <p>Your cart is empty. Add some products first.</p>
        <Link to="/" className="btn">
          Go Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="checkout">
      <form className="page-box checkout-form" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p className="small">Fields with * are required.</p>

        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Juan Dela Cruz"
            required
            className={errors.fullName ? 'input-error' : ''}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="juan@gmail.com"
            required
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="09123456789"
            maxLength="11"
            required
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="address">Delivery Address *</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={form.address}
            onChange={handleChange}
            placeholder="House No., Street, Barangay, City, Province"
            required
            className={errors.address ? 'input-error' : ''}
          ></textarea>
          {errors.address && <p className="error">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Payment Method *</label>
          <label className="radio-label">
            <input
              type="radio"
              name="payment"
              value="Cash on Delivery"
              checked={form.payment === 'Cash on Delivery'}
              onChange={handleChange}
              required
            />
            Cash on Delivery (COD)
          </label>
          {errors.payment && <p className="error">{errors.payment}</p>}
        </div>

        <button type="submit" className="btn btn-block">
          Place Order
        </button>
      </form>

      <OrderSummary items={cart} />
    </div>
  )
}

Checkout.propTypes = {
  cart: PropTypes.array.isRequired,
  placeOrder: PropTypes.func.isRequired,
}

export default Checkout
