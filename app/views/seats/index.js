import React from 'react'
import { useDispatch } from 'react-redux'
import SeatDialog from '../../components/SeatDialog'
import SeatFilter from '../../components/SeatFilter'
import Cart from '../../components/Cart'
import SeatingMap from '../../components/SeatingMap'
import SeatingLegend from '../../components/SeatingLegend'
import FloorSwitcher from '../../components/FloorSwitcher'
import Layout from '../../components/Layout'
import { pagesSlice } from '../../javascript/slices/pages'

const { setMaximum } = pagesSlice.actions

export default (props) => {
  const {
    venueName,
    sections,
    cart,
    seatingMap,
    seat,
    floors,
    filters,
    pageKey,
  } = props

  const dispatch = useDispatch()

  const handleFilter = (event, maximum) => {
    dispatch(setMaximum({pageKey, maximum}))
    event.stopPropagation()
  }

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
            <FloorSwitcher floors={floors}/>
            <SeatingLegend />
            <SeatingMap {...seatingMap} />
          </div>
          <div className="syos-frame__sidebar">
            <SeatFilter {...filters} onFilter={handleFilter}/>
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
