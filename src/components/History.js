import React from 'react'
import SingleTransaction from './SingleTransaction'

function History({transactions, setTransactions, totalIncome, setTotalIncome, totalExpense, setTotalExpense}){

    return(

        <div className='history-container'>
            <h3>History</h3>
            <ul className='history-list'>
                {transactions.map(function(transaction){
                    return <SingleTransaction 
                                    text={transaction.text} 
                                    value={transaction.value} 
                                    key={transaction.id} 
                                    color={transaction.color}
                                    transactions ={transactions}
                                    setTransactions={setTransactions}
                                    transaction = {transaction}
                                    totalExpense = {totalExpense}
                                    setTotalExpense = {setTotalExpense}
                                    totalIncome = {totalIncome}
                                    setTotalIncome = {setTotalIncome}
                                    />
                })}
            </ul>


        </div>

    )
}


export default History