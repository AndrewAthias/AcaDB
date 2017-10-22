module Api
	class AcagroupsController < ApplicationController
		
		def index
			@q = Acagroup.ransack(params[:q])
			@acagroups = @q.result(distinct: true)
			#render json: Acagroup.all
		end

		def search
			index
			render :index
		end
	end
end
