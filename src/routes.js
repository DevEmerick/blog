import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Article from './Pages/Article';


const AppRoutes = () => (
    <Router>
        <Routes>
            <Route exact path="/" element={<Main/>}/>
            <Route path="/articles/:id" element={<Article/>}/>
        </Routes>
    </Router>
)

export default AppRoutes;