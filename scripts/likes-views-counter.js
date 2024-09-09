// Like Button Logic
  const likeButton = document.getElementById('like-button');
  const likeCount = document.getElementById('like-count');

  // Check if the user already liked the post
  let likes = localStorage.getItem('likes') || 0;
  let liked = localStorage.getItem('liked') || false;

  likeCount.innerText = likes;

  // Add event listener to the like button
  likeButton.addEventListener('click', function () {
    if (!liked) {
      likes++;
      localStorage.setItem('likes', likes);
      localStorage.setItem('liked', true);
      liked = true;
      likeCount.innerText = likes;
    }
  });

  // Views Counter Logic
  const viewCount = document.getElementById('view-count');

  // Check if the user has already visited the post in the session
  let views = localStorage.getItem('views') || 0;
  let viewed = sessionStorage.getItem('viewed') || false;

  if (!viewed) {
    views++;
    localStorage.setItem('views', views);
    sessionStorage.setItem('viewed', true);
  }

  viewCount.innerText = views;

