import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Debt from './debt.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare full_name: string

  @column()
  declare cpf: string

  @column()
  declare street: string

  @column()
  declare number: string

  @column()
  declare neighborhood: string

  @column()
  declare complement?: string

  @column()
  declare cep: string

  @column()
  declare city: string

  @column()
  declare uf: string

  @column()
  declare phone: string

  @column()
  declare email: string

  @hasMany(() => Debt)
  declare debts: HasMany<typeof Debt>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
