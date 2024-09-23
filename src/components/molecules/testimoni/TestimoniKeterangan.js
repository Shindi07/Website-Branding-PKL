import React from 'react';

const TestimoniKeterangan = ({ nama, company }) => {
  return (
    <div className="testimoni-nama-company">
      <p className="nama">{nama}</p>
      <p className="company">{company}</p>
    </div>
  );
};

export default TestimoniKeterangan;
