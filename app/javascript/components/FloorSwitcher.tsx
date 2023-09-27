import React from 'react'

export type FloorProps = {
  path: string
  name: string
  className: string
}

export const FloorSwitcher = (props: {floors: FloorProps[]}) => {
  const {
    floors,
  } = props

  return (
    <nav className="syos-frame__floor-nav syos-floor-nav">
      <div className="syos-floor-nav__header">
        <p className="syos-u-margin-bottom-3 syos-u-font-weight-bold">
          Floors
        </p>
      </div>

      <div className="syos-floor-nav__diagram-wrapper">
        <ul className="syos-block-stack">
          {
            floors.map(({path, name, className}) => (
              <li className="syos-block-stack__item" key={path}>
                <a href={path} className={className}>{name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  )
}
