import { useState } from 'react'
import { getUsuario, criarUsuario } from '../lib/db'
import styles from './Auth.module.css'

export default function Login({ setTela, login, usuarios }) {
  const [form, setForm] = useState({ nome: '', senha: '' })
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    if (!form.nome || !form.senha) return setMsg('Preencha todos os campos.')
    setLoading(true)
    setMsg('')
    const entry = Object.entries(usuarios).find(
      ([, u]) => u.nome === form.nome && u.senha === form.senha
    )
    if (!entry) { setMsg('Usuário ou senha incorretos.'); setLoading(false); return }
    const [id, dados] = entry
    if (!dados.aprovado) { setMsg('Cadastro ainda não aprovado pelo organizador. Aguarde!'); setLoading(false); return }
    login(id, dados)
    setLoading(false)
  }

  // Cria admin na primeira vez
  async function criarAdmin() {
    const jaExiste = Object.values(usuarios).find(u => u.nome === 'admin')
    if (jaExiste) { setMsg('Admin já existe. Use nome: admin / senha: admin2026'); return }
    await criarUsuario('admin_root', {
      nome: 'admin', senha: 'admin2026', apelido: 'Admin',
      aprovado: true, admin: true
    })
    setMsg('Conta admin criada! Nome: admin / Senha: admin2026')
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>⚽ Entrar no Bolão</h2>

        {msg && <div className={msg.includes('Aguarde') || msg.includes('incorretos') ? styles.erro : styles.ok}>{msg}</div>}

        <label className={styles.label}>Nome de usuário</label>
        <input
          className={styles.input}
          placeholder="seu nome"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
        />

        <label className={styles.label}>Senha</label>
        <input
          className={styles.input}
          type="password"
          placeholder="sua senha"
          value={form.senha}
          onChange={e => setForm({ ...form, senha: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && handleLogin()}
        />

        <button className={styles.btnPrimary} onClick={handleLogin} disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar →'}
        </button>

        <p className={styles.link}>
          Não tem conta?{' '}
          <span onClick={() => setTela('cadastro')}>Cadastrar</span>
        </p>

        <hr className={styles.divider} />
        <p className={styles.hint}>Primeira vez? Crie a conta de administrador:</p>
        <button className={styles.btnAdmin} onClick={criarAdmin}>
          Criar conta Admin
        </button>
      </div>
    </div>
  )
}
