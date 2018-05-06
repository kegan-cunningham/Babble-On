# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u1 = User.new(
    username: 'asai',
    firstname: 'Kegan',
    lastname: 'Cunningham',
    password: 'asdfasdf',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.'
  )
  u1.save!
u2 = User.new(
    username: 'asai2',
    firstname: 'Kegan2',
    lastname: 'Cunningham2',
    password: 'asdfasdf2',
    bio: '222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222222222222222
    222222222222222222222222222222222222222222222222222222222222222222222222222222222'
  )
  u2.save!
u3 = User.new(
    username: 'asai3',
    firstname: 'Kegan3',
    lastname: 'Cunningham3',
    password: 'asdfasdf3',
    bio: '333333333333333333333 3 33 3 333 333 333333 33 33 33 3 33333'
  )
  u3.save!
u4 = User.new(
    username: 'asai4',
    firstname: 'Kegan4',
    lastname: 'Cunningham4',
    password: 'asdfasdf4',
    bio: 'believe me4'
  )
  u4.save!
