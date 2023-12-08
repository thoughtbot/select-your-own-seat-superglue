import React from 'react'
import SeatDialog from '../../components/SeatDialog'
import SeatFilter from '../../components/SeatFilter'
import Cart from '../../components/Cart'
import SeatingMap from '../../components/SeatingMap'
import SeatingLegend from '../../components/SeatingLegend'
import FloorSwitcher from '../../components/FloorSwitcher'
import Layout from '../../components/Layout'

export default (props) => {
  const {
    venueName,
    sections,
    cart,
    seatingMap,
    seat,
    floors,
    filters,
  } = props

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
            <FloorSwitcher floors={floors}/>
            <SeatingLegend />
            <SeatingMap {...seatingMap} />
          </div>
          <div className="syos-frame__sidebar">
            <SeatFilter {...filters} />
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
