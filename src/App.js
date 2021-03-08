import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import Form from './components/Form'
import History from './components/History'

function App() {


  const [result, setResult] = useState(0)
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpense, setTotalExpense] = useState(0)

  const [transactionTextInput, setTransactionTextInput] = useState('')
  const [transactionAmountInput, setTransactionAmountInput] = useState(0)

  const [transactions, setTransactions] = useState([])
  const [historyColorClass, setHistoryColorClass] = useState('')


  
  useEffect(function(){
    setResult(totalIncome - totalExpense)
  }, [totalIncome, totalExpense])


  return (
    <div className='App'>
      <Header />
      <Balance result={result} totalIncome={totalIncome} totalExpense={totalExpense}/>

      <Form 
        transactionTextInput={transactionTextInput} 
        transactionAmountInput={transactionAmountInput} 
        setTransactionTextInput={setTransactionTextInput} 
        setTransactionAmountInput={setTransactionAmountInput}
        totalIncome = {totalIncome}
        setTotalIncome = {setTotalIncome}
        totalExpense = {totalExpense}
        setTotalExpense = {setTotalExpense}
        transactions = {transactions}
        setTransactions = {setTransactions}
        setHistoryColorClass = {setHistoryColorClass}
        historyColorClass = {historyColorClass}
      />

      <History 
        transactions={transactions}
        setTransactions = {setTransactions}
        totalExpense = {totalExpense}
        setTotalExpense = {setTotalExpense}
        totalIncome = {totalIncome}
        setTotalIncome = {setTotalIncome}
      />
      
    </div>
  );
}

export default App;
