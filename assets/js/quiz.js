function evaluarQuiz() {
  let score = 0;
  const totalQuestions = 2;

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  const resultDiv = document.getElementById('result');

  if (!q1 || !q2) {
    resultDiv.style.color = '#e11d48';
    resultDiv.textContent = 'Por favor selecciona una respuesta para cada pregunta.';
    return;
  }

  if (q1.value === 'b') score++;
  if (q2.value === 'a') score++;

  if (score === totalQuestions) {
    resultDiv.style.color = '#10b981';
    resultDiv.innerHTML = `🎉 ¡Excelente! Obtuviste **${score} / ${totalQuestions}** correctas. ¡Tienes dominados los conceptos!`;
  } else {
    resultDiv.style.color = '#2563eb';
    resultDiv.innerHTML = `Obtuviste **${score} / ${totalQuestions}** correctas. Revisa las páginas del sitio y vuelve a intentarlo.`;
  }
}