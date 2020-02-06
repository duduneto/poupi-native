### FALTA FAZER

Carlos ok - Sc04a - Enviar dados dos inputs para um objeto que posteriormente irá salvar no banco de dados.
Carlos ok - Sc03a, b, c - Renomear MyPf, ProductPf, StorePf.
Carlos ok - Sc - Implementar scContent.Pt.
Carlos ok - Cp01 - Fazer botão voltar funcionar.

-- ORDENAR PRIORIDADES

Carlos ok - Sc00b - Fazer TempUsers via dbRef.json
Carlos ok - Sc04a - Incluir categorias de produtos e userId do rdAuthUser
Carlos ok - Sc04a - Puxar categorias do dbRef.json e selecionar opção no picker pelo index ao inves do texto
Carlos ok - Cp01, 02 - Contem dois objetos para os nomes das telas. Unificar num unico objeto.
Carlos ok - Sc02a - Renomear Category para Cat
Carlos ok - Sc02b - Substituir String "Verduras" por rdCatSelected. Criar reducer e alterar valor dele conforme selecionado em Sc02a
Carlos ok - Sc - Trazer .maps como arrays

- Carlos e Juan Fazendo... - Separação de services
  -- ok - categList Fb + mock
  -- ok - prodList mock + Fb
  -- ok - storeList mock + Fb
  -- ok - addProducts mock + Fb
  -- ok - rdContent mock + Fb
  -- ok - Puxar categorias do rdContent e basear ela em numeros (ajustar setDataProdMockDb)

- ok - Firestore, Sc02a - Mudar nome da coleção para categories (padrão de coleção no plural)
- Img - ok - Colocar background cinza clarinho

- Fazendo... services - Separar o services do index em arquivos

* Sc02a_v - Trazer estilos padrão para msg noItem
* Sc01 - Ver rdIptState
* Config - Incluir persistência do authUser (mesmo quando recarregar a página) incluir redux-persist

* conexão com DB Ref + msgs DB
* ajustar padrão padding screens
* incluir listas

### POSTERIORMENTE

- Ver longbar na nav para os perfis
- Shadow navbar + card

++++++++++++++++++++++++++++++++++++++++++++++++++

### CONFIRMADOS

Carlos ok - Mudar todas as nomenclaturas para produtos e lojas
Carlos ok - Sc01 - Fazer o loader aparecer no signin enquanto o rdContent não estiver sendo lido
Carlos ok - Cp01 - Indicar item de menu selecionado (Realçar) e fechar quando clicar nele
Carlos ok - routes - verificação de autenticação + redirect pelo grupo
Carlos ok - Sc02a, b - Tirar do menu o item Perfil do produto e entrar nele quando clicar num item da lista
Carlos ok - Sc03c - Estilizar tela Perfil do Produto
Carlos ok - Sc02a, b - Tirar filtro (a) e adicionar cond de imagem padrão na lista quando não tiver imagem cadastrada (link). Trazer imagem cadastrada no dbRef.json
Carlos ok - Sc02a, b - Listar produtos de acordo com o dbRef.json
Carlos ok- Sc03b, c - Adicionar cond de imagem padrão quando não tiver imagem cadastrada (link). Trazer imagem cadastrada, nome do produto e descrição no dbRef.json
