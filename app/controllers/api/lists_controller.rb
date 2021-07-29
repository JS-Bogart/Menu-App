class Api::ListsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
    @lists = List.all
    render "api/lists/index"
  end

  def show
    @list = List.find_by(id: params[:id])
    render "api/lists/show"
  end

  def create
    @list = List.new(list_params)
    @list.save!
  end

  def destroy
    @list = List.find_by(id: params[:id])
    @list.destroy!
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
