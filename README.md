# Vira Seguro

Kit de segurança para celular, feito para quem faz campanha de rua e vira-voto.

👉 **https://vira-seguro.vercel.app**

![Vira Seguro](og-image.png)

## Como funciona

O kit é dividido em três momentos, nas abas de baixo:

- **Antes**: cadastre até 3 contatos de confiança, veja como compartilhar a localização em tempo real pelo WhatsApp, combine um ponto de encontro com o grupo (que aparece na aba Durante, mesmo sem internet), faça o checklist da saída (rua, ato ou redes) e gere um cartão de emergência para usar como fundo da tela de bloqueio.
- **Durante**: em perigo, ligue para o 190 ou mande sua localização para um contato com um toque. O modo disfarce transforma a tela numa lista de compras.
- **Depois**: escolha o que aconteceu e veja onde denunciar (delegacia, BO online, 180, Disque 100, Polícia Federal, SaferNet, TSE, Defensoria). O kit ajuda a escrever o relato para copiar e enviar.

Também tem guias de segurança para rua, atos e redes, links de ferramentas para o vira-voto e opções para espalhar o kit pelo WhatsApp, pelo Direct do Instagram e nos stories.

Toque no **?** no topo da tela para ver a explicação e como instalar.

## Privacidade

- Nenhum dado sai do celular: contatos e checklist ficam salvos só no aparelho.
- Sem cadastro, sem analytics, sem cookies.
- A única requisição externa é a fonte Figtree, do Google Fonts.

## Instalar e usar sem internet

O kit é um PWA: pode ser adicionado à tela de início e funciona offline depois de aberto uma vez com internet.

- **iPhone**: Safari ou Chrome › Compartilhar › Adicionar à Tela de Início.
- **Android**: Chrome › três pontinhos › Instalar app.

## Estrutura

Site estático, sem build e sem dependências.

| Arquivo | O que é |
| --- | --- |
| `index.html` | O kit inteiro: HTML, CSS e JavaScript num arquivo só |
| `sw.js` | Service worker: guarda o kit em cache (cache primeiro, atualizando em segundo plano) |
| `manifest.webmanifest` | Nome, cores e ícones para instalar como app |
| `icon-*.png`, `apple-touch-icon.png`, `favicon*` | Ícones |
| `og-image.png` | Imagem da prévia do link no WhatsApp e nas redes |
| `vercel.json` | Deploy estático na Vercel; serve o `sw.js` sem cache longo |

Para rodar localmente, sirva a pasta com qualquer servidor estático, por exemplo:

```sh
python3 -m http.server 8000
```

e abra http://localhost:8000.

## Deploy

Publicado na Vercel. Cada push na branch `main` vai para o ar automaticamente.

## Sugestões

O projeto ainda está no começo. Sentiu falta de algo ou encontrou um problema? Mande pelo formulário: https://forms.gle/cYLCyHukokptQMRi7

O conteúdo foi conferido em outubro de 2026, com foco em São Paulo. O kit orienta, mas não substitui emergência nem advogado.
