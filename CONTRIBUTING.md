# Contribuindo para o Boilerplate

Obrigado pelo interesse em contribuir! Por favor, siga as diretrizes abaixo.

## 🤝 Como Contribuir

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/boilerplate.git`
3. **Crie uma branch**: `git checkout -b feature/sua-feature`
4. **Faça suas alterações**
5. **Commit**: `git commit -m 'feat: descrição da feature'`
6. **Push**: `git push origin feature/sua-feature`
7. **Abra um Pull Request**

## 📝 Convenções de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensagens de commit:

- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Mudanças na documentação
- `style:` - Formatação (sem mudar código)
- `refactor:` - Refatoração de código
- `test:` - Adicionando/alterando testes
- `chore:` - Atualização de dependências

### Exemplo:
```bash
feat: add new Button component
fix: resolve TypeScript errors in utils
docs: update README with new instructions
```

## ✅ Antes de Fazer Commit

Execute os seguintes comandos para garantir qualidade:

```bash
npm run lint      # Verificar código com ESLint
npm run test      # Rodar testes Jest
npm run build     # Testar compilação de build
```

Os **Git Hooks (Husky)** executarão isso automaticamente antes do commit!

## 🔄 Pull Request

Sua PR deve:

- ✓ Ter um título descritivo
- ✓ Incluir descrição das mudanças
- ✓ Referenciar issues relacionadas (#123)
- ✓ Passar em todos os testes (CI/CD do GitHub Actions)
- ✓ Seguir as convenções de código

## 🧪 Testes

Ao adicionar nova funcionalidade, inclua testes:

```bash
# Rodar testes
npm run test

# Rodar testes em modo watch
npm run test:watch
```

## 📚 Estrutura de Pastas

Cada componente deve estar em seu próprio diretório:

```
src/components/
├── Button/
│   ├── Button.tsx          # Componente principal
│   ├── Button.test.tsx     # Testes
│   ├── Button.stories.tsx  # Storybook
│   └── styles.ts           # Estilos com Styled Components
```

## 📚 Storybook

Documente seus componentes no Storybook:

```bash
npm run storybook
```

Todas as stories devem estar em `src/**/*.stories.tsx`.

## 👥 Desenvolvedores

Para perguntas ou dúvidas:

- Abra uma **issue** no repositório
- Inicie uma **discussão** no GitHub
- Entre em contato através de uma mensagem privada

## 📋 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença MIT do projeto.

---

Obrigado por contribuir! 🚀
