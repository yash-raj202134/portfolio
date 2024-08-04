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

function shareOnWhatsApp(title, url) {
    const text = `${title} - Check out this blog post: ${window.location.origin}/${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

function redirectToGmail(blogTitle) {
    const subject = encodeURIComponent(`Question about: ${blogTitle}`);
    const body = encodeURIComponent(`Hi Yash,\n\nI have a question about your blog post titled '${blogTitle}'.\n\n[Please write your question here]\n\nBest regards,\n[Your Name]`);
    const mailToLink = `https://mail.google.com/mail/?view=cm&fs=1&to=yashraj3376@gmail.com&su=${subject}&body=${body}`;
    window.open(mailToLink, '_blank');
}
