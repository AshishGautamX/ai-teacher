document.addEventListener('DOMContentLoaded', () => {
    const googleSigninButton = document.getElementById('google-signin');
    const signupForm = document.getElementById('signup-form');
    


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


