import React from 'react'


function Balance({result, totalIncome, totalExpense}){

    return(

        <div className='balance-container'>
            <h3 className='balance-title'>BALANCE:</h3>
            <h3 className='result'>€ {result}</h3>
            <div className='balance-inner-container'>
                <div className='balance-income-container'>
                    <h4 className='income-title'>INCOME</h4>
                    <h4 className='income-value'>€ {totalIncome}</h4>
                </div>
                <div className='balance-expense-container'>
                    <h4 className='expense-title'>EXPENSE</h4>
                    <h4 className='expense-value'>€ {totalExpense}</h4>
                </div>
            </div>
        </div>

    )
}



export default Balance