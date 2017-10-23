module Api
	class AcagroupsController < ApplicationController

		##Below is code for ransack implementation. Currently trying to use React instead.
		# def index
		# 	@q = Acagroup.ransack(params[:q])
		# 	@acagroups = @q.result(distinct: true)
		# 	#render json: Acagroup.all
		# end

		# def search
		# 	index
		# 	render :index
		# end
		

		def index
			render json: Acagroup.all
		end

		def search
			query = params[:query]
			acagroups = Acagroup.where('Name LIKE ? OR University LIKE ?', "%#{query}%", "%#{query}%")


			render json: acagroups
		end
	end
end
