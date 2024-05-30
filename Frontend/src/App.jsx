import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Home from './components/Home.jsx'
import Welcome from './components/Welcome.jsx'
import Name from './components/Name.jsx'
import Gender from './components/Gender.jsx'
import Affirmation from './components/Affirmation.jsx'
import General from './components/General.jsx'
import Favorites from './components/Favorites.jsx'
import Collections from './components/Collections.jsx'
import OwnAffirmations from './components/OwnAffirmations.jsx'


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
      {
        path: "/fav",
        element: <Favorites />,          
      },
      {
        path: "/affirmation",
        element: <Affirmation />,          
      },
      {
        path: "/collections",
        element: <Collections />,          
      },
      {
        path: "/general",
        element: <General />,          
      },
      {
        path: "/myaffirmations",
        element: <OwnAffirmations />,          
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
