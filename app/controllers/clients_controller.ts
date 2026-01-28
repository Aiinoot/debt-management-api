import Client from '#models/client'
import { createClientValidator } from '#validators/client'
import db from '@adonisjs/lucid/services/db'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientsController {
  async index() {
    const clients = await db.rawQuery('SELECT * FROM clients ORDER BY id DESC')
    return clients.rows
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createClientValidator)

    const client = await Client.create(data)

    return client
  }

  async show({ params }: HttpContext) {
    return await Client.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const client = await Client.findOrFail(params.id)

    const data = await request.validateUsing(createClientValidator)

    client.merge(data)
    await client.save()

    return client
  }

  async destroy({ params }: HttpContext) {
    const client = await Client.findOrFail(params.id)

    await client.delete()

    return { message: 'Cliente removido com sucesso' }
  }
}
