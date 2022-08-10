const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };
  
  resizeOps();
  window.addEventListener("resize", resizeOps);

function loadModals() {

    // Get the modals
    var modals = document.querySelectorAll(".modal");

    // Get the button that opens the modal
    var btns = document.querySelectorAll(".myBtn");
    
    // Get the <span> element that closes the modal
    var spans = document.querySelectorAll(".close");

    // Turn it from HTML DOM element to normal JavaScript array
    modals = Array.from(modals);
    btns = Array.from(btns);
    spans = Array.from(spans);

    // When the user clicks the button, open the modal 
    btns.forEach((btn, i) => {
        btn.onclick = function() {
            modals[i].style.display = "flex";
        }
    });

    // When the user clicks on <span> (x), close the modal
    spans.forEach((span, i) => {
        span.onclick = function() {
            modals[i].style.display = "none";
        }
    });
}