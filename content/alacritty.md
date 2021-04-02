---
lang: en
title: 'Sobrio Theme for Alacritty'
description: 'A theme for Alacritty with sober colors, hence the name'
image: '/images/screens/alacritty/window.png'
repo: 'sobrio'
---

This is a theme for **Alacritty**, the terminal emulator. It use the colors from the Sobrio theme to make your experience more unique.

## Installation

The "installation" process is quite simple. Look at the code below:

```yaml
# Sobrio colors for Alacrity Terminal
# Author: Elves Sousa <elvessousa.com.br>
# Copy or append these values to your alacritty.yml file
colors:
  # Default colors
  primary:
    background: '#202020'
    foreground: '#eeeeee'

  # Normal colors
  normal:
    black: '#3a3b3f'
    red: '#fd6389'
    green: '#84afd7'
    yellow: '#d7af87'
    blue: '#d7af87'
    magenta: '#d7d7ff'
    cyan: '#78dce8'
    white: '#eeeeee'

  # Bright colors
  bright:
    black: '#727072'
    red: '#fd6399'
    green: '#d7d7ff'
    yellow: '#d7af10'
    blue: '#d7af10'
    magenta: '#d7d7ff'
    cyan: '#7cdce7'
    white: '#ffffff'
```

1. Copy the contents of the code you just saw to your `alacritty.yml`, usually found `~/.config/alacritty/alacritty.yml`.
2. Save the file.
3. ???
4. Profit!
