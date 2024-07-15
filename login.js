function validateForm() {
    const username = document.getElementById ('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    message.textContent = 'Submit';

    if (username.length < 3) {
        message.textContent = 'Username must be at least 3 characters long';
        return false;
    }

    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long';
        return false;
    }

    const hashedPassword = hashPassword(password);
    console.log('Username:', username);
    console.log('Hashed Password:', hashedPassword);

    message.style.color = 'green';
    message.textContent = 'Login successful!';
    return false;
}

function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
    }
    return hash;
}
