class Server < ApplicationRecord
  validates :name, :owner, presence: true
  validates :name, length: { maximum: 18 }, uniqueness: true

  belongs_to :owner,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :User

  has_many :channels, dependent: :destroy
  
  has_many :subscriptions, dependent: :destroy
  has_many :users,
  through: :subscriptions
end
