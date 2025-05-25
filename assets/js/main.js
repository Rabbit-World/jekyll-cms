/**
 * Main JavaScript file for Jekyll GitHub Pages CMS
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryMenu = document.querySelector('.primary-menu');
  
  if (menuToggle && primaryMenu) {
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      primaryMenu.classList.toggle('active');
    });
  }
  
  // Initialize repository browser if it exists on the page
  initRepositoryBrowser();
});

/**
 * Repository Browser Component
 * This is a placeholder implementation that will be enhanced with GitHub API integration
 */
function initRepositoryBrowser() {
  const repoBrowser = document.querySelector('.repository-browser');
  if (!repoBrowser) return;
  
  const currentPath = document.getElementById('repo-current-path');
  const fileList = document.getElementById('repo-file-list');
  const upButton = document.getElementById('repo-up-button');
  const refreshButton = document.getElementById('repo-refresh-button');
  
  // Repository data structure (placeholder)
  // In a real implementation, this would be fetched from GitHub API
  const repoStructure = {
    '/': [
      { name: '_layouts', type: 'directory' },
      { name: '_includes', type: 'directory' },
      { name: '_posts', type: 'directory' },
      { name: '_pages', type: 'directory' },
      { name: 'assets', type: 'directory' },
      { name: '_config.yml', type: 'file' },
      { name: 'index.md', type: 'file' },
      { name: 'README.md', type: 'file' }
    ],
    '/_layouts': [
      { name: 'default.html', type: 'file' },
      { name: 'post.html', type: 'file' },
      { name: 'page.html', type: 'file' }
    ],
    '/_includes': [
      { name: 'header.html', type: 'file' },
      { name: 'footer.html', type: 'file' },
      { name: 'navigation.html', type: 'file' },
      { name: 'repository-browser.html', type: 'file' }
    ]
  };
  
  let currentDirectory = '/';
  
  // Display files in the current directory
  function displayFiles(path) {
    currentPath.textContent = path || '/';
    
    // Clear current list
    fileList.innerHTML = '';
    
    // Check if we have data for this path
    if (!repoStructure[path]) {
      fileList.innerHTML = '<li class="loading-indicator">No data available for this path</li>';
      return;
    }
    
    // Add parent directory option if not at root
    if (path !== '/') {
      const parentItem = document.createElement('li');
      parentItem.innerHTML = '<span class="file-icon">📁</span> ..';
      parentItem.classList.add('directory-item', 'parent-directory');
      parentItem.addEventListener('click', function() {
        const parentPath = path.split('/').slice(0, -1).join('/') || '/';
        navigateTo(parentPath);
      });
      fileList.appendChild(parentItem);
    }
    
    // Add files and directories
    repoStructure[path].forEach(item => {
      const listItem = document.createElement('li');
      
      if (item.type === 'directory') {
        listItem.innerHTML = `<span class="file-icon">📁</span> ${item.name}`;
        listItem.classList.add('directory-item');
        listItem.addEventListener('click', function() {
          const newPath = path === '/' ? `/${item.name}` : `${path}/${item.name}`;
          navigateTo(newPath);
        });
      } else {
        listItem.innerHTML = `<span class="file-icon">📄</span> ${item.name}`;
        listItem.classList.add('file-item');
      }
      
      fileList.appendChild(listItem);
    });
  }
  
  // Navigate to a specific directory
  function navigateTo(path) {
    currentDirectory = path;
    displayFiles(path);
    upButton.disabled = path === '/';
  }
  
  // Initialize event listeners
  if (upButton) {
    upButton.addEventListener('click', function() {
      if (currentDirectory !== '/') {
        const parentPath = currentDirectory.split('/').slice(0, -1).join('/') || '/';
        navigateTo(parentPath);
      }
    });
  }
  
  if (refreshButton) {
    refreshButton.addEventListener('click', function() {
      displayFiles(currentDirectory);
    });
  }
  
  // Initial display
  displayFiles(currentDirectory);
  
  // Note: In a real implementation, this would use the GitHub API
  // to fetch repository contents dynamically
  const repoInfoElement = document.querySelector('.repo-info');
  if (repoInfoElement) {
    repoInfoElement.innerHTML += '<div class="repo-note">Note: This is a placeholder implementation. In production, this would use the GitHub API.</div>';
  }
}