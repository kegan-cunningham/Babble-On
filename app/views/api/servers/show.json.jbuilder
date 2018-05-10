json.extract! @server, :id, :name, :owner_id

json.set! :users do
  json.array! @server.users, :username, :id
end
