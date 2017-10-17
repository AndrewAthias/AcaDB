module Api
	class SearchingsController < ApplicationController
		def index
			render json: Searching.all
		end
	end
end
