+++
title = "Installation"
description = "How to install Goyo and get started."
weight = 1
sort_by = "weight"

[extra]
+++

Goyo is a theme for Zola. To use this documentation, you need to install Zola first. You can install it on various operating systems with a simple command like the one below.

```bash
# macOS Example
brew install zola
```

For more details, please refer to the [official installation guide](https://www.getzola.org/documentation/getting-started/installation/) on the Zola website.

Once you have Zola installed, create a new Zola site as follows:

```bash
zola init your-docs
cd docs
```

You can then run the local development server with the `zola serve` command and view your site at `http://localhost:1111`.

## Install the Goyo Theme

The easiest way to install a theme in Zola is to clone it or add it as a submodule into the `themes` subdirectory of your Zola project.

Clone example

```bash
git clone https://github.com/hahwul/goyo themes/goyo
```

Submodule example

```bash
git submodule add https://github.com/hahwul/goyo themes/goyo
```

## Set the theme in config.toml

This is the final step. Set the theme in your `config.toml` file to use Goyo.

```toml
title = "Your App"
theme = "goyo"
```

Now, when you run Zola, it will use the Goyo theme.

```bash
zola serve
```

However, since you don't have any content yet, you will only see a blank page with a brilliant color. In the next document, we'll create our first page.
