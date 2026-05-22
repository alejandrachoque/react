import gato from '../assets/gato2.jpg'
import "./Header.css";
import Nav from './Nav';
 function Header() {
  return (
     <div className="header">
      <h1 id="main-title">NEXO ACADÉMICO</h1>
      <Nav/>
    </div>
  )
}
export default Header;