import { useState, useEffect, useRef } from 'react'
import Header from "./components/header/header.jsx"
import ProductCard from "./components/products-holder/product-card.jsx"
import CircularProgress from '@mui/material/CircularProgress';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
  const URL = (offset, limit = 9) => `https://api.escuelajs.co/api/v1/products/?offset=${offset}&limit=${limit}`
  const [products, setProducts] = useState(<CircularProgress />)
  const [page, setPage] = useState(1)

  const getOffset = (currentPage, pageSize = 9) => {
    return (currentPage - 1) * pageSize
  }

  useEffect(() => { 
    fetch(URL(getOffset(page)))
    .then((data) => {
        return data.json()
      }
    )
    .then(data => data.map((elem) => {
      const {id, title, price, images} = elem

      return <ProductCard key={id} title={title} price={price} imageURL={images[0]}/>
    }))
    .then(elements => {
      setProducts(elements)
    })
  }, [page])

  return (
    <>
      <Header/>
      <main>
        <div className="products-holder">
          {products}
        </div>
        <div className="pagination-btns">
        <button onClick={() => setPage(page - 1)}>
          <FaChevronLeft />
        </button>
        {page}
        <button onClick={() => setPage(page + 1)}>
          <FaChevronRight />
        </button>
        </div>
      </main>
    </>
  )
}

export default App

/*

1000ms = 1s

fuera del useEffect = antes del renderizado

useEffect = después del renderizado

*/