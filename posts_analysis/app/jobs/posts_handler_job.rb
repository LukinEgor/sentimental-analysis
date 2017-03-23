class PostsHandlerJob < ApplicationJob
  queue_as :urgent

  def perform(*args)
    posts = Vk.download_posts(args[0])
  end
end
