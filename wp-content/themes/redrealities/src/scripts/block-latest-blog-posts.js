(function() {
  const block = document.querySelector('.latest-blog-posts');
  if(block === null) return;

  const detailItems = Array.from(block.querySelector('.latest-blog-posts__items').children);
  const hexLinks = Array.from(block.querySelectorAll('.hexagon-nav__item'));

  let activeDetail = block.querySelector('.latest-blog-posts__item--active');
  let activeLink = block.querySelector('.hexagon-nav__item.hexagon--active');

  hexLinks.forEach(function(link, idx) {
    if(idx === 0) return; // main button
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetIdx = parseInt(link.dataset.target);

      activeDetail.classList.remove('latest-blog-posts__item--active');
      activeDetail = detailItems[targetIdx];
      activeDetail.classList.add('latest-blog-posts__item--active');

      activeLink.classList.remove('hexagon--active');
      activeLink = link;
      activeLink.classList.add('hexagon--active');
    })
  })
})();
