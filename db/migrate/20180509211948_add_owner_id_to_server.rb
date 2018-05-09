class AddOwnerIdToServer < ActiveRecord::Migration[5.1]
  def change
    add_column :servers, :owner_id, :integer
    add_index :servers, :owner_id
  end
end
