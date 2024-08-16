import React from 'react';
import styled from 'styled-components';

const GdServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 380px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const GdServiceImage = styled.img`
  width: 100%; 
  height: 260px;
  border-radius: 4px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const GdServiceName = styled.h2`
  margin-top: 1rem;
  font-weight: bold;
  color: #333;
  text-align: center; /* Center-align text */
`;

const GdServiceDescription = styled.p`
  margin-top: 0.5rem;
  color: #666;
  text-align: center;
  font-size: 0.9rem;
`;

function GdService({ name, imageId, onClick, description }) {
  return (
      <GdServiceContainer onClick={onClick} className="bg-light">
        <GdServiceImage src={imageId} alt={name} />
        <GdServiceName>{name}</GdServiceName>
        {description && <GdServiceDescription>{description}</GdServiceDescription>}
      </GdServiceContainer>
  );
}

export default GdService;
