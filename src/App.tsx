import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login, Register, CategoryList} from './pages'
import { LoginLayout } from './layouts'
import AppProvider from './Provider/AppProvider'
import { NewCategory, UpdateCategory } from './containers'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <LoginLayout />,
      children: [
        {
          path: '/',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
    {
      path: '/category',
      element: <CategoryList />
    },
    {
      path: '/add',
      element: <NewCategory />
    },
    {
      path: '/edit/:id',
      element: <UpdateCategory />
    },
  ])

  return (
    // <AppProvider>
      <RouterProvider router={router} />
    // </AppProvider>
  )
}

export default App
