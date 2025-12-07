# Boilerplate Next.js + TypeScript + Styled Components

![Next.js](https://img.shields.io/badge/Next.js-14.0%2B-000000?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.2%2B-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2%2B-3178C6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Code quality](https://img.shields.io/badge/Code%20quality-ESLint%2BPrettier-blue?style=flat-square)

## 📋 Descrição

Boilerplate profissional para iniciar projetos Next.js com as melhores práticas incluindo:

- **TypeScript** para tipagem estática
- **Styled Components** para CSS-in-JS
- **Jest + Testing Library** para testes
- **Storybook** para documentação de componentes
- **ESLint + Prettier** para qualidade de código
- **Husky + Lint-staged** para Git hooks
- **Plop** para geração automática de arquivos
- **PWA** configurado

## 🚀 Quick Start

### Pré-requisitos

- Node.js 16.x ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/RacconWebFenix/boilerplate.git
cd boilerplate

# Instale as dependências
npm install
# ou
yarn install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Construção para produção

```bash
npm run build
npm run start
```

## 📂 Estrutura de Pastas

```
boilerplate/
├── .husky/              # Git hooks (pre-commit, pre-push)
├── .jest/               # Configuração do Jest
├── .storybook/          # Configuração do Storybook
├── .vscode/             # Configurações do VS Code
├── .github/             # Configurações do GitHub
├── generators/          # Templates Plop para gerar componentes
├── public/              # Arquivos estáticos e PWA manifest
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas Next.js
│   ├── styles/          # Estilos globais
│   ├── types/           # Tipos e interfaces TypeScript
│   └── utils/           # Funções utilitárias
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configuração TypeScript
├── jest.config.js       # Configuração Jest
├── next.config.js       # Configuração Next.js
├── CONTRIBUTING.md      # Guia de contribuição
└── .env.example         # Variáveis de ambiente exemplo
```

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-------------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Verifica código com ESLint |
| `npm run test` | Roda testes Jest |
| `npm run test:watch` | Roda testes em modo watch |
| `npm run storybook` | Inicia Storybook |
| `npm run build-storybook` | Cria build do Storybook |
| `npm run generate` | Abre Plop para gerar componentes |

## 📦 Generators com Plop

Para criar um novo componente automaticamente:

```bash
npm run generate
```

Escolha a opção desejada e responda às perguntas. Isso criará:
- Arquivo de componente (`component.tsx`)
- Arquivo de styles (`styles.ts`)
- Arquivo de testes (`component.test.tsx`)
- Arquivo de story (`component.stories.tsx`)

## 🧪 Testes

Rodar todos os testes:

```bash
npm run test
```

Rodar testes em modo watch:

```bash
npm run test:watch
```

Todos os testes devem estar em `src/**/*.test.tsx`.

## 📚 Documentação de Componentes (Storybook)

Visualizar e testar componentes isoladamente:

```bash
npm run storybook
```

Abra [http://localhost:6006](http://localhost:6006).

Todas as stories devem estar em `src/**/*.stories.tsx`.

## 🔍 Qualidade de Código

### ESLint + Prettier

Verifica sintaxe e estilo automaticamente:

```bash
npm run lint
```

### Git Hooks (Husky + Lint-staged)

Antes de fazer commit, executa lint e testes automaticamente. Previne commits com código ruim.

## 🌍 PWA (Progressive Web App)

O projeto está configurado como PWA. Veja `next.config.js` para personalizaação.

## 🤝 Contribuindo

Se deseja contribuir, por favor leia [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.

### Resumo rápido:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

Certifique-se de:
- Rodar `npm run lint` antes de fazer commit
- Adicionar testes para novas funcionalidades
- Atualizar a documentação se necessário

## 📝 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](./LICENSE) para detalhes.

## 👥 Autores

- [RacconWebFenix](https://github.com/RacconWebFenix)
- [marcosDominguesTsx](https://github.com/marcosDominguesTsx)

## 📧 Suporte

Para dúvidas ou sugestões, abra uma [issue](https://github.com/RacconWebFenix/boilerplate/issues) neste repositório.

---

**🚀 Feliz codificando!**
