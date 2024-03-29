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
    render "api/lists/show"
  end

  def destroy
    @list = List.find_by(id: params[:id])
    @list.destroy!
    render "api/lists/show"
  end

  private
  def list_params
    params.require(:list).permit(:name)
  end
end
