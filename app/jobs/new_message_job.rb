class NewMessageJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable
      .server
      .broadcast('chat_socket',
                 id: chat_message.id,
                 created_at: chat_message.created_at,
                 body: chat_message.body,
                 author_id: chat_message.author_id)
  end
end
