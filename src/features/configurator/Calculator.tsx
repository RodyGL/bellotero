import { RangeSlider } from '@/components/range-slider/RangeSlider';
import React, { useState } from 'react';

export function Calculator() {
  const [spending, setSpending] = useState(10);
  const [employees, setEmployees] = useState(1);

  const estimatedFoodCostSaving = spending * 0.3;
  const estimatedAnnualSavings = employees * 1337 + estimatedFoodCostSaving;

  return (
    <article className="flex flex-col w-[535px] mt-[124px]">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="text-[14px] leading-tight font-black">
            Monthly
            <br />
            ingredient spending
          </p>

          <div className="flex items-center relative">
            <span className="absolute left-3 text-[24px] font-medium leading-[167%] tracking-[0.51px] text-greyish">
              $
            </span>

            <input
              className="w-[190px] h-[52px] py-1.5 pr-3 pl-9 rounded border-solid border border-pale-lilac focus:outline-none text-right text-[36px] font-medium leading-[111%] tracking-[0.77px]"
              type="text"
              value={spending}
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-col mt-[22px]">
          <RangeSlider
            min={10}
            max={100}
            step={1}
            value={spending}
            onChange={(e) => setSpending(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="flex flex-col mt-[46px]">
        <div className="flex justify-between">
          <p className="leading-tight text-[14px] font-black">
            Full-time employees that
            <br />
            process invoices
          </p>

          <input
            className="w-[67px] h-[52px] py-1.5 px-3 rounded border-solid border border-pale-lilac focus:outline-none text-right text-[36px] font-medium leading-[111%] tracking-[0.77px]"
            type="text"
            value={employees}
            readOnly
          />
        </div>

        <div className="flex flex-col mt-[22px]">
          <RangeSlider
            min={1}
            max={10}
            step={1}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="flex justify-between mt-[86px]">
        <div className="flex flex-col mr-[56px]">
          <div className="text-cobalt-blue">
            <span className="text-[36px] font-medium leading-[111%] tracking-[0.77px] mr-2">
              $
            </span>
            <span className="text-[72px] font-medium leading-none tracking-[1px] text-right">
              {estimatedFoodCostSaving.toFixed(2)}
            </span>
          </div>

          <p className="text-right text-[14px] font-black leading-tight">
            Estimated cost food savings
          </p>
        </div>

        <div className="flex flex-col">
          <div className="text-cobalt-blue">
            <span className="text-[36px] font-medium leading-[111%] tracking-[0.77px] mr-2">
              $
            </span>
            <span className="text-[72px] font-medium leading-none tracking-[1px] text-right">
              {estimatedAnnualSavings.toFixed(2)}
            </span>
          </div>

          <p className="text-right text-[14px] font-black leading-tight">
            Your estimated annual savings
          </p>
        </div>
      </div>
    </article>
  );
}
