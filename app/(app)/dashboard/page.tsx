// import LogOutBtn from '@/components/LogOutBtn'
import { Bell, Wallet, Download, ArrowUpFromLine } from 'lucide-react'
import React from 'react'
import { collection, doc, getDocs } from "firebase/firestore"
import { db } from '@/lib/firebase/firebase'
import LineChart from "@/components/LineChart"




const Dashboard = async () => {
  let balance: number = 0;
  let expense: number = 0;
  let income: number = 0;

  const fetchData = async () => {
    const querySnapShot = await getDocs(collection(db, "transactions"));
    const data = querySnapShot.docs.map(doc => {
      return {...doc?.data()}
    })
    return data
  }

  const userData = await fetchData();

    const expenseArr = userData?.filter(data => data.transaction === "expense");
    const incomeArr = userData?.filter(data => data.transaction === "income");

    income = incomeArr.reduce((total, data) => {
      const amount = Number(data.amount);
      return total + amount;
    }, 0)

    expense = expenseArr.reduce((total, data) => {
      const amount = Number(data?.amount);
      return total + amount;
    }, 0)

     balance = income - expense;

    const cards = [
    {
        id: 1,
        title: "Balance",
        amount: balance,
        icon: Wallet,
        color: "text-blue-700"
    },
    {
        id: 2,
        title: "Expense",
        amount: expense,
        icon: Download,
        color: "text-red-700"
    },
    {
        id: 3,
        title: "Income",
        amount: income,
        icon: ArrowUpFromLine,
        color: "text-green-700"
    }
]

  return (
    <div className='px-3 py-3'>
      <div className='flex items-start justify-between md:px-6'>
        <div className='flex flex-col gap-1'>
          <h2 className='font-medium text-gray-700'>Dashboard</h2>
          <p className='text-sm font-medium text-gray-800'>Overview of your transactions</p>
        </div>

        <Bell className='size-5' />
      </div>

      <div className='w-full h-auto px-2 py-3 grid grid-cols-1 md:grid-cols-3 gap-4'>
        {cards.map((card => {
          const Icon = card.icon
          return (
          <div key={card.id} className='w-auto px-4 md:px-8 py-2 flex items-start shadow-sm shadow-gray-600 rounded-sm gap-8'>
            <Icon className={`size-6 md:size-8 ${card.color}`} />
            <div className='flex flex-col items-start'>
              <h3>{card.title}</h3>
              <h2 className={`text-2xl md:text-4xl`}>${card.amount}</h2>
            </div>
          </div>
          )
        }))}
      </div>

      <LineChart />
    </div>
  )
}

export default Dashboard