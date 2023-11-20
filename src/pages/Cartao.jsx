import React from 'react';

const Cartao = ({ name, position, bio, imageUrl }) => {
  return (
    <div className="member-card">
      <img src={imageUrl} alt={`Image of ${name}`} className="member-image" />
      <div className="member-info">
        <h2 className="member-name">{name}</h2>
        <h3 className="member-position">{position}</h3>
        <p className="member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default Cartao;