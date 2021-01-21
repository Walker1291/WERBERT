let handler = async (m, { conn }) => {
  let old = new Date
  await m.reply('_Velocidade de teste do ping..._')
  m.reply((new Date - old) + 'ms')
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
