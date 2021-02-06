let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 INFO BOT 〙
Feito em javascript via NodeJs

➥ TRADUZIDO EM PORTUGUÊS
➥ Instagram do meu amigo: https://instagram.com/matheus.l.o2600?igshid=3fauieovdedc
➥ YouTube: WERBERT

〘 Graças a 〙 
➥ WERBERT
            [AMIGO: MATHEUS]
〘 FALE COM 〙 
➥ contato : https://wa.me/message/ITUX3SPZN5JPK1


〘 WERBERT 〙 
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler






