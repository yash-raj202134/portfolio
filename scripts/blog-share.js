// scripts/blog-share.js

function shareOnFacebook(title, url) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/' + url)}`;
    openShareWindow(shareUrl);
}

function shareOnTwitter(title, url) {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.origin + '/' + url)}`;
    openShareWindow(shareUrl);
}

function shareOnLinkedIn(title, url) {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.origin + '/' + url)}&title=${encodeURIComponent(title)}`;
    openShareWindow(shareUrl);
}

function openShareWindow(url) {
    window.open(url, '_blank', 'width=600,height=400');
}