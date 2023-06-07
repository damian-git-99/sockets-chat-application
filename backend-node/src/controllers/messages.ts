import { Request, Response } from 'express'
import { MessageModel } from '../models/Message'

export const getChat = async (req: Request, res: Response) => {
  const userId = req.currentUser?.id!
  const fromId = req.params.fromId

  const lastMessages = await MessageModel.find({
    $or: [
      { from: userId, to: fromId },
      { from: fromId, to: userId }
    ]
  })
    .sort({ createdAt: 'ascending' })
    .limit(50)

  res.json({
    messages: lastMessages
  })
}
