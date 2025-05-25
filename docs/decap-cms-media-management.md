# Decap CMS Media Management Guide

This guide explains how to manage media files (images, documents, etc.) in Decap CMS for your Jekyll GitHub Pages site.

## Media Configuration

Decap CMS provides a built-in media library for uploading and managing files. The configuration in `admin/config.yml` determines how media files are handled:

```yaml
# Media folder where uploaded images will be stored in the repo
media_folder: "assets/images/uploads"

# Public folder path that the media folder is published at
public_folder: "/assets/images/uploads"
```

- **media_folder**: The path where media files will be stored in your repository
- **public_folder**: The path used in the published site (used in image src attributes)

## Uploading Media

### Method 1: Using the Media Library

1. In the Decap CMS interface, click the "Media" button in the left sidebar
2. Click "Upload" to add new files
3. Select files from your computer
4. Once uploaded, files will appear in the media library

### Method 2: Inline Image Upload

When editing content:

1. Click the image button in the editor toolbar
2. Choose "Upload" from the options
3. Select an image from your computer
4. The image will be uploaded and inserted into your content

## Managing Media Files

### Browsing Files

The media library provides a visual interface to browse all uploaded files:

1. Click "Media" in the sidebar
2. Use the search box to find specific files
3. Click on a file to view details or select it for use

### Deleting Files

To remove files from the media library:

1. Click "Media" in the sidebar
2. Select the file you want to delete
3. Click the delete button (trash icon)
4. Confirm deletion

Note: Deleting a file from the media library will remove it from the repository, but it may still be referenced in your content.

## Best Practices for Media Management

### File Organization

- Use descriptive filenames (e.g., `team-meeting-may-2025.jpg` instead of `IMG12345.jpg`)
- Consider creating subdirectories for different types of media:
  ```yaml
  media_folder: "assets/images/uploads"
  public_folder: "/assets/images/uploads"
  media_library:
    folders:
      - label: Featured Images
        name: featured
        media_folder: '/assets/images/featured'
        public_folder: '/assets/images/featured'
      - label: Blog Images
        name: blog
        media_folder: '/assets/images/blog'
        public_folder: '/assets/images/blog'
  ```

### Image Optimization

- Resize images to appropriate dimensions before uploading
- Compress images to reduce file size
- Use appropriate file formats:
  - JPEG for photographs
  - PNG for graphics with transparency
  - SVG for vector graphics
  - WebP for better compression (if supported)

### Accessibility

- Always provide alt text for images when inserting them into content
- Use descriptive alt text that conveys the purpose or content of the image
- For decorative images, use empty alt text (`alt=""`)

## Advanced Media Configuration

### External Media Libraries

Decap CMS supports integration with external media libraries like Uploadcare and Cloudinary:

```yaml
media_library:
  name: uploadcare
  config:
    publicKey: your-uploadcare-public-key
    multiple: true
```

### Custom Preview Templates

You can customize how media is displayed in the editor by creating custom preview templates:

```javascript
CMS.registerMediaLibrary({
  name: 'customMedia',
  config: {
    // Custom configuration
  },
  init: ({ options }) => {
    // Initialization code
  },
  // Other required methods
});
```

## Troubleshooting Media Issues

### Common Issues and Solutions

1. **Images not displaying on the site**
   - Check that the `public_folder` path is correct
   - Verify that the image path in your content matches the actual file location

2. **Upload failures**
   - Check file size (GitHub has a 100MB file size limit)
   - Ensure your GitHub account has write permissions to the repository
   - Check for network issues

3. **Media library not loading**
   - Clear browser cache
   - Check for JavaScript errors in the browser console
   - Verify that the CMS configuration is correct

### Getting Help

If you encounter persistent media management issues:

1. Check the [Decap CMS documentation](https://decapcms.org/docs/media-library/)
2. Look for solutions in the [GitHub Issues](https://github.com/decaporg/decap-cms/issues)
3. Join the [Decap CMS community](https://decapcms.org/community/)

---

This guide is part of the Jekyll GitHub CMS documentation. For more information, visit the [project repository](https://github.com/username/repository-name).