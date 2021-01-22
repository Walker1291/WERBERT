let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Akbarsans/Miray-chan')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
 [WERBERT-MODS] 


SALVE, ${name} 👋 AJUDE O CANAL OSCAR PARA AJUDAR O BOT!🤗
Exp: ${exp}

📟 hora: ${time}
📆 Data: ${week}, ${date}

${more.repeat(1000)}

Como adicionar XP: +1 Exp / mensagem normal +10 Exp / comando


╭════ • ›「 MENU HAKASHI BOT | WERBERT 」
  ┠❥ .menu
  ┠❥ .help
  ┠❥ .?
  ╰═══════════════

  ╭════ • ›「 Sobre e informações 」
  ┠❥ .info *●informações●*
  ┠❥ .tutorial *●criar o bot●* ╰═══════════════

  ╭════ • ›「 Exp e Limite 」
  ┠❥ .buy<limite de numero>
  ┠❥ .buy <limite de número>
  ┠❥ .buyall 
  ┠❥ .daily ●adicionar +500XP●
  ┠❥ .claim
  ┠❥ .leaderboard [número do usuário]
  ╰═══════════════

  ╭════ • ›「 Adesivo 」
  ┠❥ .stiker (legenda | mídia de resposta)
  ┠❥ .stiker <url>
  ┠❥ .toimg (resposta)
  ┠❥ .ttp <texto>
  ┠❥ .tts (idioma|texto)
  ╰═══════════════

  ╭════ • ›「 Conchas mágicas 」
  ┠❥ apakah <texto>?
  ┠❥  quando <texto>?
  ┠❥ quandokah <texto>?
  ╰═══════════════

  ╭════ • ›「 Cotações 」
  ┠❥ .cantada ●cantadas e frases●
  ┠❥ .deserto 
  ┠❥ .musicas ●muita musica●
  ╰══════════════

  ╭════ • ›「 Admin 」
  ┠❥ .add número,número (Limite)
  ┠❥ .+ Número,número (Limite)
  ┠❥ .despromover @user
  ┠❥ .remover @user (Limite)
  ┠❥ .promover @user
  ╰═══════════════

  ╭════ • ›「 Grupo 」
  ┠❥ .linkgrupo ●link do grupo●
  ┠❥ .here
  ┠❥ .listaonline ●contatos on●
  ┠❥ .anunciar [texto] (Limite)
  ┠❥ .announce [texto] (Limite)
  ┠❥ .hidetag [texto] (Limite)
  ╰═══════════════

  ╭════ • ›「 Internet 」
  ┠❥ .google <pesquisa>
  ┠❥ .googlef <pesquisa>
  ┠❥ .ss <url>
  ┠❥ .ssf <url>
  ╰═══════════════

  ╭════ • ›「 Downloader 」
  ┠❥ .modApk
  ╰═══════════════

  ╭════ • ›「 Ferramentas 」
  ┠❥ .tahta <texto> (Limite)
  ┠❥ .nulis <texto>
  ┠❥ .profile ●perfil●
  ┠❥ .readmore <texto> |  <texto>
  ┠❥ .spoiler <texto> |  <texto>
  ┠❥ .ping 
  ┠❥ .speed ●ping rápido●
  ┠❥ .estilo <texto>
  ┠❥ .ttp <texto> ●criar figura com nome●
  ╰═══════════════

  ╭════ • ›「 Torne-se um Bot 」
  ┠❥.gerarcodigo ●codigo QR●
  ┠❥.jadibot (Limite) ●criar bot●
  ┠❥.parar ●parar bot●
  ┠❥.stop ●pare●
  ╰═══════════════

  ╭════ • ›「 ADMIN 」
  ┠❥ .banchat
  ┠❥ .broadcast <texto>
  ┠❥ .bc <texto>
  ┠❥ .broadcastgroup <texto>
  ┠❥ .bcgc <texto>
  ┠❥ .deletechat ●apagar bate-papo●
  ┠❥ .deletechat (grupo)
  ┠❥ .mutechat ●silenciar bate-papo●
  ┠❥ .mutechat (grupo)
  ┠❥ .oadd @user ●adicionar●
  ┠❥ .o+ @user ●adicionar user●
  ┠❥ .odemote @user
  ┠❥ .omember @user
  ┠❥ .ov @user
  ┠❥ .okick @user
  ┠❥ .o- @user
  ┠❥ .o Anúncio [texto]
  ┠❥ .ohidetag [texto]
  ┠❥ .opromote @user
  ┠❥ .oadmin @user
  ┠❥ .o ^ @user
  ┠❥ .setmenu <texto>
  ┠❥ .setmenubefore <text>
  ┠❥ .setmenuheader <texto>
  ┠❥ .setmenubody <texto>
  ┠❥ .setmenufooter <texto>
  ┠❥ .setmenuafter <text>
  ┠❥ .banirdogrupo 
  ╰═══════════════

  ╭════ • ›「 Host 」
  ┠❥ .broadcastjadibot <texto>
  ┠❥ .bcbot <texto>
  ┠❥ .resetarbot
  ┠❥ .update ●atualizar●
  ╰═══════════════

  ╭════ • ›「 Avançado 」
  ┠❥>.math game ●jogo de matemática●
  ┠❥ =>
  ╰═══════════════

  ╭════ • ›「 Informações 」
  ┠❥ .groups
  ┠❥ .grouplist
  ┠❥ .ping
  ┠❥ .speed
  ╰═══════════════

  ╭════ • ›「 CRÉDITOS 」
  ┠❥.  📱CANAL: https://www.youtube.com/channel/UCIEuAWtpsNa2GAS65NhDUJg 📱
           📱CONTADO: https://wa.me/qr/KADPB6Y2CXFCN1📱 ╰═══════════════
═〘 WERBERT-MODS〙═
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
