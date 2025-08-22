// Hide TOC
document.addEventListener('DOMContentLoaded', function () {
  // Get the title and TOC elements
  const title = document.querySelector('h1.title');
  const toc = document.querySelector('#table-of-contents');
  const titleParent = title.parentNode

  // Only proceed if both elements are found
  if (title && toc) {
    // Create the needed elements
    const details = document.createElement('details');
    const summary = document.createElement('summary');

    // Move the title inside the summary (preserving events, properties etc.)
    summary.appendChild(title);

    // Assemble the structure
    details.appendChild(summary);
    details.appendChild(toc);

    // Insert details at the position where title was (before the first one)
    titleParent.insertBefore(details, titleParent.firstChild);

    // title and toc have now been moved into 'details', no need to remove originals
  }
});
