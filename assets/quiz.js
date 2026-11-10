// 모든 수업에서 재사용할 수 있는 짧은 선택형 퀴즈 피드백.
document.querySelectorAll('[data-quiz]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const answer = new FormData(form).get('answer');
    const feedback = form.querySelector('[data-feedback]');
    const explanation = form.querySelector('[data-explanation]');
    if (answer === null) {
      feedback.textContent = '답을 먼저 골라 주세요.';
      return;
    }
    const correct = answer === form.dataset.correct;
    feedback.textContent = correct
      ? (form.dataset.success || '맞았어요! 조건식의 결과는 항상 참입니다.')
      : (form.dataset.retry || '다시 시도해 보세요. 홀수끼리 곱한 값의 마지막 세 비트를 살펴보세요.');
    explanation.hidden = !correct;
  });
});
