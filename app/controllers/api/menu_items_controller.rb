class Api::MenuItemsController < ApplicationController
  
  skip_before_action :verify_authenticity_token

  def index
    if params[:list_id]
      @menu_items = MenuItem.joins(list_items: :list).where(lists: {id: params[:list_id]})
    else
      @menu_items = MenuItem.all
    end
    render "api/menu_items/index"
  end

  def import
    MenuItem.import(params[:file])
    render json: ["File uploaded"], status: 202
  end

end