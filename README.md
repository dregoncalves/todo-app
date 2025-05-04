# Documentação de Uso - To-Do App

## Descrição Geral

Este projeto consiste em uma aplicação To-Do composta por:

- Uma API REST em Spring Boot com persistência em MySQL.
- Um frontend em Next.js + TypeScript + Tailwind + Shadcn UI.

Permite operações CRUD e segue boas práticas de API REST.

---

## Tecnologias Utilizadas

### Backend (Spring Boot)

- Java 17  
- Spring Boot 3  
- Spring Web  
- Spring Data JPA  
- MySQL  
- Lombok  

### Frontend (Next.js)

- Next.js 14  
- TypeScript  
- Tailwind CSS  
- Shadcn UI  

---

## Como executar o projeto

### 1. Clone os repositórios:

```bash
# Backend
git clone https://github.com/dregoncalves/todo-api

# Frontend
git clone https://github.com/dregoncalves/todo-app
```

### 2. Configure o banco MySQL no Workbench com:

```sql
CREATE DATABASE tododb;
```

### 3. Configure o `application.properties` do backend:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/tododb
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
```

### 4. Execute os projetos:

```bash
# Backend
cd todo-api
./mvnw spring-boot:run

# Frontend
cd todo-app
npm install
npm run dev
```

---

## Endpoints da API

```http
GET    /api/tasks        -> Listar tarefas  
POST   /api/tasks        -> Criar tarefa  
PUT    /api/tasks/{id}   -> Atualizar tarefa  
DELETE /api/tasks/{id}   -> Remover tarefa  
```

### Exemplo JSON para POST:

```json
{
  "title": "Estudar Spring Boot",
  "completed": false
}
```

---

## Links dos Repositórios

- [Backend (Spring Boot)](https://github.com/dregoncalves/todo-api)  
- [Frontend (Next.js)](https://github.com/dregoncalves/todo-app)
