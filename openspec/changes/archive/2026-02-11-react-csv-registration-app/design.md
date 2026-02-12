## Context

Atualmente, não existe um sistema para capturar e exportar dados de usuários neste repositório. O objetivo é criar uma aplicação React simples que funcione inteiramente no lado do cliente (client-side), sem a necessidade de um servidor backend ou banco de dados persistente, utilizando o estado da aplicação para gerenciar os dados durante a sessão.

## Goals / Non-Goals

**Goals:**
- Prover uma interface funcional e intuitiva para cadastro de Nome e Idade.
- Garantir a exportação fiel dos dados para o formato CSV.
- Utilizar React com Hooks (useState) para gerenciamento de estado.
- Implementar validações básicas de formulário.

**Non-Goals:**
- Persistência de dados entre sessões (localStorage ou banco de dados).
- Edição ou exclusão de registros (apenas adição e exportação).
- Autenticação de usuários.

## Decisions

### 1. Framework: React (Vite)
**Decisão:** Utilizar Vite para inicializar o projeto React.
**Racional:** O Vite oferece um ambiente de desenvolvimento extremamente rápido, configuração mínima e suporte excelente para aplicações Single Page Application (SPA).
**Alternativas:** Create React App (obsoleto/lento) ou Next.js (exagerado para um app simples sem necessidade de SSR).

### 2. Gerenciamento de Estado: React Hooks (useState)
**Decisão:** Utilizar o hook `useState` para armazenar a lista de usuários.
**Racional:** Dado o escopo reduzido, um estado local no componente principal (ou via Context API se necessário) é suficiente e evita a complexidade de bibliotecas como Redux ou Zustand.

### 3. Estilização: CSS Vanilla moderno ou Tailwind CSS
**Decisão:** Utilizar CSS Vanilla com foco em design premium, seguindo as diretrizes de estética rica (gradientes, animações sutis).
**Racional:** Permite controle total sobre o design sem adicionar dependências extras pesadas, garantindo um visual "premium".

### 4. Exportação CSV: Implementação Nativa via Blob
**Decisão:** Converter o array de objetos em uma string CSV e disparar o download usando `URL.createObjectURL(blob)`.
**Racional:** Evita o uso de bibliotecas externas (como `react-csv`) para uma lógica simples de conversão de string, reduzindo o tamanho do bundle.

## Risks / Trade-offs

- **[Risco] Perda de Dados** → Como os dados estão apenas em memória, um "refresh" na página apagará os registros. 
  - *Mitigação*: Adicionar um aviso ou simplesmente aceitar o trade-off dado que o requisito é para exportação rápida.
- **[Risco] Escalabilidade** → O app não foi desenhado para lidar com milhares de registros.
  - *Mitigação*: Adicionar uma barra de rolagem na lista de visualização para manter a interface limpa.
