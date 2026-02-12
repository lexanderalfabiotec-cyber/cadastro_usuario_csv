## ADDED Requirements

### Requirement: User Registration Interface
A aplicação SHALL exibir uma interface de usuário contendo campos para entrada de "Nome" (texto) e "Idade" (número).

#### Scenario: Visualização inicial do formulário
- **WHEN** o usuário acessa a aplicação
- **THEN** o formulário com os campos 'Nome' e 'Idade' SHALL estar visível e vazio

### Requirement: Validação de Dados de Entrada
A aplicação SHALL validar que os campos "Nome" e "Idade" não estão vazios antes de permitir a submissão. A idade SHALL ser um número positivo.

#### Scenario: Tentativa de submissão com campos vazios
- **WHEN** o usuário tenta submeter o formulário sem preencher o nome ou a idade
- **THEN** a aplicação SHALL exibir uma mensagem de erro indicando os campos obrigatórios

#### Scenario: Entrada de idade inválida
- **WHEN** o usuário insere um valor não numérico ou negativo no campo 'Idade'
- **THEN** a aplicação SHALL exibir um alerta de validação e impedir a submissão

### Requirement: Armazenamento Local Temporário
A aplicação SHALL manter uma lista em memória dos usuários cadastrados durante a sessão atual.

#### Scenario: Cadastro bem-sucedido
- **WHEN** o usuário preenche dados válidos e clica em 'Adicionar'
- **THEN** o nome e a idade SHALL ser adicionados à lista de registros exibida na tela
