import PropTypes from 'prop-types'

function SearchFilter({ search, setSearch, category, setCategory, categories }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search product name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        <option value="All">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}

SearchFilter.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
}

export default SearchFilter
