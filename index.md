---
layout: default
title: Home
---

# Jekyll GitHub Pages CMS

Welcome to our Jekyll-based Content Management System with GitHub Pages integration and Decap CMS. This modern approach to content management combines the performance and security benefits of static sites with the user-friendly interface of traditional CMS platforms.

![Jekyll Logo](https://upload.wikimedia.org/wikipedia/commons/4/42/Jekyll_%28software%29_Logo.png){: .center-image }

## Features

- **Static Site Generation**: Lightning-fast page loads and enhanced security
- **GitHub Pages Integration**: Free hosting with automatic deployment through GitHub Actions
- **Decap CMS**: User-friendly content management interface
- **Markdown Support**: Simple, readable content formatting
- **Responsive Design**: Optimized for all devices
- **Blog Functionality**: Built-in support for posts, categories, and tags
- **Version Control**: All content changes tracked through Git

## Benefits

### For Developers

- **No Server Management**: Eliminate the need for server maintenance
- **Familiar Tools**: Work with Git, Markdown, and other developer-friendly technologies
- **Customizable**: Extend functionality with Jekyll plugins and themes
- **Performance**: Deliver fast-loading static pages to your users
- **Security**: Reduce attack vectors with static files

### For Content Creators

- **User-Friendly Interface**: Create and edit content without coding knowledge
- **Real-Time Preview**: See how your content will look before publishing
- **Structured Content**: Consistent organization with customizable templates
- **Collaborative Editing**: Multiple editors can work simultaneously
- **Content Versioning**: Easily revert to previous versions

## Recent Posts

<ul class="post-list">
  {% for post in site.posts limit:5 %}
    <li class="post-item">
      <h3 class="post-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <span class="post-date">{{ post.date | date: "%B %-d, %Y" }}</span>
      <div class="post-excerpt">
        {{ post.excerpt | strip_html | truncatewords: 30 }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </li>
  {% endfor %}
</ul>

<a href="/blog/" class="view-all-posts">View all posts</a>

## Getting Started

Ready to explore our Jekyll CMS? Here are some helpful resources:

- [About This CMS](/about/) - Learn more about the project and its architecture
- [Admin Panel](/admin-panel/) - Discover how to manage content through the admin interface
- [Getting Started with Jekyll](/blog/2025/05/20/getting-started-with-jekyll/) - A beginner's guide to Jekyll
- [Integrating Decap CMS with Jekyll](/blog/2025/05/22/integrating-decap-cms-with-jekyll/) - Learn how to set up Decap CMS
- [Mastering Markdown in Jekyll](/blog/2025/05/25/mastering-markdown-in-jekyll/) - Tips for effective content formatting

## Open Source

This Jekyll CMS project is open-source and available for anyone to use and modify. We welcome contributions and feedback to improve the system.

<div class="cta-buttons">
  <a href="/admin/" class="button button-primary">Access Admin Panel</a>
  <a href="https://github.com/username/username.github.io" class="button button-secondary">View on GitHub</a>
</div>