File

# unit-4-game

Description

1. Link to play the game: https://shruti-gaonkar.github.io/unit-4-game/

2. Here's how the app works:

* When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

   ![Landing Page!](assets/images/screen1.png)

   * The player must then defeat all of the remaining fighters. Enemies are moved to a different area of the screen.

   * The player chooses an opponent by clicking on an enemy's picture.

   * Once the player selects an opponent, that enemy is moved to a `defender area`.

   ![Defender Area!](assets/images/screen2.png)

   * The player will now be able to click the `attack` button.
     * Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 
     * The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

     ![Points screen!](assets/images/screen3.png)

3. The player will keep hitting the attack button in an effort to defeat their opponent.

   * When the defender's `HP` is reduced to zero or below, the enemy will be removed from the `defender area`. The player character can now choose a new opponent.

   ![Winner screen!](assets/images/screen4.png)

4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.

   ![Final screen!](assets/images/screen5.png)

Technologies
HTML, CSS, JQuery