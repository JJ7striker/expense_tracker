"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const AddTransactionBtn = () => {
  const router = useRouter();
  return (
     <Button className="text-white bg-blue-700 button_hover" onClick={() => router.push("/add-transaction")}>Add Expense</Button>
  )
}

export default AddTransactionBtn