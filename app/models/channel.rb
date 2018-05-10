class Channel < ApplicationRecord
  validates :name, presence: true

  belongs_to :server,
  optional: true

  has_many :messages, dependent: :destroy
end
