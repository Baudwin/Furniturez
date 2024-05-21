import { createBrowserRouter } from 'react-router-dom'
import { Root } from './layouts/Root'
import { Home } from './pages/home/home'
import { Signin } from './pages/signin/signin'

const router = createBrowserRouter([
 {
    path : '/', 
    element : <Root/>, 
    children : [
        {
            path:'/', 
            element:<Home/>,
            index:true
        },
        {
            path:'signin', 
            element:<Signin/>,
            
        }
    ]
 }
])

export default router