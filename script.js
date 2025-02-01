document.addEventListener('DOMContentLoaded', () => {
    
    const googleSigninButton = document.getElementById('google-signin');
    const signupForm = document.getElementById('signup-form');
    const studentForm = document.getElementById('student-form');
    const teacherForm = document.getElementById('teacher-form');
    const roleRadios = document.querySelectorAll('input[name="role"]');

    roleRadios.forEach(radio => {
        radio.addEventListener('change', function () {
          if (this.value === 'student') {
            studentForm.style.display = 'block';
            teacherForm.style.display = 'none';
          } else {
            studentForm.style.display = 'none';
            teacherForm.style.display = 'block';
          }
        });

    });
    // Basic form validation
    signupForm.addEventListener('submit', (e) => {
        const role = document.querySelector('input[name="role"]:checked');
        
        if (!role) {
            e.preventDefault();
            alert('Please select your role');
        }
    });

    googleSigninButton.addEventListener('click', (e) => {
        const role = document.querySelector('input[name="role"]:checked');
        
        if (!role) {
            e.preventDefault();
            alert('Please select your role');
        }
      });
    
});


