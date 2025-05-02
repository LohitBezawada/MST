import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import CompletedDonations from './pages/CompletedDonations';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Campaigns from './pages/Campaigns'
import Payment from './pages/Payment';
import Donate from './pages/Donate';
import FormData from './pages/FormData';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/completed-donations" element={<CompletedDonations/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/contact"element={<Contact/>} />
                <Route path="/campaigns"element={<Campaigns/>} />
                <Route path="/payment"element={<Payment/>} />
                <Route path="/donate"element={<Donate/>} />
                <Route path="/donate/details"element={<FormData/>} />
            
               
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
