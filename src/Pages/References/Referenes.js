import React from "react";
import strings from "../../localization";
import './about-us.scss';

const References = () => {
    return (
        <main id="about-us">
            <section className="header">

                <div className="header-image">
                    <img className="image" src='images/logo.png' />
                </div>
            </section>
            <section className="content-section">
                <div className="content-section-wraper">
                    <h1>{strings.pages.aboutUs.pageTitle}</h1>
                    <h2>{strings.pages.aboutUs.pageTitle2}</h2>
                    <p>
                        <span>
                            {strings.pages.aboutUs.description}
                        </span>
                    </p>
                    <h2>{strings.pages.aboutUs.pageTitle3}</h2>
                    <p>
                        <span>
                            {strings.pages.aboutUs.description2}
                        </span>
                    </p>
                    <h2>{strings.pages.aboutUs.pageTitle4}</h2>
                    <p>
                        <span>
                            {strings.pages.aboutUs.description3}
                        </span>
                    </p>
                    <h2>{strings.pages.aboutUs.pageTitle5}</h2>
                    <p>
                        <span>
                            {strings.pages.aboutUs.description4}
                        </span>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default References;