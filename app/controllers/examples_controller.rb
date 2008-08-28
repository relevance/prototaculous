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
        render :partial => "messages"
      end
    end
  end   
                  
  COLORS = %w{red green blue orange yellow black white brown purple polka-dot}.sort
  def autocomplete
    if request.xhr?                     
      input = Regexp.new("^#{params[:user][:favorite_color]}") 
      @colors = COLORS.find_all {|color| color[input] }
      render :partial => "autocomplete"
      return
    end
  end
end
