# Passo a passo para entrega — Windows / PowerShell / VS Code

## 1. Preparar

Extraia a pasta do ZIP, abra-a no VS Code e abra o terminal PowerShell. Confira `git --version` e `vp help`. Se `vp` não existir, siga a instalação do material da faculdade: `irm https://vite.plus/ps1 | iex` (revise a fonte antes de executar scripts remotos).

## 2. Criar o histórico de commits

A atividade exige pelo menos três commits feitos ao longo do desenvolvimento. Como este ZIP já contém o resultado final, não crie commits artificiais dizendo que etapas ocorreram separadamente. Para produzir o histórico exigido, recrie o projeto progressivamente com `vp create vite -- petconecta --template vanilla`, seguindo o PDF da aula e usando os arquivos deste ZIP como referência, registrando cada etapa:

1. Projeto Vite+ inicial e proteção `.env`: `git add .` e `git commit -m "Cria projeto PetConecta com Vite+"`
2. API Express e script: `git add .` e `git commit -m "Adiciona API Express e rota de saude"`
3. Proxy e interface: `git add .` e `git commit -m "Integra frontend com status da API"`
4. README: `git add .` e `git commit -m "Documenta execucao do PetConecta"`

Se optar por usar diretamente o ZIP, faça commits verdadeiros para as alterações subsequentes e explique ao professor como o projeto foi preparado.

## 3. Rodar e validar

No primeiro terminal, execute `vp install` e depois `vp run api`. No segundo terminal, execute `vp dev`. Abra `http://localhost:5173` e confirme o texto **Status da API: ok** e a data/hora. Confira também `http://localhost:3000/api/health`. Rode `vp check` e `vp build`.

## 4. Publicar

Crie no GitHub um repositório vazio chamado `petconecta`, público, sem README inicial. Em um projeto com Git iniciado e commits reais, execute:

```
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/petconecta.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu login. Confirme o link em janela anônima e verifique se `.env` não aparece.

## 5. Entregar

1. Link do repositório público no GitHub.
2. Print real do navegador com a barra de endereço `http://localhost:5173` visível, **Status da API: ok** e data/hora. Use `Win + Shift + S` ou a ferramenta de captura do Windows.

Não envie captura simulada: o professor exige evidência do sistema em execução.
