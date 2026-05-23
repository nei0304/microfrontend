# Microfrontend - Aplicacao de Exemplo

Este repositorio e uma aplicacao de exemplo de **microfrontend** usando React + Vite + Module Federation.

## Objetivo

Demonstrar uma arquitetura em que uma aplicacao principal (shell) consome funcionalidades de aplicacoes independentes (microfrontends), permitindo evolucao e deploy desacoplados.

## Estrutura do projeto

- `shell/`: aplicacao container (host) responsavel por orquestrar a navegacao e carregar remotos.
- `checkout/`: microfrontend com funcionalidades de checkout.
- `design-system/`: microfrontend com componentes compartilhados de interface.

## Tecnologias

- React + TypeScript
- Vite
- `@originjs/vite-plugin-federation`
- `react-router-dom`
- `zustand`

## Como executar

### 1. Instalar dependencias

Em cada app:

```bash
cd shell && npm i
cd ../checkout && npm i
cd ../design-system && npm i
```

### 2. Build e preview de cada app (em terminais separados)

Terminal 1:

```bash
cd shell && npm run build && npm run preview -- --port 5000
```

Terminal 2:

```bash
cd design-system && npm run build && npm run preview -- --port 5002
```

Terminal 3:

```bash
cd checkout && npm run build && npm run preview -- --port 5001
```

Com os tres processos em execucao, acesse a aplicacao shell para navegar pela experiencia integrada de microfrontends.
