import React from 'react';

export interface PageProps {
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  return (
    <div>
      {props.children}
    </div>
  )
}

