document.getElementById('upload-url-form').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const imageUrl = document.getElementById('image-url').value.trim();

    if (imageURL) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ url: imageUrl }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            const newPost = await response.json();
            addImageToFeed(newPost.url);
            document.getElementById('image-url').value = '';
        } else {
            alert('Failed to upload');
        }
    }
});

function addImageToFeed(url) {
    const feed = document.getElementById('feed');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `<img src="${url}" alt="Image Post" />`;
    feed.insertBefore(newPost, feed.firstChild);
}