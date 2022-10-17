import Header from '../../components/Header';
import Console from '../../components/Console';

const Admin = () => {
    return (
        <>
            <Header title='Admin' />
            <div className='main-container container'>
                <Console />
            </div>
        </>
    )
}

export default Admin;