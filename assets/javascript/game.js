$(document).ready(function () {
    /*
     * character array has the character name and health points(HP) for that character 
     */
    var characterArr = [
        {
            id: "spiderman",
            name: "Spiderman",
            health_points: 120,
            attack_power: 8,
            counter_attack_power: 15
        },
        {
            id: "ironman",
            name: "Ironman",
            health_points: 100,
            attack_power: 7,
            counter_attack_power: 5
        },
        {
            id: "thor",
            name: "Thor",
            health_points: 150,
            attack_power: 9,
            counter_attack_power: 20
        },
        {
            id: "captain_america",
            name: "Captain America",
            health_points: 180,
            attack_power: 6,
            counter_attack_power: 25
        }
    ];

    /**
     * initialising the global variables
     */
    var characterSelected = false;
    var defenderSelected = false;
    var characterHP = 99999;
    var characterAP = 0; // attack power will increase by base attack power
    var defenderHP = 99999;
    var defenderCAP = 0; // counter attack power remains same
    var message = '';
    var characterName = '';
    var defenderName = '';
    var numOfEnemies = 0;
    var charhtml = '';

    /**
     * html to display all characters on load
     */
    $.map(characterArr, function (val) {
        charhtml += '<figure id="' + val.id + '" class="figure m-5">';
        charhtml += '<figcaption class="figure-caption text-center">' + val.name + '</figcaption >';
        charhtml += '<img src="assets/images/' + val.id + '.png" class="figure-img img-fluid rounded cursor-pointer" alt="' + val.name + '" style="width:150px;">';
        charhtml += '<figcaption id="' + val.id + '_hp" class="figure-caption text-center">' + val.health_points + '</figcaption>';
        charhtml += '</figure>';
        $("#all_character_area").html(charhtml);
    });

    /**
     * on click of each character 
     */
    $("figure").on("click", function () {
        /* check if your character is selected */
        if (characterSelected == false) {
            /* show your character and enemy divs*/
            $('#char_def_row_id').removeClass("d-none");
            $('#enemy_row_id').removeClass("d-none");

            /* You character is appended to character_area div */
            $(this).appendTo("#character_area");

            /* append all enemies to enemy area */
            $("#all_character_area").find(".figure").appendTo("#enemies_area");

            /* Count the number of enemies */
            numOfEnemies = $('#enemies_area .figure').length;

            /* Your character is assigned to the characterSelected variable */
            characterSelected = $(this).attr("id");

            /* When your character is selected display message to choose enemy */
            show_message("<div>Choose an enemy to play</div>");

        } else if (defenderSelected == false && $(this).attr("id") != characterSelected) {
            /* Defender is appended to defender_area div */
            $(this).appendTo("#defender_area");

            /* Defender is assigned to defender_area */
            defenderSelected = $(this).attr("id");

            /* show the attack button when defender is selected */
            $('#btn-attack').removeClass('d-none');
        }
    });

    $("#btn-attack").on("click", function () {
        /* When attack button is clicked check is character HP or defender HP are greater than 0 */
        if (characterHP > 0 || defenderHP > 0) {
            /* Loop through character array to check if value is equal to characterSelected & defenderSelected */
            $.map(characterArr, function (val) {
                /* Assign character variables */
                if (val.id == characterSelected) {
                    if (characterHP == 99999) {
                        /* Assign health points to a variable */
                        characterHP = val.health_points;
                    }
                    /* Assign character name to a variable */
                    characterName = val.name;

                    /* Assign attack power to a variable */
                    characterAP += val.attack_power;
                }

                /* Assign defender variables */
                if (val.id == defenderSelected) {
                    if (defenderHP == 99999) {
                        /* Assign defender health points to a variable */
                        defenderHP = val.health_points;
                    }
                    defenderName = val.name; // Defender name
                    defenderCAP = val.counter_attack_power; // Defender attack power
                }
            });

            if (characterSelected && defenderSelected) {
                /* Decrement defender HP when attacked by your character */
                defenderHP = defenderHP - characterAP;
                if (defenderHP > 0) {
                    /* Decrement character HP when attacked by defender */
                    characterHP = characterHP - defenderCAP;
                }
                /* change health points for both players after decrement */
                $("#" + characterSelected + "_hp").text(characterHP);
                $("#" + defenderSelected + "_hp").text(defenderHP);

                $('#btn-attack').addClass("d-none");

                if (characterHP <= 0) {
                    /* If your character is defeated display message */
                    message = "<div>You've been defeated.... GAME OVER!!!</div>";
                    $('#enemy_row_id').addClass("d-none"); // hide enemy row
                    $('#btn_restart_div').removeClass("d-none"); // show restart button
                } else if (defenderHP <= 0) {
                    numOfEnemies--;
                    if (numOfEnemies == 0) {
                        /* If all enemies defeated display message */
                        message = "<div>You won!!</div>";
                        message += "<div>GAME OVER!!</div>";
                        $('#enemy_row_id').addClass("d-none");
                        $('#btn_restart_div').removeClass("d-none");
                    } else {
                        /* If one enemy is defeated display message */
                        message = "<div>You have defeated " + defenderName + ", you can choose to fight another enemy.</div>";
                    }
                    $('#' + defenderSelected).remove(); // remove the defender after defeating
                    /* Reset defender values */
                    defenderSelected = false;
                    defenderHP = 99999;
                } else {
                    /* Display message for attacks and counter attacks */
                    message = "<div>You attacked " + defenderName + " for " + characterAP + " damage. </div>";
                    message += "<div>" + defenderName + " attacked you back for " + defenderCAP + " damage.</div>";
                    $('#btn-attack').removeClass("d-none");
                }

                show_message(message);
            }
        }
    });

    /* On click of restart button reload page */
    $("#btn-restart").on("click", function () {
        location.reload();
    });
});

/* function to display messages */
function show_message(message) {
    if (message) {
        $("#msg_div").html(message);
        $("#msg_div").find("div").addClass("alert alert-danger font-weight-bold");
    }
}