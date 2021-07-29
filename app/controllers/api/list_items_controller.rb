class Api::ListItemsController < ApplicationController

  skip_before_action :verify_authenticity_token
  
  def create
    @list_item = ListItem.new(list_item_params)
    @list_item.save!
  end

  def destroy
    @list_item = ListItem.find_by(
      menu_item_id: params[:menu_item_id], 
      list_id: params[:list_id]
    )
    @list_item.destroy!
  end

  private

  def list_item_params
    params.require(:list_item).permit(:menu_item_id, :list_id)
  end
end
