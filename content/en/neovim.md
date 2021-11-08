---
lang: en
title: 'Sobrio Theme for NeoVim'
description: 'A theme for NeoVim with sober colors, hence the name'
image: '/images/screens/vim/window.png'
repo: 'sobrio'
app: 'vim'
---

This is a theme for **Neovim**, with sober colors (at least for me), hence the name.
It has support for italic fonts, too. The font used in the screenshots is Victor Mono. At the moment, I only tested it in Neovim, but I think it should work with Vim as well. For the best experience, make sure your terminal supports at least 256 colors.

---

## Installation

To use it, follow these steps:

1. Copy the `colors/sobrio.vim` file to your NVIM colors directory, usually `~/.config/nvim/colors/`
2. Set the color scheme: `:colorscheme sobrio`.
3. ???
4. Profit!

---

## Using Vim-Plug

Add this repo in the Vim-Plug section of your config file:

```vim
call plug#begin()
	Plug 'elvessousa/sobrio'
call plug#end()
```

After sourcing the file (or restarting the editor), run `:PlugInstall` and restart Neovim.

---

## Using Vundle

Add this repo in the Vundle section of your config file:

```vim
call vundle#begin()
	Plugin 'elvessousa/sobrio'
call vundle#end()
```

After sourcing the file (or restarting the editor), run `:PluginInstall` and restart Neovim.

---

## Using NeoBundle

Add this repo in the Vundle section of your config file:

```vim
call neobundle#begin()
	NeoBundleFetch 'elvessousa/sobrio'
call neobundle#end()
```

After sourcing the file (or restarting the editor), run `:NeoBundleInstall` and restart Neovim.

---

## Setting it as your default

If you want to make it your default, just add this line to your `init.vim`:

```vim
colorscheme sobrio
```
