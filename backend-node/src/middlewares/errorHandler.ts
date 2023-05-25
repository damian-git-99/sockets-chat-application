import { Request, Response, NextFunction } from 'express'

export interface CustomResponse {
  message: string
  field?: string
}

export abstract class CustomError extends Error {
  abstract statusCode: number
  abstract message: string
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response<any, Record<string, any>> => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ error: err.message })
  }

  return res.status(500).send({ error: err.message })
}
