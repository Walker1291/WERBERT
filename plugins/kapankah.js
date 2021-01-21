let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Questão:* ${m.text}
*Responda:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundo', 'minuto', 'hora', 'dia', 'Domigo', 'mês', 'ano', 'década', 'século'])} novamente...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'quando' + v + '<text>?')
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^quando(kah)?/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}



