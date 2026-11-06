# JUNIOR PORTFOLIO

Portefólio digital premium e cinematográfico para apresentar projetos, competências e identidade visual em Multimédia.

## Visão geral

Este site foi desenvolvido com HTML5, CSS3 e JavaScript puro, com foco em:
- apresentação pessoal forte e moderna
- projetos criativos em layout editorial
- design responsivo para mobile, tablet e desktop
- animações discretas e elegantes
- modo escuro premium
- acessibilidade básica
- formulário de contacto com validação

## Estrutura do projeto

```text
junior-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   ├── images/
│   │   ├── hero-placeholder.svg
│   │   └── project-placeholder.svg
│   └── icons/
│       ├── github.svg
│       ├── mail.svg
│       └── arrow-up.svg
```

## Como executar localmente

### Opção 1: abrir diretamente no navegador
- Abra o ficheiro `index.html` diretamente no navegador.

### Opção 2: servidor local simples
No terminal, na pasta do projeto:

```bash
python -m http.server 8000
```

Depois abra:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Cria um repositório no GitHub com o nome `junior-portfolio`.
2. Envia os ficheiros para o repositório.
3. No GitHub, entra em `Settings` → `Pages`.
4. Em "Build and deployment" seleciona:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Guarda e aguarda a publicação.
6. O link final será algo como: `https://seu-username.github.io/junior-portfolio/`

## Personalização

### Texto
Edita diretamente os conteúdos em `index.html`:
- apresentação inicial
- secção sobre mim
- competências
- projetos
- contacto

### Cores
Altera as variáveis globais em `style.css`:

```css
:root {
  --bg: #070b12;
  --text: #edf5ff;
  --accent: #59a9ff;
}
```

### Imagens
Substitui os placeholders em `assets/images/` pelos teus próprios conteúdos quando estiverem disponíveis.

## Observações

- As imagens presentes são placeholders para manter um visual profissional e funcional.
- O código foi concebido para ser fácil de editar e manter.
- A interface é responsiva em desktop, tablet e telemóvel.

## Licença

Este projeto foi criado para uso pessoal e apresentação profissional.
