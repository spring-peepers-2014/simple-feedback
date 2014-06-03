class CreateFeedbacks < ActiveRecord::Migration
  def change
    create_table :feedbacks do |t|
      t.text :body, null:false
      t.string :author
      t.integer :rating, default: 5, null: false

      t.timestamps
    end
  end
end
