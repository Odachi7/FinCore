# FinCore API

API REST em NestJS 11 e TypeScript strict. A primeira fatia implementada e o endpoint de health.

## Executar localmente

```bash
npm install
npm run start:dev
```

Por padrao, a API escuta na porta `3000`. Para alterar, defina a variavel de ambiente `PORT`.

```bash
curl http://localhost:3000/health
```

## Estrutura

- `src/main.ts`: inicializa o servidor NestJS.
- `src/app.module.ts`: compoe os modulos da aplicacao.
- `src/modules/health/domain`: tipos e portas do modulo de health.
- `src/modules/health/application`: caso de uso, sem dependencia do NestJS.
- `src/modules/health/infrastructure`: adaptador que le o estado do processo.
- `src/modules/health/presentation/http`: controller e rota HTTP.

O controller depende do caso de uso. O modulo Nest faz a composicao entre o caso de uso e o adaptador de infraestrutura, mantendo essa decisao fora da regra de aplicacao.

## Scripts

- `npm run start:dev`: inicia em modo watch.
- `npm run build`: compila para `dist/`.
- `npm run test`: executa os testes unitarios com Vitest.
