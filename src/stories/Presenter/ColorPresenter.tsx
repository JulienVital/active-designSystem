import React from 'react';

export function ColorPresenter({ token }) {
  return (
    <div
      style={{
        width: '100%',
        height: '30px',
        background: token.rawValue
      }}
    ></div>
  );
}