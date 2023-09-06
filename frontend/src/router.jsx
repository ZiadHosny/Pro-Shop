import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';
import { AdminRoute } from './components/AdminRoute';
import App from './App';
import { HomeScreen } from './screens/HomeScreen';
import { ShippingScreen } from './screens/ShippingScreen';
import { ProductScreen } from './screens/ProductScreen';
import { OrderScreen } from './screens/OrderScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { LoginScreen } from './screens/LoginScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { PlaceOrderScreen } from './screens/PlaceOrderScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { UserListScreen } from './screens/admin/UserListScreen';
import { UserEditScreen } from './screens/admin/UserEditScreen';
import { ProductEditScreen } from './screens/admin/ProductEditScreen';
import { OrderListScreen } from './screens/admin/OrderListScreen';
import { ProductListScreen } from './screens/admin/ProductListScreen';
import { CartScreen } from './screens/CartScreen';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />} >
            <Route index={true} path='/' element={<HomeScreen />} />
            <Route path='/search/:keyword' element={<HomeScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} />
            <Route
                path='/search/:keyword/page/:pageNumber'
                element={<HomeScreen />}
            />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            {/* Registered users */}
            <Route path='' element={<PrivateRoute />}>
                <Route path='/profile' element={<ProfileScreen />} />
                <Route path='/shipping' element={<ShippingScreen />} />
                <Route path='/payment' element={<PaymentScreen />} />
                <Route path='/placeorder' element={<PlaceOrderScreen />} />
                <Route path='/order/:id' element={<OrderScreen />} />
            </Route>
            {/* Admin users */}
            <Route path='' element={<AdminRoute />}>
                <Route path='/admin/orderlist' element={<OrderListScreen />} />
                <Route path='/admin/productlist' element={<ProductListScreen />} />
                <Route
                    path='/admin/productlist/:pageNumber'
                    element={<ProductListScreen />}
                />
                <Route path='/admin/userlist' element={<UserListScreen />} />
                <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
                <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
            </Route>
        </Route>
    )
)