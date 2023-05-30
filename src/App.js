
import './App.css';
import {Container} from 'react-bootstrap'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Category from './components/Category';
const App = ()=> {
  return (
    <div className="App">
        <Navbar/>
     <Container>
      <Header/>
      <Category/>
     </Container>
    </div>
  );
}
export default App;
