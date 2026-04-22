let formData = {
  email: "",
  message: ""
};

const form = document.querySelector('.main-form');
const localStorageKey = "main-form-state";

const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || "";
  form.elements.message.value = formData.message || "";
}

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  
  formData[name] = value.trim();
  
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log("Submitted Data:", formData);

  localStorage.removeItem(localStorageKey);
  formData = { email: "", message: "" };
  form.reset();
});
