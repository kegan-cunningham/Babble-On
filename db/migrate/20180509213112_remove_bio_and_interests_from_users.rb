class RemoveBioAndInterestsFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :bio, :text
    remove_column :users, :interests, :text
  end
end
