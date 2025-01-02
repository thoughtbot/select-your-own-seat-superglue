import React from 'react'
import { Layout } from '@javascript/components/Layout'
import { Cart, CartItemProps } from '@javascript/components/Cart'
import { SeatDialog, SeatDialogProps } from '@javascript/components/SeatDialog'
import { useContent } from '@thoughtbot/superglue'
import { SeatingMap, Section } from '@javascript/components/SeatingMap'

type ContentProps = {
  venueName: string
  sections:  Section[]
  seat: SeatDialogProps
  cart: CartItemProps[]
}

export default () => {
  const { 
    sections,
    cart,
    seat
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
            <SeatingMap sections={sections}/>
          </div>
          <div className="syos-frame__sidebar">
            <Cart cart={cart} />
          </div>
        </section>
      </main>
    </Layout>
  )
}
