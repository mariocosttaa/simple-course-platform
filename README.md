# NestJS Learning Journey (from Laravel)

Este repositório documenta a transição de um desenvolvedor Laravel para o ecossistema NestJS. Aqui estão os conceitos aprendidos e a organização do projeto seguindo as melhores práticas do framework.

## 🚀 Conceitos Fundamentais: Laravel vs. NestJS

| Conceito | Laravel | NestJS |
| :--- | :--- | :--- |
| **CLI** | `php artisan` | `nest` |
| **Organização** | Por Tipo (Controllers, Models) | Por Feature (Modules) |
| **Roteamento** | `routes/web.php` ou Annotations | Decorators (`@Get`, `@Post`) |
| **Banco de Dados** | Eloquent ORM | TypeORM / Prisma |
| **Validação** | FormRequest / `$request->validate` | DTOs + `class-validator` |
| **Middleware** | Middlewares / Policies | Guards / Interceptors / Pipes |
| **Injeção de Dependência** | Service Container | NestJS DI System (Constructor based) |

---

## 🛠️ O que foi implementado até agora

### 1. Infraestrutura e Banco de Dados
- **Docker Compose**: Configurado para rodar PostgreSQL 15.
- **TypeORM**: Integrado ao NestJS com suporte a variáveis de ambiente via `@nestjs/config`.
- **Entities**: Criação da entidade `User` com colunas decoradas.
- **Sincronização**: Uso de `synchronize: true` para desenvolvimento (similar ao `migrate:fresh`).

### 2. Estrutura de Módulos (Feature-based)
- **UsersModule**: Módulo completo com Controller, Service e Entity.
- **AuthModule**: Módulo preparado para lidar com autenticação.
- **Global Prefix**: Configurado como `api/v1` no `main.ts`.

### 3. Validação e DTOs (Data Transfer Objects)
- **ValidationPipe**: Ativado globalmente para validar todos os requests.
- **class-validator**: Uso de decorators como `@IsEmail`, `@IsNotEmpty` e `@MinLength`.
- **PartialType**: Implementado no `UpdateUserDto` para reaproveitar validações do `CreateUserDto` de forma opcional.

### 4. Documentação e Testes
- **Swagger**: Configurado em `/api/docs` para visualização e teste de todas as rotas (o nosso `route:list` visual).
- **Conflict Handling**: Implementação de `ConflictException` no Service para evitar e-mails duplicados.

---

## 📝 Comandos Úteis

- **Gerar Recurso Completo (CRUD)**: `nest g resource [nome]`
- **Iniciar em Desenvolvimento**: `npm run start:dev`
- **Subir Banco (Docker)**: `docker-compose up -d`
- **Limpar Banco e Volumes**: `docker-compose down -v`

---

## 🏁 Próximos Passos Sugeridos
- [ ] Implementar **Bcrypt** para hash de senhas.
- [ ] Configurar **JWT** no `AuthModule` para login.
- [ ] Criar **Guards** para proteger rotas privadas.
- [ ] Explorar **Interceptors** para transformar respostas da API.
