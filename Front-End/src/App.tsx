import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Contents from './components/Contents/Contents'
import Header from './components/header/Header'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Contents />
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}