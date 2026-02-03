# ⚙️ Debt Management - API (Backend)

Este repositório contém a API REST do sistema de gestão de dívidas. Desenvolvida com AdonisJS v6, a API é responsável por toda a lógica de negócio, validações de dados e persistência em banco de dados PostgreSQL.

O foco aqui foi construir uma estrutura escalável, utilizando boas práticas de desenvolvimento backend e segurança.

---

## ✅ Funcionalidades

- **Persistência em PostgreSQL:** Banco de dados relacional hospedado na nuvem.
- **CRUD Completo:** Rotas para criar, listar, atualizar e deletar clientes.
- **Segurança CORS:** Configurado para permitir acessos controlados do frontend em produção.
- **Deploy Automático:** Configurado para rodar no Render com SSL habilitado.

---

## 🔗 Links Úteis

- **API no ar (Render):** [https://debt-management-api.onrender.com/clients](https://debt-management-api.onrender.com/clients)
- **Repositório Web:** [https://github.com/Aiinoot/debt-management-web](https://github.com/Aiinoot/debt-management-web)

---

## 📌 Principais Rotas

- `GET /clients` - Lista todos os clientes
- `POST /clients` - Cria um cliente (recebe JSON)
- `PUT /clients/:id` - Atualiza um cliente
- `DELETE /clients/:id` - Remove um cliente

---

## ▶️ Como rodar localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Aiinoot/debt-management-api.git
   cd debt-management-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o banco de dados:**
   Crie um arquivo `.env` baseado no `.env.example`.

4. **Rode as migrations:**
   ```bash
   node ace migration:run
   ```

5. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

6. **A API estará rodando em:** http://localhost:3333
