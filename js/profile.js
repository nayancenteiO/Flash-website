// Example user data (this could come from a real API or database)
const users = {
    'nori': {
        name: 'Nori Yamada',
        bio: 'A passionate photographer specializing in landscape photography.',
        info: 'Loves capturing the beauty of nature and has been featured in several galleries.'
    },
    'john': {
        name: 'John Doe',
        bio: 'Web Developer and Designer',
        info: 'Enjoys coding in JavaScript, CSS, and HTML.'
    }
};

// Function to load user profile data dynamically
function loadUserProfile(username) {
    const user = users[username.toLowerCase()]; // Ensure case insensitivity

    if (user) {
        document.getElementById('user-name').innerText = user.name;
        document.getElementById('user-bio').innerText = user.bio;
        document.getElementById('user-info').innerText = user.info;
    } else {
        document.getElementById('profile-container').innerHTML = '<p>User not found.</p>';
    }
}

// Get the username from the URL path
const username = window.location.pathname.split('/').pop();

// Load the user profile based on the username in the URL
loadUserProfile(username);
