import { useState, useCallback } from 'react'
import { setPalpite } from '../lib/db'
import { GRUPOS, BANDEIRAS, NOMES_PT, calcularPontos, R32, OITAVAS, QUARTAS, SEMIS, TERCEIRO, FINAL } from '../lib/dados'
import styles from './Palpites.module.css'

const FASES = [
  { key:'grupos',  label:'Grupos' },
  { key:'r32',     label:'Rodada 32' },
  { key:'oitavas', label:'Oitavas' },
  { key:'quartas', label:'Quartas' },
  { key:'semis',   label:'Semis' },
  { key:'final',   label:'Final' },
]

const JOGOS_MATA = { r32:R32, oitavas:OITAVAS, quartas:QUARTAS, semis:SEMIS, final:[...TERCEIRO,...FINAL] }

function Flag({ time }) {
  const f = BANDEIRAS[time]
  if (!f || f==='🏳️') return <span style={{fontSize:24,opacity:0.3}}>🏳️</span>
  return <span style={{fontSize:24,lineHeight:1,fontFamily:'Apple Color Emoji,Segoe UI Emoji,sans-serif'}}>{f}</span>
}

function formatarData(isoStr) {
  if (!isoStr) return ''
  const d = new Date(isoStr)
  return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit'}) + ' ' +
         d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})
}

function jogoAberto(dataHora) {
  if (!dataHora) return true
  return new Date() < new Date(dataHora)
}

export default function Palpites({ usuario, jogos, palpites, ranking }) {
  const [fase, setFase] = useState('grupos')
  const [grupo, setGrupo] = useState('A')

  const meusPalpites = palpites[usuario.id] || {}
  const minhaPos = ranking.findIndex(r => r.id===usuario.id) + 1
  const meuRank = ranking.find(r => r.id===usuario.id)
  const totalPalpitados = Object.keys(meusPalpites).length

  const handlePalpite = useCallback(async (jogoId, lado, valor, dataHora) => {
    if (!jogoAberto(dataHora)) return
    const num = parseInt(valor)
    if (isNaN(num) || num<0 || num>20) return
    const outro = lado==='casa'?'fora':'casa'
    const outroPalpite = meusPalpites[jogoId]?.[outro]
    const casa = lado==='casa' ? num : (outroPalpite??0)
    const fora = lado==='fora' ? num : (outroPalpite??0)
    await setPalpite(usuario.id, jogoId, casa, fora)
  }, [usuario.id, meusPalpites])

  // Jogos do grupo ordenados por data
  const jogosGrupoOrdenados = jogos
    .filter(j => j.fase==='grupos' && j.grupo===grupo)
    .sort((a,b) => new Date(a.dataHora)-new Date(b.dataHora))

  const jogosMata = fase==='grupos' ? [] :
    (JOGOS_MATA[fase]||[]).map(j => ({
      ...j, placar: jogos.find(x=>x.id===j.id)?.placar ?? null
    }))

  const jogosMostrar = fase==='grupos' ? jogosGrupoOrdenados : jogosMata

  return (
    <div className={styles.page}>
      <div className={styles.statusBar}>
        <div className={styles.statusInner}>
          <div className={styles.statusLeft}>
            <span className={styles.welcome}>👋 {usuario.apelido||usuario.nome}</span>
            <span className={styles.progress}>{totalPalpitados} palpites</span>
          </div>
          <div className={styles.statusRight}>
            {meuRank && <>
              <div className={styles.stat}>
                <span className={styles.statNum} style={{color:'var(--gold)'}}>{meuRank.pontos}</span>
                <span className={styles.statLbl}>pts</span>
              </div>
              {minhaPos>0 && <div className={styles.stat}>
                <span className={styles.statNum} style={{color:'var(--green)'}}>#{minhaPos}</span>
                <span className={styles.statLbl}>pos.</span>
              </div>}
            </>}
          </div>
        </div>
      </div>

      {/* Tabs fase */}
      <div className={styles.tabBar}>
        {FASES.map(f => (
          <button key={f.key} className={fase===f.key?styles.tabActive:styles.tab} onClick={()=>setFase(f.key)}>
            {f.label}
          </button>
        ))}
      </div>

      {/* Tabs grupo */}
      {fase==='grupos' && (
        <div className={styles.tabBar} style={{background:'#0a1e3a',borderBottom:'1px solid #1a3050'}}>
          {Object.keys(GRUPOS).map(g => (
            <button key={g} className={grupo===g?styles.tabActive:styles.tab} onClick={()=>setGrupo(g)}>{g}</button>
          ))}
        </div>
      )}

      <div className={styles.list}>
        {fase==='grupos' && (
          <p className={styles.grupoInfo}>
            Grupo {grupo}: {GRUPOS[grupo].map(t=>NOMES_PT[t]||t).join(' · ')}
          </p>
        )}
        {fase!=='grupos' && (
          <div className={styles.faseInfo}>
            💡 <strong>Pontuação:</strong> Placar exato = 3pts · Vencedor/Empate = 1pt
          </div>
        )}

        {jogosMostrar.map(jogo => {
          const p = meusPalpites[jogo.id] || {}
          const aberto = jogoAberto(jogo.dataHora)
          const foiJogado = jogo.placar !== null && jogo.placar !== undefined
          const temPalpite = p.casa!==undefined && p.fora!==undefined
          const pts = foiJogado && temPalpite ? calcularPontos(p, jogo.placar) : null
          const isTBD = jogo.casa==='TBD' || jogo.fora==='TBD'

          return (
            <div key={jogo.id}>
              {fase!=='grupos' && (
                <div className={styles.jogoLabel}>
                  <span className={styles.labelBadge}>{jogo.label}</span>
                  <span className={styles.labelDesc}>{jogo.desc}</span>
                </div>
              )}
              <div className={styles.jogoCard}>
                {/* Data/hora */}
                {jogo.dataHora && (
                  <div className={styles.jogoData}>
                    {formatarData(jogo.dataHora)}
                    {!aberto && !foiJogado && <span className={styles.encerrado}> · encerrado</span>}
                  </div>
                )}

                <div className={styles.jogoBody}>
                  <div className={styles.time}>
                    <Flag time={jogo.casa} />
                    <span className={styles.timeName}>{NOMES_PT[jogo.casa]||jogo.casa}</span>
                  </div>

                  <div className={styles.placarArea}>
                    <input
                      className={`${styles.placarInput} ${p.casa!==undefined?styles.filled:''} ${(!aberto&&!foiJogado)?styles.locked:''}`}
                      type="number" min="0" max="20"
                      value={p.casa??''}
                      placeholder="–"
                      disabled={foiJogado||!aberto||isTBD}
                      onChange={e=>handlePalpite(jogo.id,'casa',e.target.value,jogo.dataHora)}
                    />
                    <span className={styles.vs}>×</span>
                    <input
                      className={`${styles.placarInput} ${p.fora!==undefined?styles.filled:''} ${(!aberto&&!foiJogado)?styles.locked:''}`}
                      type="number" min="0" max="20"
                      value={p.fora??''}
                      placeholder="–"
                      disabled={foiJogado||!aberto||isTBD}
                      onChange={e=>handlePalpite(jogo.id,'fora',e.target.value,jogo.dataHora)}
                    />
                  </div>

                  <div className={styles.time} style={{alignItems:'flex-end'}}>
                    <Flag time={jogo.fora} />
                    <span className={styles.timeName}>{NOMES_PT[jogo.fora]||jogo.fora}</span>
                  </div>

                  <div className={styles.status}>
                    {foiJogado ? (
                      <div className={styles.resultado}>
                        <span className={styles.resultadoLabel}>Resultado</span>
                        <span className={styles.resultadoPlacar}>{jogo.placar.casa} × {jogo.placar.fora}</span>
                        {pts!==null && (
                          <span className={`${styles.pts} ${pts===3?styles.ptsHigh:pts===1?styles.ptsMed:styles.ptsZero}`}>
                            +{pts}pts
                          </span>
                        )}
                      </div>
                    ) : isTBD ? (
                      <span style={{fontSize:11,color:'#4a6a8a'}}>aguardando</span>
                    ) : !aberto ? (
                      <span style={{fontSize:11,color:'#fb923c'}}>🔒</span>
                    ) : (
                      <span className={temPalpite?styles.ok:styles.pending}>
                        {temPalpite?'✅':'—'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
