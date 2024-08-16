import React from 'react';
import GdService from '../components/GdService';
import { useNavigate } from 'react-router-dom';

function GdServices() {
  const navigate = useNavigate();

  const gdServices = [
    {
      id: 1,
      name: "Business card design",
      imageId: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/268817152/original/9643187cf7068bec653cb87bef64ea5a75bfd47f/make-a-beautiful-business-card.png",
    },
    {
      id: 2,
      name: "Photoshop editing",
      imageId: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/272060309/original/7095970cee5731bed3c4df2cc78f84db91573dbe/make-for-realistic-image-editing.png",
    },
    {
      id: 3,
      name: "Flyer design",
      imageId: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270072321/original/542fdc6649c800ed3892e91a9dea9a81f6429567/create-any-kind-of-beautiful-flyers.png",
    },
    {
      id: 4,
      name: "Brochure design",
      imageId: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/271167869/original/3829380bcec55927de3b73d23b4c76bd6daa74ef/design-for-you-a-captivating-trifold-or-bifold-brochure.png",
    },
    {
      id: 5,
      name: "Banner design",
      imageId: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/270980186/original/22bfe4aea753c12ad73b78c635813a2efe89f8ea/create-any-type-of-attractive-banner.png",
    },
  ];

  const handleClick = (serviceName) => {
    // Handle navigation or any other action
    console.log(`Clicked on ${serviceName}`);
    // Example of navigation
    navigate(`/service-details/${serviceName.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <div>
    <div className="container py-4 bg-slate-50 rounded-2xl bg-opacity-90">
      <div className="row py-6">
        <h1 className='text-center'>Graphic Design Services</h1>
        {gdServices.map(service => (
          <div key={service.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <a href={service.projectUrl} target="_blank" rel="noopener noreferrer">
              <GdService 
                name={service.name} 
                imageId={service.imageId} 
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default GdServices;
