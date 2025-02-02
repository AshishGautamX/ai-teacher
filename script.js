document.addEventListener('DOMContentLoaded', () => {
  const googleSigninButton = document.getElementById('google-signin');
  const signupForm = document.getElementById('signup-form');
  const studentForm = document.getElementById('student-form');
  const teacherForm = document.getElementById('teacher-form');
  const roleRadios = document.querySelectorAll('input[name="role"]');

  function updateRequiredFields() {
      const role = document.querySelector('input[name="role"]:checked').value;
      const studentInputs = studentForm.querySelectorAll('input');
      const teacherInputs = teacherForm.querySelectorAll('input');

      if (role === 'student') {
          studentInputs.forEach(input => input.setAttribute('required', ''));
          teacherInputs.forEach(input => input.removeAttribute('required'));
      } else {
          teacherInputs.forEach(input => input.setAttribute('required', ''));
          studentInputs.forEach(input => input.removeAttribute('required'));
      }
  }

  roleRadios.forEach(radio => {
      radio.addEventListener('change', function () {
          if (this.value === 'student') {
              studentForm.style.display = 'block';
              teacherForm.style.display = 'none';
          } else {
              studentForm.style.display = 'none';
              teacherForm.style.display = 'block';
          }
          updateRequiredFields(); // Update required fields dynamically
      });
  });

  signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      updateRequiredFields(); // Ensure correct required fields are set

      const role = document.querySelector('input[name="role"]:checked');
      if (!role) {
          alert('Please select your role');
          return;
      }

      const selectedForm = role.value === 'student' ? studentForm : teacherForm;
      const requiredFields = selectedForm.querySelectorAll('input[required]');
      
      for (const field of requiredFields) {
          if (!field.value.trim()) {
              alert(`Please fill in the ${field.placeholder} field.`);
              return;
          }
      }

      // Redirect based on role
      window.location.href = role.value === 'student' ? "student_dashboard.html" : "teachint.html";
  });

  googleSigninButton.addEventListener('click', (e) => {
      e.preventDefault();
      const role = document.querySelector('input[name="role"]:checked');
      if (!role) {
          alert('Please select your role before signing in with Google.');
          return;
      }

      window.location.href = role.value === 'student' ? "student_dashboard.html" : "teachint.html";
  });

  updateRequiredFields(); // Initialize required fields on page load
});
