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


Channel.create!(name: "General", server_id: s1.id)
Channel.create!(name: "General", server_id: s2.id)
Channel.create!(name: "General", server_id: s3.id)
Channel.create!(name: "General", server_id: s4.id)
