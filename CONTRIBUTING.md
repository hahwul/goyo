# Contributing to Goyo

Thank you for your interest in contributing to Goyo! We welcome contributions from everyone and appreciate your help in making Goyo better.

## Ways to Contribute

There are many ways you can contribute to Goyo:

- **Report Bugs**: Found a bug? Please [open an issue](https://github.com/hahwul/goyo/issues/new) on GitHub with details about the problem.
- **Suggest Features**: Have an idea for a new feature? We'd love to hear it! Open an issue to discuss your suggestion.
- **Improve Documentation**: Help us make the documentation clearer and more comprehensive.
- **Submit Code**: Fix bugs, add features, or improve existing code by submitting pull requests.
- **Share Your Experience**: Write blog posts, create tutorials, or share your Goyo-powered sites with the community.

## Getting Started

### Prerequisites

Before you start contributing, make sure you have the following installed:

- **Zola**: v0.23.6 or later (Tera 2) ([Installation Guide](https://www.getzola.org/documentation/getting-started/installation/))
- **Just**: Task runner for build automation ([Installation Guide](https://github.com/casey/just))
- **Git**: For version control

### Setting Up Your Development Environment

1. **Fork the Repository**: Click the "Fork" button on the [Goyo GitHub repository](https://github.com/hahwul/goyo).

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/goyo.git
   cd goyo
   ```

3. **Set Up Dependencies**:
   ```bash
   # Install TailwindCSS and DaisyUI
   cd /tmp
   curl -sLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
   chmod +x tailwindcss
   mv tailwindcss ../goyo/src/
   
   cd ../goyo
   curl -sLo src/daisyui.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.js
   curl -sLo src/daisyui-theme.js https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.js
   ```

4. **Build the Site**:
   ```bash
   just build
   ```

5. **Start the Development Server**:
   ```bash
   just dev
   ```
   
   The site will be available at `http://127.0.0.1:1111`.

## Making Changes

### Code Guidelines

- **Follow Existing Patterns**: Look at existing code and documentation to understand the project's style and structure.
- **Keep It Simple**: Prefer simple, clear solutions over complex ones.
- **Test Your Changes**: Build and test your changes locally before submitting.
- **Write Clear Commit Messages**: Use descriptive commit messages that explain what and why.

### Documentation Guidelines

- **Use Clear Language**: Write in simple, easy-to-understand language.
- **Provide Examples**: Include code examples and screenshots where helpful.
- **Follow the Structure**: Use the same structure and format as existing documentation pages.
- **Support Multiple Languages**: If you can, provide translations (especially Korean).

### Template and Theme Changes

- **Test Thoroughly**: Theme changes can affect many pages, so test extensively.
- **Consider Responsiveness**: Ensure changes work well on different screen sizes.
- **Maintain Accessibility**: Keep the theme accessible to all users.
- **Check Dark/Light Mode**: Verify changes work in both color schemes.

## Submitting a Pull Request

1. **Create a Branch**: Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**: Implement your changes, following the guidelines above.

3. **Test Locally**: Build and test your changes:
   ```bash
   just build
   zola check --skip-external-links
   just dev
   ```

4. **Commit Your Changes**:
   ```bash
   git add .
   git commit -m "Add feature: your feature description"
   ```

5. **Push to Your Fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**: Go to the [Goyo repository](https://github.com/hahwul/goyo) and click "New Pull Request". Provide a clear description of your changes and why they're needed.

## Pull Request Guidelines

- **One Feature Per PR**: Keep pull requests focused on a single feature or fix.
- **Describe Your Changes**: Explain what your PR does and why it's needed.
- **Reference Issues**: If your PR addresses an issue, reference it (e.g., "Fixes #123").
- **Be Patient**: Maintainers will review your PR as soon as possible.
- **Be Open to Feedback**: Be prepared to make changes based on review feedback.

## Development Tips

### Project Structure

```
goyo/
├── content/          # Documentation and content
├── static/           # Static assets (images, fonts, etc.)
├── templates/        # Zola HTML templates
├── src/              # Source files (CSS, JS tools)
├── config.toml       # Site configuration
└── theme.toml        # Theme metadata
```

### Common Tasks

```bash
# Build the site
just build

# Start development server
just dev

# Check internal links
zola check --skip-external-links

# Clean build directory
rm -rf public
```

### Testing Your Changes

Always test your changes before submitting:

1. **Build Test**: Ensure the site builds without errors
2. **Link Check**: Verify all internal links work
3. **Visual Test**: Check the site in a browser
4. **Multi-language Test**: Test both English and Korean versions (if applicable)
5. **Theme Test**: Check both dark and light modes

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for everyone. Please:

- Be respectful and considerate
- Welcome newcomers and help them get started
- Focus on what's best for the community
- Show empathy towards other community members

## Getting Help

If you need help or have questions:

- **GitHub Issues**: Ask questions by [opening an issue](https://github.com/hahwul/goyo/issues)
- **GitHub Discussions**: Join discussions about features and improvements
- **Documentation**: Check the [Goyo documentation](https://goyo.hahwul.com) for guides and references

## Recognition

Contributors are recognized in:

- The project's commit history
- Release notes for significant contributions
- The GitHub contributors page

Thank you for contributing to Goyo! Your efforts help make this project better for everyone. ❤️

---

For a more detailed version of this guide, please visit the [Contributing documentation](https://goyo.hahwul.com/contributing/).
