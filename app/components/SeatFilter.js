import React from 'react'
import SVG from 'react-inlinesvg';
import uncheckedSvg from '../assets/images/icons/circle.svg'
import checkedSvg from '../assets/images/icons/check-circle.svg'

const MaxRadioButton = (props) => {
  const { label, onFilter, ...rest} = props
  const ref = React.createRef()

  return (
    <>
      <input
        {...rest}
        className="syos-tile-controls__input"
        ref={ref}
        onChange={(event) => onFilter(event, Number(ref.current.value))}
      />
      <label className="syos-tile-controls__control" htmlFor={rest.id}>
        <SVG src={ uncheckedSvg } className="syos-icon syos-tile-controls__icon syos-tile-controls__icon--unselected" aria-hidden={true}/>
        <SVG src={ checkedSvg } className="syos-icon syos-tile-controls__icon syos-tile-controls__icon--selected" aria-hidden={true}/>
        { label }
      </label>
    </>
  )
}

export default class extends React.Component {
  render () {
    const {
      filterForm,
      onFilter,
    } = this.props

    const controlElements = Object
      .values(filterForm.inputs)
      .map((inputProps) => <MaxRadioButton {...inputProps} onFilter={onFilter} key={inputProps.id} />);

    return (
      <form {...filterForm.props}>
        <fieldset className="syos-u-margin-bottom-6">
          <legend className="syos-u-margin-bottom-2 syos-inline-stack">
            <h2 className="syos-inline-stack__item">
              Filter by max price
            </h2>

            <input className="syos-button syos-button--transparent" type="reset" value="Clear Filters" />
          </legend>

          <div className="syos-tile-controls">
            {controlElements}
          </div>

          <input type="submit" className="syos-button syos-u-margin-top-2" value="Apply Filters" />
        </fieldset>
      </form>
    )
  }
}
