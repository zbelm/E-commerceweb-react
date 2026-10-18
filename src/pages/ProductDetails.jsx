import { useParams, Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductDetails({ products, addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()

  // find the product using the id from the url
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="page-box center">
        <h2>Product not found</h2>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    )
  }

  const outOfStock = product.stock === 0

  return (
    <div>
      <button className="back-link" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      <div className="details">
        <img src={product.image} alt={product.name} className="details-img" />

        <div className="details-info">
          <span className="category-tag">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price big">₱{product.price.toLocaleString()}</p>

          <p className={outOfStock ? 'stock out' : 'stock'}>
            {outOfStock ? 'Out of stock' : 'In stock: ' + product.stock + ' pcs'}
          </p>

          <h4>Description</h4>
          <p>{product.description}</p>

          <div className="card-buttons">
            <button className="btn" onClick={() => addToCart(product)} disabled={outOfStock}>
              {outOfStock ? 'Out of Stock' : 'Add to Cart'}
            </button>
            <Link to="/cart" className="btn btn-outline">
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetails.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default ProductDetails
