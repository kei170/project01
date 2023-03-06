import { BrowserRouter,Routes, Route } from 'react-router-dom';
// 모든 페이지
import App from './components/App';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Company from './Pages/Company';
import Content from './components/Content'
import Man from './Pages/Man';
import Pos from './Pages/Pos';
import Loc from './Pages/Loc';
import Serve from './Pages/Serve';
import Login from './Pages/Login';
import Brand from './Pages/Brand';
import Joinus from './Pages/Joinus';
import Media from './Pages/Media';


function Main(){
    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="company" element={<Company />} />
                    <Route path="man" element={<Man />}/>
                    <Route path="pos" element={<Pos />}/>
                    <Route path="loc" element={<Loc />}/>
                    <Route path="Serve" element={<Serve />}/>
                    <Route path="Login" element={<Login />}/>
                    <Route path="brand" element={<Brand />}/>
                    <Route path="joinus" element={<Joinus />}/>
                    <Route path="media" element={<Media />}/>
                    
                </Routes>
            </App>
        </BrowserRouter>
    )
}

export default Main;