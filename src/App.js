import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Website from './views/Website';
import Admin from './views/Admin';
import './App.scss';


const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Website/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="*" element={<Website/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
