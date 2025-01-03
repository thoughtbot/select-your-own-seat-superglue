import React, { useState } from 'react'
import { Layout } from '@javascript/components/Layout'
import { Cart, CartItemProps } from '@javascript/components/Cart'
import { SeatFilter, SeatFilterFormProps } from '@javascript/components/SeatFilter'
import { SeatDialog, SeatDialogProps } from '@javascript/components/SeatDialog'
import { useContent } from '@thoughtbot/superglue'
import { SeatingMap, SeatingMapContentProps } from '@javascript/components/SeatingMap'
import { SeatingLegend } from '@javascript/components/SeatingLegend'
import { FloorSwitcher, FloorProps } from '@javascript/components/FloorSwitcher'

type ContentProps = {
  venueName: string
  seatingMap: SeatingMapContentProps
  seat: SeatDialogProps
  cart: CartItemProps[]
  floors: FloorProps[]
  filters: {
    filterForm: SeatFilterFormProps
  }
}

export default () => {
  const { 
    seatingMap,
    cart,
    seat,
    floors,
    filters
  } = useContent<ContentProps>()

  const [maximum, setMaximum] = useState(seatingMap.maximum)

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>, max: number) => {
    setMaximum(max)
    event.preventDefault()
  }

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
            <SeatingMap {...seatingMap} maximum={maximum}/>
            <SeatingLegend/>
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
