document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('upload-url-form');

    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        const url = document.getElementById('image-url').value.trim();
        if (!url) {
            alert('Please enter a URL');
            return;
        }

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                body: JSON.stringify({url}),
                headers: { 'Content-Type': 'application/json' },
            });

            console.log(response);

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Please log in to do anything but view memes');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred while uploading the image');
        }
    });
});