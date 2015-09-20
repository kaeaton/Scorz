class CreateReports < ActiveRecord::Migration
  def change
  	create_table :reports do |t|
  		t.string :popo_id
  		t.string :description
  		t.decimal :lat
  		t.decimal :long
  		t.datetime :datetime
  		t.boolean :sale

  		t.timestamps
  	end
  end
end
