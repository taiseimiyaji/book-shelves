class ReadingNotesController < ApplicationController
  before_action :set_reading_note, only: [:show, :update, :destroy]

  # GET /reading_notes
  def index
    @reading_notes = ReadingNote.all

    render json: @reading_notes
  end

  # GET /reading_notes/1
  def show
    render json: @reading_note
  end

  # POST /reading_notes
  def create
    @reading_note = ReadingNote.new(reading_note_params)

    if @reading_note.save
      render json: @reading_note, status: :created, location: @reading_note
    else
      render json: @reading_note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reading_notes/1
  def update
    if @reading_note.update(reading_note_params)
      render json: @reading_note
    else
      render json: @reading_note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reading_notes/1
  def destroy
    @reading_note.destroy
  end

  private
  def set_reading_note
    @reading_note = ReadingNote.find(params[:id])
  end

  def reading_note_params
    params.require(:reading_note).permit(:content, :user_id, :book_id)
  end
end
