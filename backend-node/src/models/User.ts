import { Schema, model } from 'mongoose'

export interface User {
  username: string
  email: string
  password: string
  online: boolean
}

const UserSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  online: { type: Boolean, default: false }
})

export const UserModel = model<User>('User', UserSchema)
