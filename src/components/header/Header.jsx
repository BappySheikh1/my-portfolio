import CTA from './CTA';
import './header.css'
import Me from '../../assets/bappy.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <>
            <header>
                <div className="container header_container">
                    <h4>Hello I`m</h4>
                    <h1>Bappy Sheikh</h1>
                    <h5 className='text-light'>MERN STACK DEVELOPER</h5>
                    <CTA />
                    <HeaderSocials />

                    <div className="me">
                        <img src={Me} alt="" />
                    </div>

                    <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
            </header>
        </>
    );
};

export default Header;