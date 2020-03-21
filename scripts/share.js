if (navigator.share) {
  console.log("share support")
  document.querySelectorAll('[data-share-url]').forEach(($shareEl) => {
    const $button = document.createElement('button');
    $button.innerHTML = 'Partager';
    $shareEl.parentNode.append($button);

    $button.addEventListener('click', share.bind(this, $shareEl));
  });
}else{
  console.log("NO support")
}

function share($shareEl) {
  navigator.share({
    title: $shareEl.getAttribute('data-share-title'),
    text: $shareEl.getAttribute('data-share-text'),
    url: $shareEl.getAttribute('data-share-url'),
  });
}