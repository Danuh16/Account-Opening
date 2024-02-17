import React from 'react';
import "./about.css";
import Header from '../Header';
import Footer from '../Footer';


export default function About() {
  return (
    <div  className='about'>
      <Header/>
      <div className="about-container1">
      <h1>About Amhara Bank</h1>
       <p>Amhara Bank aims to use the enabling conditions to provide an excellent service that appeals to the ever-diversifying and growing needs of customers that are demanding more from banks in the form of personalized and competitive banking services. 
        The Bank intends to provide a secure, responsive, dynamic, and conducive banking atmosphere to customers with a commitment to values and unshaken confidence, deploying the best technology, standards, processes, and procedures where customer convenience is our significant importance to increase the stakeholders' value. 
        The banking industry is considered as one of the most significant drivers in strengthening the soundness of an economy in terms of investment, job creation, facilitating the circulation of funds nationally and globally. Similarly, 
        Amhara Bank will play its part in facilitating savings, investment, job creation, economic growth, and is also enthusiastic in discharging its Corporate Social Responsibilities.</p>
      </div>
      <div className="about-container2">
      <h1>Ownership</h1>
      <p>Amhara Bank is a share company with more than 191,000 shareholders contributing birr 4.8 billion in paid-up capital and birr 7.9 billion in signed capital. 
        The bank’s ability to work together to develop a successful business venture and commercial bank service is reflected in its diversified ownership.</p>
      </div>
      <div className="about-container3">
       <h1>Our Mission</h1>
       <p style={{marginTop:'-3%'}}>To provide a wide-ranging, accessible, reliable and innovative financial and non financial solutions through state of the art technology by competent and ethical professionals in a socially responsible manner with a client oriented culture.</p>
       <h1 style={{marginTop:'-3%'}}>Our vision</h1>
       <p style={{marginTop:'-3%'}}>To be a leading and game changing bank in Africa.</p>
       </div>
       <div className="about-container4">
       <h1>Our Core Values</h1>
       <div className="about-containerI">
       <h2>Innovative and inclusive</h2>
       <p>We differentiate ourselves from the rest with our creative products and quality service.
         We are committed to offering smart products and services that will make our customer's lives better. 
         We are always on the lookout for better solutions that will meet the customer's needs. 
         We differentiate ourselves from the rest with our creative products and quality service.
         We always find ways to do things better and take on challenges and turn them into opportunities. 
         We demonstrate a 'can - do' attitude to provide banking services for untapped and excluded segments of the societies (inclusion).</p>
         </div>
         <div className="about-containerC" >
         <h2 > Community and Customer Focus</h2>
         <p>We relentlessly pursue customer excellence and consider our customers needs from their perspective and aim to exceed their expectations. We give back to the communities where we operate and are committed to making an impact in the communities where we live. We contribute to sustainable development by delivering economic, social, and environmental benefits. The Bank support progressive social change.</p>
         </div>
         <div className="about-containerR">
         <h2>Responsible and Respect</h2>
         <p>Amhara Bank is devoted to discharge its roles and responsibilities and respect with best efforts and capabilities through continually upgrading skills and knowledge, maintaining an effective system of communication and consultations, with a system of reward and recognition for outstanding performance. We demonstrate respect for the individual in dealing with customers, colleagues, and the larger community. We value trust and openness.</p>
         </div>
         <div className="about-containerA">
         <h2> Accountability and Accessibility</h2>
         <p>We are committed to ensuring accountability and transparency in our activities through good governance practices to meet the demands of stakeholders’ interests. We take ownership of the Business and treat it as if ours. We are true to our words; we do what we say everywhere and at any time. We take responsibility for our actions and their results. We can be reliedupon to keep and meet commitments. The bank maintains integrity in its actions and rational decision-making procedures and access to all stakeholders at the same quality and time.</p>
         </div>
         <div className="about-containerE">
         <h2>Efficiency and Effectiveness</h2>
         <p>We commit to what we can deliver, and we deliver on our commitments promptly. We find the simplest and most cost-effective way of performing tasks, every time and start with quality in mind to ensure superior execution. We strive to get it right, the first time and every time.</p>
         </div>
         </div>
      <Footer/>
    </div>
  )
}
