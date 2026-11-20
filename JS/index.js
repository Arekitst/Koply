const nextpage1 = document.getElementById("next-page-1");
const start_screen = document.getElementById("start_screen");
const start_screen2 = document.getElementById("start_screen2");

nextpage1.addEventListener("click", () => {
  start_screen.classList.add("nextanim");
  setTimeout(() => {
    start_screen.classList.add("hidden");
    
  }, 280);
  start_screen2.classList.add("newanim")
  setTimeout(() => {
    start_screen2.classList.remove("hidden");
    
  }, 280);
  
  
});
