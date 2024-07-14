const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

questions.forEach((question, i) => {
    question.addEventListener("click", () => {
        const answer = answers[i];
        const cross = question.querySelector(".question-btn")
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            cross.classList.remove("rotate-45");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            cross.classList.add("rotate-45")
        }
    });
});
