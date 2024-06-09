const btnLike1 = document.getElementById("btnLike1");
const btnLike2 = document.getElementById("btnLike2");
const countLike1 = document.getElementById("countLike1");
const countLike2 = document.getElementById("countLike2");

function hitLike(btn, count) {
    btn.addEventListener("click", function() {
        let totalLikes = parseInt(count.textContent) + 1;
        count.textContent = totalLikes.toString();
    });
}

hitLike(btnLike1, countLike1);
hitLike(btnLike2, countLike2);

// Dislike functionality
function hitDislike(btn, count) {
    btn.addEventListener("click", function() {
        let totalDislikes = parseInt(count.textContent) + 1;
        count.textContent = totalDislikes.toString();
    });
}

const btnDislike1 = document.createElement("button");
btnDislike1.textContent = "Dislike";
btnDislike1.className = "btn btn-danger";
btnDislike1.id = "btnDislike1";
hitDislike(btnDislike1, countLike1);

const btnDislike2 = document.createElement("button");
btnDislike2.textContent = "Dislike";
btnDislike2.className = "btn btn-danger";
btnDislike2.id = "btnDislike2";
hitDislike(btnDislike2, countLike2);

btnLike1.parentNode.appendChild(btnDislike1);
btnLike2.parentNode.appendChild(btnDislike2);

const countDislike1 = document.createElement("output");
countDislike1.id = "countDislike1";
countDislike1.textContent = "0";
btnLike1.parentNode.appendChild(countDislike1);

const countDislike2 = document.createElement("output");
countDislike2.id = "countDislike2";
countDislike2.textContent = "0";
btnLike2.parentNode.appendChild(countDislike2);

const submit = document.getElementById("submit");
const comment = document.getElementById("comment");
const commentbox = document.getElementById("commentbox");

submit.addEventListener("click", function() {
    commentbox.textContent += comment.value + "\n";
    comment.value = "";
});
