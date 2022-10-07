import React from 'react'
import {Helmet} from 'react-helmet'
//css
import "../../assets/css/style.css"
import "../../assets/css/animate.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/magnific-popup.css"
import "../../assets/css/owl.carousel.min.css"
import "../../assets/css/font-awesome.min.css"
import "../../assets/css/line-awesome.min.css"
import "../../assets/css/themify-icons.css"
import "../../assets/css/flaticon.css"
import "../../assets/css/slick.css"
import "../../assets/css/animated-slider.css"
import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
//img

import pt from "../../assets/img/flag/pt.jfif"
import en from "../../assets/img/flag/us.png"


function Header() {
    function setLangEn(){
        localStorage.setItem("langId", "en");
        window.location.reload();
    }
    function setLangPt(){
        localStorage.setItem("langId", "pt");
        window.location.reload();
    }
    if(localStorage.langId == 'en') {
        return (
            <>
                <nav className="navbar navbar-area navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo-wrapper mobile-logo">
                                <a href="index.html" className="logo">
                                </a>
                            </div>
                            <div className="nav-right-content">
                                <ul>
                                <div className="dropdown">
                                        <button style={{border: "none",backgroundColor:"transparent"}} onClick={setLangEn}><img className="flag" src={en} alt="EN Flag"></img>EN</button>
                                    <div className="dropdown-content">
                                        <button style={{border: "none", width: "60px", backgroundColor:"transparent"}} onClick={setLangPt}><img className="flag" src={pt} alt="PT Flag"></img>PT</button>
                                    </div>
                                </div>
                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#riyaqas_main_menu" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggle-icon">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="riyaqas_main_menu">
                            <div className="logo-wrapper desktop-logo">
                            </div>
                            <ul className="navbar-nav">
                                <li>
                                    <a href="./about.html">About</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Solutions</a>
                                    <ul className="sub-menu">
                                        <li><a href="./solutions.html">All solutions</a></li>
                                        <li><a href="./appointment.html">Appointment Scheduling</a></li>
                                        <li><a href="./queuemanage.html">Queue management</a></li>
                                        <li><a href="./omnichannel.html">Omnichannel commerce</a></li>
                                        <li><a href="./service-app.html">Customer service app and portal</a></li>
                                        <li><a href="./customer-feedback.html">Customer feed-back tools</a></li>
                                        <li><a href="./analytics-info.html">Analytics information</a></li>
                                        <li><a href="./API-integrator.html">API integrator</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./sectors.html">Sectors</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contacts</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right-content">
                            <ul>
                                <div className="dropdown">
                                        <button style={{border: "none",backgroundColor:"transparent"}} onClick={setLangEn}><img className="flag" src={en} alt="EN Flag"></img>EN</button>
                                    <div className="dropdown-content">
                                        <button style={{border: "none", width: "60px", backgroundColor:"transparent"}} onClick={setLangPt}><img className="flag" src={pt} alt="PT Flag"></img>PT</button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Helmet>
                    <script defer type='text/jsx' src="../../assets/js/jquery-2.2.4.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/popper.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/bootstrap.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.magnific-popup.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/wow.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/owl.carousel.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/slick.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.cssslider.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/waypoints.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.counterup.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/imagesloaded.pkgd.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/isotope.pkgd.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/worldmap-libs.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/worldmap-topojson.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/type.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/mediaelement.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/main.js"></script>
                </Helmet>
            </>
          )
    } else {
        return (
            <>
                <nav className="navbar navbar-area navbar-expand-lg">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <div className="logo-wrapper mobile-logo">
                            </div>
                            <div className="nav-right-content">
                                <ul>
                                    <div className="dropdown">
                                            <button style={{border: "none",backgroundColor:"transparent"}} onClick={setLangPt}><img className="flag" src={pt} alt="PT Flag"></img>PT</button>
                                        <div className="dropdown-content">
                                            <button style={{border: "none", width: "60px", backgroundColor:"transparent"}} onClick={setLangEn}><img className="flag" src={en} alt="US Flag"></img>EN</button>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#riyaqas_main_menu" 
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggle-icon">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="riyaqas_main_menu">
                            <div className="logo-wrapper desktop-logo">

                            </div>
                            <ul className="navbar-nav">
                                <li>
                                    <a href="./about.html">SOBRE</a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">SOLUÇÕES</a>
                                    <ul className="sub-menu">
                                        <li><a href="./solutions.html">Todas as soluções</a></li>
                                        <li><a href="./appointment.html">Agendamento e Marcações</a></li>
                                        <li><a href="./queuemanage.html">Gestão de filas</a></li>
                                        <li><a href="./omnichannel.html">Comércio omni-channel</a></li>
                                        <li><a href="./service-app.html">App e Portal de Serviços ao Cliente</a></li>
                                        <li><a href="./customer-feedback.html">Satisfação do Cliente</a></li>
                                        <li><a href="./analytics-info.html">Informações analíticas</a></li>
                                        <li><a href="./API-integrator.html">Conector API Integrador</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="./sectors.html">SETORES</a>
                                </li>
                                <li>
                                    <a href="contact.html">CONTATO</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right-content">
                            <ul>
                                <div className="dropdown">
                                        <button style={{border: "none",backgroundColor:"transparent"}} onClick={setLangPt}><img className="flag" src={pt} alt="PT Flag"></img>PT</button>
                                    <div className="dropdown-content">
                                        <button style={{border: "none", width: "60px", backgroundColor:"transparent"}} onClick={setLangEn}><img className="flag" src={en} alt="US Flag"></img>EN</button>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Helmet>
                    <script defer type='text/jsx' src="../../assets/js/jquery-2.2.4.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/popper.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/bootstrap.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.magnific-popup.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/wow.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/owl.carousel.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/slick.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.cssslider.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/waypoints.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/jquery.counterup.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/imagesloaded.pkgd.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/isotope.pkgd.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/worldmap-libs.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/worldmap-topojson.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/type.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/mediaelement.min.js"></script>
                    <script defer type='text/jsx' src="../../assets/js/main.js"></script>
                </Helmet>
            </>
          )
    }
  
}

export default Header