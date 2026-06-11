import { useState } from 'react'
import { aprovarUsuario, excluirUsuario, setResultado } from '../lib/db'
import { GRUPOS, BANDEIRAS, NOMES_PT, JOGOS_GRUPOS, R32, OITAVAS, QUARTAS, SEMIS, TERCEIRO, FINAL } from '../lib/dados'
import styles from './Admin.module.css'

const FASES_ADMIN = [
  {key:'grupos',label:'Grupos'},{key:'r32',label:'R32'},{key:'oitavas',label:'Oitavas'},
  {key:'quartas',label:'Quartas'},{key:'semis',label:'Semis'},{key:'final',label:'Final'},
]
const JOGOS_FASE = { r32:R32, oitavas:OITAVAS, quartas:QUARTAS, semis:SEMIS, final:[...TERCEIRO,...FINAL] }

function Flag({time}) {
  const f = BANDEIRAS[time]
  if (!f||f==='🏳️') return <span style={{opacity:0.3}}>🏳️</span>
  return <span style={{fontFamily:'Apple Color Emoji,Segoe UI Emoji,sans-serif'}}>{f}</span>
}

export default function Admin({ usuarios, resultados }) {
  const [faseAdmin, setFaseAdmin] = useState('grupos')
  const [grupoAdmin, setGrupoAdmin] = useState('A')
  const [confirmExcluir, setConfirmExcluir] = useState(null)

  const pendentes = Object.entries(usuarios).filter(([,u]) => !u.aprovado && !u.admin)
  const aprovados = Object.entries(usuarios).filter(([,u]) => u.aprovado && !u.admin)

  async function handleResultado(jogoId, lado, valor) {
    const num = parseInt(valor)
    if (isNaN(num)||num<0||num>20) return
    const atual = resultados[jogoId] || {}
    const casa = lado==='casa' ? num : (atual.casa??0)
    const fora = lado==='fora' ? num : (atual.fora??0)
    await setResultado(jogoId, casa, fora)
  }

  async function confirmarExclusao(id) {
    await excluirUsuario(id)
    setConfirmExcluir(null)
  }

  const jogosParaMostrar = faseAdmin==='grupos'
    ? JOGOS_GRUPOS.filter(j => j.grupo===grupoAdmin)
      .sort((a,b) => new Date(a.dataHora)-new Date(b.dataHora))
    : (JOGOS_FASE[faseAdmin]||[])

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h2 className={styles.title}>⚙️ Painel do Organizador</h2>

        {/* Modal confirmar exclusão */}
        {confirmExcluir && (
          <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200}}>
            <div style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:12,padding:28,maxWidth:320,textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>⚠️</div>
              <p style={{marginBottom:8,fontWeight:700}}>Excluir participante?</p>
              <p style={{color:'var(--muted)',fontSize:14,marginBottom:20}}>
                <strong>{confirmExcluir.nome}</strong> será removido e todos seus palpites apagados. Isso não pode ser desfeito.
              </p>
              <div style={{display:'flex',gap:10,justifyContent:'center'}}>
                <button style={{background:'var(--bg3)',border:'none',color:'var(--text)',borderRadius:8,padding:'8px 20px',cursor:'pointer'}}
                  onClick={()=>setConfirmExcluir(null)}>Cancelar</button>
                <button style={{background:'#ef4444',border:'none',color:'#fff',borderRadius:8,padding:'8px 20px',fontWeight:700,cursor:'pointer'}}
                  onClick={()=>confirmarExclusao(confirmExcluir.id)}>Excluir</button>
              </div>
            </div>
          </div>
        )}

        {/* Pendentes */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle} style={{color:'#fb923c'}}>
            Aguardando aprovação <span className={styles.count}>{pendentes.length}</span>
          </h3>
          {pendentes.length===0
            ? <p className={styles.empty}>Nenhum cadastro pendente.</p>
            : pendentes.map(([id,u]) => (
              <div key={id} className={styles.userRow}>
                <div>
                  <span className={styles.userName}>{u.nome}</span>
                  {u.apelido!==u.nome && <span className={styles.userApelido}> ({u.apelido})</span>}
                </div>
                <div style={{display:'flex',gap:8}}>
                  <button className={styles.btnAprovar} onClick={()=>aprovarUsuario(id)}>✅ Aprovar</button>
                  <button className={styles.btnExcluir} onClick={()=>setConfirmExcluir({id,nome:u.apelido||u.nome})}>🗑️</button>
                </div>
              </div>
            ))
          }
        </div>

        {/* Aprovados */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle} style={{color:'var(--green)'}}>
            Participantes aprovados <span className={styles.count}>{aprovados.length}</span>
          </h3>
          {aprovados.length===0
            ? <p className={styles.empty}>Nenhum participante ainda.</p>
            : aprovados.map(([id,u]) => (
              <div key={id} className={styles.userRow}>
                <span className={styles.userName}>{u.apelido||u.nome}</span>
                <button className={styles.btnExcluir} onClick={()=>setConfirmExcluir({id,nome:u.apelido||u.nome})}>🗑️ Excluir</button>
              </div>
            ))
          }
        </div>

        {/* Resultados */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle} style={{color:'var(--blue)'}}>Inserir resultados</h3>
          <div className={styles.grupoTabs}>
            {FASES_ADMIN.map(f => (
              <button key={f.key} className={faseAdmin===f.key?styles.tabActive:styles.tab}
                onClick={()=>setFaseAdmin(f.key)}>{f.label}</button>
            ))}
          </div>
          {faseAdmin==='grupos' && (
            <div className={styles.grupoTabs} style={{marginBottom:16}}>
              {Object.keys(GRUPOS).map(g => (
                <button key={g} className={grupoAdmin===g?styles.tabActive:styles.tab}
                  onClick={()=>setGrupoAdmin(g)}>G{g}</button>
              ))}
            </div>
          )}
          {jogosParaMostrar.map(jogo => {
            const res = resultados[jogo.id]
            return (
              <div key={jogo.id} className={styles.jogoRow}>
                {faseAdmin!=='grupos' && <span className={styles.jogoLabel2}>{jogo.label}</span>}
                <Flag time={jogo.casa}/>
                <span className={styles.jogoTime}>{NOMES_PT[jogo.casa]||jogo.casa}</span>
                <input className={`${styles.resInput} ${res?.casa!==undefined?styles.resFilled:''}`}
                  type="number" min="0" max="20" value={res?.casa??''} placeholder="–"
                  onChange={e=>handleResultado(jogo.id,'casa',e.target.value)}/>
                <span className={styles.jogoVs}>×</span>
                <input className={`${styles.resInput} ${res?.fora!==undefined?styles.resFilled:''}`}
                  type="number" min="0" max="20" value={res?.fora??''} placeholder="–"
                  onChange={e=>handleResultado(jogo.id,'fora',e.target.value)}/>
                <span className={styles.jogoTime}>{NOMES_PT[jogo.fora]||jogo.fora}</span>
                <Flag time={jogo.fora}/>
                {res && <span className={styles.resDone}>✓</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
