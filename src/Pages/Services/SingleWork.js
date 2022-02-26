import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import strings from "../../localization";
import './singleWork.scss'

const SingleWork = () => {
    const location = useLocation();
    const [pageState, setPageState] = useState();


    useEffect(() => {
        if(location.state){
            setPageState(location.state)
        }
    },[])

    const renovation = () => {
        return <>
            <section className="header">
                    <div className="content">
                        <div className="header-content">
                            <span className="span-title">
                                {strings.pages.works.renovation.pageTitle}
                            </span>
                        </div>
                    </div>
                    <div className="header-image">
                        <img className="image" src='/images/renovation.jpeg' />
                    </div>
                </section>
                <section className="content-section">
                    <div className="content-section-wraper">
                            <h1>{strings.pages.works.renovation.pageTitle2}</h1>
                            <p>
                                <span>
                                    {strings.pages.works.renovation.description1}
                                </span>
                            </p>
                            <h2>{strings.pages.works.renovation.pageTitle3}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.renovation.description2}
                                </span>
                            </p>
                            <h2>{strings.pages.works.renovation.pageTitle4}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.renovation.description3}
                                </span>
                            </p>
                            <p>
                                <ul>
                                    <li>{strings.pages.works.renovation.li1}</li>
                                    <li>{strings.pages.works.renovation.li2}</li>
                                    <li>{strings.pages.works.renovation.li3}</li>
                                    <li>{strings.pages.works.renovation.li4}</li>
                                </ul>
                            </p>
                            <h2>{strings.pages.works.renovation.pageTitle5}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.renovation.description4}
                                </span>
                            </p>

                        </div>
                </section>
            </>
    }

    const plaster = () => {
        return <>
            <section className="header">
                    <div className="content">
                        <div className="header-content">
                            <span className="span-title">
                                {strings.pages.works.plaster.pageTitle}
                            </span>
                        </div>
                    </div>
                    <div className="header-image">
                        <img className="image" src='/images/plasterWorks.jpeg' />
                    </div>
                </section>
                <section className="content-section">
                    <div className="content-section-wraper">
                            <h1>{strings.pages.works.plaster.pageTitle2}</h1>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description1}
                                </span>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle3}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description2}
                                </span>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle4}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description3}
                                </span>
                            </p>
                            <p>
                                <ul>
                                    <li>{strings.pages.works.plaster.li1}</li>
                                    <li>{strings.pages.works.plaster.li2}</li>
                                    <li>{strings.pages.works.plaster.li3}</li>
                                    <li>{strings.pages.works.plaster.li4}</li>
                                </ul>
                            </p>
                            <h2>{strings.pages.works.plaster.pageTitle5}</h2>
                            <p>
                                <span>
                                    {strings.pages.works.plaster.description4}
                                </span>
                            </p>

                        </div>
                </section>
            </>
    }

    const customKitchen = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.customKitchen.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/customKitchen.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.customKitchen.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.customKitchen.li1}</li>
                                <li>{strings.pages.works.customKitchen.li2}</li>
                                <li>{strings.pages.works.customKitchen.li3}</li>
                                <li>{strings.pages.works.customKitchen.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.customKitchen.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customKitchen.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const interiorExterior = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.interiorExterior.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/interiorExterior.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.interiorExterior.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.interiorExterior.li1}</li>
                                <li>{strings.pages.works.interiorExterior.li2}</li>
                                <li>{strings.pages.works.interiorExterior.li3}</li>
                                <li>{strings.pages.works.interiorExterior.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.interiorExterior.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.interiorExterior.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const modernWalls = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.modernWalls.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/dryCeiling.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.modernWalls.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.modernWalls.li1}</li>
                                <li>{strings.pages.works.modernWalls.li2}</li>
                                <li>{strings.pages.works.modernWalls.li3}</li>
                                <li>{strings.pages.works.modernWalls.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.modernWalls.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.modernWalls.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const floorLaminate = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.floorLaminate.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/floorLaminate.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.floorLaminate.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.floorLaminate.li1}</li>
                                <li>{strings.pages.works.floorLaminate.li2}</li>
                                <li>{strings.pages.works.floorLaminate.li3}</li>
                                <li>{strings.pages.works.floorLaminate.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.floorLaminate.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.floorLaminate.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const painting = () => {
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.painting.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/paiting.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.painting.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.painting.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.painting.li1}</li>
                                <li>{strings.pages.works.painting.li2}</li>
                                <li>{strings.pages.works.painting.li3}</li>
                                <li>{strings.pages.works.painting.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.painting.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.painting.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const customVeranda = () =>{
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.customVeranda.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/veranda.jpeg' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.customVeranda.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.customVeranda.li1}</li>
                                <li>{strings.pages.works.customVeranda.li2}</li>
                                <li>{strings.pages.works.customVeranda.li3}</li>
                                <li>{strings.pages.works.customVeranda.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.customVeranda.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.customVeranda.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    const inovativeAdvices = () =>{
        return <>
        <section className="header">
                <div className="content">
                    <div className="header-content">
                        <span className="span-title">
                            {strings.pages.works.advices.pageTitle}
                        </span>
                    </div>
                </div>
                <div className="header-image">
                    <img className="image" src='/images/advice.png' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                        <h1>{strings.pages.works.advices.pageTitle2}</h1>
                        <p>
                            <span>
                                {strings.pages.works.advices.description1}
                            </span>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle3}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description2}
                            </span>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle4}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description3}
                            </span>
                        </p>
                        <p>
                            <ul>
                                <li>{strings.pages.works.advices.li1}</li>
                                <li>{strings.pages.works.advices.li2}</li>
                                <li>{strings.pages.works.advices.li3}</li>
                                <li>{strings.pages.works.advices.li4}</li>
                            </ul>
                        </p>
                        <h2>{strings.pages.works.advices.pageTitle5}</h2>
                        <p>
                            <span>
                                {strings.pages.works.advices.description4}
                            </span>
                        </p>

                    </div>
            </section>
        </>
    }

    return (
        <main id='main-item'>
            {pageState === 1 && renovation()}
            {pageState === 2 && plaster()}
            {pageState === 3 && customKitchen()}
            {pageState === 4 && interiorExterior()}
            {pageState === 5 && modernWalls()}
            {pageState === 6 && floorLaminate()}
            {pageState === 7 && painting()}
            {pageState === 8 && customVeranda()}
            {pageState === 9 && inovativeAdvices()}

        </main>
    )


}

export default SingleWork;