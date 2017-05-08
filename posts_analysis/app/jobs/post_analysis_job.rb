class PostAnalysisJob < ApplicationJob
  queue_as :default

  def self.perform(user_id, user_token, keyword, count)
    stream_id = "post_analysis_channel_#{user_id}"
    posts = Vk.new.posts(user_token, keyword, count)
    texts = posts.map { |post| post["text"] }
    analysis = TextAnalysis.new.request(texts)
    result = { keyword: keyword, posts: posts.zip(analysis) }

    ActionCable.server.broadcast(stream_id, result: result)
  end
end
