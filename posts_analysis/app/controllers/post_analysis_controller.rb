class PostAnalysisController < ApplicationController
  def run
    current_user = User.first
    PostAnalysisJob.perform(current_user.id, current_user.token, params[:keyword], params[:count].to_i)
  end
end
