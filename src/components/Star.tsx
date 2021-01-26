import React from 'react';

export type StarProps = {
  selected: boolean;
}

const Star = ({ selected }:StarProps) => {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill={selected ? "#F25D27": 'none' } xmlns="http://www.w3.org/2000/svg">
    <path d="M9.33333 1L11.9083 6.21667L17.6667 7.05834L13.5 11.1167L14.4833 16.85L9.33333 14.1417L4.18333 16.85L5.16667 11.1167L1 7.05834L6.75833 6.21667L9.33333 1Z" stroke="#F25D27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Star;
