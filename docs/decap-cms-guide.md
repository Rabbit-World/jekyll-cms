# Decap CMS Guide

This guide provides comprehensive instructions for setting up and using Decap CMS with your Jekyll GitHub Pages site.

## Table of Contents

1. [Accessing the CMS](#accessing-the-cms)
2. [Authentication Setup](#authentication-setup)
3. [Content Management](#content-management)
4. [Media Management](#media-management)
5. [Workflow](#workflow)
6. [Troubleshooting](#troubleshooting)

## Accessing the CMS

The Decap CMS interface is available at `/admin/` on your site. You can access it by:

- Clicking the "Admin" link in the site navigation (if enabled)
- Navigating directly to `https://yourusername.github.io/admin/`
- Using the link on the Admin Panel page at `/admin-panel/`

## Authentication Setup

Decap CMS uses GitHub's OAuth for authentication. To set up authentication:

### Option 1: GitHub OAuth (Recommended for Production)

1. **Create OAuth Application**:
   - Go to your GitHub account settings
   - Navigate to Developer Settings > OAuth Apps > New OAuth App
   - Fill in the following:
     - Application name: `Your Site Name CMS`
     - Homepage URL: `https://yourusername.github.io`
     - Authorization callback URL: `https://yourusername.github.io/admin/`
   - Register the application and note the Client ID and Client Secret

2. **Set Up Authentication Backend**:
   - You'll need to deploy an authentication server or use a service like Netlify Identity
   - For GitHub Pages, you can use [Netlify's OAuth client service](https://github.com/netlify/netlify-cms-github-oauth-provider)

3. **Update Configuration**:
   - Modify `admin/config.yml` to include your OAuth client ID:
   ```yaml
   backend:
     name: github
     repo: username/repository-name
     branch: main
     base_url: https://your-auth-provider.com
     auth_endpoint: auth
   ```

### Option 2: Local Development Authentication

For local development, you can use the local backend:

1. Add to your `admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. Run the local server:
   ```bash
   npx @staticcms/proxy-server
   ```

## Content Management

### Blog Posts

1. **Creating a New Post**:
   - Navigate to the Admin interface
   - Click on "Blog Posts" in the left sidebar
   - Click the "New Blog Post" button
   - Fill in the required fields:
     - Title
     - Publish Date
     - Content (in Markdown)
   - Optional fields:
     - Categories
     - Tags
     - Featured Image

2. **Editing Existing Posts**:
   - Click on "Blog Posts" in the sidebar
   - Select the post you want to edit
   - Make your changes
   - Click "Save" or "Publish"

### Pages

1. **Creating a New Page**:
   - Click on "Pages" in the sidebar
   - Click "New Page"
   - Fill in:
     - Title
     - Permalink (must start and end with a slash, e.g., `/about/`)
     - Content (in Markdown)

2. **Editing Existing Pages**:
   - Select the page from the list
   - Make your changes
   - Save or publish

### Site Configuration

1. **Editing Site Settings**:
   - Click on "Configuration" in the sidebar
   - Select "Site Configuration"
   - Modify settings like site title, description, etc.
   - Save changes

## Media Management

### Uploading Images

1. **Direct Upload**:
   - When editing content, click the image button in the editor toolbar
   - Select an image from your computer
   - The image will be uploaded to the `assets/images/uploads` directory

2. **Media Library**:
   - Click the "Media" button in the editor
   - Browse previously uploaded images
   - Upload new images
   - Select the image you want to use

### Image Best Practices

- Use descriptive filenames
- Keep images under 1MB when possible
- Use appropriate image formats:
  - JPEG for photographs
  - PNG for graphics with transparency
  - SVG for vector graphics
- Always provide alt text for accessibility

## Workflow

Decap CMS supports an editorial workflow that allows for draft, review, and publishing stages:

1. **Draft**: Initial content creation
2. **In Review**: Content ready for review by editors
3. **Ready**: Approved and ready to publish

To use the workflow:

1. Create or edit content
2. Save as draft
3. When ready for review, change status to "In Review"
4. Reviewers can approve by changing status to "Ready"
5. Publish when ready

## Troubleshooting

### Authentication Issues

- **"Unable to authenticate"**: Ensure your GitHub account has write access to the repository
- **OAuth errors**: Check that your OAuth application settings are correct
- **Redirect issues**: Verify the callback URL matches your site URL exactly

### Content Not Appearing

- **Delayed publication**: GitHub Pages may take a few minutes to rebuild your site
- **Build errors**: Check the GitHub Actions tab for any build failures
- **Front matter issues**: Ensure your content has the correct front matter format

### Media Upload Problems

- **Upload failures**: Check file size and type
- **Images not displaying**: Verify the path in your content matches the uploaded location
- **Permission errors**: Ensure your GitHub account has write access

### Getting Help

If you encounter issues not covered here:

1. Check the [Decap CMS documentation](https://decapcms.org/docs/)
2. Look for solutions in the [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
3. Join the [Decap CMS community](https://decapcms.org/community/)

---

This guide is part of the Jekyll GitHub CMS documentation. For more information, visit the [project repository](https://github.com/username/repository-name).