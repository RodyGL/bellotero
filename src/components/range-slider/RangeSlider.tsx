import clsx from 'clsx';
import React, { CSSProperties } from 'react';
import './RangeSlider.scss';

export type RangeSliderProps = JSX.IntrinsicElements['input'] & {
  min: number;
  max: number;
  value: number;
};

export function RangeSlider(props: RangeSliderProps) {
  const { className, style, min, max, value } = props;

  return (
    <input
      {...props}
      type="range"
      style={
        {
          ...style,
          '--range-percentage': `${(value - min) / ((max - min) / 100)}%`,
        } as CSSProperties
      }
      className={clsx(['range-slider', className])}
    />
  );
}
