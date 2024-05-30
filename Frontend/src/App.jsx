import './App.css'
import Home from './components/Home.jsx'
import Welcome from './components/Welcome.jsx'
import Name from './components/Name.jsx'
import Gender from './components/Gender.jsx'
import Affirmation from './components/Affirmation.jsx'
import General from './components/General.jsx'
import Collections from './components/Collections.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "*",
        element: <Welcome />,
      },
      {
        path: "/name",
        element: <Name />,          
      },
      {
        path: "/gender",
        element: <Gender />,          
      },
      // {
      //   path: "/personalize",
      //   element: <Personalize />,          
      // },
      {
        path: "/affirmation",
        element: <Affirmation />,          
      },
      {
        path: "/categories",
        element: <Collections />,          
      },
      {
        path: "/general",
        element: <General />,          
      },
    ]
  }
]);

function App() {
  return (
    <>
     <div>
      <RouterProvider router={router} />
      <Helmet>
        <title>AmeSereine</title>
        {/* <link rel="icon" href="../public/medtrack.png" type="image/png" /> */}
      </Helmet>
    </div>
    </>
  )
}

export default App
