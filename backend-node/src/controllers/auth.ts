import { Request, Response } from 'express'

// @route POST api/v1/auth/register
export const register = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}

// @route POST api/v1/auth/login
export const login = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}

// @route POST api/v1/auth/renew-token
export const renewToken = (req: Request, res: Response) => {
  res.json({
    ok: true
  })
}
