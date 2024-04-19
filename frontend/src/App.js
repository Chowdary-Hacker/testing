
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Counter from './components/counter' ;
import ProductCard from './components/ProductCard';
import Axioscrud from './components/Axioscrud';
import Apr5 from './components/Apr5';
import Home from './components/Home';
import Carousel from'./components/Carousel';
import AdminPage from './components/AdminPage';
import ParentPage from './components/ParentPage';
import StartPage from './components/StartPage';
function App() {
 /* return (
    <div>
    <ProductCard id="1" productname="Patek Philippe" price="9 million $" imageURL="https://www.patek.com/resources/img/only_watch_2019/banner_1600@2x.jpg"/>
    <ProductCard id="2" productname="Rollex" price="50 thousand $" imageURL="https://cdn2.chrono24.com/images/uhren/29506974-q6snz4h78xa0hw7lq5fbvprp-ExtraLarge.jpg "/>    
    <ProductCard id="3" productname="Breguet" price="6 million $" imageURL="https://www.breguet.com/sites/default/files/styles/page_modele_preview/public/gardetemps/variante/soldat/breguet-n1116_face.jpg?itok=XFMwGiuw"/>
    </div>  
  );*/
 //return(<Counter/>); 
 /*return(
  <Router>
 <Routes>
  <Route path="/" element={<Apr5/>}/>
  <Route path="/Home" element={<Home/>}/>
 </Routes>
 </Router>
 ); */
//return(<Carousel/>);
return(<Router>
  <Routes>
   <Route path="/" element={<StartPage/>}/>
   <Route path="/admin" element={<AdminPage/>}/>
   <Route path="/parents" element={<ParentPage/>}/>
  </Routes>
  </Router>);
}

export default App;
