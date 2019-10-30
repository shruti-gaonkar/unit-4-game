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

    $(".btn").on("click", function () {
        if (characterHP <= 0) {

        } else if (defenderHP <= 0) {

        } else {
            $.map(characterArr, function (val) {
                if (val.id == characterSelected) {
                    if (characterHP == 99999) {
                        characterHP = val.health_points;
                        characterName = val.name;
                        console.log(characterHP + "===");
                    }
                    characterAP += val.attack_power;

                }

                if (val.id == defenderSelected) {
                    if (defenderHP == 99999) { defenderHP = val.health_points; console.log("===" + defenderHP); }
                    defenderName = val.name;
                    defenderCAP = val.attack_power;
                }
            });
            characterHP = characterHP - defenderCAP;
            defenderHP = defenderHP - characterAP;
            //console.log(characterSelected + "===" + defenderSelected);
            console.log(characterHP + "===" + defenderHP);
            console.log(characterAP + "===" + defenderCAP);

            if (characterHP <= 0) {
                message = "<div id='messageDiv'>You been defeated.... GAME OVER!!!</div>";
            } else if (defenderHP <= 0) {
                message = "<div id='messageDiv'>You have defeated " + defenderName + ", you can choose to fight another enemy.</div>";
            } else {
                message = "<div id='messageDiv'>"
                message += "<div>You attacked " + defenderName + " for " + characterAP + " damage. </div>";
                message += "<div>" + defenderName + " attacked you back for " + defenderCAP + " damage.</div>";
                message += "</div>";
            }

            if (message) {
                $("#messageDiv").remove();
                var failedDiv = $(message);
                $("#button-div").append(failedDiv);
            }
        }
    });
});

