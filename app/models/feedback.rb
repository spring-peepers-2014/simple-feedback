class Feedback < ActiveRecord::Base
  attr_accessible :rating, :author, :body

  validates :body, presence: {message: "must contain some kind feedback" }
end
