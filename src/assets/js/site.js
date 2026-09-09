/* Force-download same-origin .ipynb links (GitHub Pages serves them as JSON). */
(function () {
  function filenameFrom(anchor) {
    return (
      anchor.getAttribute('download') ||
      decodeURIComponent(anchor.pathname.split('/').pop() || 'notebook.ipynb')
    );
  }

  async function forceDownload(anchor) {
    const res = await fetch(anchor.href, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('download failed');
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);
    const tmp = document.createElement('a');
    tmp.href = objectUrl;
    tmp.download = filenameFrom(anchor);
    document.body.appendChild(tmp);
    tmp.click();
    tmp.remove();
    URL.revokeObjectURL(objectUrl);
  }

  document.addEventListener('click', function (event) {
    const anchor = event.target.closest('a[download][href$=".ipynb"], a[download][href*=".ipynb?"]');
    if (!anchor) return;
    event.preventDefault();
    forceDownload(anchor).catch(function () {
      window.location.href = anchor.href;
    });
  });
})();
