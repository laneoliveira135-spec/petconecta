# \# PetConecta 🐾

#

# Sistema de gerenciamento de doações para a ONG fictícia \*\*PetConecta\*\*, dedicada ao resgate e cuidado de cães e gatos em Porto Alegre/RS.

#

# \*\*Projeto Integrador Extensionista II — ADS | Atividade 1\*\*

#

# \## Objetivo do projeto

#

# O PetConecta tem como objetivo apoiar a organização das atividades de uma ONG de proteção animal, facilitando futuramente o gerenciamento de doadores, doações, campanhas e animais resgatados.

#

# Nesta primeira atividade, foi desenvolvida a estrutura inicial da aplicação, com uma interface web e uma API para verificar a comunicação entre frontend e backend.

#

# \## Tecnologias utilizadas

#

# \- \*\*JavaScript:\*\* linguagem de programação utilizada no projeto.

# \- \*\*Vite+:\*\* ferramenta de desenvolvimento e compilação do frontend.

# \- \*\*HTML e CSS:\*\* estrutura e apresentação da interface.

# \- \*\*Node.js:\*\* ambiente de execução da API.

# \- \*\*Express:\*\* framework utilizado para criar a API.

# \- \*\*Git:\*\* controle de versões do projeto.

# \- \*\*GitHub:\*\* hospedagem pública do código-fonte.

#

# \## Funcionalidades implementadas

#

# \- Página inicial do PetConecta.

# \- API Express com a rota `GET /api/health`.

# \- Verificação do status de funcionamento da API.

# \- Exibição da data e hora retornadas pelo servidor.

# \- Comunicação entre frontend e backend por meio do proxy `/api` configurado no Vite+.

# \- Configuração de variáveis de ambiente.

# \- Scripts para desenvolvimento e compilação.

#

# \## Requisitos para execução

#

# Antes de iniciar, é necessário ter:

#

# \- Node.js instalado.

# \- Git instalado.

# \- Vite+ disponível pelo comando `vp`.

# \- VS Code (opcional).

#

# \## Como executar no Windows

#

# \### 1. Obter o projeto

#

# Após sua publicação no GitHub, clone o repositório usando a URL pública correspondente:

#

# ```powershell

# git clone https://github.com/SEU-USUARIO/petconecta.git

# cd petconecta

# ```

#

# Substitua `SEU-USUARIO` pelo nome real da conta no GitHub.

#

# Se o projeto já estiver salvo no computador, basta abrir o PowerShell na pasta correspondente.

#

# \### 2. Instalar as dependências

#

# ```powershell

# vp install

# ```

#

# \### 3. Configurar as variáveis de ambiente

#

# No PowerShell:

#

# ```powershell

# Copy-Item .env.example .env

# ```

#

# O arquivo `.env` contém configurações locais e não deve ser publicado no GitHub.

#

# \### 4. Iniciar a API

#

# Abra o primeiro terminal na pasta do projeto:

#

# ```powershell

# vp run api

# ```

#

# A API utiliza o endereço:

#

# http://localhost:3000

#

# Mantenha esse terminal aberto.

#

# \### 5. Iniciar o frontend

#

# Abra um segundo terminal na mesma pasta:

#

# ```powershell

# vp dev

# ```

#

# Acesse no navegador:

#

# http://localhost:5173

#

# A página deverá apresentar o status da API como `ok`, acompanhado da data e hora retornadas pelo servidor.

#

# \## Testar a API diretamente

#

# Acesse:

#

# http://localhost:3000/api/health

#

# Exemplo de resposta:

#

# ```json

# {

# &#x20; "status": "ok",

# &#x20; "app": "PetConecta",

# &#x20; "hora": "2026-10-28T19:00:00.000Z"

# }

# ```

#

# O valor de `hora` varia conforme o momento da requisição.

#

# \## Verificações do projeto

#

# Para verificar a formatação e identificar problemas de lint:

#

# ```powershell

# vp check

# ```

#

# Para gerar os arquivos de produção:

#

# ```powershell

# vp build

# ```

#

# A compilação gera a pasta `dist`, que não precisa ser enviada ao repositório.

#

# \## Organização dos arquivos

#

# | Arquivo ou pasta | Finalidade |

# |---|---|

# | `server/index.js` | Servidor Express e rota de saúde da API |

# | `src/main.js` | Código JavaScript da interface |

# | `src/style.css` | Estilos visuais |

# | `index.html` | Documento HTML principal |

# | `vite.config.ts` | Configuração do Vite+ e proxy |

# | `package.json` | Dependências e scripts |

# | `.env.example` | Exemplo de variáveis de ambiente |

# | `.gitignore` | Arquivos excluídos do controle de versões |

# | `README.md` | Documentação do projeto |

#

# \## Segurança e versionamento

#

# O projeto utiliza Git para registrar a evolução do desenvolvimento.

#

# O arquivo `.env` deve permanecer fora do repositório, enquanto `.env.example` pode ser publicado como referência.

#

# As dependências instaladas em `node\_modules` e os arquivos de compilação em `dist` também não devem ser versionados.

#

# \## Próximas etapas

#

# O projeto poderá evoluir com:

#

# \- Banco de dados.

# \- Cadastro de doadores.

# \- Registro e acompanhamento de doações.

# \- Gerenciamento de campanhas.

# \- Cadastro de animais resgatados.

# \- Autenticação de usuários.

# \- Relatórios administrativos.

#

# Essas funcionalidades fazem parte do planejamento futuro e não estão implementadas nesta primeira atividade.

#

# \---

#

# \*\*Projeto acadêmico desenvolvido para o Projeto Integrador Extensionista II — ADS.\*\*

#

# \*\*PetConecta — Tecnologia a serviço da proteção animal.\*\*
