import React, { useState } from 'react';
import GdService from '../components/GdService';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseSlideshow = () => {
    setSelectedService(null);
  };

  return (
    <div>
      <div className="container py-4 bg-slate-50 rounded-2xl bg-opacity-90">
        <div className="row py-6">
          <h1 className="text-center text-3xl font-bold mb-6">Graphic Design Services</h1>
          {gdServices.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <button
                onClick={() => handleServiceClick(service)}
                className="block relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition focus:outline-none transform hover:scale-105"
              >
                <GdService 
                  name={service.name} 
                  imageId={service.imageId} 
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Slideshow Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={handleCloseSlideshow}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold mb-4 text-center">{selectedService.name}</h2>
              <img
                src={selectedService.imageId}
                alt={selectedService.name}
                className="w-full rounded-lg"
              />
              <p className="text-center mt-4 text-gray-700">
                Explore more about <span className="font-semibold">{selectedService.name}</span>!
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GdServices;
