import bell from './icon/bell.svg';
import menu from './icon/menu.svg';
import cart from './icon/shopping-cart.svg';
import './Navbar.scss';
const Navbar = () =>{

    return (
        <nav>
            <img src={menu} alt="Menu" />
            <img src={cart} alt="cart" />
            <img src={bell} alt="bell" />
        </nav>
    );

}

export default Navbar;