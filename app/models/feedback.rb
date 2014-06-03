class Feedback < ActiveRecord::Base
  attr_accessible :rating, :author, :body
end
