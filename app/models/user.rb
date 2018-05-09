class User < ApplicationRecord
  validates :username, :password_digest, :firstname, :lastname, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  # has_attached_file :image, default_url: "default-user-image.jpg"
  # validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :owned_servers,
  primary_key: :id,
  foreign_key: :owner_id,
  class_name: :Server

  has_many :subscriptions, dependent: :destroy

  has_many :servers,
  through: :subscriptions

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
