import React from 'react';
import TestimoniKeterangan from './TestimoniKeterangan';
import Avatar from "../../atoms/testimoni/Avatar";
import Star from "../../atoms/testimoni/StarRating";


const TestimoniFooter = ({ avatarSrc, avatarAlt, nama, company }) => {
  return (
    <div className="testimoni-footer">
      <Avatar src={avatarSrc} alt={avatarAlt} />
      <div className="testimoni-keterangan">
        <div className="testimoni-start">
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
          <Star src="/img/testimoni/Star.png" alt="Star" />
        </div>
        <TestimoniKeterangan nama={nama} company={company} />
      </div>
    </div>
  );
};

export default TestimoniFooter;
