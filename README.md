# ShopEasy - E-Commerce Website

A simple e-commerce website made with **React + Vite**. No database, no backend and no API calls.
All products, cart and orders are stored using `useState` only, so the data resets when the page is refreshed.

## How to run

```
npm install
npm run dev
```

## Routes (React Router)

| Route            | Page                     |
| ---------------- | ------------------------ |
| `/`              | Home / Product Listing   |
| `/product/:id`   | Product Details          |
| `/cart`          | Shopping Cart            |
| `/checkout`      | Checkout Form            |
| `/order-success` | Order Confirmation       |
| `*`              | 404 Not Found            |

## Folder structure

```
src/
  App.jsx              -> main state (products, cart, orders) and cart functions
  main.jsx
  index.css            -> all the styles
  data/products.js     -> 12 hardcoded products
  components/
    Navbar.jsx         -> navigation menu + cart counter
    Footer.jsx
    ProductCard.jsx    -> one product (image, name, price, short description)
    ProductList.jsx    -> grid of ProductCards
    SearchFilter.jsx   -> search by name + category dropdown
    Pagination.jsx     -> 4 products per page
    CartItem.jsx       -> one row in the cart table
    OrderSummary.jsx   -> items + total box
  pages/
    Home.jsx
    ProductDetails.jsx
    Cart.jsx
    Checkout.jsx
    OrderSuccess.jsx
    NotFound.jsx
```

## How the cart works

- `cart` is an array in `App.jsx` using `useState([])`.
- **addToCart** - if the product is already in the cart, add 1 to its quantity, if not, add it with quantity 1.
- **increaseQty / decreaseQty** - use `map()` to change the quantity of one item (can't go below 1 or above the stock).
- **removeFromCart** - use `filter()` to remove the item.
- Subtotal = `price * quantity`, total uses `reduce()`.
- The cart counter in the Navbar is the total quantity of all items.

## How checkout works

- The form is fully controlled (every input value is saved in the `form` state).
- HTML validation: `required`, `type="email"`, `type="tel"`, `maxLength`.
- JavaScript validation (`validate()` function): name at least 3 letters, valid email format,
  phone must be 11 digits starting with 09, address at least 10 characters, payment method selected.
- If there are errors, red error messages are shown and the form is not submitted.
- If valid, `placeOrder()` saves the order, lessens the product stock, and **clears the cart**.

## Deploy to Vercel

The `vercel.json` file makes the routes work when refreshing a page on Vercel.
