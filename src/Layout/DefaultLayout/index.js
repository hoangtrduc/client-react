import Header from '~/Layout/components/Header/header';
import Footer from './Footer/footer';

function DefaultLayout({ children }) {
    return (<div>
        <Header />
        <div>
            <div>
                {children}
            </div>
        </div>
        <Footer />
    </div>);
}

export default DefaultLayout;