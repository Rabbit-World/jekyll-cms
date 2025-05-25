# Decap CMS Authentication Guide

This guide provides detailed instructions for setting up authentication for Decap CMS with GitHub Pages.

## Authentication Options

Decap CMS requires authentication to manage content in your GitHub repository. There are several authentication methods available:

1. GitHub OAuth
2. Netlify Identity
3. Custom authentication providers
4. Local backend (for development only)

## GitHub OAuth Authentication

GitHub OAuth is the recommended authentication method for GitHub Pages sites.

### Step 1: Create a GitHub OAuth Application

1. Go to your GitHub account settings
2. Navigate to **Developer Settings** > **OAuth Apps** > **New OAuth App**
3. Fill in the application details:
   - **Application name**: `Your Site Name CMS`
   - **Homepage URL**: `https://yourusername.github.io`
   - **Authorization callback URL**: `https://yourusername.github.io/admin/`
4. Click **Register application**
5. Note the **Client ID** and **Client Secret** that are generated

### Step 2: Set Up an OAuth Server

GitHub's CORS policy prevents direct authentication from the browser. You need to set up an OAuth server to handle the authentication flow.

#### Option A: Use Netlify's OAuth Provider

1. Fork the [Netlify CMS GitHub OAuth Provider](https://github.com/netlify/netlify-cms-github-oauth-provider) repository
2. Deploy it to a service like Heroku, Vercel, or Netlify
3. Set the following environment variables:
   - `OAUTH_CLIENT_ID`: Your GitHub OAuth Client ID
   - `OAUTH_CLIENT_SECRET`: Your GitHub OAuth Client Secret
   - `REDIRECT_URL`: `https://yourusername.github.io/admin/`

#### Option B: Use a Serverless Function

You can create a serverless function to handle OAuth:

1. Create a new repository for your authentication function
2. Implement the OAuth flow using AWS Lambda, Vercel Functions, or similar
3. Deploy the function to get a URL for your authentication endpoint

### Step 3: Update Decap CMS Configuration

Update your `admin/config.yml` file to use the OAuth provider:

```yaml
backend:
  name: github
  repo: username/repository-name
  branch: main
  base_url: https://your-oauth-server-url.com
  auth_endpoint: auth # Or the appropriate endpoint path
```

## Netlify Identity Authentication

If you're deploying your site with Netlify, you can use Netlify Identity for authentication.

### Step 1: Enable Netlify Identity

1. Go to your site settings in the Netlify dashboard
2. Navigate to **Identity** > **Enable Identity**
3. Configure registration preferences (open or invite-only)

### Step 2: Enable Git Gateway

1. In your Netlify site settings, go to **Identity** > **Services**
2. Enable **Git Gateway**

### Step 3: Update Decap CMS Configuration

Update your `admin/config.yml` file:

```yaml
backend:
  name: git-gateway
  branch: main
```

### Step 4: Add Netlify Identity Widget

Add the following to your `admin/index.html` file:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
```

## Local Development Authentication

For local development, you can use the local backend option.

### Step 1: Update Configuration for Local Development

Add the following to your `admin/config.yml`:

```yaml
# Local development settings
local_backend: true
```

### Step 2: Run the Local Backend Server

Install and run the Decap CMS proxy server:

```bash
# Install the package
npm install -g @staticcms/proxy-server

# Run the server
npx @staticcms/proxy-server
```

### Step 3: Start Your Jekyll Server

```bash
bundle exec jekyll serve
```

### Step 4: Access the CMS

Navigate to `http://localhost:4000/admin/` in your browser.

## Troubleshooting Authentication Issues

### Common Issues and Solutions

1. **"Unable to authenticate" error**
   - Ensure your GitHub account has write access to the repository
   - Check that your OAuth application settings are correct
   - Verify that your OAuth server is running correctly

2. **Redirect Issues**
   - Make sure the callback URL in your OAuth application matches exactly with your site URL
   - Check for any CORS issues in your browser console

3. **Token Expiration**
   - If you're getting logged out frequently, it might be due to token expiration
   - Check your OAuth server configuration for token lifetime settings

4. **Permission Errors**
   - Ensure your GitHub account has the correct permissions for the repository
   - For GitHub OAuth, make sure you're requesting the correct scopes (usually `repo` for private repos, `public_repo` for public repos)

### Getting Help

If you encounter persistent authentication issues:

1. Check the [Decap CMS documentation](https://decapcms.org/docs/github-backend/)
2. Look for solutions in the [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
3. Join the [Decap CMS community](https://decapcms.org/community/)

## Security Considerations

When setting up authentication for your CMS:

1. **Never commit OAuth secrets** to your repository
2. Use environment variables for sensitive information
3. Consider using invite-only authentication for production sites
4. Regularly review authorized applications in your GitHub settings
5. Implement proper CORS headers on your OAuth server

---

This guide is part of the Jekyll GitHub CMS documentation. For more information, visit the [project repository](https://github.com/username/repository-name).