# Ideias para depois

## Reorganizar a navegação (aba Antes como painel)

**Problema:** a aba Antes ficou comprida (cinco passos, guias, ferramentas, compartilhar e sugestões numa rolagem só). Os atalhos no topo ajudam, mas são um remendo.

**Proposta**, no estilo das telas de preparação de apps de segurança (Segurança Pessoal do Google, SOS de emergência do iPhone, Life360) e de configuração (Saúde do iPhone):

1. **Manter as 3 abas de baixo** (Antes, Durante, Depois). A divisão por momento é fácil de entender e a emergência continua a um toque.
2. **Transformar a aba Antes num painel de cartões com status.** Cada cartão abre a própria tela, com botão de voltar:
   - Contatos de confiança: "2 contatos ✓"
   - Ponto de encontro: "MASP, 18h ✓" ou "Não combinado"
   - Checklist: "3 de 4"
   - Cartão de emergência
   - Guias de segurança
   - Ferramentas para o vira-voto

   Assim dá para ver o que falta preparar sem rolar a página, e os atalhos do topo deixam de ser necessários.
3. **Trocar o "?" por um botão "Mais"** no canto de cima, para o que é secundário: como funciona, instalar, mandar sugestão, espalhar o kit.
4. **Durante continua uma tela só**, com a emergência no topo.

**Decisões:**
- Não usar menu hambúrguer na navegação principal: ele esconde as opções e acrescenta um toque num momento de nervoso.
- Não criar uma aba só para o ponto de encontro: ele é preparado no Antes e usado no Durante, e já aparece nos dois.

**Como fazer:** implementar com calma, longe de um ato. Testar antes com algumas pessoas numa versão separada (preview da Vercel), sem mexer no endereço principal.
