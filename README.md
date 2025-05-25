# Jekyll GitHub Pages CMS

A Jekyll-based Content Management System with GitHub Pages integration and Decap CMS.

## Project Overview

This project provides a complete solution for creating and managing a website using:
- [Jekyll](https://jekyllrb.com/) - A static site generator
- [GitHub Pages](https://pages.github.com/) - For hosting the website
- [Decap CMS](https://decapcms.org/) (formerly Netlify CMS) - For content management

## Features

- Static site generation with Jekyll
- Continuous deployment through GitHub Actions
- Browser-based content management with Decap CMS
- Responsive design
- Blog functionality with categories and tags
- Custom pages
- GitHub repository browser component

## Project Structure

```
username.github.io/
├── _config.yml                # Jekyll configuration
├── _layouts/                  # HTML templates
├── _includes/                 # Reusable components
├── _posts/                    # Blog posts
├── _pages/                    # Site pages
├── admin/                     # Decap CMS files
├── assets/                    # Static assets
│   ├── css/                   # Stylesheets
│   ├── js/                    # JavaScript files
│   └── images/                # Image files
├── .github/                   # GitHub configuration
│   └── workflows/             # GitHub Actions
├── index.md                   # Homepage
├── .gitignore                 # Git ignore file
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Ruby](https://www.ruby-lang.org/) (for local development)
- [Bundler](https://bundler.io/) (for managing Ruby dependencies)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/username/username.github.io.git
   cd username.github.io
   ```

2. For local development, install dependencies:
   ```
   bundle install
   ```

3. Run the site locally:
   ```
   bundle exec jekyll serve
   ```

4. Access the site at `http://localhost:4000`

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch, using GitHub Actions.

## Content Management

1. Navigate to `https://username.github.io/admin/`
2. Log in with your GitHub account
3. Use the Decap CMS interface to create and edit content

## License

This project is licensed under the MIT License - see the LICENSE file for details.