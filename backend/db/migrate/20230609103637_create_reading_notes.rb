class CreateReadingNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :reading_notes do |t|
      t.references :user, null: false, foreign_key: true
      t.text :content
      t.references :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
