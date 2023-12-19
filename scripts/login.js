document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // 模拟用户验证
    if (username === '123' && password === '123') {
        // 存储用户登录状态
        document.cookie = "loggedIn=true; max-age=3600; path=/";
        alert('Login successful');
        window.location.href = 'form';
    } else {
        alert('Invalid credentials');
    }
});
