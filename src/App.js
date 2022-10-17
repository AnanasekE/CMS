import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Website from './views/Website';
import Admin from './views/Admin';
import './App.scss';
import AppContext from './context/app.context';

const App = () => {
    const {Provider} = AppContext;

    const [jumbotronState, setJumbotronState] = useState(true);
    const [jumbotronText, setjumbotronText] = useState('');

    return (
        <div className='App'>
            <Provider value={{
                jumbotronState,
                setJumbotronState,
                jumbotronText,
                setjumbotronText
            }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Website/>}/>
                        <Route path="admin" element={<Admin/>}/>
                        <Route path="*" element={<Website/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
