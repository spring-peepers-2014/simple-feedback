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
    else
      flash[:alert] = @feedback.errors.full_messages
    end
    redirect_to feedbacks_path
  end
end
