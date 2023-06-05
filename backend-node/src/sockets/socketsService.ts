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
