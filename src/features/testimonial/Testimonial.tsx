import { useDispatch, useSelector } from '@/redux/store';
import { isStatusIn } from '@/utils';
import React, { useEffect, useState } from 'react';
import { Review } from './Review';
import { fetchTestimonials } from './testimonial-slice';

export function Testimonial() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.testimonial.status);
  const title = useSelector((state) => state.testimonial.title);
  const reviews = useSelector((state) => state.testimonial.reviews);
  const [reviewIndex, setReviewIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  if (isStatusIn(status, ['idle', 'loading'])) {
    return null;
  }

  return (
    <section className="flex flex-col pb-[198px]">
      <header className="max-w-[389px] h-[56px] mt-[184px] py-2 px-1 bg-cobalt-blue">
        <h1 className="text-[36px] leading-[111%] tracking-[0.77px] text-white font-black">
          {title}
        </h1>
      </header>

      <article className="flex flex-col max-w-[1002px]">
        <Review review={reviews[reviewIndex]} />

        <div className="flex justify-end text-white">
          <div className="flex items-center bg-cobalt-blue h-[56px] mr-[-78px] mt-[-28px]">
            <div className="flex w-[120px] pt-2 pb-4">
              <span className="flex-1 text-center font-serif text-[32px] font-semibold italic tracking-[0.69px]">
                {`${reviewIndex + 1}/${reviews.length}`}
              </span>
            </div>

            <hr className="w-[1px] h-auto self-stretch bg-white" />

            <div className="flex self-stretch w-[112px]">
              <button
                type="button"
                className="flex-1 text-center focus:outline-none"
                onClick={() =>
                  setReviewIndex((prevIndex) =>
                    prevIndex > 0 ? prevIndex - 1 : 0
                  )
                }
              >
                ←
              </button>
              <button
                type="button"
                className="flex-1 text-center focus:outline-none"
                onClick={() =>
                  setReviewIndex((prevIndex) =>
                    prevIndex < reviews.length - 1
                      ? prevIndex + 1
                      : reviews.length - 1
                  )
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
