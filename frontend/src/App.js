import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path='/' component={HomeScreen} exact />
          </Routes>
          
          {/* <Route path='product/:id' component={ProductScreen}  /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
