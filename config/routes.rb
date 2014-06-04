SimpleFeedback::Application.routes.draw do
  root to: 'feedbacks#index'

  namespace :admin do
    resources :feedbacks, only: :index
  end

  resources :feedbacks
end
