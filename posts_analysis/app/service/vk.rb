require 'addressable/uri'
require 'net/http'

class Vk
  def posts(token, keyword, count)
    url = "https://api.vk.com/method/newsfeed.search?access_token=#{token}&q=#{keyword}&count=#{count}"
    uri = Addressable::URI.parse(url)
    res = Net::HTTP.get(uri)
    JSON.parse(res)["response"]
      .select { |post| post.class != Fixnum && post.key?("text") && !post["text"].empty? }
  end
end
