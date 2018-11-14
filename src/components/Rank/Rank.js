import React from 'react';

const Rank = ({ username }) => {
  return (
    <div>
      <div className='text-center h1 pt-5'>
        {`Bienvenue ${username}`}
      </div>
    </div>
  );
}

export default Rank;
