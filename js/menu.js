/* Shared navigation menu – edit this file to update the sidebar on all pages. */
(function() {
  var MENU = {
    category: 'Hua Meng',
    items: [
      { id: 'index', href: 'index.html', label: 'Home' },
      { id: 'bio', href: 'bio.html', label: 'Bio' },
      { id: 'pub', href: 'pub.html', label: 'Publications' },
      // { id: 'service', href: 'service.html', label: 'Professional Services' },
      // { id: 'cv', href: 'CV.pdf', label: 'CV' }
    ]
  };

  var container = document.getElementById('layout-menu');
  if (!container) return;
  var current = (container.getAttribute('data-current') || 'index').toLowerCase();
  var category = container.getAttribute('data-category') || MENU.category;

  var html = '<div class="menu-category">' + category + '</div>';
  MENU.items.forEach(function(item) {
    var cls = (item.id === current) ? ' class="current"' : '';
    html += '<div class="menu-item"><a href="' + item.href + '"' + cls + '>' + item.label + '</a></div>';
  });
  container.innerHTML = html;
})();
