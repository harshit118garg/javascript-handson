let toastContainer = document.querySelector(".toast-container");
let btnContainer = document.querySelectorAll(".btn-group button");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "check-circle",
    text: "Success: This is a success toast.",
    className: "success",
  },
  error: {
    icon: "x",
    text: "Error: This is an error toast.",
    className: "error",
  },
  warning: {
    icon: "alert-circle",
    text: "Warning: This is a warning toast.",
    className: "warning",
  },
};

Array.from(btnContainer).forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});

const createToast = (id) => {
  const { icon, text, className } = toastDetails[id];
  let toast = document.createElement("div");
  toast.className = `toast ${className}`;
  toast.innerHTML = `<p><span><i data-lucide=${icon}></i></span>${text}</p>`;
  toastContainer.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};
