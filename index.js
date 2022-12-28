function rw() {
    let element = document.getElementsByClassName("box")[0];
    element.style.flexDirection = "column";
    element.style.justifyContent = "space-around";
}

let myfun = setTimeout(chan, 1000);
function chan() {
  let heading2 = document.getElementById("abc");
  heading2.style.color = "red";
  heading2.id = "heading";
  heading2.style.textAlign = "center";
}


function set() {
    let change = document.getElementById("change");
    change.innerText = "Welcome to Elevation academy";
    change.style.color="darkblue"
    change.style.textAlign="center"
  }


function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";

        if (hh === 0) {
          hh = 12;
        }
        if (hh > 12) {
          hh = hh - 12;
          session = "PM";
        }

        hh = hh < 10 ? "0" + hh : hh;
        mm = mm < 10 ? "0" + mm : mm;
        ss = ss < 10 ? "0" + ss : ss;

        let time = hh + ":" + mm + ":" + ss + " " + session;

        document.getElementById("clock").innerText = time;
        let t = setTimeout(function () {
          currentTime();
        }, 1000);
      }

      currentTime();


      function myFun() {
        change.style.textAlign="center"

        let a = document.getElementById("list").value;
        let b = document.getElementById("opt");
        b.innerHTML = a;
        
      }