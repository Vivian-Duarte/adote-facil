# Histórias de Usuário e Cenários de Teste 
 
Cada história de usuário descreve o que ele deseja fazer e por quê, acompanhada de cenários de teste que validam se a experiência ocorre como esperado.

## História de Usuário 1: Cadastro de Novo Usuário

*"Como visitante do site, quero me cadastrar na plataforma para poder anunciar um animal ou iniciar um processo de adoção."*

### Cenários de Teste

- **Cenário Principal: Cadastro realizado com sucesso**
  1. O visitante acessa a página de cadastro.
  2. Preenche corretamente os campos obrigatórios.
  3. O sistema cria a nova conta.
  4. O usuário é redirecionado para a tela de login ou já entra automaticamente na plataforma.

- **Cenários Alternativos**
  - **E-mail já em uso**
    1. O visitante informa um e-mail que já está cadastrado.
    2. Ao tentar se registrar, o sistema exibe a mensagem de erro.
  - **Campos obrigatórios em branco**
    1. O visitante deixa um ou mais campos sem preencher.
    2. Ao clicar para cadastrar, o sistema destaca os campos faltantes.
  - **Senha inválida**
    1. O visitante insere uma senha que não atende aos critérios mínimos.
    2. O sistema exibe uma mensagem de erro.

## História de Usuário 2: Autenticação de Usuário

*"Como usuário cadastrado, quero fazer login no sistema para ter acesso às minhas informações e funcionalidades restritas."*

### Cenários de Teste

- **Cenário Principal: Login bem-sucedido**
  1. O usuário acessa a página de login.
  2. Informa e-mail e senha corretos.
  3. O sistema autentica e inicia a sessão.

- **Cenários Alternativos**
  - **Credenciais inválidas**
    1. O usuário informa dados incorretos.
    2. O sistema retorna erro com a mensagem de erro.
  - **Campos em branco**
    1. O usuário não preenche o e-mail ou a senha.
    2. O sistema alerta que os campos são obrigatórios.

## História de Usuário 3: Atualização de Perfil

*"Como usuário autenticado, quero atualizar minhas informações de perfil para que meus dados estejam sempre corretos."*

### Cenários de Teste

- **Cenário Principal: Atualização bem-sucedida**
  1. O usuário acessa sua conta já autenticado.
  2. Vai até a página de perfil e altera dados como nome, telefone ou e-mail.
  3. Salva as alterações.
  4. O sistema confirma a atualização.

- **Cenários Alternativos**
  - **Token ausente ou inválido**
    1. A requisição é feita sem autenticação válida.
    2. O sistema responde com uma mensagem de erro.
  - **E-mail já cadastrado**
    1. O usuário tenta alterar o e-mail para um que já está registrado.
    2. O sistema rejeita e mostra uma mensagem de erro.
  - **Dados inválidos**
    1. O usuário insere informações em formato incorreto.
    2. O sistema não aceita e solicita a correção.

## História de Usuário 4: Anunciar Animal para Adoção

*"Como doador, quero cadastrar um animal com fotos e detalhes para que pessoas interessadas possam encontrá-lo."*

### Cenários de Teste

- **Cenário Principal: Cadastro de animal com sucesso**
  1. O usuário está autenticado.
  2. Preenche os dados obrigatórios do animal.
  3. Anexa fotos válidas.
  4. Envia o formulário.
  5. O sistema cria o anúncio e exibe o card do animal.

- **Cenários Alternativos**
  - **Usuário não autenticado**
    1. O usuário não está logado.
    2. Ao tentar cadastrar, o sistema retorna erro de autorização.
  - **Campos obrigatórios ausentes**
    1. Informações essenciais não foram preenchidas.
    2. O sistema indica os campos em falta antes de concluir.
  - **Upload inválido**
    1. O usuário anexa arquivos em formato ou tamanho não permitido.
    2. O sistema rejeita o upload e informa o problema.

## História de Usuário 5: Listar Animais Disponíveis

*"Como visitante ou adotante, quero visualizar os animais disponíveis, com filtros de busca, para encontrar o pet ideal para mim."*

### Cenários de Teste

- **Cenário Principal: Listagem com sucesso**
  1. Há animais cadastrados no sistema.
  2. O usuário acessa a página de busca.
  3. Aplica filtros opcionais.
  4. O sistema retorna a lista filtrada.

- **Cenário Alternativo**
  - **Nenhum resultado para os filtros**
    1. Os critérios não correspondem a nenhum animal.
    2. O sistema retorna lista vazia.

## História de Usuário 6: Listar Meus Animais

*"Como doador, quero visualizar os animais que cadastrei para gerenciar meus anúncios."*

### Cenários de Teste

- **Cenário Principal: Exibição dos meus anúncios**
  1. O usuário acessa a área “Meus Animais” estando logado.
  2. O sistema retorna apenas os animais que ele cadastrou.

- **Cenários Alternativos**
  - **Usuário sem anúncios**
    1. O doador ainda não cadastrou nenhum animal.
    2. O sistema mostra a mensagem *“Você ainda não cadastrou nenhum animal para adoção. Clique aqui para cadastrar."*