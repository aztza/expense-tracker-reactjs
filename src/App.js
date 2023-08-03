import React from "react"
import "./App.css";
import YourBalance from "./Components/YourBalance"
import IncomeExpense from "./Components/IncomeExpense"
import History from "./Components/History"
import AddTransaction from "./Components/AddTransaction"

function App() {
  const [list, setList] = React.useState([])
  const [text, setText] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [total, setTotal] = React.useState([])
  
  const incomeArr = total.filter(positive => positive > 10)
  const outcomeArr = total.filter(negative => negative < 10)
  const income = incomeArr.reduce((a,b) => a+b,0)
  const outcome = outcomeArr.reduce((a,b) => a+b,0)

  function textHandler(inputText){
    setText(inputText)
  }
  function priceHandler(inputPrice){
    setPrice(inputPrice)
  }

  function createList(){
    const newList = {
      name: text,
      price: price
    }
    setList(prevList => ([...prevList, newList]))
    setTotal(prevTotal =>([...prevTotal, parseInt(price)]))
    setText("")
    setPrice("")
  }
  function clear(){
    setList([])
    setText("")
    setPrice("")
    setTotal([])
  }
  return (
    <div className="container">
      <header><h3>Expense Tracker</h3></header>
      <YourBalance value={total}/>
      <IncomeExpense income={income} outcome={outcome}/>  
      <History list={list}/>
      <AddTransaction 
          text={text}
          price={price}
          textHandler={textHandler}
          priceHandler={priceHandler}
          addList={createList}
          clear={clear}
      />
    </div>
  );
}

export default App;
