export const generatePagination = (currentPage: number, totalPages: number) => {
  const visiblePages = 5; // Number of pages to show besides current page and ellipsis
  const halfVisiblePages = Math.floor(visiblePages / 2); // Half of visible pages

  if (totalPages <= visiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const showLeftEllipsis = currentPage > halfVisiblePages + 1;
  const showRightEllipsis = currentPage < totalPages - halfVisiblePages;

  const startIndex = Math.max(
    Math.min(currentPage - halfVisiblePages, totalPages - visiblePages + 1),
    1
  );
  const endIndex = Math.min(startIndex + visiblePages - 1, totalPages);

  const pages = [];
  for (let i = startIndex; i <= endIndex; i++) {
    pages.push(i);
  }

  if (showLeftEllipsis) {
    pages.unshift(1, "...");
  }
  if (showRightEllipsis) {
    pages.push("...", totalPages);
  }

  return pages;
};
