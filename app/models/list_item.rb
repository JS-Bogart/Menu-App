class ListItem < ApplicationRecord
  validates :menu_item_id, :list_id, presence: true

  belongs_to :menu_item
  belongs_to :list
end
