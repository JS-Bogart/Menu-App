class Api::MenuItemsController < ApplicationController
  
  skip_before_action :verify_authenticity_token

  def index
    @menu_items = MenuItem.all
    render "api/menu_items/index"
  end

  def import
    MenuItem.import(params[:file])
    render json: ["File uploaded"], status: 202
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(:name, :description, :category)
  end
end