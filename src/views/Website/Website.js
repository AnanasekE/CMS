import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

const Website = () => {
    return (
        <>
            <Header title='Website' />
            <div className='main-container container'>
                <Jumbotron />
                <Products />
                <Footer />
            </div>
        </>
    )
}

export default Website;