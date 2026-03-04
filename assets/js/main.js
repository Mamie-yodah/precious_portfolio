// Simple client-side enhancements:
// - Mobile menu toggle
// - Form demo validation and local "send" simulation
// - Year auto-fill
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year')?.textContent = new Date().getFullYear();
  document.getElementById('year-2')?.textContent = new Date().getFullYear();
  document.getElementById('year-3')?.textContent = new Date().getFullYear();
  document.getElementById('year-4')?.textContent = new Date().getFullYear();

  // mobile toggle
  const toggle = document.querySelector('.mobile-toggle');
  toggle?.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // simple reveal on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.card, .project-card, .info-card, .profile-card').forEach(el => {
    el.classList.add('reveal'); observer.observe(el);
  });
});
// Contact form submission via Formspree
async function submitContact(evt) {
  evt.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const out = document.getElementById('formResponse');
  const endpoint = document.getElementById('fs-endpoint')?.value;

  if (!name || !email || !message) {
    out.textContent = 'Please fill all fields.';
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    out.textContent = 'Please enter a valid email.';
    return false;
  }

  out.textContent = 'Sending...';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      out.textContent = 'Thanks — your message was sent. Please check your email to verify on first submission.';
      document.getElementById('contactForm').reset();
    } else {
      const data = await res.json().catch(() => null);
      const msg = data?.errors?.map(e => e.message).join(', ') || 'Submission failed. Please try again or use WhatsApp buttons below.';
      out.textContent = msg;
    }
  } catch (err) {
    out.textContent = 'Network error. Please try again or use WhatsApp buttons below.';
  }

  return false;
}

// fallback mailto button
function mailtoContact(){
  const subject = encodeURIComponent('Inquiry from portfolio website');
  const body = encodeURIComponent('Hi Precious,\n\nI would like to discuss...');
  location.href = `mailto:kanzambap@gmail.com?subject=${subject}&body=${body}`;
}

// WhatsApp click-to-chat
function sendWhatsApp(number){
  const name = document.getElementById('name')?.value.trim() || '';
  const email = document.getElementById('email')?.value.trim() || '';
  const message = document.getElementById('message')?.value.trim() || '';
  const text = encodeURIComponent(`Hello Precious,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  const phone = number.replace(/[^\d]/g, '');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}
