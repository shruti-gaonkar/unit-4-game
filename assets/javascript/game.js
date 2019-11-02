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
    var characterSelected = false;
    var defenderSelected = false;
    var characterHP = 99999;
    var characterAP = 0; // this will increase by base attack power
    var defenderHP = 99999;
    var defenderCAP = 0; // this remains same
    var message = '';
    var characterName = '';
    var defenderName = '';
    var numOfEnemies = 0;
    var charhtml = '';

    $.map(characterArr, function (val) {
        charhtml += '<figure id="' + val.id + '" class="figure m-5">';
        charhtml += '<figcaption class="figure-caption text-center">' + val.name + '</figcaption >';
        charhtml += '<img src="assets/images/' + val.id + '.png" class="figure-img img-fluid rounded" alt="' + val.name + '" style="width:150px;">';
        charhtml += '<figcaption id="' + val.id + '_hp" class="figure-caption text-center">' + val.health_points + '</figcaption>';
        charhtml += '</figure>';
        $("#all_character_area").html(charhtml);
    });

    $("figure").on("click", function () {
        if (characterSelected == false) {
            $('#char_def_row_id').removeClass("d-none");
            $('#enemy_row_id').removeClass("d-none");
            $(this).appendTo("#character_area");
            $("#all_character_area").find(".figure").appendTo("#enemies_area");
            numOfEnemies = $('#enemies_area .figure').length;
            characterSelected = $(this).attr("id");

        } else if (defenderSelected == false && $(this).attr("id") != characterSelected) {
            $(this).appendTo("#defender_area");
            defenderSelected = $(this).attr("id");
            $('.btn').show();
        }
    });

    $("#btn-attack").on("click", function () {
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

            if (characterSelected && defenderSelected) {
                if (characterHP <= 0) {
                    message = "<div id='messageDiv'>You been defeated.... GAME OVER!!!</div>";
                } else if (defenderHP <= 0) {
                    numOfEnemies--;
                    if (numOfEnemies == 0) {
                        message = "<div id='messageDiv'>"
                        message += "<div>You won!!</div>";
                        message += "<div>GAME OVER!!</div>";
                        message += "</div>";

                        console.log($('button-restart-div'));
                        $('#button-restart').removeClass("d-none");
                    } else {
                        message = "<div id='messageDiv'>You have defeated " + defenderName + ", you can choose to fight another enemy.</div>";
                    }
                    $('#' + defenderSelected).remove();
                    $('.btn').hide();
                    defenderSelected = false;
                    defenderHP = 99999;
                } else {
                    message = "<div id='messageDiv'>"
                    message += "<div class='alert alert-danger font-weight-bold'>You attacked " + defenderName + " for " + characterAP + " damage. </div>";
                    message += "<div class='alert alert-danger font-weight-bold'>" + defenderName + " attacked you back for " + defenderCAP + " damage.</div>";
                    message += "</div>";
                }

                if (message) {
                    $("#messageDiv").remove();
                    var failedDiv = $(message);
                    $("#msg_div").append(failedDiv);
                }
            }
        }
    });

    $("#btn-restart").on("click", function () {
        $("#main-content").load(location.href + " #main-content>*", "");
    });
});

