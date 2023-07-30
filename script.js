 function showTooltip1() {
    document.getElementById("tooltip1").style.display = "block";
  }
  function showTooltip2() {
    document.getElementById("tooltip2").style.display = "block";
  }
  function showTooltip3() {
    document.getElementById("tooltip3").style.display = "block";
  }
  function showTooltip4() {
    document.getElementById("tooltip4").style.display = "block";
  }

  // Function to hide the tooltip
  function hideTooltip1() {
    document.getElementById("tooltip1").style.display = "none";
  }
  function hideTooltip2() {
    document.getElementById("tooltip2").style.display = "none";
  }
  function hideTooltip3() {
    document.getElementById("tooltip3").style.display = "none";
  }
  function hideTooltip4() {
    document.getElementById("tooltip4").style.display = "none";
  }

  // Add event listeners to the icons
  const icon1 = document.getElementById("icon1");
  const icon2 = document.getElementById("icon2");
  const icon3 = document.getElementById("icon3");
  const icon4 = document.getElementById("icon4");

  icon1.addEventListener("mouseover", showTooltip1);
  icon1.addEventListener("mouseout", hideTooltip1);

  icon2.addEventListener("mouseover", showTooltip2);
  icon2.addEventListener("mouseout", hideTooltip2);

  icon3.addEventListener("mouseover", showTooltip3);
  icon3.addEventListener("mouseout", hideTooltip3);

  icon4.addEventListener("mouseover", showTooltip4);
  icon4.addEventListener("mouseout", hideTooltip4);



  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;
  
  document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 5;
    }, 30);
  }