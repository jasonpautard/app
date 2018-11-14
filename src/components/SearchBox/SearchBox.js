import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
      <div className='row justify-content-center py-5'>
        <div className='col-lg-4'>
          <input className='form-control' type='search' placeholder='Rechercher un élève' onChange={searchChange}/>
        </div>
      </div>
  );
}

export default SearchBox;
