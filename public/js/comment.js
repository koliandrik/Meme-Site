const postCommentHandler = async (event) => {
    event.preventDefault();

    const post_id = event.target.getAttribute('data-post-id');
    const comment_content = document.querySelector(`#comment-content-${post_id}`).value.trim();

    if (comment_content && post_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_content, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to post comment');
        }
    } else {
        alert('Comment content/post ID is missing.');
    }
};

document.querySelectorAll('.post-comment').forEach((button) => {
    button.addEventListener('click', postCommentHandler);
});