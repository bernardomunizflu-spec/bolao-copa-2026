// ─── GRUPOS OFICIAIS Copa do Mundo 2026 ───────────────────────────────────────
export const GRUPOS = {
  A: ["Mexico", "SouthAfrica", "SouthKorea", "CzechRepublic"],
  B: ["Canada", "Bosnia", "Qatar", "Switzerland"],
  C: ["Brazil", "Morocco", "Haiti", "Scotland"],
  D: ["USA", "Paraguay", "Australia", "Turkey"],
  E: ["Germany", "Curacao", "IvoryCoast", "Ecuador"],
  F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
  G: ["Belgium", "Egypt", "Iran", "NewZealand"],
  H: ["Spain", "CapeVerde", "SaudiArabia", "Uruguay"],
  I: ["France", "Senegal", "Iraq", "Norway"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "DRCongo", "Uzbekistan", "Colombia"],
  L: ["England", "Croatia", "Ghana", "Panama"],
}

export const NOMES_PT = {
  Mexico:"México",SouthAfrica:"África do Sul",SouthKorea:"Coreia do Sul",CzechRepublic:"Rep. Tcheca",
  Canada:"Canadá",Bosnia:"Bósnia",Qatar:"Qatar",Switzerland:"Suíça",
  Brazil:"Brasil",Morocco:"Marrocos",Haiti:"Haiti",Scotland:"Escócia",
  USA:"EUA",Paraguay:"Paraguai",Australia:"Austrália",Turkey:"Turquia",
  Germany:"Alemanha",Curacao:"Curaçao",IvoryCoast:"Costa do Marfim",Ecuador:"Equador",
  Netherlands:"Holanda",Japan:"Japão",Sweden:"Suécia",Tunisia:"Tunísia",
  Belgium:"Bélgica",Egypt:"Egito",Iran:"Irã",NewZealand:"Nova Zelândia",
  Spain:"Espanha",CapeVerde:"Cabo Verde",SaudiArabia:"Arábia Saudita",Uruguay:"Uruguai",
  France:"França",Senegal:"Senegal",Iraq:"Iraque",Norway:"Noruega",
  Argentina:"Argentina",Algeria:"Argélia",Austria:"Áustria",Jordan:"Jordânia",
  Portugal:"Portugal",DRCongo:"RD Congo",Uzbekistan:"Uzbequistão",Colombia:"Colômbia",
  England:"Inglaterra",Croatia:"Croácia",Ghana:"Gana",Panama:"Panamá",
  TBD:"A definir",
}

export const BANDEIRAS = {
  Mexico:"🇲🇽",SouthAfrica:"🇿🇦",SouthKorea:"🇰🇷",CzechRepublic:"🇨🇿",
  Canada:"🇨🇦",Bosnia:"🇧🇦",Qatar:"🇶🇦",Switzerland:"🇨🇭",
  Brazil:"🇧🇷",Morocco:"🇲🇦",Haiti:"🇭🇹",Scotland:"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  USA:"🇺🇸",Paraguay:"🇵🇾",Australia:"🇦🇺",Turkey:"🇹🇷",
  Germany:"🇩🇪",Curacao:"🇨🇼",IvoryCoast:"🇨🇮",Ecuador:"🇪🇨",
  Netherlands:"🇳🇱",Japan:"🇯🇵",Sweden:"🇸🇪",Tunisia:"🇹🇳",
  Belgium:"🇧🇪",Egypt:"🇪🇬",Iran:"🇮🇷",NewZealand:"🇳🇿",
  Spain:"🇪🇸",CapeVerde:"🇨🇻",SaudiArabia:"🇸🇦",Uruguay:"🇺🇾",
  France:"🇫🇷",Senegal:"🇸🇳",Iraq:"🇮🇶",Norway:"🇳🇴",
  Argentina:"🇦🇷",Algeria:"🇩🇿",Austria:"🇦🇹",Jordan:"🇯🇴",
  Portugal:"🇵🇹",DRCongo:"🇨🇩",Uzbekistan:"🇺🇿",Colombia:"🇨🇴",
  England:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",Croatia:"🇭🇷",Ghana:"🇬🇭",Panama:"🇵🇦",
  TBD:"🏳️",
}

// ─── JOGOS DA FASE DE GRUPOS com data/hora (horário de Brasília) ───────────────
// Formato isoDate usado para bloquear palpites após o horário do jogo
export const JOGOS_GRUPOS = [
  // Rodada 1
  {id:"g1",  fase:"grupos",grupo:"A",casa:"Mexico",     fora:"SouthAfrica",  placar:null, dataHora:"2026-06-11T20:00:00-03:00"},
  {id:"g2",  fase:"grupos",grupo:"B",casa:"Canada",     fora:"Bosnia",       placar:null, dataHora:"2026-06-12T16:00:00-03:00"},
  {id:"g3",  fase:"grupos",grupo:"B",casa:"Qatar",      fora:"Switzerland",  placar:null, dataHora:"2026-06-12T19:00:00-03:00"},
  {id:"g4",  fase:"grupos",grupo:"C",casa:"Brazil",     fora:"Morocco",      placar:null, dataHora:"2026-06-13T19:00:00-03:00"},
  {id:"g5",  fase:"grupos",grupo:"D",casa:"USA",        fora:"Paraguay",     placar:null, dataHora:"2026-06-13T22:00:00-03:00"},
  {id:"g6",  fase:"grupos",grupo:"A",casa:"SouthKorea", fora:"CzechRepublic",placar:null, dataHora:"2026-06-14T13:00:00-03:00"},
  {id:"g7",  fase:"grupos",grupo:"E",casa:"Germany",    fora:"Curacao",      placar:null, dataHora:"2026-06-14T16:00:00-03:00"},
  {id:"g8",  fase:"grupos",grupo:"E",casa:"IvoryCoast", fora:"Ecuador",      placar:null, dataHora:"2026-06-14T19:00:00-03:00"},
  {id:"g9",  fase:"grupos",grupo:"F",casa:"Netherlands",fora:"Japan",        placar:null, dataHora:"2026-06-14T22:00:00-03:00"},
  {id:"g10", fase:"grupos",grupo:"C",casa:"Haiti",      fora:"Scotland",     placar:null, dataHora:"2026-06-15T13:00:00-03:00"},
  {id:"g11", fase:"grupos",grupo:"H",casa:"Spain",      fora:"CapeVerde",    placar:null, dataHora:"2026-06-15T15:00:00-03:00"},
  {id:"g12", fase:"grupos",grupo:"G",casa:"Belgium",    fora:"Egypt",        placar:null, dataHora:"2026-06-15T16:00:00-03:00"},
  {id:"g13", fase:"grupos",grupo:"H",casa:"SaudiArabia",fora:"Uruguay",      placar:null, dataHora:"2026-06-15T19:00:00-03:00"},
  {id:"g14", fase:"grupos",grupo:"G",casa:"Iran",       fora:"NewZealand",   placar:null, dataHora:"2026-06-15T22:00:00-03:00"},
  {id:"g15", fase:"grupos",grupo:"I",casa:"France",     fora:"Senegal",      placar:null, dataHora:"2026-06-16T16:00:00-03:00"},
  {id:"g16", fase:"grupos",grupo:"I",casa:"Iraq",       fora:"Norway",       placar:null, dataHora:"2026-06-16T19:00:00-03:00"},
  {id:"g17", fase:"grupos",grupo:"J",casa:"Argentina",  fora:"Algeria",      placar:null, dataHora:"2026-06-16T22:00:00-03:00"},
  {id:"g18", fase:"grupos",grupo:"J",casa:"Austria",    fora:"Jordan",       placar:null, dataHora:"2026-06-17T01:00:00-03:00"},
  {id:"g19", fase:"grupos",grupo:"K",casa:"Portugal",   fora:"DRCongo",      placar:null, dataHora:"2026-06-17T14:00:00-03:00"},
  {id:"g20", fase:"grupos",grupo:"L",casa:"England",    fora:"Croatia",      placar:null, dataHora:"2026-06-17T17:00:00-03:00"},
  {id:"g21", fase:"grupos",grupo:"L",casa:"Ghana",      fora:"Panama",       placar:null, dataHora:"2026-06-17T20:00:00-03:00"},
  {id:"g22", fase:"grupos",grupo:"K",casa:"Uzbekistan", fora:"Colombia",     placar:null, dataHora:"2026-06-17T23:00:00-03:00"},
  {id:"g23", fase:"grupos",grupo:"A",casa:"CzechRepublic",fora:"SouthAfrica",placar:null, dataHora:"2026-06-18T13:00:00-03:00"},
  {id:"g24", fase:"grupos",grupo:"B",casa:"Switzerland",fora:"Canada",       placar:null, dataHora:"2026-06-18T16:00:00-03:00"},
  // Rodada 2
  {id:"g25", fase:"grupos",grupo:"A",casa:"Mexico",     fora:"SouthKorea",   placar:null, dataHora:"2026-06-18T22:00:00-03:00"},
  {id:"g26", fase:"grupos",grupo:"B",casa:"Bosnia",     fora:"Qatar",        placar:null, dataHora:"2026-06-19T13:00:00-03:00"},
  {id:"g27", fase:"grupos",grupo:"C",casa:"Brazil",     fora:"Haiti",        placar:null, dataHora:"2026-06-19T19:00:00-03:00"},
  {id:"g28", fase:"grupos",grupo:"D",casa:"Australia",  fora:"Turkey",       placar:null, dataHora:"2026-06-19T22:00:00-03:00"},
  {id:"g29", fase:"grupos",grupo:"D",casa:"USA",        fora:"Australia",    placar:null, dataHora:"2026-06-20T16:00:00-03:00"},
  {id:"g30", fase:"grupos",grupo:"E",casa:"Germany",    fora:"IvoryCoast",   placar:null, dataHora:"2026-06-20T19:00:00-03:00"},
  {id:"g31", fase:"grupos",grupo:"F",casa:"Sweden",     fora:"Tunisia",      placar:null, dataHora:"2026-06-20T22:00:00-03:00"},
  {id:"g32", fase:"grupos",grupo:"F",casa:"Netherlands",fora:"Sweden",       placar:null, dataHora:"2026-06-21T13:00:00-03:00"},
  {id:"g33", fase:"grupos",grupo:"G",casa:"Belgium",    fora:"Iran",         placar:null, dataHora:"2026-06-21T16:00:00-03:00"},
  {id:"g34", fase:"grupos",grupo:"H",casa:"Spain",      fora:"SaudiArabia",  placar:null, dataHora:"2026-06-21T19:00:00-03:00"},
  {id:"g35", fase:"grupos",grupo:"H",casa:"CapeVerde",  fora:"Uruguay",      placar:null, dataHora:"2026-06-21T22:00:00-03:00"},
  {id:"g36", fase:"grupos",grupo:"G",casa:"Egypt",      fora:"NewZealand",   placar:null, dataHora:"2026-06-22T13:00:00-03:00"},
  {id:"g37", fase:"grupos",grupo:"I",casa:"France",     fora:"Iraq",         placar:null, dataHora:"2026-06-22T16:00:00-03:00"},
  {id:"g38", fase:"grupos",grupo:"I",casa:"Senegal",    fora:"Norway",       placar:null, dataHora:"2026-06-22T19:00:00-03:00"},
  {id:"g39", fase:"grupos",grupo:"J",casa:"Argentina",  fora:"Austria",      placar:null, dataHora:"2026-06-22T22:00:00-03:00"},
  {id:"g40", fase:"grupos",grupo:"J",casa:"Algeria",    fora:"Jordan",       placar:null, dataHora:"2026-06-23T01:00:00-03:00"},
  {id:"g41", fase:"grupos",grupo:"K",casa:"Portugal",   fora:"Uzbekistan",   placar:null, dataHora:"2026-06-23T14:00:00-03:00"},
  {id:"g42", fase:"grupos",grupo:"L",casa:"England",    fora:"Ghana",        placar:null, dataHora:"2026-06-23T17:00:00-03:00"},
  {id:"g43", fase:"grupos",grupo:"L",casa:"Croatia",    fora:"Panama",       placar:null, dataHora:"2026-06-23T20:00:00-03:00"},
  {id:"g44", fase:"grupos",grupo:"K",casa:"DRCongo",    fora:"Colombia",     placar:null, dataHora:"2026-06-23T23:00:00-03:00"},
  // Rodada 3
  {id:"g45", fase:"grupos",grupo:"A",casa:"SouthAfrica",fora:"SouthKorea",   placar:null, dataHora:"2026-06-25T16:00:00-03:00"},
  {id:"g46", fase:"grupos",grupo:"A",casa:"Mexico",     fora:"CzechRepublic",placar:null, dataHora:"2026-06-25T16:00:00-03:00"},
  {id:"g47", fase:"grupos",grupo:"B",casa:"Canada",     fora:"Qatar",        placar:null, dataHora:"2026-06-25T20:00:00-03:00"},
  {id:"g48", fase:"grupos",grupo:"B",casa:"Bosnia",     fora:"Switzerland",  placar:null, dataHora:"2026-06-25T20:00:00-03:00"},
  {id:"g49", fase:"grupos",grupo:"C",casa:"Brazil",     fora:"Scotland",     placar:null, dataHora:"2026-06-24T19:00:00-03:00"},
  {id:"g50", fase:"grupos",grupo:"C",casa:"Morocco",    fora:"Haiti",        placar:null, dataHora:"2026-06-24T19:00:00-03:00"},
  {id:"g51", fase:"grupos",grupo:"D",casa:"Paraguay",   fora:"Turkey",       placar:null, dataHora:"2026-06-25T13:00:00-03:00"},
  {id:"g52", fase:"grupos",grupo:"D",casa:"USA",        fora:"Australia",    placar:null, dataHora:"2026-06-25T13:00:00-03:00"},
  {id:"g53", fase:"grupos",grupo:"E",casa:"Germany",    fora:"Ecuador",      placar:null, dataHora:"2026-06-26T16:00:00-03:00"},
  {id:"g54", fase:"grupos",grupo:"E",casa:"Curacao",    fora:"IvoryCoast",   placar:null, dataHora:"2026-06-26T16:00:00-03:00"},
  {id:"g55", fase:"grupos",grupo:"F",casa:"Netherlands",fora:"Tunisia",      placar:null, dataHora:"2026-06-26T20:00:00-03:00"},
  {id:"g56", fase:"grupos",grupo:"F",casa:"Japan",      fora:"Sweden",       placar:null, dataHora:"2026-06-26T20:00:00-03:00"},
  {id:"g57", fase:"grupos",grupo:"G",casa:"Belgium",    fora:"NewZealand",   placar:null, dataHora:"2026-06-27T13:00:00-03:00"},
  {id:"g58", fase:"grupos",grupo:"G",casa:"Egypt",      fora:"Iran",         placar:null, dataHora:"2026-06-27T13:00:00-03:00"},
  {id:"g59", fase:"grupos",grupo:"H",casa:"Spain",      fora:"Uruguay",      placar:null, dataHora:"2026-06-27T16:00:00-03:00"},
  {id:"g60", fase:"grupos",grupo:"H",casa:"CapeVerde",  fora:"SaudiArabia",  placar:null, dataHora:"2026-06-27T16:00:00-03:00"},
  {id:"g61", fase:"grupos",grupo:"I",casa:"France",     fora:"Norway",       placar:null, dataHora:"2026-06-27T19:00:00-03:00"},
  {id:"g62", fase:"grupos",grupo:"I",casa:"Senegal",    fora:"Iraq",         placar:null, dataHora:"2026-06-27T19:00:00-03:00"},
  {id:"g63", fase:"grupos",grupo:"J",casa:"Argentina",  fora:"Jordan",       placar:null, dataHora:"2026-06-27T22:00:00-03:00"},
  {id:"g64", fase:"grupos",grupo:"J",casa:"Algeria",    fora:"Austria",      placar:null, dataHora:"2026-06-27T22:00:00-03:00"},
  {id:"g65", fase:"grupos",grupo:"K",casa:"Portugal",   fora:"Colombia",     placar:null, dataHora:"2026-06-28T13:00:00-03:00"},
  {id:"g66", fase:"grupos",grupo:"K",casa:"DRCongo",    fora:"Uzbekistan",   placar:null, dataHora:"2026-06-28T13:00:00-03:00"},
  {id:"g67", fase:"grupos",grupo:"L",casa:"England",    fora:"Panama",       placar:null, dataHora:"2026-06-28T16:00:00-03:00"},
  {id:"g68", fase:"grupos",grupo:"L",casa:"Croatia",    fora:"Ghana",        placar:null, dataHora:"2026-06-28T16:00:00-03:00"},
]

// ─── MATA-MATA ────────────────────────────────────────────────────────────────
export const R32 = [
  {id:"r32_j1", fase:"matamata",label:"J1", desc:"1º Grupo A × 2º Grupo B",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-28T19:00:00-03:00"},
  {id:"r32_j2", fase:"matamata",label:"J2", desc:"1º Grupo C × 2º Grupo D",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-28T22:00:00-03:00"},
  {id:"r32_j3", fase:"matamata",label:"J3", desc:"1º Grupo E × 2º Grupo F",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-29T16:00:00-03:00"},
  {id:"r32_j4", fase:"matamata",label:"J4", desc:"1º Grupo G × 2º Grupo H",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-29T20:00:00-03:00"},
  {id:"r32_j5", fase:"matamata",label:"J5", desc:"1º Grupo I × 2º Grupo J",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-30T16:00:00-03:00"},
  {id:"r32_j6", fase:"matamata",label:"J6", desc:"1º Grupo K × 2º Grupo L",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-30T20:00:00-03:00"},
  {id:"r32_j7", fase:"matamata",label:"J7", desc:"1º Grupo B × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-01T16:00:00-03:00"},
  {id:"r32_j8", fase:"matamata",label:"J8", desc:"1º Grupo D × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-01T20:00:00-03:00"},
  {id:"r32_j9", fase:"matamata",label:"J9", desc:"1º Grupo F × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-02T16:00:00-03:00"},
  {id:"r32_j10",fase:"matamata",label:"J10",desc:"1º Grupo H × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-02T20:00:00-03:00"},
  {id:"r32_j11",fase:"matamata",label:"J11",desc:"1º Grupo J × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-03T16:00:00-03:00"},
  {id:"r32_j12",fase:"matamata",label:"J12",desc:"1º Grupo L × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-03T20:00:00-03:00"},
  {id:"r32_j13",fase:"matamata",label:"J13",desc:"2º Grupo A × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-29T00:00:00-03:00"},
  {id:"r32_j14",fase:"matamata",label:"J14",desc:"2º Grupo C × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-06-30T00:00:00-03:00"},
  {id:"r32_j15",fase:"matamata",label:"J15",desc:"2º Grupo E × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-01T00:00:00-03:00"},
  {id:"r32_j16",fase:"matamata",label:"J16",desc:"2º Grupo G × 3º classif.", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-02T00:00:00-03:00"},
]
export const OITAVAS = [
  {id:"o_1",fase:"matamata",label:"O1",desc:"Venc. J1 × Venc. J2",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-04T16:00:00-03:00"},
  {id:"o_2",fase:"matamata",label:"O2",desc:"Venc. J3 × Venc. J4",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-04T20:00:00-03:00"},
  {id:"o_3",fase:"matamata",label:"O3",desc:"Venc. J5 × Venc. J6",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-05T16:00:00-03:00"},
  {id:"o_4",fase:"matamata",label:"O4",desc:"Venc. J7 × Venc. J8",  casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-05T20:00:00-03:00"},
  {id:"o_5",fase:"matamata",label:"O5",desc:"Venc. J9 × Venc. J10", casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-06T16:00:00-03:00"},
  {id:"o_6",fase:"matamata",label:"O6",desc:"Venc. J11 × Venc. J12",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-06T20:00:00-03:00"},
  {id:"o_7",fase:"matamata",label:"O7",desc:"Venc. J13 × Venc. J14",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-07T16:00:00-03:00"},
  {id:"o_8",fase:"matamata",label:"O8",desc:"Venc. J15 × Venc. J16",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-07T20:00:00-03:00"},
]
export const QUARTAS = [
  {id:"q_1",fase:"matamata",label:"Q1",desc:"Venc. O1 × Venc. O2",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-09T16:00:00-03:00"},
  {id:"q_2",fase:"matamata",label:"Q2",desc:"Venc. O3 × Venc. O4",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-09T20:00:00-03:00"},
  {id:"q_3",fase:"matamata",label:"Q3",desc:"Venc. O5 × Venc. O6",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-10T16:00:00-03:00"},
  {id:"q_4",fase:"matamata",label:"Q4",desc:"Venc. O7 × Venc. O8",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-11T20:00:00-03:00"},
]
export const SEMIS = [
  {id:"s_1",fase:"matamata",label:"SF1",desc:"Venc. Q1 × Venc. Q2",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-14T20:00:00-03:00"},
  {id:"s_2",fase:"matamata",label:"SF2",desc:"Venc. Q3 × Venc. Q4",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-15T20:00:00-03:00"},
]
export const TERCEIRO = [
  {id:"terceiro",fase:"matamata",label:"3º lugar",desc:"Perd. SF1 × Perd. SF2",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-18T16:00:00-03:00"},
]
export const FINAL = [
  {id:"final",fase:"matamata",label:"🏆 FINAL",desc:"Venc. SF1 × Venc. SF2 — MetLife Stadium",casa:"TBD",fora:"TBD",placar:null,dataHora:"2026-07-19T17:00:00-03:00"},
]

// ─── PONTUAÇÃO SIMPLIFICADA ───────────────────────────────────────────────────
// 3pts = placar exato | 1pt = vencedor/empate certo | 0pts = errou
export function calcularPontos(palpite, resultado) {
  if (!palpite || !resultado) return 0
  if (palpite.casa === undefined || palpite.fora === undefined) return 0
  if (resultado.casa === undefined || resultado.fora === undefined) return 0
  const pc = Number(palpite.casa), pf = Number(palpite.fora)
  const rc = Number(resultado.casa), rf = Number(resultado.fora)
  if (pc === rc && pf === rf) return 3
  const vP = pc > pf ? 1 : pc < pf ? -1 : 0
  const vR = rc > rf ? 1 : rc < rf ? -1 : 0
  if (vP === vR) return 1
  return 0
}

export function calcularTotais(userId, todosJogos, todosPalpites) {
  const p = todosPalpites[userId] || {}
  let pontos = 0, exatos = 0, acertos = 0, palpitados = 0
  todosJogos.forEach(j => {
    if (p[j.id]) palpitados++
    if (!j.placar || !p[j.id]) return
    const pts = calcularPontos(p[j.id], j.placar)
    pontos += pts
    if (pts === 3) exatos++
    if (pts > 0) acertos++
  })
  return { pontos, exatos, acertos, palpitados }
}

export const TODOS_JOGOS_RAW = [
  ...JOGOS_GRUPOS, ...R32, ...OITAVAS, ...QUARTAS, ...SEMIS, ...TERCEIRO, ...FINAL
]
