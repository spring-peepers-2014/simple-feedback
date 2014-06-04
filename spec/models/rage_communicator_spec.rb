require 'spec_helper'

describe RageCommunicator do
  it "rage-ifies a name" do
    msg = RageCommunicator.rage_human_message("test")
    expect(msg).to eq "RageHuman say: test" 
  end

  it "rage-ifies a body" do
    msg = RageCommunicator.rage_body("body")
    expect(msg).to eq "GRRRRRRRR!!!body" 
  end
end
