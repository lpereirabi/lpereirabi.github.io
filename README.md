# Leonardo Pereira — Portfolio

Portfólio de Data Analytics hospedado no GitHub Pages.

## Estrutura

```
portfolio/
├── index.html          # Estrutura HTML (única página)
├── css/
│   ├── reset.css       # Reset de estilos do browser
│   ├── variables.css   # Tokens de design (cores, fontes, espaçamentos)
│   ├── base.css        # Estilos globais, botões, seções, footer
│   ├── nav.css         # Navbar desktop + hamburger mobile
│   ├── hero.css        # Seção hero com animações de entrada
│   ├── sections.css    # Overrides por seção (se necessário)
│   ├── projects.css    # Grid de projetos + filtro por categoria
│   ├── skills.css      # Barras de habilidades
│   ├── contact.css     # Seção de contato
│   ├── animations.css  # Keyframes + classes .reveal
│   └── responsive.css  # Media queries (mobile-first)
└── js/
    ├── nav.js          # Progress bar, nav ativa, hamburger
    ├── reveal.js       # Scroll reveal + animação das skill bars
    └── filter.js       # Filtro de projetos por categoria
```

## Como atualizar

### Adicionar um projeto
No `index.html`, copie um bloco `.project-card` dentro de `#projects-grid` e altere:
- `data-category` → `bi`, `ml`, `python` ou `engenharia`
- Título, descrição, ferramentas e links

### Adicionar uma categoria de filtro
1. Em `index.html`, adicione um `<button class="filter-btn" data-filter="nova-categoria">` na `.filter-bar`
2. Use `data-category="nova-categoria"` nos cards correspondentes

### Alterar cores
Edite `css/variables.css` — todas as cores estão centralizadas lá.

## Deploy

```bash
git add .
git commit -m "descrição da mudança"
git push origin main
```

O GitHub Pages atualiza automaticamente em ~1 minuto.
