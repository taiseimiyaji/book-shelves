class CommentsController < ApplicationController
  before_action :set_discussion
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /discussions/:discussion_id/comments
  def index
    @comments = @discussion.comments

    render json: @comments
  end

  # GET /discussions/:discussion_id/comments/1
  def show
    render json: @comment
  end

  # POST /discussions/:discussion_id/comments
  def create
    @comment = @discussion.comments.build(comment_params)

    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /discussions/:discussion_id/comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /discussions/:discussion_id/comments/1
  def destroy
    @comment.destroy
  end

  private
  def set_discussion
    @discussion = Discussion.find(params[:discussion_id])
  end

  def set_comment
    @comment = @discussion.comments.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:content, :user_id)
  end
end
