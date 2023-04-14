window.addEventListener('scroll', function() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    updateProgressBar(progress);
});
  
function updateProgressBar(progress) {
    var progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = progress + '%';
}