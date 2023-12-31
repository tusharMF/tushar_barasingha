import React, { useState } from 'react';
import './career_WhyHow.scss';
import arrow from "../../../../media/arrow.svg";
import profile from "../../../../media/profile.svg";
import computer from "../../../../media/computer.svg";
import analysis from "../../../../media/analysis.svg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ContactUsModal from 'components/pages/Forms/ContactUs';

function WhyHow() {

   function getCurrentDimension() {
      if (window.innerWidth < 768) {
         return true;
      }
      return false;
   }

   const[showContactUsModal, setShowContactUsModal] =useState(false);

   const closeContactUsModal = () => setShowContactUsModal(false);

   return (
      <section className='why-barasingha-wrapper'>
         <div className="component-container">
            <div className="title-wrapper">
               <h6 className="heading heading--fancy text-center">WHY & HOW</h6>
               <h2 className="heading heading--two text-center my-2">Why Choose Barasingha?</h2>
               <p className="para para--lg opacity-50 text-center">Discover the benefits of partnering with NPAV for your cyber security needs.</p>
            </div>
            {!getCurrentDimension()?<div className="benefits-container">
               <div className="benefits">
                  <div className="benefits-card">
                     <img src={profile} alt="profile" title="profile"></img>
                     <h3 className="heading heading--three">Expertise</h3>
                     <p className="para para--light desc">Our team of cyber security experts are dedicated to protecting construction companies against evolving threats.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Experience </span>
                        <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
               <div className="benefits">
                  <div className="benefits-card">
                     <img src={computer} alt="computer" title="computer"></img>
                     <h3 className="heading heading--three">Easy Customization</h3>
                     <p className="para para--light">We understand the unique challenges faced by construction firms and tailor our solutions accordingly.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Know More</span> <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
               <div className="benefits">
                  <div className="benefits-card">
                     <img src={analysis} alt="analysis" title="analysis"></img>
                     <h3 className="heading heading--three">24/7 Support</h3>
                     <p className="para para--light">WOur support team is available round the clock to assist you with any queries or issues.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Get Assistance </span>
                        <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
            </div>:
            <div className="benefits-container">
               <OwlCarousel
                  items={1}
                  className="owl-theme"
                  loop={true}
                  nav={false}
                  dots={true}
                  margin={10} >
                  <div className="benefits">
                  <div className="benefits-card">
                     <img src={profile} alt="profile" title="profile"></img>
                     <h3 className="heading heading--three">Expertise</h3>
                     <p className="para para--light desc">Our team of cyber security experts are dedicated to protecting construction companies against evolving threats.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Experience </span>
                        <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
               <div className="benefits">
                  <div className="benefits-card">
                     <img src={computer} alt="computer" title="computer"></img>
                     <h3 className="heading heading--three">Easy Customization</h3>
                     <p className="para para--light">We understand the unique challenges faced by construction firms and tailor our solutions accordingly.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Know More</span> <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
               <div className="benefits">
                  <div className="benefits-card">
                     <img src={analysis} alt="analysis" title="analysis"></img>
                     <h3 className="heading heading--three">24/7 Support</h3>
                     <p className="para para--light">WOur support team is available round the clock to assist you with any queries or issues.</p>
                     <div className="link" onClick={() => setShowContactUsModal(true)}>
                        <span>Get Assistance </span>
                        <img className="arrow" src={arrow} alt="arrow" title="arrow" />
                     </div>
                  </div>
               </div>
               </OwlCarousel>
            </div>}
         </div>
         {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal}/>}
      </section>
   );
}

export default WhyHow;