import AddTransactionBtn from '@/components/AddTransactionBtn'
import React from 'react'
import TransactionList from './TransactionList'

const Transactions = () => {
  return (
    <div className='px-2 py-3'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-start flex-col gap-2'>
          <h1 className='text-lg md:text-2xl font-medium text-gray-800'>Transactions</h1>
          <p className='text-sm'>Keep track of your income and expenses</p>
        </div>
        <AddTransactionBtn />
      </div>

        <TransactionList />
    </div>
  )
}

export default Transactions