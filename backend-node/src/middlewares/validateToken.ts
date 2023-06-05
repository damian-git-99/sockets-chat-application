import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/JwtUtils'

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.header('Authorization')
  if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const token = authorizationHeader.replace('Bearer ', '')
  try {
    if (token) {
      const payload = verifyToken(token)
      if (!payload) {
        return res.status(401).json({ message: 'Unauthorized' })
      }
      req.currentUser = payload
    }
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
