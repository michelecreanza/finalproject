class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :img
      t.string :brand
      t.string :alcohol

      t.timestamps
    end
  end
end
