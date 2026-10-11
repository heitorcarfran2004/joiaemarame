// Catalogo da area de membros Joia em Arame. Tudo que a home e o leitor mostram sai daqui.
//
// Ao trocar um livro de lugar ou acrescentar paginas, mexa SO neste arquivo:
// nem a home nem o leitor tem conteudo escrito no HTML.
//
// `paginas` e a CONTAGEM, e os arquivos precisam existir como
// assets/livros/<slug>/pag-001.webp ate pag-<paginas>.webp, com 3 digitos.

const CATALOGO = {
  // o acesso grande da home
  // 225 = capa + 112 projetos x 2 paginas (modelo e montagem). A pagina de vendas
  // promete "mais de 100": os 12 a mais chegam como surpresa.
  principal: {
    slug: 'principal',
    titulo: '+100 Projetos de Brincos de Arame',
    paginas: 225,
    capa: 'assets/capas/principal.webp',
    pdf: 'pdf/projetos-brincos-de-arame.pdf',
  },

  // o carrossel horizontal. `paginas` inclui a capa, que e a pagina 1 de cada um.
  //
  // embreve: true = o bonus aparece com a capa e a faixa EM BREVE, mas nao abre, nao
  // conta como liberado e fica fora da biblioteca. Os 6 ainda estao em producao.
  // Quando um ficar pronto: gerar as paginas em assets/livros/<slug>/, o PDF em pdf/,
  // acertar `paginas` e trocar embreve para false (ou apagar a linha).
  bonus: [
    { slug: 'b1', titulo: '30 Brincos com Pedra Bruta', sub: 'A gaiola de arame que prende a pedra sem cola e sem furo',
      paginas: 31, capa: 'assets/capas/b1.webp', pdf: 'pdf/bonus-1-pedra-bruta.pdf', embreve: true },
    { slug: 'b2', titulo: 'Tabela de Bitolas e Onde Comprar', sub: 'Qual arame comprar para cada parte da peça',
      paginas: 9, capa: 'assets/capas/b2.webp', pdf: 'pdf/bonus-2-bitolas.pdf', embreve: true },
    { slug: 'b3', titulo: 'Guia de Acabamento do Gancho', sub: 'O detalhe que faz a peça parecer de loja',
      paginas: 9, capa: 'assets/capas/b3.webp', pdf: 'pdf/bonus-3-acabamento.pdf', embreve: true },
    { slug: 'b4', titulo: 'Moldes em Branco para Criar', sub: 'Desenhe o seu próprio modelo em tamanho real',
      paginas: 9, capa: 'assets/capas/b4.webp', pdf: 'pdf/bonus-4-moldes.pdf', embreve: true },
    { slug: 'b5', titulo: 'Como Precificar e Vender', sub: 'O custo real e o preço justo do seu par',
      paginas: 9, capa: 'assets/capas/b5.webp', pdf: 'pdf/bonus-5-precificar.pdf', embreve: true },
    { slug: 'b6', titulo: 'Lista de Compras da Iniciante', sub: 'O que comprar para começar sem gastar à toa',
      paginas: 9, capa: 'assets/capas/b6.webp', pdf: 'pdf/bonus-6-compras.pdf', embreve: true },
  ],

  // "Produtos Extras" (orderbumps): nenhum por enquanto. Com a lista vazia a secao
  // some da home. Formato de cada item, para quando entrarem:
  //   { slug, titulo, sub, paginas, de, por, liberado, capa, pdf, checkout }
  ofertas: [],

  // A aba de VÍDEOS. Vazia = a aba mostra o cadeado e o aviso de "Em breve".
  // Formato de cada item: { id: '<id do Wistia>', seg: <duração em segundos> }.
  videos: [],
};

// o leitor acha qualquer material pelo slug: principal, bonus liberado ou extra liberado.
// Bonus em breve nao abre nem por link direto.
CATALOGO.porSlug = (slug) =>
  slug === 'principal' ? CATALOGO.principal
    : CATALOGO.bonus.find(b => b.slug === slug && !b.embreve)
    || CATALOGO.ofertas.find(o => o.slug === slug && o.liberado);
