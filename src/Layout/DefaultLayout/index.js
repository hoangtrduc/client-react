import Header from '~/Layout/components/Header/header';
import Footer from './Footer/footer';




function DefaultLayout({ children }) {
    return <div >
        <Header />
        <div className='container '>
            <div className='content mt-2'>
                {children}
            </div>
        </div>
        <div className='container'><Footer /></div>
    </div>
}

export default DefaultLayout;