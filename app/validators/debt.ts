import vine from '@vinejs/vine'

export const createDebtValidator = vine.compile(
  vine.object({
    client_id: vine.number(),

    title: vine.string(),

    installments: vine.number().positive(),

    value: vine.number().positive(),

    due_date: vine.date(),

    status: vine.enum(['ABERTO', 'QUITADO', 'DEVOLVIDO']),
  })
)
