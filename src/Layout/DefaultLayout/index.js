import Header from '~/Layout/components/Header/header';
import Footer from './Footer/footer';




function DefaultLayout({ children }) {
    return <div className='wrapper'>
        <Header />
        <div className='container'>
            {children}
        </div>
        <Footer />
    </div>
}

export default DefaultLayout;