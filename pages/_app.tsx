import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import { AuthProvider } from '../contexts/AuthContext'
import { DatabaseProvider } from '../contexts/DatabaseContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import theme from '../lib/theme'
import Home from './index'
import Signup from './signup'
import Login from './login'
import Sequence from './tests/sequence'
import OneToFifty from './tests/one-to-fifty'
import MentalMath from './tests/mental-math'
import Dashboard from './dashboard'

const Website = ({ router }) => {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <Layout router={router}>
              <Routes>
                <Route index element={<Home />}></Route>
                <Route path={'/signup'} element={<Signup />}></Route>
                <Route path={'/login'} element={<Login />}></Route>
                <Route path={'/dashboard'} element={<Dashboard />}></Route>
                <Route path={'/tests/sequence'} element={<Sequence />}></Route>
                <Route
                  path={'/tests/one-to-fifty'}
                  element={<OneToFifty />}
                ></Route>
                <Route
                  path={'/tests/mental-math'}
                  element={<MentalMath />}
                ></Route>
              </Routes>
            </Layout>
          </Router>
        </ChakraProvider>
      </DatabaseProvider>
    </AuthProvider>
  )
}

export default Website
