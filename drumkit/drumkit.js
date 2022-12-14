let numberOfButtons = document.querySelectorAll(".button").length;

for (let i = 0; i < numberOfButtons; i++) {

document.querySelectorAll(".button")[i]
	.addEventListener("click", function() {
	let buttonStyle = this.innerHTML;
	sound(buttonStyle);
	animation(buttonStyle);
});
}
document.addEventListener("keypress", function(event) {

  animation(event.key);
  
  
  function sound(key) {
    switch (key) {
      case "a":
        console.log(key)
        let sound1 = new Audio("sounds/a.wav");
        sound1.play();
        break;
      }
    }  /* function sound(key) {
      switch (key) {
        case "z":
          let sound2 = new Audio("sounds/z.wav");
          sound2.play();
          break;
        }
      }  function sound(key) {
        switch (key) {
          case "e":
            let sound3 = new Audio("sounds/e.wav");
            sound3.play();
            break;
          }
        }  function sound(key) {
          switch (key) {
            case "r":
              let sound4= new Audio("sounds/r.wav");
              sound4.play();
              break;
            }
          }  function sound(key) {
            switch (key) {
              case "t":
                let sound5 = new Audio("sounds/t.wav");
                sound5.play();
                break;
              }
            }  function sound(key) {
              switch (key) {
                case "y":
                  let sound6 = new Audio("sounds/y.wav");
                  sound6.play();
                  break;
                }
              }  function sound(key) {
                switch (key) {
                  case "u":
                    let sound7 = new Audio("sounds/u.wav");
                    sound7.play();
                    break;
                  }
                }  function sound(key) {
                  switch (key) {
                    case "i":
                      let sound8 = new Audio("sounds/i.wav");
                      sound8.play();
                      break;
                    }
                  }  function sound(key) {
                    switch (key) {
                      case "o":
                        let sound9 = new Audio("sounds/o.wav");
                        sound9.play();
                        break;
                      }
                    }*/
                    sound(event.key);

function animation(currentKey) {
let activeButton = document.querySelector("." + currentKey);
}
});