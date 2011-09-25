class WelcomeController < ApplicationController
  def index
    render 'index.html'
  end
  def app
    render 'app.xml'
  end
end