const box = document.querySelectorAll(".box");
// console.log(box);

box.forEach(function (btn) {
  //console.log(btn);
  btn.addEventListener("click", function (e) {
    //you can use mouse over and many more like this .
    // console.log(e);
    // console.log(e.target);
    //firstMethod ..
    const body = document.querySelector("body");
    // body.style.backgroundColor = e.target.id;

    if (e.target.id == "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == "aqua") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
