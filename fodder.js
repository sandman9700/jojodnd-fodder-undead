var reset = "";
var Hit = 12, HitDie = "d" + Hit, HP, AC;
var spec = $('#attributes').find('option:selected').text();
var Damage = "";
$('#DMG').change(function () {
    Damage = $('#DMG').val();
    console.log("Damage:", Damage)
});

var Name = "";
$('#NAME').change(function () {
    Name = $('#NAME').val();
    console.log("Name:", Name)
});

var Misc = "";
$('#MISC').change(function () {
    Misc = $('#MISC').val();
    console.log("MISC:", Misc)
});

var Hit = 12;
$('.HitSelect').change(function () {
    Hit = parseInt($('.HitSelect').val());
    HitDie = "d" + Hit
    updateHP();
});

var PB = 2,
    PRB = "+2";
$('.PBSelect').change(function () {
    PB = parseInt($('.PBSelect').val());
    PRB = "+" + PB
    updateHP();
    updateAC();
});

var Str = 0;
$('#STR').change(function () {
    Str = parseInt($('#STR').val());
    console.log("Strength:", Str);
});

var Dex = 0;
$('#DEX').change(function () {
    Dex = parseInt($('#DEX').val());
    updateAC();
    console.log("Dexterity:", Dex);
});

var Con = 0;
$('#CON').change(function () {
    Con = parseInt($('#CON').val());
    updateHP();
    updateAC();
    console.log("Constitution:", Con);
});

var Int = 0;
$('#INT').change(function () {
    Int = parseInt($('#INT').val());
    console.log("Intelligence:", Int);
});

var Wis = 0;
$('#WIS').change(function () {
    Wis = parseInt($('#WIS').val());
    updateAC();
    console.log("Wisdom:", Wis);
});

var Cha = 0;
$('#CHA').change(function () {
    Cha = parseInt($('#CHA').val());
    console.log("Charisma:", Cha);
});

function updateHP() {
    var HPBox = $('#HP'),
        Roll = Math.floor(Math.random() * Hit) + 1;

    HP = Hit + (Roll * PB) + (Con * PB)

    HPBox.html(HP);
    console.log("PB:", PB, "Hit:", Hit, "Roll:", Roll, "Con:", Con, "HP:", HP);
}
updateHP();

function updateAC() {
    var ACBox = $('#AC'),
        HACBox = $('#HAC'),
        highestStat = Math.max(Dex, Con, Wis); // Get the highest of Dex, Con, or Wis
        AC = 10 + PB + highestStat
    HAC = AC + PB;

    ACBox.html(AC);
    HACBox.html(HAC);
    console.log("PB:", PB, "Dex:", Dex, "Con:", Con, "Wis:", Wis, "AC:", AC);
}
updateAC();

$(document).ready(function () {
    $('#attributes').change(function () {
        var selectedValue = $(this).val();
        spec = $(this).find('option:selected').text();
        console.log("Selected Value: " + selectedValue);
        console.log("Selected Text: " + spec);
    });
});
$('#Export').click(function () {
    var final = "<table class='blankTable' id='blankTable'><thead><tr><th colspan='5'>Name: " + Name + "</th><th>Hit Die: <b>" + HitDie + "</b></th></tr></thead><tbody><tr><td colspan='2'>Specialization | <b>" + spec + "</b></td><td>HP: <b>" + HP + "</b></td><td>AC: <b>" + AC + "</b></td><td>HAC: <b>" + HAC + "</b></td><td>PB: <b>" + PRB + "</b></td></tr><tr class='center'><td>STR</td><td>DEX</td><td>CON</td><td>INT</td><td>WIS</td><td>CHA</td></tr><tr class='center'><td><b>+" + Str + "</b></td><td><b>+" + Dex + "</b></td><td><b>+" + Con + "</b></td><td><b>+" + Int + "</b></td><td><b>+" + Wis + "</b></td><td><b>+" + Cha + "</b></td></tr><tr><td colspan='3'>Damage: " + Damage + "</td><td colspan='3'>Misc: " + Misc + "</td></tr></tbody></table>"
    $("#display").html(final)
});

document.getElementById('download-btn').addEventListener('click', function () {
    html2canvas(document.getElementById('blankTable')).then(function (canvas) {
        // Convert the canvas to a data URL
        var imgData = canvas.toDataURL('image/png');

        // Create a link element
        var link = document.createElement('a');
        link.href = imgData;
        link.download = Name + '.png';

        // Append the link to the body
        document.body.appendChild(link);

        // Simulate a click on the link to trigger the download
        link.click();

        // Remove the link from the body
        document.body.removeChild(link);
        $("#display").html(reset)
    });
});