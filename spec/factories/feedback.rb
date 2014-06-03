FactoryGirl.define do
  factory :feedback do
    author "King Hobo"
    body "Magnificent"
    rating 3

    factory :invalid_feedback do
    body ""
    end
  end
end
