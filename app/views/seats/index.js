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
import { urlToPageKey } from '@thoughtbot/superglue'

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
    copyPage,
    navigateTo,
  } = props

  const dispatch = useDispatch()

  const handleFilter = (event, maximum) => {
    event.stopPropagation()
    const nextUrl = new URL(document.location)

    if (maximum !== Infinity) {
      nextUrl.searchParams.set("maximum", maximum)
      const nextPageKey = urlToPageKey(nextUrl.href)
      copyPage({from: pageKey, to: nextUrl.href})
      dispatch(setMaximum({pageKey: nextPageKey, maximum}))

      navigateTo(nextUrl.href)
    } else {
      nextUrl.searchParams.delete("maximum")
      navigateTo(pageKey, {
        action: 'replace'
      })
    }
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
