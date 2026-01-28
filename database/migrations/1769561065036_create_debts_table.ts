import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'debts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('client_id').unsigned().references('id').inTable('clients').onDelete('CASCADE')
      table.decimal('title').notNullable()
      table.integer('installments').notNullable()
      table.decimal('value').notNullable()
      table.date('due_date').notNullable()
      table.enum('status', ['ABERTO', 'QUITADO', 'DEVOLVIDO']).defaultTo('ABERTO')
      table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
