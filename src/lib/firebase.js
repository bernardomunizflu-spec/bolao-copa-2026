// ─────────────────────────────────────────────────────────────────────────────
// PASSO IMPORTANTE: substitua os valores abaixo pelas suas credenciais do Firebase
// Veja o guia README.md para saber como obter essas informações
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBq0q_S-VltUeK9gDzL9OiMcRZcLwn4tnM",
  authDomain: "bolao-copa-2026-475c0.firebaseapp.com",
  databaseURL: "https://bolao-copa-2026-475c0-default-rtdb.firebaseio.com",
  projectId: "bolao-copa-2026-475c0",
  storageBucket: "bolao-copa-2026-475c0.firebasestorage.app",
  messagingSenderId: "316854689466",
  appId: "1:316854689466:web:c2c59ed0d74cd1d4142c83"
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
