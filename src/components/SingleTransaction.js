import React from 'react'

function SingleTransaction({text, value, color, setTransactions, transactions, transaction, totalExpense, setTotalExpense, totalIncome, setTotalIncome}){

    function deleteTransaction(){
        setTransactions(transactions.filter(function(item){
            return transaction.id !== item.id;
        }))

        transactions.map(function(item){
            if(transaction.id === item.id){
                if(transaction.value > 0){
                    setTotalIncome(totalIncome - transaction.value)
                } else if (transaction.value < 0){
                    setTotalExpense(totalExpense + transaction.value)
                }
            }
        })        
    }



    return(
        
           <div className='transaction-info'>
                <div className='delete-btn-container'>
                  <button className='delete-btn' onClick={deleteTransaction}>X</button>  
                </div>
                
                <div className='transaction-text-container'>
                    <p className='transaction-text'>{text}</p>
                </div>

                <div className='transaction-amount-container'>
                    <p className={color}>{value}</p>
                </div>
                
            </div>
    )
}

export default SingleTransaction