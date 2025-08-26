import { Router } from 'express'
import { createUserControllerInstance } from './controllers/user/create-user.js'
import { userLoginControllerInstance } from './controllers/user/user-login.js'
import { upload } from './config/multer.js'
import { createAnimalControllerInstance } from './controllers/animal/create-animal.js'
import { userAuthMiddlewareInstance } from './middlewares/user-auth.js'
import { getAvailableAnimalsControllerInstance } from './controllers/animal/get-available.js'
import { getUserAnimalsControllerInstance } from './controllers/animal/get-user-animals.js'
import { updateUserControllerInstance } from './controllers/user/update-user.js'
import { updateAnimalStatusControllerInstance } from './controllers/animal/update-animal-status.js'
import { createUserChatMessageControllerInstance } from './controllers/chat/create-user-chat-message.js'
import { getUserChatsControllerInstance } from './controllers/chat/get-user-chats.js'
import { getUserChatControllerInstance } from './controllers/chat/get-user-chat.js'
import { createUserChatControllerInstance } from './controllers/chat/create-user-chat.js'

const router = Router()

// --- ROTAS PÚBLICAS ---
// Não exigem autenticação

router.post(
  '/users',
  createUserControllerInstance.handle.bind(createUserControllerInstance),
)

router.post(
  '/login',
  userLoginControllerInstance.handle.bind(userLoginControllerInstance),
)

// CORREÇÃO APLICADA AQUI: O middleware de autenticação foi removido.
router.get(
  '/animals/available',
  getAvailableAnimalsControllerInstance.handle.bind(
    getAvailableAnimalsControllerInstance,
  ),
)


// --- ROTAS PRIVADAS ---
// Exigem autenticação via token JWT

router.patch(
  '/users',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  updateUserControllerInstance.handle.bind(updateUserControllerInstance),
)

router.post(
  '/users/chats/messages',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  createUserChatMessageControllerInstance.handle.bind(
    createUserChatMessageControllerInstance,
  ),
)

router.post(
  '/users/chats',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  createUserChatControllerInstance.handle.bind(
    createUserChatControllerInstance,
  ),
)

router.get(
  '/users/chats',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  getUserChatsControllerInstance.handle.bind(getUserChatsControllerInstance),
)

router.get(
  '/users/chats/:chatId',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  getUserChatControllerInstance.handle.bind(getUserChatControllerInstance),
)

router.post(
  '/animals',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  upload.array('pictures', 5),
  createAnimalControllerInstance.handle.bind(createAnimalControllerInstance),
)

router.patch(
  '/animals/:id',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  updateAnimalStatusControllerInstance.handle.bind(
    updateAnimalStatusControllerInstance,
  ),
)

router.get(
  '/animals/user',
  userAuthMiddlewareInstance.authenticate.bind(userAuthMiddlewareInstance),
  getUserAnimalsControllerInstance.handle.bind(
    getUserAnimalsControllerInstance,
  ),
)

export { router }