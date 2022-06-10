<div align="justify"> 

# Programação de Funcionalidades

Neste documento estão descritos os artefatos e estrutura de dados criados para atingir os requisitos funcionais e não funcionais que foi previsto nas <a href="./specification.md">Especificações do Projeto</a>, também deve possuir as instruções para acesso e verificação da implementação. As tecnologias usadas foram basicamente, HTML, CSS, Arquivos JSON, NodeJs, JavaScript e Heroku.

### Requisitos 
 * RF-001 - Possuir dados estáticos que não necessitem de interações constantes com bancos de dados para serem acessados.
 * RF-002 - Possuir fácil acesso a links com localizações dos locais.
 * RF-003 - Possuir um carregamento de mapas dinâmicos para cada local.
 * RF-004 - Possuir opção de expandir as informações para maiores detalhes. 

<br/>

 ## Tela Inicial   
  A página trás uma descrição geral do site, explicando um pouco do que o navegador irá encontrar. Esta pagina atinge o requisito      * RF-004

  Para atender o requisito RF-004, a pagína inicial pode explorar tanto o assunto de Cidades, quanto o de Categorias.

  ![menu Tela Inicial](img/menutelainicial.png)

  Nesta página, foi desenvolvido dois acessos, direcionando a novas paginas, mais especificas sobre o assunto.

  <br/>

## Cidades
  Ao  clicar para explorar "Cidades", aparecerá o seguinte menu:

  ![menu Cidades](img/menucidades.png)

  Nesta página, encontra-se três cidades para aprofundar-se nas pesquisas, sendo estas:
   * Contagem
   * Belo Horizonte
   * Betim
   
     <br/>

#### Belo Horizonte
  Ao ser direcionado para a página de BH, aparecerá uma rápida descrição da cidade em um box. Um pouco mais em baixo, aparecerá uma lista de Locais de Interesse e outra de Principais Categorias.

  ![menu Belo Horizonte](img/menubh.png)

  Aparecerão diversos destinos nestas listas para se aprofundar, vamos pegar como exemplo a Lagoa da Pampulha.

##### Lagoa da Pampulha
  Ao ser aberta a pagina, aparecerá diversas informações sobre o local. Com essa página, atinginmos os requisitos: 
 * RF-002
 * RF-003

 ![menu Lagoa da Pampulha](img/menulagoadapampulha.png)

  Este modelo final de página sobre qualquer local (bares, cinemas, parques, museus, restaurantes), de modo que por qualquer caminho percorrido, será exibida as seguintes informações:
   * Nome do Local
   * API do Local
   * Link
   * Endereço  
   * Fotos

