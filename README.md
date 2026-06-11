# ⚽ Bolão Copa 2026

Aplicação de bolão para Copa do Mundo 2026 entre amigos.

---

## 🚀 Passo a passo para colocar no ar

### PASSO 1 — Criar conta no Firebase (banco de dados, gratuito)

1. Acesse https://console.firebase.google.com
2. Clique em **"Criar um projeto"**
3. Dê um nome (ex: `bolao-copa-2026`) e clique em Continuar
4. Desative o Google Analytics (não precisa) → Criar projeto
5. No menu lateral, clique em **Build → Realtime Database**
6. Clique em **"Criar banco de dados"**
7. Escolha a localização **us-central1** → Próximo
8. Selecione **"Iniciar no modo de teste"** → Ativar
9. Clique na engrenagem (⚙️) → **Configurações do projeto**
10. Role até "Seus apps" → clique no ícone **`</>`** (Web)
11. Dê um apelido (ex: `bolao`) → Registrar app
12. **Copie o objeto `firebaseConfig`** que aparece — você vai precisar no próximo passo

### PASSO 2 — Configurar as credenciais no projeto

1. Abra o arquivo `src/lib/firebase.js`
2. Substitua os valores do `firebaseConfig` pelos que você copiou:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",          // ← cole aqui
  authDomain: "bolao-copa-2026.firebaseapp.com",
  databaseURL: "https://bolao-copa-2026-default-rtdb.firebaseio.com",
  projectId: "bolao-copa-2026",
  storageBucket: "bolao-copa-2026.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc..."
}
```

### PASSO 3 — Subir no GitHub

1. Acesse https://github.com e crie uma conta (se não tiver)
2. Clique em **"New repository"** (botão verde)
3. Nome: `bolao-copa-2026` → **Create repository**
4. Siga as instruções que o GitHub mostra para subir os arquivos
   - Se nunca usou Git: na página do repositório clique em **"uploading an existing file"**
   - Arraste todos os arquivos da pasta do projeto → **Commit changes**

### PASSO 4 — Deploy no Vercel (gratuito, link público)

1. Acesse https://vercel.com e crie uma conta com seu GitHub
2. Clique em **"Add New Project"**
3. Selecione o repositório `bolao-copa-2026`
4. Vercel detecta Vite automaticamente — clique em **Deploy**
5. Aguarde ~1 minuto → seu link estará pronto! 🎉

---

## 👤 Usando o bolão

### Primeiro acesso (organizador)
1. Acesse seu link
2. Vá em **"Entrar"**
3. Clique em **"Criar conta Admin"**
4. Entre com `admin` / `admin2026`
5. **Troque a senha depois** (edite o arquivo firebase.js ou pelo painel do Firebase)

### Convidando amigos
- Compartilhe o link do Vercel no grupo
- Cada amigo clica em **"Cadastrar"**
- Você aprova no painel **Admin → Aguardando aprovação**

### Durante a Copa
- Insira os resultados no painel Admin após cada jogo
- O ranking atualiza automaticamente para todo mundo

---

## 🏗️ Estrutura do projeto

```
bolao-copa-2026/
├── src/
│   ├── lib/
│   │   ├── firebase.js   ← credenciais (preencher!)
│   │   ├── db.js         ← funções do banco de dados
│   │   └── dados.js      ← jogos, times, pontuação
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Cadastro.jsx
│   │   ├── Palpites.jsx
│   │   ├── Ranking.jsx
│   │   └── Admin.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🎮 Funcionalidades

- ✅ Cadastro e login com aprovação manual
- ✅ 48 jogos da fase de grupos (grupos A–H reais)
- ✅ Palpites em tempo real (Firebase)
- ✅ Ranking ao vivo com desempate por placares exatos
- ✅ Painel admin: aprovar participantes + inserir resultados
- ✅ Design responsivo (funciona no celular)

## 📊 Pontuação

| Resultado | Pontos |
|-----------|--------|
| Placar exato | 25 pts |
| Vencedor + saldo de gols | 20 pts |
| Vencedor + gols de um time | 15 pts |
| Só o vencedor | 10 pts |
| Gols de um time corretos | 5 pts |
