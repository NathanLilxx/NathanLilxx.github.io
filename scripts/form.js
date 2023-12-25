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


// 页面加载时调用
//checkLogin();

document.getElementById('formSelector').addEventListener('change', function() {
    var movieForm = document.getElementById('movieForm');
    var reviewForm = document.getElementById('reviewForm');

    switch(this.value) {
        case 'movieForm':
            movieForm.style.display = 'block';
            reviewForm.style.display = 'none';
            break;
        case 'reviewForm':
            movieForm.style.display = 'none';
            reviewForm.style.display = 'block';
            break;
        default:
            movieForm.style.display = 'none';
            reviewForm.style.display = 'none';
            break;
    }
});



// 为电影表单添加提交事件监听器
document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    // 收集表单中的数据
    var movieData = {
        // 这里需要根据实际的表单元素ID来获取值
        moviePhoto: document.getElementById('moviePhoto').value,
        movieName: document.getElementById('movieName').value,
        movieRating: document.getElementById('movieRating').value,
        year: document.getElementById('year').value,
        genres: [...document.querySelectorAll('[name="genres"]:checked')].map(el => el.value),
        summary: document.getElementById('summary').value
    };

    // 读取localStorage中已有的电影信息
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movieData); // 将新的电影数据添加到数组中

    // 将更新后的电影数组存储回localStorage
    localStorage.setItem('movies', JSON.stringify(movies));

    alert('电影提交成功！');

    window.location.href = '../movies';
});

// 为影评表单添加提交事件监听器
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为
    var form = document.getElementById("reviewForm");


    var reviewData = {
        // 这里需要根据实际的表单元素ID来获取值
        movieName: form.querySelector('#movieName').value,
        reviewPhoto: form.querySelector('#reviewPhoto').value,
        reviewName: form.querySelector('#reviewName').value,
        writer: form.querySelector('#writer').value,
        date: form.querySelector('#date').value,
        reviewRating: form.querySelector('#reviewRating').value,
        summary: form.querySelector('#summary').value,
        body: form.querySelector('#body').value
    };

    // 读取localStorage中已有的电影信息
    var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.push(reviewData); // 将新的电影数据添加到数组中

    // 将更新后的影评数组存储回localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));

    alert('影评提交成功！');

    window.location.href = '../movies';
});
