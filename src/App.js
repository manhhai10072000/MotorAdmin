import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import AddProduct from './components/AddProduct';
import Bill from './components/Bill';
import {Routes, Route, Link,NavLink} from 'react-router-dom';
import Imglogo from './img/Logo-01.png'
import imgadmin from './img/folder.png'

function App() {
  return (
    <div className="admin-container">
  <nav>
    <ul className="menu">
      <li>
      <img src={Imglogo}></img><a>Sonic motor</a>
      </li>
      <li>
        <img src={imgadmin} className='imgadmin'></img><a>Admin</a>
      </li>
      <li>
        <i className="fa-solid fa-box" /> 
        <Link to="/product" className='title'>Sản Phẩm</Link>
      </li>
      <li>
        <i className="fa-solid fa-heading" />
        <Link to='/bill'className='title'>Tiêu đề</Link>
      </li>
      <li>
        <i className="fa-solid fa-money-bill" />
        <Link to='/bill'className='title-bill'>Hóa đơn</Link>
      </li>
    </ul>
  </nav>
  <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/bill" element={<Bill />}/>
</Routes>
</div>


  );
}

export default App;
