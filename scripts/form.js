function getCookie(name) {
    let cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split('=');
        if (parts[0] === name) {
            return parts[1];
        }
    }
    return '';
}

function checkLogin() {
    let isLoggedIn = (getCookie('loggedIn') === 'true');
    // 检查本地存储中的登录状态
    if (!isLoggedIn) {
        // 如果未登录，重定向到登录页面
        window.location.href = '../login'; // 将 'login' 替换为你的登录页面URL
    } else {
        // 用户已登录，可以继续留在当前页面或执行其他操作
        document.body.style.display = 'block';
    }
}

console.log('Current Cookies:', document.cookie);
// 页面加载时调用
checkLogin();
