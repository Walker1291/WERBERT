let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
〘 TRAVAS VIA MEDIAFIRE〙

🦁TRAVA LAZARO🦁
➥ https://www.mediafire.com/file/f6phg80bfivz0eb/travas_lazaro.zip/file
🏹TRAVAS ZAP IPHONE🏹
➥ https://www.mediafire.com/file/l2jcouaciiihhpw/TRAVAS+ZAP+iPhone.zip/file
☢TRAVAS ZAP ANDROID☠
➥https://www.mediafire.com/file/ncoj0slw4k6aylg/TRAVAS+ZAP+ANDROID.zip/file
🏳DESTRAVA🏳
➥https://www.mediafire.com/file/obkef4nqr9li2x4/Destravas.rar/file
*🖲PACOTE DE TRAVA MAIS INFOS DADOS FULL🖲*
➥https://www.mediafire.com/file/5vcqsoio3rswqi1/pacote_de_travas_mais_infos_dados_full_para_usar.rar/file

〘 WERBERT 〙 
`.trim(), m)
}
handler.command = /^(travas)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler







