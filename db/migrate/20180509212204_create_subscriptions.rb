class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.timestamps
    end
    add_index :subscriptions, [:server_id, :user_id], unique: true;
    add_index :subscriptions, :user_id
  end
end
