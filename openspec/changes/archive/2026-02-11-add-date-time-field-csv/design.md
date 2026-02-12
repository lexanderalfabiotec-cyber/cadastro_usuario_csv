## Context

O sistema atual permite o cadastro de usuários e exporta os dados em formato CSV, mas não registra a data e hora de cada registro. A ausência desse campo dificulta auditoria, rastreamento temporal e análises históricas. O objetivo é adicionar um campo de timestamp para cada registro exportado, garantindo que toda nova entrada no CSV contenha a data/hora de criação.

## Goals / Non-Goals

**Goals:**
- Incluir automaticamente um campo de data/hora (timestamp) no momento do cadastro do usuário e exportação para CSV.
- Garantir que o novo campo seja preenchido de forma transparente para o usuário, sem etapas manuais.
- Manter compatibilidade com os demais campos já existentes.

**Non-Goals:**
- Não será feita a retrocompatibilidade para registros antigos já exportados.
- Não será implementada edição manual do campo de data/hora pelo usuário.

## Decisions

- O campo de data/hora será adicionado como a última coluna do CSV.
- O formato do timestamp será ISO 8601 (ex: 2026-02-11T23:34:33Z) para padronização e fácil leitura por sistemas.
- A lógica de geração do timestamp será implementada no momento da submissão do formulário, utilizando a data/hora local do servidor ou do navegador.
- O componente de exportação CSV será atualizado para incluir o novo campo em todos os registros.

## Risks / Trade-offs

- [Compatibilidade com ferramentas externas] → Mitigação: Documentar a mudança no formato do CSV e comunicar aos usuários.
- [Fusos horários inconsistentes] → Mitigação: Utilizar sempre o horário local do servidor ou UTC, padronizando o formato.
- [Possível quebra de integrações que esperam o formato antigo do CSV] → Mitigação: Versão do CSV pode ser incrementada ou documentada a alteração.

## Migration Plan

- Implementar o novo campo e atualizar os testes.
- Comunicar a mudança aos usuários do sistema.
- Realizar testes de exportação e validação do novo campo.
- Caso necessário, permitir rollback removendo o campo e restaurando o formato anterior.

## Open Questions

- O timestamp deve ser sempre UTC ou pode ser local?
- É necessário permitir configuração do formato de data/hora?
