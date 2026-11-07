# PetConecta 🐾

Sistema de gerenciamento de doações para a ONG fictícia PetConecta, dedicada ao resgate e cuidado de cães e gatos em Porto Alegre/RS.

**Projeto Integrador Extensionista II — ADS | Atividade 1**

Nesta etapa, o projeto contém o frontend Vite+ (Vanilla JavaScript) e uma API Express com a rota `GET /api/health`. Os módulos de doadores, doações, campanhas e animais serão desenvolvidos nas próximas etapas.

## Requisitos

- Git
- [Vite+ (comando `vp`)](https://viteplus.dev)
- VS Code (opcional)

## Como executar

1. Clone o repositório: `git clone https://github.com/SEU-USUARIO/petconecta.git`
2. Entre na pasta: `cd petconecta`
3. Instale as dependências: `vp install`
4. Copie `.env.example` para `.env` (no PowerShell: `Copy-Item .env.example .env`)
5. Terminal 1: `vp run api`
6. Terminal 2: `vp dev`
7. Abra http://localhost:5173

A página deverá mostrar **Status da API: ok** e a data/hora retornada pela API.

## Teste direto da API

Abra http://localhost:3000/api/health. Resposta esperada (horário variável):

```json
{"status":"ok","app":"PetConecta","hora":"2026-10-28T19:00:00.000Z"}
```

## Conferências

- `vp check`
- `vp build`
- `.env` não deve ser enviado ao GitHub; `.env.example` deve ser versionado.

## Próximas etapas

Banco de dados, cadastros de doadores e doações, campanhas, animais, autenticação e relatórios conforme o PIE I.
