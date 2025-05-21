# 📄 Sistema de Holerite - RH e Colaboradores

Este é um aplicativo mobile desenvolvido para disponibilizar holerites de forma digital. O sistema permite que o **RH cadastre os colaboradores e seus respectivos holerites**, enquanto os **colaboradores podem acessar e visualizar seus próprios holerites de forma segura e prática.  

---

## 🚀 Funcionalidades

### 👥 Perfis de Acesso
- **RH:**
  - Cadastro de colaboradores
  - Edição e remoção de colaboradores
  - Cadastro, edição e exclusão de holerites
- **Colaborador:**
  - Visualização dos próprios holerites
  - Download dos holerites (em PDF ou imagem, se disponível)

---

## 🗂️ Navegação

### 🔑 Login
- Acesso separado para **RH** e **colaboradores**

### Menus do RH
- 👥 **Colaboradores**
  - Cadastrar, listar, editar e excluir
- 📑 **Holerites**
  - Cadastrar, listar, editar e excluir
- 🔐 **Sair**

### Menus do Colaborador
- 📄 **Meus Holerites**
  - Listagem e download dos seus holerites
- 🔐 **Sair**

---

## 🛠️ Tecnologias Utilizadas

### **Frontend (App Mobile)**
- ⚛️ React Native — Desenvolvimento mobile
- 🛣️ Expo Router — Gerenciamento de rotas
- 🔗 Axios — Comunicação com a API (HTTP Requests)

### **Backend (API)**
- 🚀 NestJS — Framework Node.js para API robusta, escalável e modular
- 🗄️ Prisma ORM — Mapeamento objeto-relacional (ORM) para banco de dados PostgreSQL

### **Banco de Dados**
- 🐘 **PostgreSQL** — Banco de dados relacional

### **Outros**
- 🔒 JWT (JSON Web Tokens) — Autenticação e autorização
- 🐳 Docker (opcional) — Containerização da aplicação

---

## 🌐 Arquitetura do Sistema

```plaintext
Frontend (React Native + Expo Router)
│
├── Login
├── RH Dashboard
│   ├── Gerenciar Colaboradores
│   └── Gerenciar Holerites
└── Colaborador Dashboard
    └── Meus Holerites

Backend (NestJS + Prisma + PostgreSQL)
├── Autenticação (JWT)
├── Usuários (RH e Colaboradores)
├── Holerites
└── Banco de Dados (PostgreSQL)

## 👨‍💻 Desenvolvido por

- **Nathan Mariotto**
- [GitHub](https://github.com/nathanmariott0)
- [Email](mailto:nathanmariotto.dev@gmail.com)

- **Leonardo dias Frachine**
- [GitHub](https://github.com/Leonardo-frachine)
- [Email](mailto:leonardo.frachine@outlook.com)