
# Markdown Editor Web App

A web-based Markdown editor that leverages the `SimpleMarkdown` component from the `@arubiku/react-markdown` package. This application provides a user-friendly interface for editing and previewing Markdown content in real time, with support for syntax highlighting and customizable themes.

## Features

- **Live Markdown Preview**: See your Markdown changes rendered in real time as you type.
- **Syntax Highlighting**: Code blocks are automatically highlighted for readability, with multiple themes available.
- **Customizable Themes**: Switch between different themes for the Markdown preview.
- **Image Handling**: Supports embedded images with customizable display settings.
- **Easy-to-Use Interface**: User-friendly editor with support for all standard Markdown features.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js (>= 14.0.0)
- npm (>= 6.0.0) or yarn (>= 1.0.0)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/markdown-editor-webapp.git
   ```
2. Navigate to the project directory:
   ```bash
   cd markdown-editor-webapp
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the App

To start the development server, run:
```bash
npm start
```
or
```bash
yarn start
```

This will launch the app on `http://localhost:3000`. Open this URL in your browser to use the Markdown editor.

## Usage

The Markdown Editor Web App allows you to type Markdown text in the editor pane on the left, and see the rendered output on the right. It supports standard Markdown syntax including headers, lists, code blocks, and more.

### Keyboard Shortcuts

- **Bold**: `Ctrl + B`
- **Italic**: `Ctrl + I`
- **Heading**: `Ctrl + H`
- **Underline**: `Ctrl + Shift + S`
- **Code Block**: `Ctrl + Shift + C`
- **Superscript**: Ctrl + `
- **Subscript**: `Ctrl + ~`
- **Highlight**: `Ctrl + =`
- **Emoji Shortcode**: `Ctrl + q`


## Customization

### Changing Themes

You can customize the theme of the Markdown preview by modifying the `theme` and `codeBlockTheme` properties in the `SimpleMarkdown` component.

### Adjusting Image Settings

To customize the display of images, you can change the `imageHeight` property in the `SimpleMarkdown` configuration.

## Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [`@arubiku/react-markdown`](https://www.npmjs.com/package/@arubiku/react-markdown) - A package for rendering Markdown content with syntax highlighting.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [ArubikU](https://github.com/arubiku) for creating the `@arubiku/react-markdown` package.
- The open-source community for providing awesome tools and libraries.
