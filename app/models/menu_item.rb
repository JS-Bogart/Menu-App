class MenuItem < ApplicationRecord
  require 'csv'

  validates :name, :description, :category, presence: true

  has_many :list_items

  has_many :lists,
    through: :list_items,
    source: :list

  def self.import(file)
    CSV.foreach(file.path, headers: true) do |row|
      MenuItem.create! row.to_hash
    end
  end
end
