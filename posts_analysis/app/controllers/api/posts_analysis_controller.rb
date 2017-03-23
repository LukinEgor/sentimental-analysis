class Api::PostsAnalysisController < ApplicationController
  def create
    PostsHandler.perform_now(params[:keyword])
  end
end
