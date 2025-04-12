import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FacultyDetails from './pages/FacultyDetails.jsx'


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
        path:':name',
        element: <FacultyDetails/>, 
        loader : async ({params})=> {
          const response = await fetch(`http://127.0.0.1:8000/api/faculty/?search=${params.name}`)
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
