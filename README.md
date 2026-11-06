# JUNIOR PORTFOLIO

Portefólio digital moderno e minimalista para apresentar projetos, competências e identidade visual em Multimédia.

## Visão geral

Este site foi desenvolvido com HTML5, CSS3 e JavaScript puro, com foco em:
- apresentação pessoal
- projetos criativos
- design responsivo
- animações discretas
- modo escuro
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

1. Cria um repositório no GitHub com o nome: `junior-portfolio`
2. Envia os ficheiros para o repositório.
3. No GitHub, vai a: `Settings` → `Pages`
4. Em "Build and deployment", seleciona:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root
5. Guarda e aguarda a publicação.
6. O link será algo como: `https://seu-username.github.io/junior-portfolio/`

## Personalização

### Texto
Edita diretamente os conteúdos em `index.html`:
- apresentação inicial
- secção "Sobre mim"
- listas de competências
- projetos
- contacto

### Cores
Altera as variáveis globais em `style.css`:

```css
:root {
  --bg: #0a0d12;
  --text: #f3f7fb;
  --accent: #4da3ff;
}
```

### Imagens
Substitui os placeholders em `assets/images/` pelos teus próprios trabalhos quando estiverem prontos.

## Observações

- As imagens presentes são placeholders para manter o projeto funcional e visualmente organizado.
- O código foi pensado para ser simples de editar e manter.
- A interface é responsiva para desktops, tablets e telemóveis.

## Licença

Este projeto foi criado para uso pessoal e apresentação profissional. Pode ser adaptado conforme necessário.
