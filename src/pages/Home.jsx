import { useState } from 'react'
import PropTypes from 'prop-types'
import SearchFilter from '../components/SearchFilter'
import ProductList from '../components/ProductList'
import Pagination from '../components/Pagination'

const ITEMS_PER_PAGE = 4

function Home({ products, addToCart }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const categories = []
  products.forEach((p) => {
    if (!categories.includes(p.category)) {
      categories.push(p.category)
    }
  })

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === 'All' || p.category === category
    return matchSearch && matchCategory
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const productsToShow = filteredProducts.slice(start, start + ITEMS_PER_PAGE)

  function handleSearch(value) {
    setSearch(value)
    setCurrentPage(1)
  }

  function handleCategory(value) {
    setCategory(value)
    setCurrentPage(1)
  }

  return (
    <div>
      <section className="hero">
        <h1>Welcome to ShopEasy!</h1>
        <p>Good quality products at affordable prices. Cash on Delivery available nationwide.</p>
      </section>

      <SearchFilter
        search={search}
        setSearch={handleSearch}
        category={category}
        setCategory={handleCategory}
        categories={categories}
      />

      <p className="result-text">
        Showing {productsToShow.length} of {filteredProducts.length} product(s)
      </p>

      <ProductList products={productsToShow} addToCart={addToCart} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

Home.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default Home
