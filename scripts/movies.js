// 当页面加载完成时执行
window.onload = function() {
    var moviesList = document.getElementById('moviesList'); // 获取页面中用于展示电影列表的元素
    var movies = JSON.parse(localStorage.getItem('movies')) || []; // 从localStorage中读取电影数据

    // 遍历所有电影数据
    //movies.forEach(function(movie) {
    //    var div = document.createElement('div'); // 创建一个新的div元素用于展示电影信息
    //    div.innerHTML = '<h2>' + movie.movieName + '</h2>' +
    //                    // 根据需要添加更多的电影信息展示
    //                    '';
    //    moviesList.appendChild(div); // 将这个div添加到页面上
    //});
    
    movies.forEach(function(movie) {
        var movieArticle = document.createElement('article');
        movieArticle.className = 'movie';
    
        var movieImg = document.createElement('img');
        movieImg.src = '../imgs/4.png'; // 假设图片路径是固定的，或者从movie对象中获取
        movieImg.className = 'movie-img';
    
        var movieInfoDiv = document.createElement('div');
        movieInfoDiv.className = 'movie-info';
        movieInfoDiv.setAttribute('onclick', 'showCard(this)'); // 添加点击事件
    
        var movieTitle = document.createElement('h3');
        movieTitle.textContent = movie.movieName; // 从movie对象获取电影名称
    
        var movieRating = document.createElement('p');
        movieRating.textContent = '评分 ' + movie.movieRating; // 从movie对象获取评分
    
        var movieYearDuration = document.createElement('p');
        // 假设您存储了年份和时长，可以这样组合它们
        movieYearDuration.textContent = movie.year;
    
        // 将这些元素组合起来
        movieInfoDiv.appendChild(movieTitle);
        movieInfoDiv.appendChild(movieRating);
        movieInfoDiv.appendChild(movieYearDuration);
    
        movieArticle.appendChild(movieImg);
        movieArticle.appendChild(movieInfoDiv);
    
        // 将完整的article元素添加到页面上
        moviesList.appendChild(movieArticle);
    });
    
};



// 显示卡片的函数
function showCard(element) {
    // 获取电影的信息

    var title = element.querySelector('h3').innerText;
    var movies = JSON.parse(localStorage.getItem('movies')) || [];
    var movie = movies.find(m => m.movieName === title);
    if (movie) {
        var summary = movie.summary;
    } else {
        var summary = '银行家安迪因被误判为枪杀妻子及其情人的罪名入狱后，他不动声色、步步为营地谋划自我拯救并最终成功越狱，重获自由';
    }

    // 将信息设置到卡片中
    document.getElementById('card-title').innerText = title;

    document.getElementById('card-summary').innerText = summary;

    // 显示卡片
    var card = document.getElementById('info-card');
    card.classList.remove('hidden');
    card.classList.add('show');
}

// 隐藏卡片的函数
function hideCard() {
    var card = document.getElementById('info-card');
    card.classList.remove('show');
    card.classList.add('hidden');
}
  