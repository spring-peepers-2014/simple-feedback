class RageCommunicator
  def initialize(unraging_thing)
    @unraging_thing = unraging_thing
  end

  def name
    name = @unraging_thing.author.empty? ? "Anonymous" : @unraging_thing.author
    "RageHuman say: " + name
  end

  def body
    "GRRRRRRRR!!!" + @unraging_thing.body.upcase
  end

  def rating
    @unraging_thing.rating
  end
end
