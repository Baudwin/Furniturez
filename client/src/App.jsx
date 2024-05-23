import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Router'
import { ScrollToTop } from './components/ScrollToTop'

function App() {


  return (
    <>
 <RouterProvider router={router}>
  <ScrollToTop/>
 </RouterProvider>
    </>
  )
}

export default App
