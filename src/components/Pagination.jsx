import PropTypes from 'prop-types'

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  if (totalPages <= 1) {
    return null
  }

  return (
    <div className="pagination">
      <button
        className="page-btn"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo; Prev
      </button>

      {pages.map((num) => (
        <button
          key={num}
          className={num === currentPage ? 'page-btn active' : 'page-btn'}
          onClick={() => setCurrentPage(num)}
        >
          {num}
        </button>
      ))}

      <button
        className="page-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &raquo;
      </button>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
}

export default Pagination
