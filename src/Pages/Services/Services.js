import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import View from "../../Components/Constans/ViewType";
import strings from "../../localization";
import './services.scss'

const Services = () => {
    const navigate = useNavigate();

    const navigateItem1 = () => {
        navigate('/services/works', {state: View.RENOVATION})
    }
    const navigateItem2 = () => {
        navigate('/services/works', {state: View.PLASTER})
    }
    const navigateItem3 = () => {
        navigate('/services/works', {state: View.INTERIOR})
    }
    const navigateItem4 = () => {
        navigate('/services/works', {state: View.MODERN})
    }
    const navigateItem5 = () => {
        navigate('/services/works', {state: View.FLOORS})
    }
    const navigateItem6 = () => {
        navigate('/services/works', {state: View.PAINTING})
    }
    const navigateItem7 = () => {
        navigate('/services/works', {state: View.CUSTOMVERANDA})
    }
    const navigateItem8 = () => {
        navigate('/services/works', {state: View.CUSTOMKITCHEN})
    }
    const navigateItem9 = () => {
        navigate('/services/works', {state: View.INOVATIVE})
    }

    return (
        <main id="servicesMain">
             <section className="headerService1">
                <div className="content1">
                    <div className="header-content1">
                        <span className="span-title1">
                            {strings.pages.services.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image1">
                    <img className="image1" src='images/image.jpeg' />
                </div>
            </section>
            <div className="cards21">
                <div className="wraper21">
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem1} className="boxImage" src='images/renovation.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.renovation}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem2} className="boxImage" src='images/plasterWorks.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.plasterWorks}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem8} className="boxImage" src='images/customKitchen.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.customKitchenMolds}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem3} className="boxImage" src='images/interiorExterior.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.ineteriorExterior}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem4} className="boxImage" src='images/dryCeiling.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.professionalGips}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem5} className="boxImage" src='images/floorLaminate.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.floorsLaminateCarpet}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem6} className="boxImage" src='images/paiting.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.paiting}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem7} className="boxImage" src='images/veranda.jpeg' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.customVeranda}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                    <div className="singlecard">
                        <div className="imageTop">
                            <img onClick={navigateItem9} className="boxImage" src='images/advice.png' />
                        </div>
                        <div className="itemContent">
                            <h3>{strings.pages.home.cards.advicesInnovation}</h3>
                            <p>{strings.pages.home.cards.description.description1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Services;