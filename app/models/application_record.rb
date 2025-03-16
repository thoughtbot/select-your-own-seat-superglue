class ApplicationRecord < ActiveRecord::Base
  # This enables digging by index when used with props_template
  # see https://thoughtbot.github.io/superglue/digging/#index-based-selection
  def self.member_at(index)
    offset(index).limit(1).first
  end

  # This enables digging by attribute when used with props_template
  # see https://thoughtbot.github.io/superglue/digging/#attribute-based-selection
  def self.member_by(attr, value)
    find_by(Hash[attr, value])
  end
  primary_abstract_class
end
