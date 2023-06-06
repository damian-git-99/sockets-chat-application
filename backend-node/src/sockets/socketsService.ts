import { MessageModel } from '../models/Message'
import { UserModel } from '../models/User'

export const connectUser = async (id: string) => {
  const user = await UserModel.findById(id)
  if (!user) throw new Error('User not found')
  user.online = true
  await user.save()
  return user
}

export const disconnectUser = async (id: string) => {
  const user = await UserModel.findById(id)
  if (!user) throw new Error('User not found')
  user.online = false
  await user.save()
  return user
}

export const getUsers = async () => {
  const users = await UserModel.find().select('-password').sort('-online')
  return users
}

// todo: move to another file
export const saveMessage = async (messageData: {
  from: string
  to: string
  message: string
}) => {
  const message = await MessageModel.create(messageData)
  return message
}
