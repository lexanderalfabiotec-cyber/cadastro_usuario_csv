## 1. Atualização do Modelo e Formulário

- [x] 1.1 Adicionar campo de timestamp ao modelo de usuário
- [x] 1.2 Garantir que o timestamp seja gerado automaticamente no momento do cadastro
- [x] 1.3 Atualizar testes do modelo para cobrir o novo campo

## 2. Exportação CSV

- [x] 2.1 Atualizar lógica de exportação para incluir o campo de timestamp como última coluna
- [x] 2.2 Garantir que o campo "DataHoraCadastro" esteja presente no cabeçalho do CSV
- [x] 2.3 Garantir que cada linha exportada contenha o timestamp correto
- [x] 2.4 Testar exportação com e sem dados de sexo/tipo sanguíneo para garantir robustez

## 3. Documentação e Comunicação

- [x] 3.1 Atualizar documentação do sistema para refletir o novo campo no CSV
- [x] 3.2 Comunicar a mudança aos usuários e stakeholders

## 4. Validação e Rollback

- [x] 4.1 Realizar testes de ponta a ponta para validar a inclusão do timestamp
- [x] 4.2 Planejar rollback caso o novo campo cause problemas de compatibilidade
