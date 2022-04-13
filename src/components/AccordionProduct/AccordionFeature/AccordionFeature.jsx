import React from 'react'
import FeatureImg from '../../../assets/imgs/76240_Hero1_Standard_Large.webp';
import FeatureImg2 from '../../../assets/imgs/76240_Hero2_Standard_Large.webp';


function AccordionFeature() {
  return (
    <>
        <div className="accordion-feature-container">
          <div className="accordion-feature-header">
            <img src={FeatureImg} alt="" />
          </div>
          <div className="accordion-feature-content">
            <div className="accordion-feature-content-text">
              <h2>Authentically detailed replice</h2>
              <p>The impressive model captures the iconic style of the battle-ready , crime-fighting machine from the dark Knight.</p>
            </div>
            <div className="accordion-feature-content-img">
              <img src={FeatureImg2} alt="" />
            </div>
          </div>

        </div>
    </>
  )
}

export default AccordionFeature