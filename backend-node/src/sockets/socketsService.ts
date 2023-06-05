import { UserModel } from '../models/User'
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

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
