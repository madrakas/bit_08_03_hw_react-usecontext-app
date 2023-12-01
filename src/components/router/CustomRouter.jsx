import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { LoginPage } from '../pages/LoginPage';
import { AccountPage } from '../pages/AccountPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { PubLayout } from '../layouts/PubLayout';
import { AuthLayout } from '../layouts/AuthLayout';

export function CustomRouter(){

    const {layout} = useContext(GlobalContext)
    let currentLayout = PubLayout;
    let moreRoutes =[ <Route index path='/login' element={<LoginPage />}/>];

   
    if (layout === 'AuthLayout'){
        currentLayout = AuthLayout;
        moreRoutes = [<Route index path='/Account' element={<AccountPage />}/>];
    }

    console.log('PubLayout: ', PubLayout);

    return(
        <BrowserRouter>
        <Routes>
          <Route Component={currentLayout}>
            <Route index path='/' element={<HomePage />}/>
            {moreRoutes}
            <Route index path='*' element={<NotFoundPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
}