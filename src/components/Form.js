import React from 'react'


function Form({
                transactionAmountInput, 
                transactionTextInput, 
                setTransactionAmountInput, 
                setTransactionTextInput,
                totalExpense, setTotalExpense,
                totalIncome, setTotalIncome,
                transactions, setTransactions,
                setHistoryColorClass,
                historyColorClass
            }){

    function getTransactionText(e){
        setTransactionTextInput(e.target.value)
    }

    function getTransactionAmount(e){
        setTransactionAmountInput(e.target.value)
        if(e.target.value > 0){
            setHistoryColorClass('green-text')
        } else if (e.target.value < 0){
            setHistoryColorClass('red-text')
        } else{
            setHistoryColorClass('')
        }
    }



    function addNewTransaction(){
        if (transactionAmountInput == 0){
            return;
        }


        if(transactionAmountInput > 0){
            setTotalIncome(totalIncome + parseFloat(transactionAmountInput))
        } else if (transactionAmountInput < 0){
            setTotalExpense(totalExpense - parseFloat(transactionAmountInput))
        }

        setTransactions([...transactions, {
            text: transactionTextInput, 
            value: parseFloat(transactionAmountInput),
            color: historyColorClass,
            id: Math.random() * 1000
        }])
       
        setTransactionTextInput('')
        setTransactionAmountInput(0)
        

    }



    return(

        <div className='form-container'>
            <div className='form'>
                <label htmlFor="" className='label'>Text</label>
                <input 
                    type="text" 
                    className='input' 
                    onChange={getTransactionText} 
                    value={transactionTextInput}
                    placeholder = 'Enter text'
                />
            </div>
            <div className='form'>
                <label htmlFor="" className='label'>Amount (positive = income; negative = expense)</label>
                <input
                    type='number' 
                    className='input' 
                    onChange={getTransactionAmount} 
                    value={transactionAmountInput}
                    placeholder = 'Enter amount'
                />
            </div>
            <button className='submit-btn' onClick={addNewTransaction}>Add transaction</button>
        </div>

    )
}


export default Form