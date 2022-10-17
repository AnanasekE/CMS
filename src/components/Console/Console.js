import React, { useContext } from 'react';
import './Console.scss';
import AppContext from '../../context/app.context';

const Console = () => {
    const context = useContext(AppContext);
    const { jumbotronState,
            setJumbotronState,
            jumbotronText,
            setjumbotronText } = context;

    return (
        <div className='console-c'>
            <ul>
                <li>
                    <p>Jumbotron</p>
                    <input type='checkbox'
                           defaultChecked={jumbotronState}
                           onChange={() => setJumbotronState(!jumbotronState)} />
                </li>
                <li>
                    <p>Jumbotron text</p>
                    <input type='text'
                           defaultValue={jumbotronText}
                           onChange={(e) => setjumbotronText(e.target.value)}
                           placeholder='Type text...' />
                </li>
            </ul>
        </div>
    )
};

export default Console;