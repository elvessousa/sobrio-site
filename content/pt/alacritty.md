---
lang: pt
title: 'Sobrio para Alacritty'
description: 'Um tema para Alacritty cores sóbrias, daí o nome'
image: '/images/screens/alacritty/window.png'
link: 'https://github.com/elvessousa/sobrio-alacritty/archive/refs/heads/master.zip'
repo: 'sobrio-alacritty'
app: 'alacritty'
---

Este é um tema para o **Alacritty**, o emulador de terminal. Ele usa as cores do tema Sobrio para deixar a sua experiência mais única.

## Instalação

```yaml
schemes:
  # Sobrio colors for Alacrity Terminal
  # Author: Elves Sousa <elvessousa.com.br>
  # Copy or append these values to your alacritty.yml file
  sobrio: &sobrio
    primary:
      background: '#202020'
      foreground: '#eeeeee'

    # Normal colors
    normal:
      black: '#3a3b3f'
      red: '#fd6389'
      green: '#2ec27e'
      yellow: '#d7af87'
      blue: '#d7af87'
      magenta: '#d7d7ff'
      cyan: '#78dce8'
      white: '#eeeeee'

    # Bright colors
    bright:
      black: '#727072'
      red: '#fd6399'
      green: '#2ec27e'
      yellow: '#d7af10'
      blue: '#d7af10'
      magenta: '#d7d7ff'
      cyan: '#7cdce7'
      white: '#ffffff'

  # Sobrio light colors for Alacrity Terminal
  # Author: Elves Sousa <elvessousa.com.br>
  # Copy or append these values to your alacritty.yml file
  sobrio-light: &sobrio-light
    primary:
      background: '#eeeeee'
      foreground: '#202020'

    # Normal colors
    normal:
      black: '#eeeeee'
      red: '#dd4c4f'
      green: '#2ec27e'
      yellow: '#af875f'
      blue: '#af875f'
      magenta: '#9787af'
      cyan: '#5fafaf'
      white: '#3a3b3f'

    # Bright colors
    bright:
      black: '#727072'
      red: '#fd6399'
      green: '#2ec27e'
      yellow: '#d7af87'
      blue: '#d7af87'
      magenta: '#d7d7ff'
      cyan: '#7cdce7'
      white: '#ffffff'
```

A "instalação" é bem simples. Com o código acima, apenas siga estes quatro simples passos:

1. Copie o código que você acabou de ver para o seu arquivo `alacritty.yml`, geralmente encontrado em `~/.config/alacritty/alacritty.yml`.
2. Adicione a linha `colors: *sobrio` ou `colors: *sobrio-light` e salve o arquivo.
3. ???
4. Lucre!

## Tela

![Screenshot](../images/screens/alacritty/window.png)
_Tela típica do Alacritty usando este tema_
