# CodeLab - Login Page

Uma página de login moderna e responsiva construída com HTML e Sass.

## 🚀 Comandos de Desenvolvimento

### Compilação Sass

Este projeto utiliza Sass para estilização. Aqui estão os comandos disponíveis:

#### Compilar uma vez (produção)
```bash
npm run sass:build
# ou
yarn sass:build
```
Compila todos os arquivos `.scss` da pasta `assets/styles/scss/` para `assets/styles/css/` com compressão e source maps.

#### Monitorar e compilar automaticamente (desenvolvimento)
```bash
npm run sass:watch
# ou 
yarn sass:watch
```
Monitora mudanças nos arquivos `.scss` e recompila automaticamente com compressão.

#### Modo desenvolvimento (CSS expandido)
```bash
npm run sass:dev
# ou
yarn sass:dev
```
Monitora mudanças e compila com CSS expandido (mais legível para debug).

#### Comandos simplificados
```bash
npm run build    # Equivale ao sass:build
npm run dev      # Equivale ao sass:dev
```

## 📁 Estrutura de Arquivos

```
├── assets/         # Recursos estáticos
│   ├── images/     # Imagens
│   ├── scripts/    # JavaScript
│   └── styles/     # Estilos
│       ├── scss/   # Arquivos Sass componentizados
│       │   ├── main.scss           # Arquivo principal (12 linhas)
│       │   ├── _variables.scss     # Variáveis globais (37 linhas)
│       │   ├── _mixins.scss        # Mixins utilitários (90 linhas)
│       │   ├── components/         # Componentes organizados
│       │   │   ├── _base.scss      # Reset e base (15 linhas)
│       │   │   ├── _layout.scss    # Layout (32 linhas)
│       │   │   ├── _typography.scss # Tipografia (34 linhas)
│       │   │   ├── _forms.scss     # Formulários (44 linhas)
│       │   │   ├── _buttons.scss   # Botões (27 linhas)
│       │   │   └── _responsive.scss # Media queries (19 linhas)
│       │   └── README.md           # Documentação da arquitetura
│       └── css/    # Arquivos CSS compilados
├── .gitignore      # Arquivos ignorados pelo Git
└── index.html      # Página principal
```

## 🎨 Recursos do Sass

## 🧩 Arquitetura Componentizada

Os estilos estão organizados em componentes modulares:

- **Base** (`_base.scss`): Reset CSS e estilos globais
- **Layout** (`_layout.scss`): Estrutura e seções da página
- **Tipografia** (`_typography.scss`): Textos e títulos
- **Formulários** (`_forms.scss`): Inputs e elementos de formulário
- **Botões** (`_buttons.scss`): Botões e suas variações
- **Responsividade** (`_responsive.scss`): Media queries
- **Variáveis** (`_variables.scss`): Cores, fontes e espaçamentos
- **Mixins** (`_mixins.scss`): Utilitários reutilizáveis

### 📱 Mixins Responsivos Disponíveis

```scss
// Mixins básicos (otimizados - apenas os utilizados)
@include mobile { ... }        // max-width: 480px
@include tablet { ... }        // max-width: 768px
```

### 💡 Exemplos de Uso

```scss
// Usando mixins responsivos
.meu-componente {
  padding: 2rem;
  
  @include tablet {
    padding: 1.5rem;
  }
  
  @include mobile {
    padding: 1rem;
  }
}

// Usando mixins de tipografia
.meu-titulo {
  color: $text-primary;
  font-weight: 600;
  @include responsive-text($font-size-xl, $font-size-lg);
}

// Usando mixins de links
.meu-link {
  @include link-style($primary-color);
}
```

### 🔧 Mixins Utilitários

```scss
// Tipografia base
@include text-base;              // Família e altura de linha padrão

// Texto responsivo
@include responsive-text($desktop-size, $mobile-size);

// Estilo de link
@include link-style($color);     // Link com hover automático

// Botões
@include button-style($bg-color, $text-color);

// Inputs
@include form-input;             // Input com foco automático
```

## 🔧 Como usar

1. **Instalar dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

2. **Iniciar desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Editar estilos:**
   - Modifique arquivos na pasta `assets/styles/scss/`
   - O CSS será automaticamente recompilado
   - Atualize o navegador para ver as mudanças

4. **Build para produção:**
   ```bash
   npm run build
   ```

## 📱 Responsividade

A página é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout lado a lado
- **Mobile**: Layout empilhado verticalmente 