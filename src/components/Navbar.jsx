import styles from './Navbar.module.css'

export default function Navbar({ tela, setTela, usuario, logout }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo} onClick={() => setTela(usuario ? 'palpites' : 'landing')}>
        ⚽ <span>BOLÃO</span> <em>2026</em>
      </span>

      <div className={styles.actions}>
        {usuario ? (
          <>
            {!usuario.admin && <button
              className={tela === 'palpites' ? styles.active : styles.btn}
              onClick={() => setTela('palpites')}
            >Palpites</button>}
            {!usuario.admin && <button
              className={tela === 'ranking' ? styles.active : styles.btn}
              onClick={() => setTela('ranking')}
            >Ranking</button>}
            {usuario.admin && (
              <button
                className={tela === 'admin' ? styles.active : styles.btn}
                onClick={() => setTela('admin')}
              >Admin</button>
            )}
            <button className={styles.logout} onClick={logout}>Sair</button>
          </>
        ) : (
          <>
            <button className={styles.btn} onClick={() => setTela('login')}>Entrar</button>
            <button className={styles.cta} onClick={() => setTela('cadastro')}>Cadastrar</button>
          </>
        )}
      </div>
    </nav>
  )
}
