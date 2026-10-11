# Joia em Arame — app de membros dos Brincos de Arame

Entrega do produto **+100 Projetos de Brincos de Arame**. Cópia do app das mochilas
(`apps/mochilas-membros`, ateliedamari.vercel.app), que por sua vez é cópia do app da Juh
(`apps/micanga-membros`): mesma estrutura, leitor, virada de página, lupa e guia —
**o README da Juh explica o funcionamento e as armadilhas do leitor**.

    node servidor.cjs     # http://localhost:4200

## O que muda em relação às mochilas

- **marca** Joia em Arame, logo redondo recortado da imagem do hero (`assets/logo-*`),
  paleta cobre e verde-musgo da apostila no lugar do rosé e bordô
- **bônus em breve**: os 6 aparecem no carrossel com a capa e a faixa EM BREVE, mas não
  abrem, não contam como liberados e ficam fora da biblioteca. Nem o link direto
  (`#/ler/b1`) abre: cai na home. Flag `embreve: true` no `catalogo.js`
- **sem Produtos Extras**: `CATALOGO.ofertas` vazio, a seção some da home
- **aba Vídeos trancada**: `CATALOGO.videos` vazio, mostra cadeado e "Em breve"
- **guia "Dúvidas?"** reescrito para "Como ler um projeto de arame"

## Conteúdo

| slug | material | páginas | estado |
|---|---|---|---|
| principal | +100 Projetos de Brincos de Arame | 225 | liberado |
| b1 | 30 Brincos com Pedra Bruta | 31 | em breve |
| b2 | Tabela de Bitolas e Onde Comprar | 9 | em breve |
| b3 | Guia de Acabamento do Gancho | 9 | em breve |
| b4 | Moldes em Branco para Criar | 9 | em breve |
| b5 | Como Precificar e Vender | 9 | em breve |
| b6 | Lista de Compras da Iniciante | 9 | em breve |

O principal tem 225 páginas: a capa + 112 projetos × 2 (modelo e montagem). A página
de vendas promete "mais de 100"; os 12 a mais chegam como surpresa. Saem da pasta
`Apostila Brincos em Arame V1/Em imagem`, na ordem do nome (capa, depois
projeto-001-a, 001-b, 002-a…), **sem** a `capa-112-antiga.png` que também mora lá.

O PDF de download é o comprimido (55 MB, 225 páginas, capa +100).

As capas dos bônus são recortes do livro em pé dos mockups de vitrine
(`entregaveis/brincos-arame/bonus-capas`). Os pedidos das páginas internas já estão
escritos em `entregaveis/bonus-arame/paginas.cjs` e ainda não foram enviados.

## Para liberar um bônus

1. gerar as páginas em `assets/livros/<slug>/pag-001.webp` … (a 1 é a capa em pé)
2. gerar o PDF em `pdf/`
3. no `catalogo.js`, acertar `paginas` e trocar `embreve` para `false`

## Ainda não ligado

Igual aos outros apps: o login só confere o formato do e-mail (a tela de entrada avisa
isso), e o link de suporte do perfil aponta para `https://wa.me/` sem número.
