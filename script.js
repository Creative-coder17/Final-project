function toggleDescription(courseId) {
    var moreText = document.getElementById(courseId);
    if (moreText.style.display === "block") {
        moreText.style.display = "none";
    } else {
        moreText.style.display = "block";
    }
}
// JavaScript to handle form submission or other interactive functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});
