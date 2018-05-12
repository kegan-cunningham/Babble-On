# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
Subscription.delete_all
Channel.delete_all
Message.delete_all

u1 = User.new(
    username: 'asai',
    firstname: 'Kegan',
    lastname: 'Cunningham',
    password: 'asdfasdf',
  )
  u1.save!
u2 = User.new(
    username: 'asai2',
    firstname: 'Kegan2',
    lastname: 'Cunningham2',
    password: 'asdfasdf2',
  )
  u2.save!
u3 = User.new(
    username: 'asai3',
    firstname: 'Kegan3',
    lastname: 'Cunningham3',
    password: 'asdfasdf3',
  )
  u3.save!
u4 = User.new(
    username: 'asai4',
    firstname: 'Kegan4',
    lastname: 'Cunningham4',
    password: 'asdfasdf4',
  )
  u4.save!

s1 = Server.create!(name: "General", owner_id: u1.id)
s2 = Server.create!(name: "Music", owner_id: u2.id)
s3 = Server.create!(name: "Gaming", owner_id: u3.id)
s4 = Server.create!(name: "Movies", owner_id: u4.id)

Subscription.create!(server_id: s1.id, user_id: u1.id)
Subscription.create!(server_id: s2.id, user_id: u2.id)
Subscription.create!(server_id: s3.id, user_id: u3.id)
Subscription.create!(server_id: s4.id, user_id: u4.id)


c1 = Channel.create!(name: "General", server_id: s1.id)
c2 = Channel.create!(name: "Memes", server_id: s1.id)
c3 = Channel.create!(name: "The Funk", server_id: s1.id)
c4 = Channel.create!(name: "General", server_id: s2.id)
c5 = Channel.create!(name: "General", server_id: s3.id)
c6 = Channel.create!(name: "General", server_id: s4.id)
c7 = Channel.create!(name: "Music", server_id: s4.id)
c8 = Channel.create!(name: "Yuka", server_id: s2.id)

Message.create!(body: "The finest message ever crafted", author_id: u1.id, channel_id: c1.id)
Message.create!(body: "It's a trap!", author_id: u2.id, channel_id: c2.id)
Message.create!(body: "iijan iijan", author_id: u3.id, channel_id: c3.id)
Message.create!(body: "I disagree with everything. Even this.", author_id: u4.id, channel_id: c4.id)
Message.create!(body: "Wait what?", author_id: u1.id, channel_id: c5.id)
Message.create!(body: "Exactly.", author_id: u2.id, channel_id: c6.id)
Message.create!(body: "But why?", author_id: u3.id, channel_id: c7.id)
Message.create!(body: "Absolutely not.", author_id: u4.id, channel_id: c8.id)
Message.create!(body: "Just build looool 4head", author_id: u1.id, channel_id: c1.id)
Message.create!(body: "Career Suicide", author_id: u2.id, channel_id: c3.id)
Message.create!(body: "Jesus Christ K8", author_id: u3.id, channel_id: c5.id)
Message.create!(body: "How dare you defy me.", author_id: u4.id, channel_id: c7.id)
