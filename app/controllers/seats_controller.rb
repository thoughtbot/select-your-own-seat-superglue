class SeatsController < ApplicationController
  before_action :use_jsx_rendering_defaults

  def index
    venue = Venue.find_by!(slug: params[:venue_id])
    floor = venue.floors.find_by!(slug: params[:floor_id])
    sections = floor.sections.includes(:seats)

    render(locals: {
      venue: venue,
      floor: floor,
      sections: sections,
    })
  end
end
