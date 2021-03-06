@servers.each do |server|
  json.set! server.id do
    json.extract! server, :id, :name, :owner_id
    json.set! :channels do
      json.array! server.channels, :id, :name
    end
  end
end
