import React from 'react';
import styled from 'styled-components';

const WdServiceContainer = styled.div`
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
    transform: scale(1.03);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const WdServiceImage = styled.img`
  width: 100%;
  height: 310px;
  border-radius: 4px;
  object-fit: cover;
`;

const WdServiceName = styled.h2`
  margin-top: 1rem;
  font-weight: bold;
  color: #333;
`;

function WdService({ name, imageId, onClick }) {
  return (
    <WdServiceContainer onClick={onClick} className="bg-light">
      <WdServiceImage src={imageId} alt={name} />
      <WdServiceName>{name}</WdServiceName>
    </WdServiceContainer>
  );
}

export default WdService;
