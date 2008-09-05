class JqueryController < ApplicationController
  skip_before_filter :verify_authenticity_token
  layout "jquery"
  
  def chat
    if request.post?
      CHAT_MESSAGES << params[:message]
      redirect_to
    else
      if request.xhr?
        render :partial => "shared/chat_messages"
      end
    end
  end   
  
end
