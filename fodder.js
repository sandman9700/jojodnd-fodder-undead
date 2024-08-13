var Damage = "";
$('#DMG').change(function() {
  Damage = $('#DMG').val();
  console.log("DMG:", Damage)
});

var Misc = "";
$('#MISC').change(function() {
  Misc = $('#MISC').val();
  console,log("MISC:", Misc)
});

var Hit = 12;
$('.HitSelect').change(function() {
  Hit = parseInt($('.HitSelect').val());
  updateHP();
});

var PB = 2;
$('.PBSelect').change(function() {
  PB = parseInt($('.PBSelect').val());
  updateHP();
  updateAC();
});

var Str = 0;
$('#STR').change(function() {
  Str = parseInt($('#STR').val());
  console.log("Strength:", Str);
});

var Dex = 0;
$('#DEX').change(function() {
  Dex = parseInt($('#DEX').val());
  updateAC();
  console.log("Dexterity:", Dex);
});

var Con = 0;
$('#CON').change(function() {
  Con = parseInt($('#CON').val());
  updateHP();
  updateAC();
  console.log("Constitution:", Con);
});

var Int = 0;
$('#INT').change(function() {
  Int = parseInt($('#INT').val());
  console.log("Intelligence:", Int);
});

var Wis = 0;
$('#WIS').change(function() {
  Wis = parseInt($('#WIS').val());
  updateAC();
  console.log("Wisdom:", Wis);
});

var Cha = 0;
$('#CHA').change(function() {
  Cha = parseInt($('#CHA').val());
  console.log("Charisma:", Cha);
});

function updateHP(){
    var HPBox = $('#HP'),
    HP = "",
    Roll = Math.floor(Math.random() * Hit) + 1;

    HP = Hit + (Roll * PB) + (Con * PB)

HPBox.html(HP);
console.log("PB:", PB, "Hit:", Hit, "Roll:", Roll, "Con:", Con, "HP:", HP);
}
updateHP();

function updateAC () {
    var ACBox = $('#AC'),
    HACBox = $('#HAC'),
    highestStat = Math.max(Dex, Con, Wis), // Get the highest of Dex, Con, or Wis
    AC = 10 + PB + highestStat;
    HAC = AC + PB;

    ACBox.html(AC);
    HACBox.html(HAC);
    console.log("PB:", PB, "Dex:", Dex, "Con:", Con, "Wis:", Wis, "AC:", AC);
}
updateAC();

$(document).ready(function() {
    $('#attributes').change(function() {
        var selectedValue = $(this).val();
        var selectedText = $(this).find('option:selected').text();
        console.log("Selected Value: " + selectedValue);
        console.log("Selected Text: " + selectedText);
    });
});