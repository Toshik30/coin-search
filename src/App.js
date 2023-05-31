import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Coins from './components/Coins'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Coin from './routes/Coin'

const App = () => {
  const [coins, setCoins] = useState([])
  const [filteredList, setList] = useState([])
  const [isReverse, setIsReverse] = useState(false)
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en`

  useEffect(() => {
    axios.get(url).then((res) => {
      setCoins(res.data)
      setList(res.data)
    }).catch((error) => {
      console.log(error)
    })
  },[url])

  const handleReverse = () => {
    if(!isReverse) {
      setList([...coins].reverse())
    } else {
      setList(coins)
    }
    setIsReverse(!isReverse)
  }
  const handleChangeList = (list) => {
    let filtered = coins.filter(item => item.id.toLowerCase().includes(list))
    setList(filtered.length < 1 ? coins : filtered);
  }

  return (
    <>
      <Navbar handleChangeList={handleChangeList} />
      <Routes>
        <Route path='/' element={<Coins coins={filteredList} handleReverse={handleReverse}/>} />
        <Route path='/coin' element={<Coin/>}>
          <Route path=':coinId' element={<Coin/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App