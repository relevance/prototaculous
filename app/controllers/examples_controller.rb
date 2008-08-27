class ExamplesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def validate_field
    name, value = params[:field], params[:value]
    @message = (case name
      when "name" : value.blank? ? "You must specify a name" : ""
      when "favorite_color" : value=="blue" ? "" : "Wrong guess, you must die"
      else ""
    end)
    render :layout => false, :content_type => "text/plain"
  end

  def chat
    if request.post?
      CHAT_MESSAGES << params[:message]
      redirect_to
    else
      if request.xhr?
        render :text => CHAT_MESSAGES.to_json
      end
    end
  end
end
