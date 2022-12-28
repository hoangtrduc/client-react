import HeaderOnly from '~/Layout/HeaderOnly';

import Home from '~/pages/Home/Home';
import Products from '~/pages/Products/Products';
import Cart from '~/pages/Cart/Cart';
import SingninFrom from '~/pages/login/singnin';


// không cần đăng nhập vẫn xem được
const publicRouters = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/Products', component: Products },
    { path: '/singnin', component: SingninFrom },
    { path: '/cart', component: Cart, layout: HeaderOnly }

]

// phải đăng nhập
const privateRouter = [

]

export {
    publicRouters,
    privateRouter
}