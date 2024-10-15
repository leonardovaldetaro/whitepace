import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Header from 'components/header';
import Footer from 'components/footer';

export default function AppRouter () {
    return (
        <main className='mainContainer'>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />}></Route>
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}