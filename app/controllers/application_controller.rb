class ApplicationController < ActionController::Base
  # Enables Superglue rendering defaults for sensible view directories.
  #
  # without `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #  - index.jsx
  #  - index.json.props
  #  - index.html.erb
  # ```
  #
  # with `use_jsx_rendering_defaults`:
  #
  # ```
  # app/views/posts/
  #   - index.jsx
  #   - index.json.props
  # ```
  #
  # before_action :use_jsx_rendering_defaults
  #
  #
  # The html template used when `use_jsx_rendering_defaults` is enabled.
  # Defaults to "application/superglue".
  #
  # superglue_template "application/superglue"

  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
end
