class CreateMenuItems < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_items do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :category, null: false

      t.timestamps
    end
  end
end
