import { useState } from 'react'
import { criarUsuario } from '../lib/db'
import styles from './Auth.module.css'

export default function Cadastro({ setTela, usuarios }) {
  const [form, setForm] = useState({ nome: '', apelido: '', senha: '', senha2: '' })
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleCadastro() {
    if (!form.nome || !form.senha) return setMsg('Nome e senha são obrigatórios.')
    if (form.senha !== form.senha2) return setMsg('As senhas não coincidem.')
    if (form.senha.length < 4) return setMsg('Senha precisa ter pelo menos 4 caracteres.')
    if (Object.values(usuarios).find(u => u.nome === form.nome)) return setMsg('Este nome já está em uso. Escolha outro.')

    setLoading(true)
    const id = `u_${Date.now()}_${Math.random().toString(36).slice(2,6)}`
    await criarUsuario(id, {
      nome: form.nome,
      apelido: form.apelido || form.nome,
      senha: form.senha,
      aprovado: false,
      admin: false,
    })
    setMsg('✅ Cadastro enviado! Aguarde o organizador aprovar sua entrada.')
    setForm({ nome: '', apelido: '', senha: '', senha2: '' })
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>🚀 Criar conta</h2>

        {msg && <div className={msg.startsWith('✅') ? styles.ok : styles.erro}>{msg}</div>}

        <label className={styles.label}>Nome de usuário <span className={styles.req}>*</span></label>
        <input
          className={styles.input}
          placeholder="ex: bernardo"
          value={form.nome}
          onChange={e => setForm({ ...form, nome: e.target.value })}
        />

        <label className={styles.label}>Apelido no ranking</label>
        <input
          className={styles.input}
          placeholder="ex: Craque Neto (opcional)"
          value={form.apelido}
          onChange={e => setForm({ ...form, apelido: e.target.value })}
        />

        <label className={styles.label}>Senha <span className={styles.req}>*</span></label>
        <input
          className={styles.input}
          type="password"
          placeholder="mínimo 4 caracteres"
          value={form.senha}
          onChange={e => setForm({ ...form, senha: e.target.value })}
        />

        <label className={styles.label}>Confirmar senha <span className={styles.req}>*</span></label>
        <input
          className={styles.input}
          type="password"
          placeholder="repita a senha"
          value={form.senha2}
          onChange={e => setForm({ ...form, senha2: e.target.value })}
          onKeyDown={e => e.key === 'Enter' && handleCadastro()}
        />

        <button className={styles.btnPrimary} onClick={handleCadastro} disabled={loading}>
          {loading ? 'Enviando...' : 'Criar conta →'}
        </button>

        <p className={styles.link}>
          Já tem conta? <span onClick={() => setTela('login')}>Entrar</span>
        </p>
      </div>
    </div>
  )
}
