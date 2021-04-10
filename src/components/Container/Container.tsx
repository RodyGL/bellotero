import React from 'react';

export interface ContainerProps {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <main className="flex flex-col w-full pl-[172px] pr-[188px] overflow-y-auto">
      {children}
    </main>
  );
}
