import { Schema, model } from 'mongoose'

interface Message {
  from: string
  to: string
  message: string
}

const MessageSchema = new Schema<Message>({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
})

export const MessageModel = model<Message>('Message', MessageSchema)
