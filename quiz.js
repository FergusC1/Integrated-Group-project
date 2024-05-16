document.addEventListener('DOMContentLoaded', function() {
    const quizForms = document.querySelectorAll('.quizForm');

    quizForms.forEach(function(quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();

            let selectedOptions = quizForm.querySelectorAll('input[type="radio"]:checked');
            let totalQuestions = quizForm.querySelectorAll('.question').length;

            if (selectedOptions.length < totalQuestions) {
                const incompleteMessage = document.createElement('p');
                incompleteMessage.textContent = 'Please answer all questions.';
                quizForm.appendChild(incompleteMessage);
                return; // Stop execution if questions are unanswered
            }

            let correctCount = 0;

            selectedOptions.forEach(function(selectedOption) {
                if (selectedOption.value === 'correct') {
                    correctCount++;
                    selectedOption.parentElement.classList.add('correct');
                } else {
                    selectedOption.parentElement.classList.add('incorrect');
                }
            });

            const overallResultMessage = document.createElement('p');
            if (correctCount === totalQuestions) {
                overallResultMessage.textContent = 'Congrats! All answers are correct!';
            } else {
                overallResultMessage.textContent = `You got ${correctCount} out of ${totalQuestions} questions correct.`;
            }

            quizForm.appendChild(overallResultMessage);
        });
    });
});
