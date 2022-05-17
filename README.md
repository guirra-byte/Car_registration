# Car Registration
Projeto prático para praticar conceitos aprendidos no curso intensivo `Ignite`

![Captura de Tela (387)](https://user-images.githubusercontent.com/77081114/167625935-7ff9257e-6046-4302-bd72-694c458c7bdc.png)
![Captura de Tela (388)](https://user-images.githubusercontent.com/77081114/167625944-0ad718ca-f4a4-4417-8f96-2edc34d4f907.png)
![Captura de Tela (389)](https://user-images.githubusercontent.com/77081114/167625946-b1c508a6-02d0-4c54-b50b-ff473752dd18.png)
![Captura de Tela (390)](https://user-images.githubusercontent.com/77081114/167625947-6713a638-81c0-48ce-a025-ed7abe5eaf4f.png)
![Captura de Tela (391)](https://user-images.githubusercontent.com/77081114/167625949-3eba9c64-d5ff-44f0-818d-fea4948de2cb.png)
![Captura de Tela (392)](https://user-images.githubusercontent.com/77081114/167625951-ed1556a9-7ded-420f-90ad-82fdbbc4b187.png)

### Descrição ☝
> Desafio Prático
> que consiste em um sistema de **Usuários**, **Carros** e **Categorias**. Utilizando `Docker` para alocar o `PostgreSQL` Database em um Container e  `Prisma` como ORM.
> praticando **relacionamentos** entre tabelas One to Many, praticando implemetação de **Containers**
> As relações um-para-muitos referem-se a relações em que zero registros em um lado da relação podem ser conectados a zero ou mais registros no outro lado.


## Ajustes e melhorias ⚙🛠

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Cadastrar Usuários verificados por Middleware de autenticação
- [x] Gerar Hash de Password
- [x] Procurar todos os Usuários
- [x] Cadastrar Categorias
- [x] Procurar por Categorias
- [x] Procurar todas as Categorias
- [x] Inserção no Banco de Dados
- [x] Verificação se o Usuário está autenticado (JWT)
- [x] Implementação de `JWT`
- [x] Relacionamento entre as Categorias e Carros - One to Many

# 💻 Sobre o projeto

Neste projeto, foi colocado em prática conteúdos aprendidos:

- Princípios **`S.O.L.I.D`** usados:

  -   > S - Princípio da Responsabilidade Única
  -   > L - Princípio da Substituição de Liskov
  -   > D - Princípio da Inversão de Dependência
 
- Integração de **API** com **Banco de Dados Relacional** via ORM **`Prisma.io`**
  > Prisma.io deferentemente dos ORM´s padrão tem uma facilidade maior na criação de **Relacionamentos** entre as tabelas. O objetivo do Prisma.io é tornar nós Dev´s mais **produtivos** ao criarmos `Queries` de consulta **`SQL`**.
- **Autenticação Permissiva** nas rotas com **`JWT`**
- Banco de Dados e aplicação alocados em  **Containers `Docker`**, para maior produtividade e fluidez do projeto sem ter que baixar diversas Bibliotecas e Serviços, basta alocar a **Imagem** dos Serviços ou Bibliotecas em um Container e rodá-los.

Isso irá me ajudar a entender e exercitar os diferentes tipos de aplicações e estruturas que podemos fazer.

## Feito Com: ⚒
![Node.Js](https://img.shields.io/badge/Node.js-52b788?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-00b4d8?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-0a9396?style=for-the-badge&logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)



