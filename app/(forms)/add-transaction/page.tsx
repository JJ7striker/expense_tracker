"use client"

import { ArrowLeft } from 'lucide-react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button' 
import { addNewTransaction } from '@/lib/serverActions/AddTransaction'

interface TransactionProps {
  transaction: string,
  amount: string | null,
  description: string,
  categories: string,
  date: string,
}

const AddTransaction = () => {
  const [transactionObj, setTransactionObj] = useState<TransactionProps>({
    transaction: "expense",
    amount: "",
    description: "",
    categories: "Food and Dining",
    date: "",
  })
  const router = useRouter();
  return (
    <div className='flex items-center justify-center md:mt-7'>
      <div className='w-11/12 max-w-lg h-auto shadow-sm mt-6 shadow-gray-600 px-4 py-5 relative'>
      <ArrowLeft className='absolute top-4 left-2  size-5' onClick={() => router.back()} />
      <div className='flex justify-center items-start flex-col pl-9'>
        <h2 className='text-lg md:text-xl font-medium'>Add Transaction</h2>
        <p className='text-xs'>Add your income and expenses</p>
      </div>
      <form className='w-full px-4 py-3 flex flex-col' action={addNewTransaction}>
        <div className='flex items-center justify-between md:flex-row gap-4 w-full'>
          <Button className={`flex-1 h-9 shadow-sm shadow-gray-400 text-black ${transactionObj.transaction === "expense" ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white": ""}`} variant={"ghost"} onClick={() => setTransactionObj({...transactionObj, transaction: "expense"})}>Expense</Button>
          <Button className={`flex-1 h-9 shadow-sm shadow-gray-400 text-black ${transactionObj.transaction === "income" ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white" : ""}`} variant={"ghost"} onClick={() => setTransactionObj({...transactionObj, transaction: "income"})}>Income</Button>
          <input type="hidden" id='transaction' name="transaction" onChange={(e) => setTransactionObj(prev => ({...prev, transaction: e.target.value}))} value={transactionObj.transaction} />
          </div>

          <div className='flex-1 flex flex-col items-center justify-center gap-4 mt-4'>
                <div className='flex flex-col w-full gap-2'>
                  <label htmlFor="amount">Amount:</label>
                  <input type="number" id='amount' name="amount" className='w-full outline-0 border-0 px-3 py-2 h-9 bg-gray-300 rounded-sm ' placeholder="Enter An Amount" onChange={(e) => setTransactionObj(prev => ({...prev, amount: e.target.value}))} value={transactionObj?.amount || ""} />
                </div>

                <div className='flex flex-col w-full gap-2'>
                  <label htmlFor="description">Description:</label>
                  <input type="text" id='description' name="description" className='w-full outline-0 border-0 px-3 py-2 h-9 bg-gray-300 rounded-sm' placeholder="Enter An Amount" onChange={(e) => setTransactionObj(prev => ({...prev, description: e.target.value}))} value={transactionObj.description} />
                </div>

                <div className='flex flex-col w-full gap-2'>
                  <label htmlFor="categories" defaultValue="Food and Dining">Category:</label>
                  <select id='categories' name="categories" className='w-full outline-0 border-0 px-3 py-2 h-9 bg-gray-300 rounded-sm'  onChange={(e) => setTransactionObj(prev => ({...prev, categories: e.target.value}))} value={transactionObj.categories}>
                      <option value="Food and Dining">Food and Dining</option>
                      <option value="Groceries">Groceries</option>
                      <option value="Housing">Housing</option>
                      <option value="Bills and Utilities">Bills and Utilities</option>
                      <option value="Transportation">Transportation</option>
                      <option value="Shopping">Shopping</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Health and Fitness">Health and Fitness</option>
                      <option value="Education">Education</option>
                      <option value="Travel">Travel</option>
                      <option value="Family & Personal">Family & Personal</option>
                      <option value="Subscriptions">Subscriptions</option>
                      <option value="Income">Income</option>
                      <option value="Revenue from Business">Revenue From Business</option>
                  </select>
                </div>
          </div>
          <div className='flex-1 flex flex-col items-center justify-center gap-4 mt-4'>
             <div className='flex flex-col w-full gap-2'>
                  <label htmlFor="date">Date:</label>
                  <input type="date" name="date" id='date' className='w-full outline-0 border-0 px-3 py-2 h-9 bg-gray-300 rounded-sm' placeholder="Enter A Date" onChange={(e) => setTransactionObj(prev => ({...prev, date: e.target.value}))} value={transactionObj.date} />
                </div>
          </div>

         <Button type='submit' className="mt-4">Add Transaction</Button>
      </form>
      </div>

    </div>
  )
}

export default AddTransaction