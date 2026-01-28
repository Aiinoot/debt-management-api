import router from '@adonisjs/core/services/router'
import ClientsController from '#controllers/clients_controller'
import DebtsController from '#controllers/debts_controller'

router.resource('clients', ClientsController).apiOnly()
router.resource('debts', DebtsController).apiOnly()
