$(document).ready(function () {
    /* var allCharAreaDiv = $('all_character_area');
 
     var newCharDiv = $("<figure>ss</figure>");
 
     // It then adds this new div to the drinkList div.
     allCharAreaDiv.append(newCharDiv);*/

    /*
     * character array has the character name and health points(HP) for that character 
     */
    var characterArr = [
        {
            "name": "spiderman",
            "health_points": 120,
            "attack_power": 8
        },
        {
            "name": "ironman",
            "health_points": 100,
            "attack_power": 9
        },
        {
            "name": "thor",
            "health_points": 150,
            "attack_power": 10
        },
        {
            "name": "captain_america",
            "health_points": 180,
            "attack_power": 11
        }
    ];
    var characterSelected = false;
    var defenderSelected = false;
    var characterHP = 0;

    $("figure").on("click", function () {
        if (characterSelected == false) {
            $(this).appendTo("#character_area");
            $("#all_character_area").find(".figure").appendTo("#enemies_area");
            characterSelected = $(this).attr("id");

        } else if (defenderSelected == false) {
            $(this).appendTo("#defender_area");
            defenderSelected = $(this).attr("id");
        }
    });


});

