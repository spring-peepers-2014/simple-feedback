class raw_text_converter

  def initialize(raw_text)
    @raw_text = raw_text
  end

  def character_check
    @raw_text.map!
  end

end

/[A-z][0-9]/
