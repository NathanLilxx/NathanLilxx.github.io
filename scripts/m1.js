const currentUrl = window.location.href;
const params = {};
const queryString = currentUrl.substring(currentUrl.indexOf('?') + 1);
queryString.split('&').forEach((paramString) => {
  const [key, value] = paramString.split('=');
  params[decodeURIComponent(key)] = decodeURIComponent(value);
});
const movie = params.movie;

document.addEventListener('DOMContentLoaded', () => {
  var reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  var review = reviews.find(r => r.movieName === movie);

  // 检查 movie 对象是否存在
  if (review) {

    // 更新电影名称
    document.querySelector('#movieName').innerText = review.movieName;

    // 更新影评标题
    document.querySelector('#reviewName').innerText = review.reviewName;

    // 更新作者和日期
    document.querySelector('#authorDate').innerText = `作者：${review.writer} | 发布日期：${review.date}`;

    // 更新影评图片
    document.querySelector('#reviewPhoto').src = review.reviewPhoto;

    // 更新影评主体内容
    document.querySelector('#body').innerText = review.body;

  }
});

//关联电影的回转
document.getElementById('movieName').addEventListener('click', function() {
  e.preventDefault();
  window.history.back();

});