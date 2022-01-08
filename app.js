class Casino {
    constructor(name, fakeCoin) {
      this.name = name;
      this.timesPlayed = 0;
      this.winnings = 0;
      this.fakeCoin = fakeCoin;
    }
  
    playGame(betAmount) {
      this.timesPlayed += 1;
      if (Math.random() > 0.5 && this.fakeCoin == false) {
        console.log("You won " + betAmount *
          (this.timesPlayed) + " dollars from "
          + this.name + "!");
        this.winnings += this.timesPlayed * betAmount;
        console.log("Current winnings: " + this.winnings);
      } else {
        console.log(this.name + " wins!");
        this.timesPlayed = 0;
        this.winnings = 0;
      }
    }
  
    rollDice(sides) {
      console.log(Math.floor(Math.random() * sides) + 1);
    }
  }
  
  // TESTS
  const myCasino = new Casino("HackerU Casino", true);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.playGame(5);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(6);
  myCasino.rollDice(1000);