import styles from './Landing.module.css'

export default function Landing({ setTela, usuarios }) {
  const total = Object.keys(usuarios).length

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>Copa do Mundo · EUA, México e Canadá</div>
          <h1 className={styles.h1}>
            O <span className={styles.gold}>bolão</span> do<br />
            seu <span className={styles.green}>grupo</span>.
          </h1>
          <p className={styles.sub}>
            48 jogos. 32 países. Palpite em cada placar,<br />
            dispute com os amigos e acompanhe o ranking ao vivo.
          </p>
          <div className={styles.btns}>
            <button className={styles.btnPrimary} onClick={() => setTela('cadastro')}>
              Criar conta →
            </button>
            <button className={styles.btnSecondary} onClick={() => setTela('login')}>
              Já tenho conta
            </button>
          </div>
          <div className={styles.stats}>
            {[['48','Jogos'],['8','Grupos'],['32','Países'],[total || '—','Participantes']].map(([n,l]) => (
              <div key={l} className={styles.stat}>
                <span className={styles.statNum}>{n}</span>
                <span className={styles.statLabel}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className={styles.how}>
        <h2 className={styles.sectionTitle}>Como funciona</h2>
        <div className={styles.steps}>
          {[
            { ic: '📝', t: 'Cadastre-se', d: 'Crie sua conta. O organizador aprova sua entrada.' },
            { ic: '⚽', t: 'Palpite', d: 'Dê o placar exato de cada jogo. Pode editar até o apito inicial.' },
            { ic: '📊', t: 'Ganhe pontos', d: 'Placar exato = 25pts • Saldo certo = 20pts • Vencedor = 10pts' },
            { ic: '🏆', t: 'Ranking ao vivo', d: 'Acompanhe a classificação em tempo real a cada resultado.' },
          ].map(({ ic, t, d }) => (
            <div key={t} className={styles.step}>
              <span className={styles.stepIcon}>{ic}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
