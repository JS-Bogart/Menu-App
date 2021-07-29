class List < ApplicationRecord
  validates :name, presence: true

  has_many :list_items

  has_many :menu_items,
    through: :list_items,
    source: :menu_item
end
