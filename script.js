const animateBtn = document.getElementById('animateBtn');
const buyButtons = document.querySelectorAll('.buyBtn');

animateBtn.addEventListener('click', () => {
  animateBtn.classList.remove('pulse-animation');
  void animateBtn.offsetWidth;
  animateBtn.classList.add('pulse-animation');
  localStorage.setItem('blendmartAnimationClicked', 'true');
});

window.onload = () => {
  if(localStorage.getItem('blendmartAnimationClicked') === 'true') {
    animateBtn.textContent = "Welcome Back to Blend Mart!";
    animateBtn.style.backgroundColor = '#1f6f75';
    animateBtn.disabled = true;
  }
};

buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = "Added!";
    button.disabled = true;
    let cart = JSON.parse(localStorage.getItem('blendmartCart')) || [];
    const productName = button.parentElement.querySelector('h4').textContent;
    cart.push(productName);
    localStorage.setItem('blendmartCart', JSON.stringify(cart));
  });
});
