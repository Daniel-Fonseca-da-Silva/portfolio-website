# Configurações de Versão do Projeto

## Node.js
- **Versão mínima**: 22.20.0 (LTS)
- **Versão recomendada**: 22.20.0 ou superior
- **Arquivos de configuração**:
  - `.nvmrc` - Para usuários do nvm
  - `.node-version` - Para compatibilidade com outras ferramentas
  - `package.json` - Campo `engines` especificando versões mínimas

## Dependências Principais Atualizadas
- **Next.js**: ^15.5.2 (mais recente)
- **React**: ^19.1.1 (mais recente)
- **TypeScript**: ^5.9.2 (mais recente)
- **Tailwind CSS**: ^3.4.0 (versão estável e compatível)
- **ESLint**: ^9.15.0 (mais recente)
- **tailwind-scrollbar**: ^2.0.0 (versão estável)

## Como Usar

### Com nvm (Node Version Manager)
```bash
nvm use
```

### Verificar versão atual
```bash
node --version
npm --version
```

### Atualizar dependências
```bash
npm update
npm outdated  # Verificar dependências desatualizadas
```

## Compatibilidade
- Todas as dependências são compatíveis com Node.js 22.20.0+
- O projeto foi testado com as versões mais recentes das dependências
- Sem vulnerabilidades de segurança detectadas
- Build funcionando perfeitamente com Next.js 15.5.2

## Configurações Especiais
- **PostCSS**: Configurado para usar `tailwindcss` (versão 3 estável)
- **ESLint**: Atualizado para versão 9 com regras mais rigorosas
- **Apóstrofos**: Todos os apóstrofos foram escapados corretamente para compatibilidade
- **Tailwind CSS**: Mantido na versão 3.4.0 para máxima compatibilidade e estabilidade
- **Scrollbar Personalizada**: CSS customizado implementado para garantir funcionamento da scrollbar

## Scrollbar Personalizada
O projeto inclui estilos CSS personalizados para scrollbar:
- **`.scrollbar`**: Scrollbar visível com cores personalizadas
- **`.scrollbarHide`**: Oculta a scrollbar quando necessário
- **Cores**: Usa as cores do tema (textDark) com transparência
- **Compatibilidade**: Funciona em WebKit (Chrome, Safari, Edge) e Firefox

## Status da Atualização
✅ **COMPLETO** - Projeto atualizado com sucesso para as versões mais recentes
✅ **BUILD FUNCIONANDO** - Compilação sem erros
✅ **DEV SERVER** - Servidor de desenvolvimento funcionando
✅ **SEM VULNERABILIDADES** - Todas as dependências seguras
✅ **TAILWIND FUNCIONANDO** - CSS framework funcionando perfeitamente
✅ **SCROLLBAR FUNCIONANDO** - Scrollbar personalizada implementada

## Nota Importante
- **Tailwind CSS v4** foi testado mas causou problemas de compatibilidade
- **Versão 3.4.0** foi escolhida por ser mais estável e compatível com Next.js
- Todas as funcionalidades do Tailwind estão funcionando normalmente
- **Scrollbar personalizada** foi implementada para garantir funcionamento consistente 