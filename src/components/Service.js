import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #333333;
  background-color: #1f2937;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  overflow: hidden;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  transition: background-color 0.3s ease;
  width: 300px;
  height: 400px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #374151; /* Slightly lighter on hover */
  }
`;

const ServiceImage = styled.img`
  width: 50%;
  height: 50%; 
  border-radius: 5%;
  object-fit: cover;
`;

const ServiceName = styled.h2`
  font-weight: bold;
  color: #E6E5E5;
  margin: 0.5rem 0;
`;

function Service({ name, imageId, onClick }) {
  return (
    <ServiceContainer  onClick={onClick}>
      <ServiceName>{name}</ServiceName>
      <ServiceImage src={imageId} alt={name} />
    </ServiceContainer>
  );
}

export default Service;
