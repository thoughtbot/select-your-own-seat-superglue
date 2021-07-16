import React from 'react'
import SVG from 'react-inlinesvg';
import closeSvg from '../../assets/images/icons/x-circle.svg'

export type CartItemProps = {
  id: number
  rowNumber: number
  price: string
}

export type CartProps = {
  cart: CartItemProps[]
}
export const Cart = (props: CartProps) => {
  const cartItems = props.cart.map(({rowNumber, price, id}) => (
    <tr key={id}>
      <td> {rowNumber} </td>
      <td className="syos-table__cell--numerals"> {price} </td>
      <td className="syos-u-text-align-right">
        <button className="syos-button syos-button--transparent">
          <SVG src={ closeSvg } className="syos-icon" title="Remove"/>
        </button>
      </td>
    </tr>
  ))

  return (
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
          { cartItems }
        </tbody>
      </table>
    </div>
  )
}

