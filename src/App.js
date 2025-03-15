import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </Router>
    );
}

export default App;
