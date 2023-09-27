import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div className="syos-frame__legend" aria-hidden="true">
        <p className="syos-u-margin-bottom-3 syos-u-font-weight-bold">
        Legend
        </p>

        <ul className="syos-block-stack">
          <li className="syos-block-stack__item">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <use
                width="16px"
                height="16px"
                xlinkHref="#seat-icon-unselected"
              >
              </use>
            </svg>

              Available
          </li>

          <li className="syos-block-stack__item">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <use
                width="16px"
                height="16px"
                xlinkHref="#seat-icon-selected"
              >
              </use>
            </svg>

              Selected
          </li>
        </ul>
      </div>
    )
  }
}
