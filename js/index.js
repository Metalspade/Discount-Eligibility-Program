  function checkEligibility() {
    const age = document.getElementById("age").value;
    const isMember = document.getElementById("isMember");

    if (age >= 65) {
      document.getElementById("output").innerHTML = 'You qualify for senior Discount';  
      document.getElementById("output").style.color = "green";
    } else if (age >= 18 && isMember.checked) {
      document.getElementById("output").innerHTML = 'You qualify for Member Discount';
      document.getElementById("output").style.color = "green";
    } else {
      document.getElementById("output").innerHTML = 'You do not qualify for any Discount';
      document.getElementById("output").style.color = "red";
    }
  }


  const button = document.querySelector("button[type=submit]");{
  button.innerHTML = "Check Eligibility";
  button.style.fontSize = "35px";
  }

  const form = document.getElementById("form");

  // prevents form reloading
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
