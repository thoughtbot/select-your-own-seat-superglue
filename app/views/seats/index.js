import React from 'react'
import SeatDialog from '../../components/SeatDialog'
import Cart from '../../components/Cart'
import SeatingMap from '../../components/SeatingMap'
import Layout from '../../components/Layout'

export default (props) => {
  const {
    venueName,
    sections,
    cart,
    seat,
  } = props

  return (
    <Layout {...props}>
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
            <SeatingMap sections={sections} />
          </div>
          <div className="syos-frame__sidebar">
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
