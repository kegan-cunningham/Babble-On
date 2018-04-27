class RemoveExtraFieldFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :hosting, :boolean
  end
end
