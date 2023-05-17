import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Contents from './components/Contents/Contents'
import Header from './components/header/Header'

export default () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Contents />
      </BrowserRouter>
    </div>
  )
}