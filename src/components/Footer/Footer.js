import React from 'react'
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


function Footer() {
    if(localStorage.langId == "en") {
        return (
            <footer className="footer-area footer-area-2 style-two">
                <div className="container">
                    <div className="footer-widget-area">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget">
                                    <div className="about_us_widget">
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget ">
                                    <h4 className="widget-title">Pages</h4>
                                    <div className="contact_info_list">
                                            <p><span><a href="./about.html">About</a></span></p>
                                            <p><span><a href="./solutions.html">Solutions</a></span></p>
                                            <p><span><a href="./sectors.html">Sectors</a></span></p>
                                            <p><span><a href="./contact.html">Contacts</a></span></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget ">
                                    <h4 className="widget-title">Contacts</h4>
                                    <div className="contact_info_list">
                                        <p><span>Adress:</span></p>
                                        <p><span>E-mail:</span></p>
                                        <p><span>Working hours:</span> 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-inner">
                    <div className="copyright-text">
                        &copy; , 2017
                    </div>
                </div>
            </footer>
        )
    } else {
        return (
            <footer className="footer-area footer-area-2 style-two">
                <div className="container">
                    <div className="footer-widget-area">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget">
                                    <div className="about_us_widget">
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget ">
                                    <h4 className="widget-title">Páginas</h4>
                                    <div className="contact_info_list">
                                            <p><span><a href="./about.html">Sobre</a></span></p>
                                            <p><span><a href="./solutions.html">Soluções</a></span></p>
                                            <p><span><a href="./sectors.html">Setores</a></span></p>
                                            <p><span><a href="./contact.html">Contato</a></span></p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="footer-widget widget ">
                                    <h4 className="widget-title">Contato</h4>
                                    <div className="contact_info_list">
                                        <p><span>Sedo:</span></p>
                                        <p><span>E-mail:</span></p>
                                        <p><span>Horário:</span> 09:00 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-inner">
                    <div className="copyright-text">
                        &copy; , 2017
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer