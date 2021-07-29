class CreateListItems < ActiveRecord::Migration[5.2]
  def change
    create_table :list_items do |t|
      t.integer :menu_item_id, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
  end
end
