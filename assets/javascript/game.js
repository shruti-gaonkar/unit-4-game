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
            id: "spiderman",
            name: "Spiderman",
            health_points: 120,
            attack_power: 8
        },
        {
            id: "ironman",
            name: "Ironman",
            health_points: 100,
            attack_power: 5
        },
        {
            id: "thor",
            name: "thor",
            health_points: 150,
            attack_power: 10
        },
        {
            id: "captain_america",
            name: "Captain America",
            health_points: 180,
            attack_power: 25
        }
    ];
    var characterSelected = false;
    var defenderSelected = false;
    var characterHP = 99999;
    var characterAP = 0; // this will increase by base attack power
    var defenderHP = 99999;
    var defenderCAP = 0; // this remains same
    var message = '';
    var characterName = '';
    var defenderName = '';

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

