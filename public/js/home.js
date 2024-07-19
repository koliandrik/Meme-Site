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

            if (response.ok) {
                document.location.reload();
            } else {
                alert('Failed to upload image');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred while uploading the image');
        }
    });
});