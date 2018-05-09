class Subscription < ApplicationRecord
  validates :server_id, :user_id, presence: true
  validates :server_id, uniqueness: { scope: :user_id }

  belongs_to :server
  belongs_to :user
end
