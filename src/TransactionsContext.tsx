import { createContext, ReactNode,useEffect, useState } from 'react'
import { api } from './services/api'

interface TransactionProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionProps[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() =>{
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return(
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}