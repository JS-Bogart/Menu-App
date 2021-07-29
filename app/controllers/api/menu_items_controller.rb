class Api::MenuItemsController < ApplicationController
  def index
    @menu_items = MenuItem.all
    render "api/menu_items/index"
  end

  def import
    MenuItem.import(params[:file])
    render json: ["File uploaded"], status: 202
  end
end
