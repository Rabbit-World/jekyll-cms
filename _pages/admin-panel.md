---
layout: page
title: "Admin Panel"
permalink: /admin-panel/
image: https://user-images.githubusercontent.com/8649362/52980801-b5e30b00-33ba-11e9-8877-29dc2fe04daf.png
---

# Admin Panel: Managing Your Jekyll Site

The admin panel provides a user-friendly interface for managing content on your Jekyll site without needing to write code or use Git directly. Powered by Decap CMS, it offers a modern content editing experience while maintaining the benefits of a static site.

## Accessing the Admin Panel

To access the admin panel:

1. Navigate to `/admin/` on your site (e.g., `https://yourdomain.com/admin/`)
2. Log in using your GitHub credentials (or other configured authentication method)
3. Once authenticated, you'll have access to the content management interface

![Decap CMS Dashboard](https://user-images.githubusercontent.com/8649362/52980801-b5e30b00-33ba-11e9-8877-29dc2fe04daf.png)

## Key Features

### Content Creation and Editing

The admin panel allows you to:

- **Create New Content**: Add new blog posts, pages, and other content types
- **Edit Existing Content**: Modify any content on your site
- **Rich Text Editing**: Format text using a WYSIWYG editor or Markdown
- **Media Management**: Upload and organize images and other media files
- **Preview Changes**: See how your content will look before publishing

### Content Organization

Organize your content with:

- **Collections**: Different types of content (posts, pages, etc.)
- **Categories and Tags**: Classify and group related content
- **Custom Fields**: Add structured data to your content

### Publishing Workflow

The admin panel supports a flexible publishing workflow:

1. **Draft**: Initial content creation
2. **Review**: Content ready for review by editors
3. **Ready**: Approved and ready to publish
4. **Published**: Live on your site

This workflow creates separate Git branches for each stage, making it easy to track changes and collaborate with team members.

## Available Content Types

### Blog Posts

Blog posts are dated articles that appear in your site's blog section and RSS feed. When creating a blog post, you can:

- Set the publication date
- Assign categories and tags
- Add a featured image
- Write content using Markdown or the rich text editor

### Pages

Pages are static content that doesn't change frequently, such as:

- About page
- Contact page
- Services or product pages
- Legal information

### Other Content Types

Depending on your site's configuration, you may have access to additional content types such as:

- Projects
- Team members
- Testimonials
- Products
- Events

## Media Management

The media management system allows you to:

- Upload images and files
- Browse existing media
- Insert media into your content
- Organize files into folders

All uploaded media is stored in your Git repository, typically in the `/assets/images/uploads/` directory.

## Configuration Options

The admin panel can be customized through the `admin/config.yml` file:

- Add or modify content collections
- Configure fields for each content type
- Set up the editorial workflow
- Customize the preview templates
- Configure authentication methods

## Best Practices

When using the admin panel:

1. **Use Descriptive Titles**: Create clear, SEO-friendly titles for all content
2. **Add Alt Text to Images**: Improve accessibility by describing images
3. **Preview Before Publishing**: Always check how your content will appear
4. **Use Categories and Tags**: Organize content for better navigation
5. **Optimize Images**: Compress images before uploading to improve site performance

## Troubleshooting

If you encounter issues with the admin panel:

- **Authentication Problems**: Ensure your authentication provider is correctly configured
- **Content Not Appearing**: Check that your content has the correct front matter
- **Preview Not Working**: Verify that preview templates are properly set up
- **Deployment Issues**: Check your GitHub Actions logs for build errors

For technical support, please refer to the [Decap CMS documentation](https://decapcms.org/docs/intro/) or open an issue on the GitHub repository.

## Getting Started

To begin using the admin panel, click the button below to access the interface:

[Access Admin Panel](/admin/){: .button .button-primary}

You'll need appropriate permissions to make changes to the site content.