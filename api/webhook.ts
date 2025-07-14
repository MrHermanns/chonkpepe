import type { VercelRequest, VercelResponse } from '@vercel/node'
import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.BOT_TOKEN as string)

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body } = req
  if (!body.message) {
    res.status(204).send('')
    return
  }
  const { chat: { id }, text } = body.message

  if (text === '/start') {
    await bot.sendMessage(id, '🐸 Welcome to ChonkPepe! Tap the game button below to start playing.')
  } else {
    await bot.sendMessage(id, "Send /start to begin playing ChonkPepe!")
  }
  res.status(204).send('')
}
