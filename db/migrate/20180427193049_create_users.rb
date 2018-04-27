class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.boolean :hosting, null: false
      t.text :bio
      t.text :interests

      t.timestamps
    end

    def self.up
      change_table :users do |t|
        t.attachment :image
      end
    end

    def self.down
      remove_attachment :users, :image
    end
    add_index :users, :firstname
    add_index :users, :lastname
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
