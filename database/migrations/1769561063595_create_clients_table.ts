import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name').notNullable()
      table.string('cpf').notNullable().unique()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('neighborhood').notNullable()
      table.string('complement').nullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table.string('cep').notNullable()
      table.string('phone').notNullable()
      table.string('email').notNullable().unique()
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
     })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
