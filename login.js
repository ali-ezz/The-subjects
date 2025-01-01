import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
// REPLACE with your actual info
const supabaseUrl = 'https://ekvnobxzryfxsvmwvhbj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrdm5vYnh6cnlmeHN2bXd2aGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTkyNzQsImV4cCI6MjA1MTI5NTI3NH0.JYx3l4XtRJu58tAa3r-HTJBfDXZ2G50RgC6M69rZseg'
const supabase = createClient(supabaseUrl, supabaseKey);

let isLoginMode = true; // toggles between login and sign-up

async function handleSubmit() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageEl = document.getElementById("message");
  messageEl.textContent = "";

  if (!email || !password) {
    messageEl.textContent = "Both fields are required.";
    messageEl.className = "error";
    return;
  }

  if (isLoginMode) {
    // Attempt to login user from our Supabase 'users' table
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('gmail', email)
        .eq('password', password)
        .single(); // single ensures we only expect 1 row

      if (error || !data) {
        messageEl.textContent = "Invalid credentials or user not found.";
        messageEl.className = "error";
        return;
      }
      // If user found, store minimal info in localStorage
      localStorage.setItem('userID', data.id);
      localStorage.setItem('userName', data.name || "");
      localStorage.setItem('userCourses', data.course || ""); 
      // Then redirect
      window.location.href = "main.html";
    } catch (e) {
      messageEl.textContent = e.message;
      messageEl.className = "error";
    }
  } else {
    // Sign-up account creation
    try {
      // Insert row
      const { data, error } = await supabase
        .from('users')
        .insert([
          { gmail: email, password: password, course: "" } // default blank course
        ]);

      if (error) {
        messageEl.textContent = error.message;
        messageEl.className = "error";
        return;
      }
      messageEl.textContent = "Signup successful! Please login now.";
      messageEl.className = "success";
      // Switch to login mode
      toggleForm();
    } catch (e) {
      messageEl.textContent = e.message;
      messageEl.className = "error";
    }
  }
}

function toggleForm() {
  isLoginMode = !isLoginMode;
  const formTitle = document.getElementById("form-title");
  const submitBtn = document.getElementById("submitBtn");
  const toggleBtn = document.querySelector(".toggle-btn");

  if (isLoginMode) {
    formTitle.textContent = "Login";
    submitBtn.textContent = "Login";
    toggleBtn.textContent = "No account? Click to Sign Up";
  } else {
    formTitle.textContent = "Sign Up";
    submitBtn.textContent = "Sign Up";
    toggleBtn.textContent = "Already have an account? Login";
  }
}

window.handleSubmit = handleSubmit;
window.toggleForm = toggleForm;