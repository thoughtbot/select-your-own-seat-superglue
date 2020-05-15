import React from 'react'
import svgPanZoom from 'svg-pan-zoom'
const buildSectionElements = (sections) => {
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
          xlinkHref={seat.href}
          x={seat.x}
          y={seat.y}
        />
      </a>
    ))

    return (
      <g
        key={index}
        opacity={section.opacity}
        aria-hidden={section.hidden}
      >
        {seatElements}
      </g>
    )
  })
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.svgRef = React.createRef()
  }

  componentDidMount() {
    this.map = svgPanZoom(this.svgRef.current, {
      center: true,
      fit: true,
      zoomEnabled: false,
      zoomScaleSensitivity: 0.75,
      minZoom: 1.0,
      maxZoom: 8,
    })
  }

  componentWillUnmount() {
    this.map.destroy()
  }

  render() {
    const { sections } = this.props
    const sectionElements = buildSectionElements(sections)

    return(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="syos-seat-map"
        width="1600px"
        height="1600px"
        viewBox="0 0 1600 1600"
        ref={this.svgRef}
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

          <symbol
            id="seat-icon-selected"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle fill="#37b24d" r="12" cx="12" cy="12"></circle>
          </symbol>
        </svg>
        { sectionElements }
       </svg>
    )
  }
}
