import React from "react";
import './Footer.css'

function Footer () {
    return(
        <section className="footer">
            <hr className="footer-seperator"/>
            <section className="footer-social-media">
                <a href="/" targer="_blank" rel="noopener noreferrer">Instagram</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    Software Engineer
                </section>
                <section className="footer-info-center">
                    Return Policy
                    <section className="footer-info__email">
                        shopinfo@gmail.com
                    </section>
                    <section className="footer-info__terms">
                        Terms & Condition
                        <br></br>
                        Copyright
                    </section>
                </section>
                <section className="footer-info-right">
                    Delivery
                    <section className="footer-info__number">
                        19052759
                    </section>
                    <section className="footer-info__contact">
                        My Story 
                        <br></br>
                        Contact us
                    </section>
                </section>
            </section>
            <hr className="footer-seperator"/>
        </section>
    )
}
export default Footer;