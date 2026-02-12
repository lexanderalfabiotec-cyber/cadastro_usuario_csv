## ADDED Requirements

### Requirement: Exportação de Dados para CSV
A aplicação SHALL permitir ao usuário exportar todos os registros capturados na sessão para um arquivo no formato Comma-Separated Values (CSV).

#### Scenario: Download de arquivo CSV
- **WHEN** o usuário clica no botão "Exportar para CSV"
- **THEN** o navegador SHALL iniciar o download de um arquivo contendo os dados de todos os usuários cadastrados

### Requirement: Formatação do Arquivo CSV
O arquivo CSV gerado SHALL conter um cabeçalho com os títulos "Nome" e "Idade" na primeira linha, seguidos pelos dados correspondentes.

#### Scenario: Estrutura correta dos dados no CSV
- **WHEN** o arquivo exportado é aberto
- **THEN** a primeira linha SHALL conter "Nome,Idade" e as linhas subsequentes os dados inseridos pelo usuário
