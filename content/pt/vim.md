---
lang: pt
title: 'Sobrio para Vim'
description: 'Um tema para o Vim com cores sóbrias, daí o nome'
image: '/images/screens/vim/window.png'
repo: 'sobrio'
app: 'vim'
---

Este é um tema para o **NeoVim**, com cores sóbrias (ao menos para mim), daí o nome. Ele suporta fontes em itálico, também. A fonte usada nas telas é a Victor Mono. No momento, eu testei apenas com o NeoVim, mas ele deve funcionar com Vim também. Para a melhor experiência, confira se seu terminal suporta pelo menos 256 cores.

This is a theme for **Vim**, with sober colors (at least for me), hence the name.

## Instalação manual

Para usá-lo, basta seguir estes passos:

1. Copie o arquivo `colors/sobrio.vim` para o seu diretório de cores do NVIM, geralmente `~/.vim/colors/`
2. Mude o seu tema para o sobrio usando o comando: `:colorscheme sobrio`.
3. ???
4. Lucre!

---

## Usando o Vim-Plug

Adicione este repositório na seção do Vim-Plug em seu arquivo de configuração:

```vim
call plug#begin()
	Plug 'elvessousa/sobrio'
call plug#end()
```

Após dar um `source` no arquivo (ou reiniciar o editor), rode `:PlugInstall` e reinicie o Vim.

---

## Usando o Vundle

Adicione este repositório na seção do Vundle em seu arquivo de configuração:

```vim
call vundle#begin()
	Plugin 'elvessousa/sobrio'
call vundle#end()
```

Após dar um `source` no arquivo (ou reiniciar o editor), rode `:PluginInstall` e reinicie o Vim.

---

## Usando o NeoBundle

Adicione este repositório na seção do NeoBundle em seu arquivo de configuração:

```vim
call neobundle#begin()
	NeoBundleFetch 'elvessousa/sobrio'
call neobundle#end()
```

Após dar um `source` no arquivo (ou reiniciar o editor), rode `:NeoBundleInstall` e reinicie o Vim.

---

## Configurar como tema padrão

Se você quer fazer deixar o tema como padrão, basta adicionar esta linha ao seu `.vimrc`:

```vim
colorscheme sobrio
```
