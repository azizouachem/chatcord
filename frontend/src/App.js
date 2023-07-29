
import './App.css';
import{ Route }from 'react-router-dom';
import homepage from './pages/Homepage';
import Chatpage from './pages/chatpage'
function App() {
  return  <div classname="App">
    <Route path='/' component={homepage} exact />
   <Route path='/chats' component ={Chatpage}  />
  </div>
  
};

export default App;
