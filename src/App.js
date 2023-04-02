
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import ForgetPass from './Components/ForgetPass';
import Signup from './Components/Signup';
import Market from './Components/Market';
import BuyTran from './Components/BuyTran'
import Transactions from './Components/Transactions';
import Wallet from './Components/Wallet';
import Admin_home from './Components/Admin_home';
import AccountVer from './Components/AccountVer';
import AdminRow from './Components/AdminRow';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/h" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetPassword" element={<ForgetPass />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/market" element={<Market />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/Wallet" element={<Wallet />} />
        <Route path="/ah" element={<Admin_home />} /> 
        <Route path="/accverify" element={<AccountVer />} /> 
        <Route path="/admRow" element={<AdminRow />} /> 
      </Routes>
    </div> 
  ); 
}

export default App;
