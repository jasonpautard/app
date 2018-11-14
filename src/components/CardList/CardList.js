import React from 'react';
import Card from '../Card/Card';

const ListStudent = ({ eleve }) => {
  return (
  <div className='row justify-content-center pb-5'>
  {
    eleve.map((user, i) => {
      return (
        <Card firstName={eleve[i].firstName} surname={eleve[i].surname} email={eleve[i].email} id={eleve[i].id} />
      );
    })
  }
  </div>
);
}

export default ListStudent;
