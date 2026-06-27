# Erlach Kids – Controle Financeiro
## PWA | GitHub Pages

---

## 📁 Arquivos do sistema
- `index.html` → o app completo
- `manifest.json` → configuração do PWA
- `sw.js` → service worker (cache offline)

---

## 🚀 Como publicar no GitHub Pages

### 1. Instalar o necessário
- **Git**: https://git-scm.com/download/win
- **VS Code**: https://code.visualstudio.com

### 2. Criar conta no GitHub
- Acesse https://github.com e crie uma conta gratuita

### 3. Criar repositório
- No GitHub, clique em "New repository"
- Nome: `erlach-kids`
- Deixe como **Public**
- Clique em "Create repository"

### 4. Abrir o VS Code
- Abra a pasta `erlach-kids` no VS Code
- Abra o terminal: `Terminal > New Terminal`

### 5. Subir os arquivos
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/erlach-kids.git
git push -u origin main
```

### 6. Ativar GitHub Pages
- No repositório, vá em **Settings > Pages**
- Em "Source", selecione **main** e pasta **/ (root)**
- Clique em **Save**
- Após ~1 minuto, o site estará em:
  `https://SEU-USUARIO.github.io/erlach-kids`

### 7. Instalar no celular
- Abra o link no Chrome (Android) ou Safari (iPhone)
- Toque em "Adicionar à tela inicial"
- Pronto! Ícone aparece no celular

---

## 👥 Usuários e senhas iniciais

| Usuário | Senha | Acesso |
|---------|-------|--------|
| admin | erlach@110919 | Tudo + upload de relatórios |
| dheyner.erlach | erlach@2026 | Tudo menos upload |
| erlach.erlach | erlach@2026 | Dashboard sem valores financeiros |

> Dheyner e Erlach devem trocar a senha no primeiro login.

---

## 📊 Como atualizar os dados mensalmente

1. Faça login como **admin**
2. Vá na aba **Admin**
3. Faça upload do **Relatório Base** (todos os alunos em CSV)
4. Faça upload do **Relatório Mensal** (quem está em aberto em CSV)
5. O sistema atualiza automaticamente o dashboard

### Formato do CSV esperado:
```
Matricula,Nome,Curso,Periodo,Turma,Tipo,Parcela,Limite,Valor,Desc,Acresc,APagar,WhatsApp
200250,Alice Ferreira,EF,M2,A,Mensalidade,6/12,05/06/2026,2205,0,0,2205,27999999999
```

---

## 🔄 Como atualizar o sistema após edições

```bash
git add .
git commit -m "atualização mês X"
git push
```
GitHub Pages atualiza em ~1 minuto.
