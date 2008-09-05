class Array
  def reorder!(positions)
    result = self.dup
    positions.each_with_index do |pos, idx|
      self[idx] = result[pos.to_i]
    end
  end
end

class PrototaculousController < ApplicationController
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
        render :partial => "shared/chat_messages"
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
  
  def sortable    
    if request.xhr?
      NORRIS_FACTS.reorder!(params[:norris_facts])
      render :nothing => true
    else 
      @facts = NORRIS_FACTS.dup
    end
  end 
  
  def form_observer
    if request.xhr?
      @hits = []           
      Dir["#{RAILS_ROOT}/app/views/prototaculous/*.erb"].each do |demo| 
        if File.read(demo)[params[:search]]
          @hits << demo.gsub(/.*\//, '').gsub(/\..*/, '')  
        end
      end
      render :partial => "form_observer"
    end
  end  
end
