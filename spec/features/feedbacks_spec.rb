require 'spec_helper'

feature 'Basic navigation' do
  scenario 'we can submit a feedback' do
    visit root_path
    click_link 'Add some feedback'
    fill_in 'Author', with: 'Randy "Macho Man" Savage'
    fill_in 'Body', with: 'Jesse Ventura'
    click_button 'Create Feedback'

    expect(page).to have_content 'Ventura'
  end

  scenario "we can't submit a feedback sans body" do
    visit root_path
    click_link 'Add some feedback'
    fill_in 'Author', with: 'Mister N. Valid'
    fill_in 'Body', with: ''
    click_button 'Create Feedback'

    expect(page).to have_content 'contain some kind feedback'
  end
end
