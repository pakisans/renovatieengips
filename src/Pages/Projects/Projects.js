import React from "react";
import strings from "../../localization";
import './projects.scss';
import SimpleImageSlider from "react-simple-image-slider";
import { useMediaQuery } from 'react-responsive'

const Projects = () => {

    const images = [
        { url: "images/image.jpeg" },
        { url: "images/image2.jpeg" },
        { url: "images/image3.jpeg" },
        { url: "images/image4.jpeg" },
        { url: "images/image4.jpeg" },
        { url: "images/image4.jpeg" },
        { url: "images/image4.jpeg" },
    ];
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    
    return (
        <>
        <section className="header-projects">
            <div className="header-con-wraper">
                <div className="header-con">
                    <span className="page-title">
                        {strings.pages.projects.pageTitle}
                    </span>
                </div>
            </div>
        </section>
        <section className="section-wraper">
            {
                isDesktopOrLaptop && <div style={{marginLeft:'200px'}}>
                    <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={4}
                        autoPlay={true}
                        autoPlayDelay={true}
                    />
                </div>
            }
            {
                isTabletOrMobile && <div style={{marginLeft:'10px'}}>
                    <SimpleImageSlider
                        width={200}
                        height={200}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        slideDuration={4}
                        autoPlay={true}
                        autoPlayDelay={true}
                    />
                </div>
            }
            {/* <div className="gallery-box">
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
                <a>
                    <img src='images/image4.jpeg' />
                </a>
            </div> */}
        </section>
        </>
    )
}

export default Projects;