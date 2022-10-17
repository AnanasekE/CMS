import { useContext } from 'react';
import './Jumbotron.scss';
import AppContext from '../../context/app.context';

const Jumbotron = () => {
    const context = useContext(AppContext);
    const { jumbotronState, jumbotronText } = context;

    return (
        <>
            {jumbotronState && <div className='jumbotron-c'>
                <p>{jumbotronText ? jumbotronText : 'Jumbotron'}</p>
            </div>}
        </>
    )
}

export default Jumbotron;