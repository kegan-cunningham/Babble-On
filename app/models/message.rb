class Message < ApplicationRecord
  validates :body, :author, :channel, presence: true
  validates :body, length: { minimum: 1 }

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :channel
end
