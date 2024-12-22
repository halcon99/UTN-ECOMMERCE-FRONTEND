import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeScreen } from './Screens/HomeScreen'
import { MyAccountScreen } from './Screens/MyAccountScreen'
import { RegisterScreen } from './Screens/RegisterScreen'
import { CreateProductScreen } from './Screens/CreateProductsScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen'
import { CartScreen } from './Screens/CartScreen'
import { CartProvider } from './context/CartContext'
import { ForgotPasswordScreen, RecoveryPasswordScreen, ValidateEmailScreen } from './Screens'
import ProtectedRoute from './Components/ProtectedRoute'


const App = () => {
    return (
        <CartProvider>
            <div>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/>
                    <Route path='/login' element={<MyAccountScreen/>}/>
                    <Route path='/register' element={<RegisterScreen/>}/>
                    <Route path='/forgot-password' element={<ForgotPasswordScreen/>}/>
                    <Route path="/auth/recovery-password/:reset_token" element={<RecoveryPasswordScreen/>}/>
                    <Route path='/verify-email/:validation_token' element={<ValidateEmailScreen/>}/>

                    <Route path='/product/:product_id' element={<ProductDetailScreen/>}/>

                    <Route element={<ProtectedRoute/>}>
                        <Route path="/product/new" element={<CreateProductScreen/>}/>
                        <Route path='/cart' element={<CartScreen/>}/>
                    </Route>
                  
                </Routes>
            </div>
        </CartProvider>
    )
}

export default App