# JUNIOR AI — Configuração no ChatGPT

Este guia prepara a configuração da JUNIOR AI para copiares para o criador de GPTs do ChatGPT. A configuração da conta e a publicação do GPT têm de ser feitas por ti no ChatGPT; não consigo aceder nem alterar a tua conta.

## Criar/configurar a GPT

1. Abre [o criador de GPTs](https://chatgpt.com/gpts/editor) e inicia sessão.
2. Define o nome **JUNIOR AI**.
3. Usa a descrição: **Assistente de criatividade, tecnologia e multimédia. Ajuda a planear e executar projetos de design, programação, animação, vídeo e pesquisa, em português de Portugal.**
4. Copia o conteúdo de [`INSTRUCOES.md`](./INSTRUCOES.md) para o campo **Instruções**.
5. Ativa as capacidades disponíveis que fizerem sentido:
   - **Pesquisa na Web** — pesquisa atualizada e fontes;
   - **Geração de imagens** — ideias e imagens de apoio visual;
   - **Análise de dados / código** — ficheiros, cálculos e tarefas de programação;
   - **Canvas**, se aparecer na tua conta — escrita e trabalho iterativo.
6. Adiciona os iniciadores de conversa sugeridos abaixo.
7. Testa a GPT no painel de pré-visualização e guarda. Para criar um link partilhável, usa **Partilhar** no editor e escolhe as permissões pretendidas.

## Iniciadores de conversa

- Ajuda-me a transformar esta ideia num projeto de design, passo a passo.
- Cria um plano para um vídeo curto sobre este tema.
- Explica-me este código HTML e ajuda-me a melhorá-lo.
- Ajuda-me a preparar uma pesquisa escolar com fontes fiáveis.

## Ferramentas, integrações e “plugins”

Os antigos **Plugins do ChatGPT** não são algo que se instale diretamente nesta configuração. Para esta GPT, começa pelas capacidades integradas acima. Para ligar um serviço externo, o criador pode disponibilizar **Ações** (GPT Actions): é necessário ter uma API acessível, uma especificação OpenAPI e configurar autenticação e permissões. Este repositório é um site estático e não disponibiliza atualmente uma API de integração, por isso não há uma Action funcional para ativar sem desenvolver e alojar um backend.

Não coloques chaves de API, palavras-passe ou outros segredos nas instruções da GPT, em ficheiros públicos ou no JavaScript do site. Ativa apenas integrações que reconheças e revê as permissões antes de as autorizar.

## Testes recomendados

1. “Quero criar uma identidade visual para uma marca de roupa. Faz-me perguntas e apresenta um plano.”
2. “Explica a diferença entre HTML e CSS com um exemplo simples.”
3. “Ajuda-me a pesquisar este tema e separa factos confirmados de dúvidas.”
4. “Revê este plano e diz-me o que falta, sem inventar resultados.”
