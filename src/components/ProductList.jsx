import PropTypes from 'prop-types'
import ProductCard from './ProductCard'

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return <p className="empty-text">No products found. Try another search.</p>
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default ProductList
