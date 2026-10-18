import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import OrderSuccess from './pages/OrderSuccess'
import NotFound from './pages/NotFound'
import productData from './data/products'

function App() {
  // all the data is saved here using useState only
  const [products, setProducts] = useState(productData)
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  // add product to cart, if already in cart just add 1 to quantity
  function addToCart(product) {
    const found = cart.find((item) => item.id === product.id)

    if (found) {
      if (found.quantity >= product.stock) {
        alert('Sorry, no more stock available for this item.')
        return
      }
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  function increaseQty(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.quantity < item.stock) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    )
  }

  function decreaseQty(id) {
    setCart(
      cart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    )
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id))
  }

  // called when checkout form is submitted successfully
  function placeOrder(customer) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const newOrder = {
      orderId: 'ORD-' + Date.now(),
      customer: customer,
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
    }

    // lessen the stock of the products that were bought
    setProducts(
      products.map((p) => {
        const bought = cart.find((item) => item.id === p.id)
        if (bought) {
          return { ...p, stock: p.stock - bought.quantity }
        }
        return p
      })
    )

    setOrders([...orders, newOrder])
    setCart([]) // clear the cart after ordering
    return newOrder
  }

  // count all the items in the cart (for the cart counter)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} placeOrder={placeOrder} />} />
          <Route path="/order-success" element={<OrderSuccess orders={orders} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
