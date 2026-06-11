import { ref, onValue, set, update, remove } from 'firebase/database'
import { db } from './firebase'

export function onUsuarios(cb) { return onValue(ref(db,'usuarios'), s => cb(s.val()||{})) }
export async function criarUsuario(id, dados) { await set(ref(db,`usuarios/${id}`), dados) }
export async function aprovarUsuario(id) { await update(ref(db,`usuarios/${id}`), {aprovado:true}) }
export async function excluirUsuario(id) {
  await remove(ref(db,`usuarios/${id}`))
  await remove(ref(db,`palpites/${id}`))
}

export function onPalpites(cb) { return onValue(ref(db,'palpites'), s => cb(s.val()||{})) }
export async function setPalpite(userId, jogoId, casa, fora) {
  await set(ref(db,`palpites/${userId}/${jogoId}`), {casa, fora})
}

export function onResultados(cb) { return onValue(ref(db,'resultados'), s => cb(s.val()||{})) }
export async function setResultado(jogoId, casa, fora) {
  await set(ref(db,`resultados/${jogoId}`), {casa, fora})
}
