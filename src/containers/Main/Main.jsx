import React from 'react';
import "./Main.style.scss"
import Card from '../../components/Card/Card'
import IconBrand from "../../assets/icon-brand-recognition.svg"
import IconRecords from "../../assets/icon-detailed-records.svg"
import IconCustomize from "../../assets/icon-fully-customizable.svg"
import CustomButton from '../../components/CustomButton/CustomButton';
import Form from "../../components/Form/Form"

const Main = ({
    children, 
    handleSetUrl, 
    urlText, 
    handleGetUrl,
    error
  }) => {

  return (
    <main className="main">
      <div className="main-container">
        <Form
          urlText={urlText}
          handleSetUrl={handleSetUrl}
          handleGetUrl={handleGetUrl}
          error={error}
        />
        <section className="links-section">
          {children}
        </section>
        <section className="statics-section">
          <h2 className="statics-title">Advanced Statistics</h2>
          <p className="statics-text">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
          <div className="statics-wrapper">
            <hr className="statics-line"/>
            <div className="statics-container">
              <Card title="Brand Recognition" icon={IconBrand}>
                Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.
              </Card>
              <Card title="Detailed Records" icon={IconRecords}>
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
              </Card>
              <Card title="Fully Customizable" icon={IconCustomize}>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </Card>
            </div>
          </div>
        </section>
      </div>
      <section className="bottom-section">
        <h2 className="bottom-title">Boost your links today</h2>
        <CustomButton rounded>Get Started</CustomButton>
      </section>
    </main>
  )
};

export default Main;
