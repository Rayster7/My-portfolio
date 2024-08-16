import React from 'react';
import { useNavigate } from 'react-router-dom';
import Service from './Service';
import GdService from './GdService';
import WdService from './WdService';  // Import WdService
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  const navigate = useNavigate();

  const services = [
    { name: 'Web development', imageId: 'https://miro.medium.com/max/5120/1*l4xICbIIYlz1OTymWCoUTw.jpeg' },
    { name: 'Graphic design', imageId: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/276069766/original/da64a709783a7e0efdd6a763fd3f497945684851/do-all-works-related-to-graphic-design.png' },
  ];

  const handleWebDevelopmentClick = () => {
    navigate('/wd-services');  // Update navigation for Web Development
  };

  const handleGraphicDesignClick = () => {
    navigate('/gd-services');
  };

  return (
    <div className="container py-4">
      <div className="row py-6">
        <h1 className='text-center'>My Services</h1>
        {services.map((service, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-6 mb-4">
            {service.name === 'Web development' ? (
              <WdService
                name={service.name}
                imageId={service.imageId}
                onClick={handleWebDevelopmentClick} 
              />
            ) : service.name === 'Graphic design' ? (
              <GdService
                name={service.name}
                imageId={service.imageId}
                onClick={handleGraphicDesignClick}
              />
            ) : (
              <Service
                name={service.name}
                imageId={service.imageId}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
