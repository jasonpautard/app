import React from 'react';

const Card = ({ firstName, surname, email, id}) => {
  return (
  <div className='col-xs-6 col-sm-4 col-lg-3 mb-5'>
  <div className='card grow'>
    <img className='card-img-top' alt='eleves' src={`https://robohash.org/${id}?set=set4`} />
    <div className='card-body text-center'>
      <h5 className='card-title'>{firstName} {surname}</h5>
      <p className='card-title text-primary'>{email}</p>
    </div>
  </div>
  </div>
  );
}

export default Card;
