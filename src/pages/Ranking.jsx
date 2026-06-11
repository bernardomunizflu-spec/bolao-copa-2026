import styles from './Ranking.module.css'
const MEDALHAS = ['🥇','🥈','🥉']

export default function Ranking({ ranking, usuario }) {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h2 className={styles.title}>🏆 Ranking Geral</h2>
        {ranking.length===0 && <div className={styles.vazio}>Nenhum participante aprovado ainda.</div>}
        {ranking.map((r,i) => (
          <div key={r.id} className={`${styles.card} ${i===0?styles.first:''} ${r.id===usuario?.id?styles.eu:''}`}>
            <div className={styles.pos}>
              {i<3 ? MEDALHAS[i] : <span className={styles.posNum}>#{i+1}</span>}
            </div>
            <div className={styles.info}>
              <div className={styles.nome}>
                {r.nome}
                {r.id===usuario?.id && <span className={styles.badge}>você</span>}
              </div>
              <div className={styles.detalhe}>{r.palpitados} palpites · {r.acertos} acertos · {r.exatos} placares exatos</div>
            </div>
            <div className={styles.pontos}>
              <span className={`${styles.pts} ${i===0?styles.ptsGold:''}`}>{r.pontos}</span>
              <span className={styles.ptsLabel}>pts</span>
            </div>
          </div>
        ))}
        <div className={styles.tabela}>
          <h3 className={styles.tabelaTitle}>Sistema de pontuação</h3>
          {[
            ['🎯','Placar exato','3 pts'],
            ['✅','Vencedor ou empate certo','1 pt'],
            ['❌','Errou o vencedor','0 pts'],
          ].map(([ic,d,p]) => (
            <div key={d} className={styles.tabelaRow}>
              <span>{ic} {d}</span>
              <span className={styles.tabelaPts}>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
