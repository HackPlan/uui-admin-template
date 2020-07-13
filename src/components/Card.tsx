import React from 'react';

export interface CardProps {
  children: React.ReactNode;
}

export function Card(props: CardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-4">
      {props.children}
    </div>
  )
}

