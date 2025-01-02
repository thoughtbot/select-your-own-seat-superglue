import React from "react"
import SVG from "react-inlinesvg"
import plusSvg from "../../assets/images/icons/plus.svg"
import minusSvg from "../../assets/images/icons/minus.svg"

type ZoomProps = {
  onZoomIn: () => void
  onZoomOut: () => void
}

export const SvgZoomControls = ({onZoomIn, onZoomOut}: ZoomProps ) => {
  return (
    <div className="syos-frame__map-zoom syos-control-zoom">
      <button onClick={onZoomOut}
        className="syos-button syos-button--transparent syos-control-zoom__button"
        type="button"
      >
        <SVG src={minusSvg} className="syos-icon" title="zoom out" />
      </button>

      <button onClick={onZoomIn}
        className="syos-button syos-button--transparent syos-control-zoom__button"
        type="button"
      >
        <SVG src={plusSvg} className="syos-icon" title="zoom in" />
      </button>
    </div>
  )
}
