import { createBrowserRouter } from 'react-router-dom'
import { Root } from './layouts/Root'
import { Home } from './pages/home/home'
import { Signin } from './pages/signin/signin'
import { Profile } from './pages/profile/profile'
import { AccountDetails } from './pages/profile/components/AccountDetails'
import { Address } from './pages/profile/components/Address'
import { Orders } from './pages/profile/components/Orders'
import { Wishlist } from './pages/profile/components/Wishlist'

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
            
        },
        {
            path:'profile', 
            element:<Profile/>,
            children:[
                {
                    path:'/profile',
                    element:<AccountDetails/>,
                    index:true
                },
                {
                    path:'account-details',
                    element:<AccountDetails/>,
                },
                {
                    path:'address',
                    element:<Address/>
                },
                {
                    path:'orders',
                    element:<Orders/>
                },
                {
                    path:'wishlist',
                    element:<Wishlist/>
                }
            ]
            
        }
    ]
 }
])

export default router