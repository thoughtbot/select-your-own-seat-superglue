import React from 'react'
import { Layout } from '@javascript/components/Layout'
import { Cart, CartItemProps } from '@javascript/components/Cart'
import { SeatDialog, SeatDialogProps } from '@javascript/components/SeatDialog'
import { useContent } from '@thoughtbot/superglue'

type Seat = {
  x: number
  y: number
  ariaLabel: string
  venueFloorSeatPath: string
  show: true
}

type Section = {
  seats: Seat[]
}
type ContentProps = {
  venueName: string
  sections:  Section[]
  seat: SeatDialogProps
  cart: CartItemProps[]
}

const buildSectionElements = (sections: Section[]) => {
  return sections.map((section, index) => {
    const seatElements = section.seats.map((seat) => (
      <a
        href={seat.venueFloorSeatPath}
        aria-label={seat.ariaLabel}
        key={seat.venueFloorSeatPath}
       >
        <use
          width="12px"
          height="12px"
          xlinkHref="#seat-icon-unselected"
          x={seat.x}
          y={seat.y}
        />
      </a>
    ))
    return <g key={index}>{seatElements}</g>
  })
}

export default () => {
  const { 
    sections,
    cart,
    seat
  }  = useContent<ContentProps>()
  const sectionElements = buildSectionElements(sections)

  return (
    <Layout>
      <SeatDialog {...seat} />
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
              <svg style={{display: "none"}}>
                <symbol
                  id="seat-icon-unselected"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
                  <circle fill="#ffffff" r="6" cx="12" cy="12"></circle>
                </symbol>
              </svg>
              { sectionElements }
            </svg>
          </div>

          <div className="syos-frame__sidebar">
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
