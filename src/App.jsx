import { useState, useEffect } from 'react'
import { onUsuarios, onPalpites, onResultados } from './lib/db'
import { TODOS_JOGOS_RAW, calcularTotais } from './lib/dados'
import Landing  from './pages/Landing'
import Login    from './pages/Login'
import Cadastro from './pages/Cadastro'
import Palpites from './pages/Palpites'
import Ranking  from './pages/Ranking'
import Admin    from './pages/Admin'
import Navbar   from './components/Navbar'

export default function App() {
  const [tela, setTela] = useState('landing')
  const [usuario, setUsuario] = useState(null)
  const [usuarios, setUsuarios] = useState({})
  const [palpites, setPalpites] = useState({})
  const [resultados, setResultados] = useState({})

  const todosJogos = TODOS_JOGOS_RAW.map(j => ({
    ...j, placar: resultados[j.id] || null,
  }))

  const ranking = Object.entries(usuarios)
    .filter(([,u]) => u.aprovado && !u.admin)
    .map(([id,u]) => ({ id, nome: u.apelido||u.nome, ...calcularTotais(id, todosJogos, palpites) }))
    .sort((a,b) => b.pontos-a.pontos || b.exatos-a.exatos || b.acertos-a.acertos)

  useEffect(() => {
    const u1 = onUsuarios(setUsuarios)
    const u2 = onPalpites(setPalpites)
    const u3 = onResultados(setResultados)
    return () => { u1(); u2(); u3() }
  }, [])

  function login(id, d) { setUsuario({id,...d}); setTela(d.admin?'admin':'palpites') }
  function logout() { setUsuario(null); setTela('landing') }

  const ctx = { tela, setTela, usuario, login, logout, usuarios, palpites, jogos: todosJogos, ranking }

  return (
    <div style={{ minHeight:'100vh', background:'var(--bg)' }}>
      <Navbar {...ctx} />
      {tela==='landing'  && <Landing  {...ctx} />}
      {tela==='login'    && <Login    {...ctx} />}
      {tela==='cadastro' && <Cadastro {...ctx} />}
      {tela==='palpites' && usuario && !usuario.admin && <Palpites {...ctx} />}
      {tela==='ranking'  && <Ranking  {...ctx} />}
      {tela==='admin'    && usuario?.admin && <Admin {...ctx} resultados={resultados} />}
    </div>
  )
}
