import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '../src/routes/Route'
import DefaultLayout from './components/Layouts/DefaultLayout/DefaultLayout'
import { Fragment } from 'react'
function App() {

  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {

            let Layout = DefaultLayout

            if (route.layout) {
              Layout = route.layout
            }

            else if (route.layout === null) {
              Layout = Fragment
            }

            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App 
