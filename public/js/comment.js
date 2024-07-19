const postCommentHandler = async (event) => {
    event.preventDefault();

    const comment_content = document.querySelector('#comment-content').value.trim();
    const post_id = event.target.getAttribute('data-post-id');

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
    }
};

document.querySelector('#post-comment').forEach((button) => {
    button.addEventListener('click', postCommentHandler);
});