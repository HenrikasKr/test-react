import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import {Helmet} from 'react-helmet';
//css
import "../../../assets/css/style.css"
import "../../../assets/css/animate.css"
import "../../../assets/css/bootstrap.min.css"
import "../../../assets/css/magnific-popup.css"
import "../../../assets/css/owl.carousel.min.css"
import "../../../assets/css/font-awesome.min.css"
import "../../../assets/css/line-awesome.min.css"
import "../../../assets/css/themify-icons.css"
import "../../../assets/css/flaticon.css"
import "../../../assets/css/slick.css"
import "../../../assets/css/animated-slider.css"
import "../../../assets/css/style.css"
import "../../../assets/css/responsive.css"
//img
import s1 from "../../../assets/img/banner/s1.png"
import s2 from "../../../assets/img/banner/s2.png"
import b15 from "../../../assets/img/banner/15.png"
import otherBg from "../../../assets/img/bg/1h1.png"
import check from "../../../assets/img/icons/check.svg"
import headerBg from "../../../assets/img/bg/sbbs-bg.png"
import health from "../../../assets/img/service/Health.png"
import banking from "../../../assets/img/service/Banking.png"
import publicServices from "../../../assets/img/service/PublicServices.png"
import retail from "../../../assets/img/service/Retail.png"
import utilities from "../../../assets/img/service/Utilities.png"
import others from "../../../assets/img/service/Others.png"
import scheduleFlow from "../../../assets/img/schedule_flow1.svg"
import ticketFlow from "../../../assets/img/ticket_Flow.svg"
import smartCity from "../../../assets/img/SmartCity.svg"
import services from "../../../assets/img/icons/f1.svg"
import sectors from "../../../assets/img/icons/f2.svg"


function Home() {


    if(localStorage.langId == 'en') {
  return (
    <React.Fragment>
        <Header/>
            <div className="header-area sbbs-header-area" style={{backgroundImage:`url(${headerBg})`}}>
                <div className="shape1"><img src={s1} alt="animate"></img></div>
                <div className="shape2"><img src={s2} alt="animate"></img></div>
                <div className="shape3"></div>
                <div className="shape4"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="header-inner text-center">
                                <h1 className="title"><br/> <span style={{fontSize:"36px", color:"white", lineHeight: "20px"}}> Global queues management and <br/> scheduling smartly.</span></h1>
                                <div className="btn-wrapper text-center">
                                    <a className="btn btn-white btn-rounded" href="#initial-start">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-md col-lg-8 hidden-sm initial-img">
                            <div className="banner-thumbnail">
                                <img src={b15} alt="banner-img"></img>
                                <div className="hover">
                                    <div className="waves-block">
                                        <div className="waves wave-1"></div>
                                        <div className="waves wave-2"></div>
                                        <div className="waves wave-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="initial-start"></div>



            <div className="sbs-what-riyaqas mg-top-105" style={{backgroundImage:`url(${otherBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                        </div>
                        <div className="col-xl-5 col-lg-6 desktop-center-item">
                            <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title">What is <span>?</span></h2>
                                    <p>Global queues management and scheduling smartly</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> is a smart platform designed to help your company optimize the management of a customer journey.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> is a flexible, modular platform that brings together a suite of solutions that help you improve customer service and drive sales simply and centrally, wherever you are, using a computer and mobile devices.</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> was designed with a modular architecture to better suit your needs. The interfaces may have different configurations, depending on the features required. Is simple and easy to use and customizable to your business. Provides up-to-date information and real-time analysis allowing the coordination of adequate resources to the flows and business processes.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> provides you a solution to any level of requirements, scheduling and queue management, ranging from simple, all the way up to fully integrated, omni-channel service process management solutions.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> provides a hybrid queue solution, allowing the options: paperless, traditional queues or both.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sba-featute-area mg-top-120">
                <div className="container">
                    <div className="row custom-gutters-16 justify-content-center">
                        <div className="col-xl-4 col-lg-9">
                            <div className="section-title style-two text-xl-left text-center">
                                <h2 className="title"><span>Sectors</span> <br/> Covered</h2>
                                <p> covers many different and important sectors and provides them with a range of solutions.</p>
                                <a className="read-more" href="#">View Details <i className="la la-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="single-feature-left">
                                <div className="single-feature">
                                    <div className="media">
                                        <img className="media-left" src={banking} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Banking</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media" style={{borderRadius: "0 0 0 0"}}>
                                        <img className="media-left" src={health} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Health</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media border-radius-2">
                                        <img className="media-left" src={publicServices} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Public <br/> Services</h6>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 mg-top-80">
                            <div className="single-feature-right">
                                <div className="single-feature">
                                    <div className="media border-radius-3">
                                        <img className="media-left" src={retail} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Retail</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media" style={{borderRadius: "0 0 0 0"}}>
                                        <img className="media-left" src={utilities} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Utilities</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media border-radius-4">
                                        <img className="media-left" src={others} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Other</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <div>
            </div>

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="section-title style-two">
                        <h2 className="title">Simple <span>queue</span> system</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-10 pt-5 text-center flow-image">
                        <p className="h2 text-center mb-3">Ticket flow</p>
                        <img src={ticketFlow} alt="schedule flow"></img>
                        <div className=" wrapper">
                            <div id="tooltip-1" className="icon">
                            <div style={{width: "250px"}} className="tooltip">
                                Select a service
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-1"></i></span>
                            </div>
                            <div id="tooltip-2" className="icon icon-box">
                            <div style={{width: "250px"}} className="tooltip">
                                Get your ticket
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-2"></i></span>
                            </div>
                            <div id="tooltip-3" className="icon">
                            <div style={{width: "350px"}} className="tooltip">
                                Wait for notification with your number
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-3"></i></span>
                            </div>
                            <div id="tooltip-4" className="icon">
                            <div className="tooltip">
                                Attendance
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-4"></i></span>
                            </div>
                            <div id="tooltip-5" className="icon">
                            <div style={{width: "250px"}} className="tooltip">
                                Leave your feedback
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-5"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10 pt-5 text-center flow-image">
                        <p className="h2 text-center mb-3">Schedule flow</p>
                        <img src={scheduleFlow} alt="schedule flow"></img>
                        <div className=" wrapper">
                            <div id="tooltip-1" className="icon">
                            <div style={{width: "250px"}} className="tooltip">
                                Select a service
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-1"></i></span>
                            </div>
                            <div id="tooltip-2" className="icon icon-box">
                            <div style={{width: "250px"}} className="tooltip">
                                Get your ticket
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-2"></i></span>
                            </div>
                            <div id="tooltip-3" className="icon">
                            <div style={{width: "350px"}} className="tooltip">
                                Wait for notification with your number
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-3"></i></span>
                            </div>
                            <div id="tooltip-4" className="icon">
                            <div className="tooltip">
                                Attendance
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-4"></i></span>
                            </div>
                            <div id="tooltip-5" className="icon">
                            <div style={{width: "250px"}} className="tooltip">
                                Leave your feedback
                            </div>
                            <span><i style={{fontSize: "36px"}} className="fa-solid fa-5"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-area sbbs-service-area pd-top-112">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2 className="title"><span></span> <br/> was Built Specifically to</h2>
                                <p style={{fontSize: "16px"}}>Answer the challenges of the consumer with an intelligent and radical way, through a set of solutions that we have created for your business: customer service, sales, back office management and analytical reports.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center no-gutters">
                        <div className="col-sm-10 col-md-6 col-lg-4 pb-5">
                            <img src={smartCity} alt="Smart city"></img>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="row">
                                <div className="">
                                    <div className="single-service-left">
                                        <div className="media">
                                            <div className="thumb media-left">
                                                <img src={sectors} alt="service"></img>
                                            </div>
                                            <div className="media-body">
                                                <h6>Solutions</h6>
                                                <p> offers a range of solutions that enable different activities to respond to these challenges.</p>
                                                <a href="./solutions.html">Discover all<i className="la la-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>                
                                </div>
                            </div>
                            <div className="row">
                                <div className="">
                                    <div className="single-service-left">
                                        <div className="media">
                                            <div className="thumb media-left">
                                                <img src={services} alt="service"></img>
                                            </div>
                                            <div className="media-body">
                                                <h6>Sectors</h6>
                                                <p> covers many different and important sectors and provides them with a range of solutions.</p>
                                                <a href="./sectors.html">Discover all<i className="la la-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        <Helmet>
            <script defer type='text/jsx' src="../../../assets/js/jquery-2.2.4.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/popper.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/bootstrap.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.magnific-popup.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/wow.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/owl.carousel.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/slick.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.cssslider.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/waypoints.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.counterup.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/imagesloaded.pkgd.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/isotope.pkgd.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/worldmap-libs.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/worldmap-topojson.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/type.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/mediaelement.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/main.js"></script>
        </Helmet>
    </React.Fragment>
  )
} else {
    return (
        <React.Fragment>
            <Header/>
            <div className="header-area sbbs-header-area" style={{backgroundImage:`url(${headerBg})`}}>
                <div className="shape1"><img src={s1} alt="animate"></img></div>
                <div className="shape2"><img src={s2} alt="animate"></img></div>
                <div className="shape3"></div>
                <div className="shape4"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-10 col-md-8 col-lg-4">
                            <div className="header-inner text-center">
                                <h1 className="title"><br/> <span style={{fontSize:'36px', color:'white', lineHeight: '20px'}}> Gestão global de filas e <br/> <span className="typed"></span></span></h1>
                                <div className="btn-wrapper text-center">
                                    <a className="btn btn-white btn-rounded" href="#initial-start">Começe hoje mesmo</a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-md col-lg-8 hidden-sm initial-img">
                            <div className="banner-thumbnail">
                                <img src={b15} alt="banner-img"></img>
                                <div className="hover">
                                    <div className="waves-block">
                                        <div className="waves wave-1"></div>
                                        <div className="waves wave-2"></div>
                                        <div className="waves wave-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="initial-start"></div>



            <div className="sbs-what-riyaqas mg-top-105" style={{backgroundImage:`url(${otherBg})`}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
                        </div>
                        <div className="col-xl-5 col-lg-6 desktop-center-item">
                            <div className="desktop-center-area wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div className="section-title style-two">
                                    <h2 className="title">O que é o <span>?</span></h2>
                                    <p>Global queues management and scheduling smartly</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> é uma plataforma de serviços inteligentes projetada para ajudar sua empresa a otimizar a gestão do “customer journey”.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> é uma plataforma flexível e modular que reúne um conjunto de soluções que o ajudam a melhorar o atendimento ao cliente e a impulsionar as vendas de forma simples e centralizada, onde quer que esteja, usando um computador e dispositivos móveis.</span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> foi projetada com uma arquitetura modular para melhor atender às suas necessidades. As interfaces podem ter configurações diferentes, dependendo dos recursos necessários. É simples e fácil de usar e personalizável para sua empresa. Fornece informações atualizadas e análises em tempo real que permitem a coordenação de recursos adequados para os fluxos e processos comerciais.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span>A  fornece uma solução para qualquer nível de requisitos, agendamento e gestão de filas, desde simples, até soluções totalmente integradas de gestão de processos de serviços de omni-channel.</span>
                                        </div>
                                        <div className="riyaqas-check-list">
                                            <img src={check} alt="check"></img>
                                            <span> disponibiliza uma solução de filas hibrida, permitindo as opções: paperless, filas de espera tradicionais ou ambas.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="sba-featute-area mg-top-120">
                <div className="container">
                    <div className="row custom-gutters-16 justify-content-center">
                        <div className="col-xl-4 col-lg-9">
                            <div className="section-title style-two text-xl-left text-center">
                                <h2 className="title"><span>Setores </span> <br/> abrangidos</h2>
                                <p> cobre muitos setores diferentes e importantes e oferece uma gama de soluções.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6">
                            <div className="single-feature-left">
                                <div className="single-feature">
                                    <div className="media">
                                        <img className="media-left" src={banking} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Banca</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media" style={{borderRadius:'0 0 0 0'}}>
                                        <img className="media-left" src={health} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Saúde</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media border-radius-2">
                                        <img className="media-left" src={publicServices} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Serviços <br/> Publicos</h6>
                                            <br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-sm-6 mg-top-80">
                            <div className="single-feature-right">
                                <div className="single-feature">
                                    <div className="media border-radius-3">
                                        <img className="media-left" src={retail} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Retalho</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media" style={{borderRadius:'0 0 0 0'}}>
                                        <img className="media-left" src={utilities} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Utilities</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-feature">
                                    <div className="media border-radius-4">
                                        <img className="media-left" src={others} alt="feature"></img>
                                        <div className="media-body">
                                            <h6>Outros</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>


            <div>
            </div>

            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="section-title style-two">
                        <h2 className="title">Sistema de <br/> <span>fila simples</span></h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-10 pt-5 text-center flow-image">
                        <p className="h2 text-center mb-3">Fluxo de bilhete</p>
                        <img src={ticketFlow} alt="schedule flow"></img>
                        <div className=" wrapper">
                            <div id="tooltip-1" className="icon icon-1">
                            <div style={{width:'250px'}} className="tooltip">
                                Selecionar serviço
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-1"></i></span>
                            </div>
                            <div id="tooltip-2" className="icon icon-1">
                            <div style={{width:'250px'}} className="tooltip">
                                Adquira seu ingresso
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-2"></i></span>
                            </div>
                            <div id="tooltip-3" className="icon icon-1">
                            <div style={{width:'350px'}} className="tooltip">
                                Aguarde a notificação com seu número
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-3"></i></span>
                            </div>
                            <div id="tooltip-4" className="icon icon-1">
                            <div className="tooltip">
                                Comparecimento
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-4"></i></span>
                            </div>
                            <div id="tooltip-5" className="icon icon-1">
                            <div style={{width:'250px'}} className="tooltip">
                                Deixe seu feedback
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-5"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-10 pt-5 text-center flow-image">
                        <p className="h2 text-center mb-3">Fluxo de cronograma</p>
                        <img src={scheduleFlow} alt="schedule flow"></img>
                        <div className=" wrapper">
                            <div id="tooltip-1" className="icon">
                            <div style={{width: '250px'}} className="tooltip">
                                Selecionar serviço
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-1"></i></span>
                            </div>
                            <div id="tooltip-2" className="icon icon-box">
                            <div style={{width: '250px'}} className="tooltip">
                                Adquira seu ingresso
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-2"></i></span>
                            </div>
                            <div id="tooltip-3" className="icon">
                            <div style={{width: '350px'}} className="tooltip">
                                Aguarde a notificação com seu número
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-3"></i></span>
                            </div>
                            <div id="tooltip-4" className="icon">
                            <div className="tooltip">
                                Comparecimento
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-4"></i></span>
                            </div>
                            <div id="tooltip-5" className="icon">
                            <div style={{width: '250px'}} className="tooltip">
                                Deixe seu feedback
                            </div>
                            <span><i style={{fontSize: '36px'}} className="fa-solid fa-5"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-area sbbs-service-area pd-top-112">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-title text-center">
                                <h2 className="title"><span></span> <br/> foi construído especificamente para</h2>
                                <p style={{fontSize: '16px'}}>Responda aos desafios do consumidor de forma inteligente e radical, através de um conjunto de soluções que criamos para seu negócio: atendimento ao cliente, vendas, gestão de backoffice e relatórios analíticos.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center no-gutters">
                        <div className="col-sm-10 col-md-6 col-lg-4 pb-5">
                            <img src={smartCity} alt="Smart city"></img>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-sm-10 col-md-6 col-lg-4">
                            <div className="row">
                                <div className="">
                                    <div className="single-service-left">
                                        <div className="media">
                                            <div className="thumb media-left">
                                                <img src={services} alt="service"></img>   
                                            </div>
                                            <div className="media-body">
                                                <h6>Soluções</h6>
                                                <p> oferece um leque de soluções que permitem as diferentes actividades a responder a esses desafios.</p>
                                                <a href="./solutions.html">Descubra tudo<i className="la la-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>                
                                </div>
                            </div>
                            <div className="row">
                                <div className="">
                                    <div className="single-service-left">
                                        <div className="media">
                                            <div className="thumb media-left">
                                                <img src={sectors} alt="sectors"></img>
                                            </div>
                                            <div className="media-body">
                                                <h6>Setores</h6>
                                                <p> cobre muitos setores diferentes e importantes e oferece uma gama de soluções.</p>
                                                <a href="./sectors.html">Descubra tudo<i className="la la-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
        <Helmet>
            <script defer type='text/jsx' src="../../../assets/js/jquery-2.2.4.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/popper.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/bootstrap.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.magnific-popup.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/wow.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/owl.carousel.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/slick.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.cssslider.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/waypoints.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/jquery.counterup.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/imagesloaded.pkgd.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/isotope.pkgd.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/worldmap-libs.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/worldmap-topojson.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/type.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/mediaelement.min.js"></script>
            <script defer type='text/jsx' src="../../../assets/js/main.js"></script>
        </Helmet>
    </React.Fragment>
    )
  }
}

export default Home