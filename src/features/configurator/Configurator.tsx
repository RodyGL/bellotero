import { useDispatch, useSelector } from '@/redux/store';
import { isStatusIn } from '@/utils';
import React, { useEffect } from 'react';
import { Calculator } from './Calculator';
import { fetchCalculator } from './calculator-slice';

export function Configurator() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.calculator.status);
  const title = useSelector((state) => state.calculator.title);
  const description = useSelector((state) => state.calculator.description);

  useEffect(() => {
    dispatch(fetchCalculator());
  }, [dispatch]);

  if (isStatusIn(status, ['idle', 'loading'])) {
    return null;
  }

  return (
    <section className="flex pb-[228px]">
      <article className="flex flex-col flex-1 mt-[120px]">
        <header className="flex flex-col text-white">
          <div className="flex">
            <span className="text-[36px] font-black leading-[111%] tracking-[0.77px] bg-cobalt-blue px-1 py-2">
              {title.split(' ').slice(0, -1).join(' ')}
            </span>
          </div>

          <div className="flex mt-1">
            <span className="text-[36px] font-black leading-[111%] tracking-[0.77px] bg-cobalt-blue px-1 py-2">
              {title.split(' ').pop()}
            </span>
          </div>
        </header>

        <p className="max-w-[349px] text-[16px] leading-[150%] mt-8">
          {description}
        </p>
      </article>

      <Calculator />
    </section>
  );
}
