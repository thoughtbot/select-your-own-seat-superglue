import React from 'react'
import { Layout } from '@javascript/components/Layout'
import { Cart, CartItemProps } from '@javascript/components/Cart'
import { SeatFilter, SeatFilterProps } from '@javascript/components/SeatFilter'
import { SeatDialog, SeatDialogProps } from '@javascript/components/SeatDialog'
import { useContent } from '@thoughtbot/superglue'
import { SeatingMap, Section } from '@javascript/components/SeatingMap'
import { SeatingLegend } from '@javascript/components/SeatingLegend'
import { FloorSwitcher, FloorProps } from '@javascript/components/FloorSwitcher'

type ContentProps = {
  venueName: string
  sections:  Section[]
  seat: SeatDialogProps
  cart: CartItemProps[]
  floors: FloorProps[]
  filters: {
    filterForm: SeatFilterProps
  }
}

export default () => {
  const { 
    sections,
    cart,
    seat,
    floors,
    filters
  } = useContent<ContentProps>()

  return (
    <Layout>
      <SeatDialog {...seat} />
      <header className="syos-site-frame__header syos-site-header">
        <p className="syos-site-header__subtext">
          Venue Name
        </p>
      </header>

      <main className="syos-site-frame__main">
        <section className="syos-frame">
          <div className="syos-frame__map">
            <FloorSwitcher floors={floors}/>
            <SeatingMap sections={sections}/>
            <SeatingLegend/>
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
