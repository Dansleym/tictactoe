(function () {
  let area = document.getElementById("area"),
    textHelp = document.getElementById("text-help"),
    popup = document.getElementById("pop-up-winner"),
    playerWin = document.getElementById("winner"),
    popupbutton = document.getElementById("pop-up__button"),
    move = 0;

  textHelp.innerHTML = "turn X";

  popupbutton.addEventListener("click", () => {
    popup.style.display = "none";
    location.reload();
  });

  area.addEventListener("click", function (event) {
    if (move > 7) {
      playerWin.innerHTML = "It`s tie!!!";
      popup.style.display = "flex";
    }

    if (move % 2 === 0) {
      if (event.target.innerHTML === "X") {
        event.target.innerHTML = "X";
        textHelp.innerHTML = "turn O";
      } else {
        event.target.innerHTML = "O";
        textHelp.innerHTML = "turn X";
        move++;
      }
    } else {
      if (event.target.innerHTML === "O") {
        event.target.innerHTML = "O";
        textHelp.innerHTML = "turn X";
      } else {
        event.target.innerHTML = "X";
        textHelp.innerHTML = "turn O";
        move++;
      }
    }
    console.log(move);
    winner();
  });

  function winner() {
    let arrItems = document.getElementsByClassName("area__item");

    let win_combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; win_combination.length > i; i++) {
      if (
        arrItems[win_combination[i][0]].innerHTML === "X" &&
        arrItems[win_combination[i][1]].innerHTML === "X" &&
        arrItems[win_combination[i][2]].innerHTML === "X"
      ) {
        playerWin.innerHTML = "Congrats winner Cross!!!";
        popup.style.display = "flex";
      } else if (
        arrItems[win_combination[i][0]].innerHTML === "O" &&
        arrItems[win_combination[i][1]].innerHTML === "O" &&
        arrItems[win_combination[i][2]].innerHTML === "O"
      ) {
        playerWin.innerHTML = "Congrats winner Zero!!!";
        popup.style.display = "flex";
      }
    }
  }
})();
