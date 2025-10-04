// Smooth scrolling and active nav
const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill all fields!');
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Invalid email!');
    return false;
  }
  alert('Message sent successfully!');
  return true;
}

