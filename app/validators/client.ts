import vine from '@vinejs/vine'

export const createClientValidator = vine.compile(
  vine.object({
    full_name: vine.string().minLength(3),
    cpf: vine.string().fixedLength(11),
    street: vine.string(),
    number: vine.string(),
    neighborhood: vine.string(),
    complement: vine.string().optional(),
    cep: vine.string().fixedLength(8),
    city: vine.string(),
    uf: vine.string().fixedLength(2),
    phone: vine.string().minLength(10),
    email: vine.string().email(),
  })
)
