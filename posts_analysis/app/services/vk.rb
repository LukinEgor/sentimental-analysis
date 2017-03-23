require 'net/http'
require 'json'

class Vk
  class << self
    def download(keyword)
      url = "https://api.vk.com/method/newsfeed.search?q=#{keyword}"
      uri = URI(url)
      response = Net::HTTP.get(uri)
      JSON.parse(response)
    end
  end
end
