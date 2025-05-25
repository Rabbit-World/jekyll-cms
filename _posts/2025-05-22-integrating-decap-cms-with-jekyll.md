---
layout: post
title: "Integrating Decap CMS with Jekyll: Streamlined Content Management"
date: 2025-05-22
author: "Jekyll Admin"
categories: 
  - tutorials
  - cms
tags:
  - decap-cms
  - content-management
  - git-workflow
image: https://jamstack.org/img/cms/netlify-cms1.png
---

# Integrating Decap CMS with Jekyll: Streamlined Content Management

While Jekyll provides an excellent platform for building static websites, managing content through direct file editing isn't always ideal for non-technical users. This is where Decap CMS (formerly Netlify CMS) comes in, offering a user-friendly interface for content management while maintaining Jekyll's static site benefits.

## What is Decap CMS?

Decap CMS is an open-source content management system for static site generators. It provides a clean, intuitive interface for creating and editing content, all while maintaining the Git-based workflow that developers love.

![Decap CMS Dashboard](https://jamstack.org/img/cms/netlify-cms1.png)

## Key Features of Decap CMS

1. **Git-Based Workflow**: All content changes are committed directly to your Git repository
2. **User-Friendly Interface**: Rich text editor with preview functionality
3. **Media Management**: Easy upload and management of images and other media files
4. **Custom Widgets**: Extend functionality with custom input components
5. **Flexible Configuration**: Adapt to various content structures and workflows

## Setting Up Decap CMS with Jekyll

### 1. Create Admin Files

First, create an `admin` directory in the root of your Jekyll project with two files:

**admin/index.html**:
```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

**admin/config.yml**:
```yaml
backend:
  name: github
  repo: username/username.github.io
  branch: main

media_folder: "assets/images/uploads"
public_folder: "/assets/images/uploads"

collections:
  - name: "posts"
    label: "Blog Posts"
    folder: "_posts"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Layout", name: "layout", widget: "hidden", default: "post"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Categories", name: "categories", widget: "list"}
      - {label: "Tags", name: "tags", widget: "list"}
      - {label: "Featured Image", name: "image", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
```

### 2. Configure Authentication

Decap CMS supports various authentication methods. For GitHub Pages, OAuth is commonly used:

1. Register a new OAuth application in your GitHub account settings
2. Set the authorization callback URL to `https://your-site-url.com/admin/`
3. Add the client ID and secret to your Decap CMS configuration

### 3. Deploy and Access

After deploying your site:

1. Navigate to `https://your-site-url.com/admin/`
2. Authenticate with your GitHub credentials
3. Start managing your content through the Decap CMS interface

## The Editorial Workflow

Decap CMS supports an editorial workflow that allows for content review before publishing:

1. **Drafts**: Initial content creation
2. **In Review**: Content ready for review
3. **Ready**: Approved and ready to publish

This workflow creates separate branches for each stage, making it easy to track changes and collaborate with team members.

![Editorial Workflow](https://user-images.githubusercontent.com/8649362/52980801-b5e30b00-33ba-11e9-8877-29dc2fe04daf.png)

## Benefits of Using Decap CMS with Jekyll

- **Simplified Content Management**: Non-technical users can easily create and edit content
- **Maintained Version Control**: All changes are tracked in Git
- **Flexible Content Structure**: Support for various content types and relationships
- **Customizable Interface**: Adapt the CMS to your specific needs
- **Decoupled Architecture**: The CMS is separate from your site's build process

## Conclusion

Integrating Decap CMS with Jekyll provides the best of both worlds: the performance and security benefits of a static site with the user-friendly content management of a traditional CMS. This combination is particularly powerful for teams where content creators may not be comfortable working directly with code or Git.

By following the steps outlined in this guide, you can set up a robust content management system for your Jekyll site that empowers all team members to contribute effectively.

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/intro/)
- [GitHub Authentication for Decap CMS](https://decapcms.org/docs/github-backend/)
- [Customizing the Decap CMS Preview](https://decapcms.org/docs/customization/)