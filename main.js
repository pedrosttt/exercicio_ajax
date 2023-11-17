document.addEventListener('DOMContentLoaded', function () {
    const profileContainer = document.getElementById('profile-container');

    fetch('https://api.github.com/users/pedrosttt')
        .then(response => response.json())
        .then(data => {
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('name').innerText = data.name || data.login;
            document.getElementById('username').innerText = '@' + data.login;
            document.getElementById('repos').innerText = data.public_repos;
            document.getElementById('followers').innerText = data.followers;
            document.getElementById('following').innerText = data.following;
            document.getElementById('github-link').href = data.html_url;
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
            profileContainer.innerHTML = '<p>Error loading GitHub profile.</p>';
        });
});
