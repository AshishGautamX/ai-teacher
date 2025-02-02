* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: rgb(242, 239, 231);
    color: rgb(72, 166, 167);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px;
}

.container {
    background-color: rgb(154, 203, 208);
    width: 100%;
    max-width: 420px;
    padding: 25px;
    border-radius: 10px;
    margin-top: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

#signup-form {
    margin-top: 20px;
    height: 450px;
}

#student-form {
    height: 280px;
}

.stform {
    display: block;
    height: 310px;
}

.logo-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 120px;
}

.logo {
    width: 180px;
    height: auto;
    margin-top: 10px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

label {
    margin: 10px 0 5px;
    padding: 10px 15px;
}

input, select, button {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid rgb(72, 166, 167);
    border-radius: 5px;
}

input:focus, select:focus {
    outline: none;
    border-color: rgb(41, 115, 178);
}

.role {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;
    color: rgb(61,61,61);
    gap: 15px;
}

.role label {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgb(242, 239, 231);
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
}

.role label:hover {
    background: rgb(200, 225, 225);
}

.role input {
    appearance: none;
    display: flex;
    width: 18px;
    height: 18px;
    border: 2px solid rgb(72, 166, 167);
    border-radius: 50%;
    position:relative;
    margin-top: 3vh;
    

}

.role input:checked::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: rgb(72, 166, 167);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.google-signin {
    background-color: rgb(41, 115, 178);
    color: white;
    width: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
    padding: 12px;
    border-radius: 5px;
}

.google-signin:hover {
    background-color: rgb(72, 166, 167);
}

button {
    background-color: rgb(41, 115, 178);
    color: white;
    border: none;
    cursor: pointer;
    padding: 12px;
    border-radius: 5px;
}

button:hover {
    background-color: rgb(72, 166, 167);
}

.separator {
    text-align: center;
    margin: 15px 0;
}

.separator span {
    background-color: rgb(242, 239, 231);
    padding: 0 10px;
}

.separator:before, .separator:after {
    content: '';
    display: inline-block;
    width: 40%;
    height: 1px;
    background-color: rgb(72, 166, 167);
    vertical-align: middle;
}

#student-form, #teacher-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#google-role-selection {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: white;
    border: 1px solid rgb(72, 166, 167);
    border-radius: 5px;
    display: none;
    z-index: 10;
}

#google-role-selection label {
    display: block;
    padding: 10px;
    cursor: pointer;
}

#google-role-selection label:hover {
    background-color: rgb(242, 239, 231);
}
