class FeedbacksController < ApplicationController
  def index
  end

  def new
    @feedback = Feedback.new
  end

  def create
    @feedback = Feedback.create(params[:feedback])
    if @feedback.save
      flash[:success] = "Your feedback has been logged"
      redirect_to feedback_path(@feedback)

    else
      redirect_to :back
    end
  end

  def show
    @feedback = Feedback.find(params[:id])
  end
end
