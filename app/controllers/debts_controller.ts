import Debt from '#models/debt'
import db from '@adonisjs/lucid/services/db'
import { createDebtValidator } from '#validators/debt'
import { HttpContext } from '@adonisjs/core/http'

export default class DebtsController {
  async index() {
    const debts = await db.rawQuery(`
      SELECT
        debts.*,
        clients.full_name
      FROM debts
      JOIN clients ON clients.id = debts.client_id
      ORDER BY debts.id DESC
    `)

    return debts.rows
  }

  async store({ request }: HttpContext) {
    const data = await request.validateUsing(createDebtValidator)

    const debt = await Debt.create(data)

    return debt
  }

  async show({ params }: HttpContext) {
    return await Debt.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const debt = await Debt.findOrFail(params.id)

    const data = await request.validateUsing(createDebtValidator)

    debt.merge(data)
    await debt.save()

    return debt
  }

  async destroy({ params }: HttpContext) {
    const debt = await Debt.findOrFail(params.id)

    await debt.delete()

    return { message: 'Débito removido com sucesso' }
  }
}

