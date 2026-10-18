import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductCard({ product, addToCart, buttonText = 'Add to Cart' }) {
  const outOfStock = product.stock === 0

  return (
    <div className="card">
      <Link to={'/product/' + product.id}>
        <img src={product.image} alt={product.name} className="card-img" />
      </Link>

      <div className="card-body">
        <span className="category-tag">{product.category}</span>
        <h3 className="card-title">{product.name}</h3>
        <p className="card-desc">{product.shortDesc}</p>
        <p className="price">₱{product.price.toLocaleString()}</p>

        <div className="card-buttons">
          <Link to={'/product/' + product.id} className="btn btn-outline">
            View Details
          </Link>
          <button
            className="btn"
            onClick={() => addToCart(product)}
            disabled={outOfStock}
          >
            {outOfStock ? 'Out of Stock' : buttonText}
          </button>
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    shortDesc: PropTypes.string,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
}

export default ProductCard
