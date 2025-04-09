# 🧠 Projeto Next.js 15 — Fullstack Starter com Auth, Prisma & Supabase

Este projeto é um boilerplate moderno construído com **Next.js 15** e o novo **App Router**, utilizando **TailwindCSS v4**, **Shadcn UI**, **TypeScript** e **NextAuth.js v5 (beta)** para autenticação. A persistência de dados é feita com **Prisma**, conectado a um banco **PostgreSQL** gerenciado via **Supabase**.

---

## ✨ Tecnologias Utilizadas

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI**
- **NextAuth.js v5 (beta)**
- **Prisma ORM**
- **PostgreSQL + Supabase**

---

## 📦 Estrutura do Projeto

```
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
├── lib/
│   └── get-url.ts            # Utilitário para obter a base URL dinamicamente
├── middleware.ts             # Middleware para proteger rotas e sessões
├── services/
│   ├── auth/
│   │   └── index.ts          # Lógica de autenticação customizada
│   └── database/
│       └── form.ts           # Serviços relacionados ao formulário e banco
├── prisma/
│   └── schema.prisma
├── api/
│   └── auth/
│       └── [...next-auth]/
│           └── route.ts      # Handler principal do NextAuth v5 (beta)
└── ...
```

---

## 🔐 Autenticação com NextAuth.js v5

A autenticação é gerenciada com **NextAuth v5 (beta)**, utilizando credentials e tokens JWT. Integração com Prisma para persistência das sessões e usuários.

### 🔧 Setup de Arquivos Importantes

- **`/api/auth/[...next-auth]/route.ts`**  
  Handler principal da autenticação via NextAuth. Responsável por configurar os providers, callbacks, e adaptar a sessão com Prisma.

- **`/lib/get-url.ts`**  
  Função utilitária que retorna a URL base da aplicação, usada em ambientes diferentes (dev, prod, etc).

- **`middleware.ts`**  
  Middleware para proteger rotas com autenticação baseada em token. Pode redirecionar usuários não logados.

- **`/services/auth/index.ts`**  
  Central de lógica customizada de autenticação. Pode conter funções como login programático, logout, validação de sessão, etc.

- **`/services/database/prisma.ts`**  
  Criação da instancia do prisma para utilizar na aplicação.

---

## 📥 Instalação e Uso

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/seu-projeto.git

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm dev
```

---

## ⚙️ Configuração do .env

```env
DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database>
NEXT_AUTH_SECRET= auth secret key
NEXT_PUBLIC_APP_URL=http://localhost:3000
SESSION_COOKIE_NAME="token de autenticação"
GOOGLE_CLIENT_ID=id_do_google_client
GOOGLE_CLIENT_SECRET=secret_do_google
```
