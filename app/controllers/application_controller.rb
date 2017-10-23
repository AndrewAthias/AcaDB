class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception


  ## Below is ransack implementation. Attempting to use React instead
  # before_action :set_global_search_variable

  # def set_global_search_variable
  #   @q = Acagroup.search(params[:q])
  # end

end
