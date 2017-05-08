require 'net/http'

class TextAnalysis
  def request(posts)
    sleep 3
    posts.map { rand }
  end
end
