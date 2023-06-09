class DiscussionsController < ApplicationController
  before_action :set_discussion, only: [:show, :update, :destroy]

  # GET /discussions
  def index
    @discussions = Discussion.all

    render json: @discussions
  end

  # GET /discussions/1
  def show
    render json: @discussion
  end

  # POST /discussions
  def create
    @discussion = Discussion.new(discussion_params)

    if @discussion.save
      render json: @discussion, status: :created, location: @discussion
    else
      render json: @discussion.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /discussions/1
  def update
    if @discussion.update(discussion_params)
      render json: @discussion
    else
      render json: @discussion.errors, status: :unprocessable_entity
    end
  end

  # DELETE /discussions/1
  def destroy
    @discussion.destroy
  end

  private
  def set_discussion
    @discussion = Discussion.find(params[:id])
  end

  def discussion_params
    params.require(:discussion).permit(:title, :user_id)
  end
end
