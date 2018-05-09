# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all

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

Server.create(name: "General", owner_id: 1)
Server.create(name: "Music", owner_id: 2)
Server.create(name: "Gaming", owner_id: 3)
Server.create(name: "Movies", owner_id: 4)
