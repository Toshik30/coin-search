import React, { useState } from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import './Coins.css'
import Coin from '../routes/Coin'

const Coins = ({coins, handleReverse}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(coins.length / 10)

  const handleChangePage = (pageNumber) => setCurrentPage(pageNumber)

  const renderData = () => {
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;

    return coins.slice(startIndex, endIndex).map((coin) => (
      <Link to={`/coin/${coin.id}`} element={<Coin/>} key={coin.id}>
        <CoinItem coins={coin} />
      </Link>
    ))
  }
  const renderPagination = () => {
    const pageNumbers = []

    for(let i = 1; i <= totalPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleChangePage(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      )
    }
    return pageNumbers
  }
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p className='price' onClick={handleReverse}>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>
            {renderData()}
            <div className='pagination'>{renderPagination()}</div>
        </div>
    </div>
  )
}

export default Coins