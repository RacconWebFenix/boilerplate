# Estrutura de Pastas do Projeto

Este documento descreve a organização do projeto Boilerplate Next.js.

## Estrutura Geral

```
boilerplate/
├── .github/              # Configurações do GitHub
│   └── workflows/        # GitHub Actions CI/CD
├── .husky/               # Git hooks
├── .jest/                # Jest config
├── .storybook/           # Storybook config
├── generators/           # Plop templates
├── public/               # Static files
├── src/
│   ├── components/       # Componentes React
│   ├── pages/            # Páginas Next.js
│   ├── styles/           # Estilos globais
│   ├── types/            # Tipos TypeScript
│   └── utils/            # Funções utilitárias
├── .env.example          # Variáveis de ambiente
├── CONTRIBUTING.md       # Guia de contribuição
├── package.json          # Dependências
└── tsconfig.json         # TypeScript config
```

## Componentes

Cada componente deve ter:
- `ComponentName.tsx` - Componente principal
- `ComponentName.test.tsx` - Testes
- `ComponentName.stories.tsx` - Storybook
- `styles.ts` - Estilos com Styled Components

Use `npm run generate` para criar um novo componente automaticamente!

## Usos

- `src/pages/` - Páginas e API routes
- `src/styles/` - Estilos globais com createGlobalStyle
- `src/types/` - Interfaces e tipos TypeScript
- `src/utils/` - Funções auxiliares

---

Para mais detalhes, veja [README.md](./README.md) ou [CONTRIBUTING.md](./CONTRIBUTING.md)
