module Admin
  class FeedbacksController < ApplicationController
    def index
      unless params[:pw] == 'jabu'
        redirect_to root_path
      else
        @feedbacks = Feedback.all
      end
    end
  end
end
