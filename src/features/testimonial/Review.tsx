import React from 'react';
import { TestimonialState } from './testimonial-slice';

export interface ReviewProps {
  review: TestimonialState['reviews'][0];
}

export function Review(props: ReviewProps) {
  const { review } = props;

  return (
    <div className="flex h-[254px] mt-[80px] p-8 bg-white">
      <div className="flex flex-col flex-1">
        <h2 className="text-[32px] leading-[150%] font-medium">
          {review.name}
        </h2>
        <span className="text-[14px] text-greyish">{review.position}</span>
      </div>

      <div className="w-[565px] text-[24px] leading-[133%] font-medium">
        <p>{review.comment}</p>
      </div>
    </div>
  );
}
