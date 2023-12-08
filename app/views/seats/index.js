import React from 'react'
import Layout from '../../components/Layout'
import SeatDialog from '../../components/SeatDialog'

const buildSectionElements = (sections) => {
  return sections.map((section, index) => {
    const seatElements = section.seats.map((seat) => (
      <a
        href={seat.venueFloorSeatPath}
        aria-label={seat.ariaLabel}
        key={seat.venueFloorSeatPath}
       >
        <svg width="12px" height="12px" viewBox="0 0 24 24" x={seat.x} y={seat.y}>
          <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
          <circle fill="#ffffff" r="6" cx="12" cy="12"></circle>
        </svg>
      </a>
    ))

    return <g key={index}>{seatElements}</g>
  })
}

export default (props) => {
  const {
    venueName,
    sections,
    seat
  } = props

  const sectionElements = buildSectionElements(sections)

  return (
    <Layout {...props}>
      {seat && <SeatDialog {...seat} />}
      <header className="syos-site-frame__header syos-site-header">
        <p className="syos-site-header__subtext">
          Venue Name
        </p>
      </header>

      <main className="syos-site-frame__main">
        <section
          className="syos-frame"
        >
          <div className="syos-frame__map">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="syos-seat-map"
              width="1600px"
              height="1600px"
              viewBox="0 0 1600 1600"
            >
              <rect fill="none" x="0" y="0" width="1600" height="1600"></rect>
              { sectionElements }
            </svg>
          </div>

          <div className="syos-frame__sidebar">
            <div id="cart-summary">
              <h2 className="syos-u-margin-bottom-2">
                Your seat selections
              </h2>

              <p className="syos-u-font-size-small syos-u-margin-bottom-2">
                Seats are not reserved until added to the cart.
              </p>

              <table className="syos-table">
                <thead>
                  <tr>
                    <th>
                      Seat
                    </th>

                    <th className="syos-table__cell--numerals">
                     Price
                    </th>

                    <th className="visually-hidden">
                      Remove
                    </th>
                  </tr>
                </thead>

                <tbody>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
