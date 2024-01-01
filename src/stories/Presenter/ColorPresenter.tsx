import React from 'react'

export function ColorPresenter({ token }) {
  return (
// @ts-ignore
    <div
      style={{
        width: '100%',
        height: '30px',
        background: token.rawValue
      }}
    ></div>
  )
}
