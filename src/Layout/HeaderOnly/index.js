import Header from '~/Layout/components/Header/header';

function DefaultLayout({ children }) {
    return (<div>
        <Header />
        <div>
            <div>
                {children}
            </div>
        </div>
    </div>);
}

export default DefaultLayout;