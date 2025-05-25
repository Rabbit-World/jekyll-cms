# Decap CMS Integration with Jekyll

This document provides a comprehensive overview of the Decap CMS integration with your Jekyll GitHub Pages site.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup and Configuration](#setup-and-configuration)
3. [Authentication](#authentication)
4. [Content Management](#content-management)
5. [Media Management](#media-management)
6. [Custom Components](#custom-components)
7. [Local Development](#local-development)
8. [Troubleshooting](#troubleshooting)

## Introduction

Decap CMS (formerly Netlify CMS) is an open-source content management system for your Git workflow. It provides a user-friendly interface for creating and editing content stored in your GitHub repository, allowing non-technical users to manage content without needing to understand Git or Markdown.

### Key Features

- User-friendly content editing interface
- Real-time preview of content changes
- Media management with drag-and-drop uploads
- Git-based workflow with version control
- Customizable content types and fields
- Markdown and rich text editing
- Support for multiple users and roles

## Setup and Configuration

The Decap CMS integration consists of two main files:

1. `admin/index.html`: The entry point for the CMS interface
2. `admin/config.yml`: Configuration file that defines collections, fields, and backend settings

### Directory Structure

```
username.github.io/
├── admin/
│   ├── index.html          # CMS interface
│   ├── config.yml          # CMS configuration
│   ├── preview-templates.js # Custom preview templates
│   └── widgets/            # Custom widgets
│       └── repository-browser-widget.js
├── docs/                   # Documentation
│   ├── decap-cms-guide.md
│   ├── decap-cms-authentication.md
│   └── decap-cms-media-management.md
```

### Configuration Overview

The `config.yml` file defines:

- Backend configuration (GitHub repository, branch)
- Media folder settings
- Collections (content types like posts, pages)
- Fields for each collection
- Editor settings and preview options

## Authentication

Decap CMS requires authentication to manage content in your GitHub repository. For detailed setup instructions, see the [Authentication Guide](decap-cms-authentication.md).

### Authentication Methods

- GitHub OAuth
- Netlify Identity (if using Netlify)
- Local backend (for development)

## Content Management

Decap CMS provides a structured interface for managing different types of content. For detailed usage instructions, see the [Decap CMS Guide](decap-cms-guide.md).

### Content Types

1. **Blog Posts**
   - Located in `_posts/` directory
   - Fields include title, date, categories, tags, and content
   - Support for featured images

2. **Pages**
   - Located in `_pages/` directory
   - Fields include title, permalink, and content
   - Custom layouts available

3. **Configuration**
   - Site settings in `_config.yml`
   - Navigation menu in `_data/navigation.yml`

### Content Workflow

1. Create or edit content in the CMS interface
2. Preview changes in real-time
3. Save as draft or publish directly
4. Changes are committed to the GitHub repository
5. GitHub Actions automatically builds and deploys the site

## Media Management

Decap CMS includes a media library for managing images and other files. For detailed instructions, see the [Media Management Guide](decap-cms-media-management.md).

### Media Features

- Drag-and-drop file uploads
- Image preview and selection
- File organization and search
- Support for various file types

## Custom Components

The CMS integration includes several custom components to enhance the editing experience:

### Preview Templates

Custom preview templates in `preview-templates.js` provide a more accurate representation of how content will appear on the site:

- Post preview template
- Page preview template
- Custom styling for previews

### Custom Widgets

The repository browser widget (`repository-browser-widget.js`) allows browsing the GitHub repository structure directly from the CMS interface.

## Local Development

To develop and test the CMS locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   bundle install
   ```
3. Enable local backend in `config.yml`:
   ```yaml
   local_backend: true
   ```
4. Run the local CMS server:
   ```bash
   npx @staticcms/proxy-server
   ```
5. Start Jekyll:
   ```bash
   bundle exec jekyll serve
   ```
6. Access the CMS at `http://localhost:4000/admin/`

## Troubleshooting

### Common Issues

1. **Authentication Problems**
   - Check OAuth configuration
   - Verify GitHub permissions
   - See [Authentication Guide](decap-cms-authentication.md) for details

2. **Content Not Appearing**
   - Check front matter format
   - Verify file paths and permalinks
   - Check GitHub Actions build logs

3. **Media Upload Issues**
   - Verify media folder configuration
   - Check file size limits
   - See [Media Management Guide](decap-cms-media-management.md) for details

### Getting Help

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
- [Decap CMS Community](https://decapcms.org/community/)

---

This documentation is part of the Jekyll GitHub CMS project. For more information, visit the [project repository](https://github.com/username/repository-name).