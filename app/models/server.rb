class Server < ApplicationRecord
  validates :name, :default_id, presence: true

  has_many :channels
  has_many :subscriptions
  has_many :users,
  through: :subscriptions
end
