# Ideias para depois

## ✅ Reorganizar a navegação (aba Antes como painel) — implementado

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

## ✅ Ficha de segurança para enviar aos contatos — implementado (o combinado de horário entrou como campo da ficha)

**Ideia:** ajudar a pessoa a montar uma ficha com informações importantes e mandar para quem confia (ou guardar nas próprias notas), **sem o kit salvar nada**. Mesmo princípio do relato na aba Depois: preenche, gera o texto, envia, e os campos são apagados.

**Campos sugeridos (todos opcionais):**
- Nome completo e como prefere ser chamada(o)
- Endereço de casa
- Outras pessoas para avisar (família, quem mora junto) e telefones
- Saúde: alergias, remédios de uso contínuo, condições importantes, tipo sanguíneo
- Advogada(o) ou contato jurídico de confiança (ou "procurar a Defensoria")
- Combinados: até que horas vai dar notícia e o que fazer se não der (ex.: "me ligue; se eu não atender em 30 min, avise a minha mãe")
- Observações livres

**Como funcionaria:**
- Nova opção na aba Antes, perto dos contatos: "Ficha de segurança".
- Botões: "Mandar pro contato" (WhatsApp do contato principal ou menu de compartilhar) e "Copiar" (para colar nas notas do celular).
- Ao sair da tela ou depois de enviar, os campos são apagados. Aviso claro: "Nada fica salvo no kit".

**Cuidados:**
- Depois de enviada, a ficha fica no WhatsApp de quem recebeu. Orientar a mandar só para pessoas de muita confiança e sugerir as mensagens temporárias do WhatsApp.
- Não pedir CPF, RG nem senhas. Se a pessoa quiser incluir documentos, que seja por conta própria no campo livre.
- Texto curto e organizado, fácil de ler no celular numa emergência.

**Pode combinar com:** um "combinado de horário" (check-in), em que a pessoa define até que horas vai dar notícia e o kit gera a mensagem para o contato com esse combinado.
