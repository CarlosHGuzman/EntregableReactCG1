import { useState } from 'react'
import quoteDb from "./db/quotes.json"
import colors from "./db/colors"
import QuoteBox from './components/QuoteBox'

function App() {
  const getRandom = (array) =>{
    const indexRandom = Math.floor(array.length * Math.random())
    return array[indexRandom]
  }
  const [quote, setQuote] = useState(getRandom(quoteDb))
  const [color, setColor] = useState(getRandom(colors))

  const changeQC = () => {
    setQuote(getRandom(quoteDb))
    setColor(getRandom(colors))
  }

  
  return (
    <div className="App" style={{backgroundColor: color}}>
      <QuoteBox quote={quote} changeQC={changeQC} color={color}/>
    </div>
  )
}

export default App
