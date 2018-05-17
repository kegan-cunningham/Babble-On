class ChatSocket < ApplicationCable::Channel
  def subscribed
    stream_from 'chat_socket'
  end

  def unsubscribed; end

  def create(opts)
    Message.create(
      body: opts.fetch('body'),
      channel_id: opts.fetch('channel_id'),
      author_id: opts.fetch('author_id')
    )
  end
end
