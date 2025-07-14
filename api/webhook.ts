import type { VercelRequest, VercelResponse } from '@vercel/node'
import bot from '../bot'

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body } = req
  if (!body.message) {
    res.status(204).send('')
    return
  }
  const { chat: { id }, text } = body.message

  if (text === '/start') {
    await bot.sendMessage(id, '🐸 Welcome to ChonkPepe! Tap the game button below to start playing.');
    // (Later, you can add a button here)
  } else {
    await bot.sendMessage(id, "Send /start to begin playing ChonkPepe!");
  }
  res.status(204).send('')
}
