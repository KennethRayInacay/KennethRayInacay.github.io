const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")

function hitLike1() {
    let totalLike1 = parseInt(countLike1.value) + 1
    countLike1.textContent = totalLike1.toString()
} 
function hitLike2() {
    let totalLike2 = parseInt(countLike2.value) + 1
    countLike2.textContent = totalLike2.toString()
} 
btnLike1.addEventListener("click", hitLike1)
btnLike2.addEventListener("click", hitLike2)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")
function submitComment() {
    commentbox.textContent += comment.value.toString() + "\n"
} 
submit.addEventListener("click", submitComment)
