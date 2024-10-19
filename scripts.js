document.addEventListener('DOMContentLoaded', () => {
    const post = document.querySelector('.post');
    post.addEventListener('click', () => {
        post.classList.toggle('zoom');
    });
});