import React, { useEffect, useState, useRef } from "react"
import svgPanZoom from 'svg-pan-zoom'
import { SvgZoomControls } from "./SvgZoomControls"
import SVG from 'react-inlinesvg';
import loadingSvg from '../../assets/images/icons/loader.svg'
import { useAppSelector } from "@javascript/store";

export type Seat = {
  x: number
  y: number
  ariaLabel: string
  venueFloorSeatPath: string
  show: true
  href: string
}

export type Section = {
  opacity: string
  price: number
  hidden: boolean
  seats: Seat[]
}

const buildSectionElements = (sections: Section[]) => {
  return sections.map((section, index) => {
    const seatElements = section.seats.map((seat) => (
      <a
        href={seat.venueFloorSeatPath}
        aria-label={seat.ariaLabel}
        key={seat.venueFloorSeatPath}
        data-sg-visit
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

export type SeatingMapContentProps = { 
  sections: Section[], 
  floor: string, 
}

export type SeatingMapProps = SeatingMapContentProps & { 
  maximum: number
}

const filterSectionsByMax = (sections: Section[], maximum: number) => {
  return sections.map((section) => {
    const {opacity, hidden} = section
    let nextOpacity, nextHidden;

    if((maximum || Infinity)>= section.price) {
      nextOpacity = '1.0'
      nextHidden = false
    } else {
      nextOpacity = '0.3'
      nextHidden = true
    }

   if (opacity === nextOpacity && hidden === nextHidden) {
      return section
    } else  {
      return {...section, hidden: nextHidden, opacity: nextOpacity}
    }
  })
}

export const SeatingMap = ({ sections, floor, maximum }: SeatingMapProps) => {
  const sectionElements = buildSectionElements(filterSectionsByMax(sections, maximum))
  const svgRef = useRef<SVGSVGElement>(null)
  const [map, setMap] = useState<SvgPanZoom.Instance | null>(null)
  const { isLoading } = useAppSelector((state) => state.loading)
  const loadingClass = isLoading && 'is-loading'

  useEffect(() => {
    const svgMap = svgRef.current && svgPanZoom(svgRef.current, {
      center: true,
      fit: true,
      zoomEnabled: false,
      zoomScaleSensitivity: 0.75,
      minZoom: 1.0,
      maxZoom: 8,
    })

    if(svgMap) {
      setMap(svgMap)
    }

    return () => {
      svgMap?.destroy()
      setMap(null)
    }
  }, [])

  useEffect(() => {
    map?.reset()
  }, [floor])

  const zoomIn = () => map?.zoomIn()
  const zoomOut = () => map?.zoomOut()

  return (
    <>
      <div className={`syos-frame__map-overlay syos-loader-overlay ${loadingClass}`}
        aria-hidden="true"
      >
        <SVG src={ loadingSvg } className="syos-icon" title="zoom in"/>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="syos-seat-map"
        width="1600px"
        height="1600px"
        viewBox="0 0 1600 1600"
        ref={svgRef}
      >
        <rect fill="none" x="0" y="0" width="1600" height="1600"></rect>
        <svg style={{ display: "none" }}>
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
        {sectionElements}
      </svg>
      <SvgZoomControls onZoomIn={zoomIn} onZoomOut={zoomOut}/>
    </>
  )
}
