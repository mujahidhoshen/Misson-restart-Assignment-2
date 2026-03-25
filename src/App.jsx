
import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import CardContainer from './components/CardContainer'
import { ToastContainer } from 'react-toastify'


const loadData = () => fetch("/card-data.json")
.then((res) => res.json());


function App() {

  const cardsPromise = loadData();
  
  return (
    <div>
      
      <Navbar></Navbar>
      

      <Suspense fallback={<h1 className="text-4xl text-center p-5">Waiting for data...</h1>}>
         <CardContainer promise={cardsPromise}></CardContainer>

      </Suspense>

      <Footer></Footer>

      <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
