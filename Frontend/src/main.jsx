import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FacultyDetails from './pages/FacultyDetails.jsx'
import Teachers from './components/Teachers.jsx'
import WriteReviews from './pages/WriteReviews.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/teachers',
        element: <Teachers/>
      },
      {
        path:'/write_review',
        element: <WriteReviews/>
      },
      {
        path:':name',
        element: <FacultyDetails/>, 
        loader : async ({params})=> {
          const response = await fetch(`https://bracademic.vercel.app/api/faculty/?search=${params.name}`)
          return response.json();
        }
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
