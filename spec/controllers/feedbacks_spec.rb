require 'spec_helper'

describe FeedbacksController do
  context "when we create with invalid parameters" do
    it "should redirect us to a bad place" do
      post :create, {"utf8"=>"✓", "feedback"=>{"author"=>"Mister N. Valid", "body"=>"", "rating"=>"5"}, "commit"=>"Create Feedback"}
      expect(response).to redirect_to(feedbacks_path)
    end
  end

  context "when we create with invalid parameters" do
    it "should redirect us to a happy place" do
      post :create, {"utf8"=>"✓", "feedback"=>{"author"=>"Mister N. Valid", "body"=>"Test Body", "rating"=>"5"}, "commit"=>"Create Feedback"}
      expect(response).to redirect_to(feedback_path(assigns(:feedback).id))
    end
  end
end
