class Report < ActiveRecord::Base
  validates :popo_id, presence: true, uniqueness: true
  validates :description, presence: true
  validates :lat, presence: true
  validates :long, presence: true
end
