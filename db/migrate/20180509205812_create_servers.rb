class CreateServers < ActiveRecord::Migration[5.1]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index :servers, :name, unique: true
  end
end
