
$('#mainAttack').on('click', function() {
    knight.attackMain(samurai);
});
$('#lightAttack').on('click', function() {
    knight.attackSecondary(shogun)
})
$('#dodge').on('click', function() {
    knight.dodge(shogun)
})

///////// splash screen click event
$('.insertCoin').on('click', function(event) {
    console.log("insert screen removed")
    event.preventDefault();
    var randomNum = Math.floor(Math.random() * 10)
    var randomCombatant;
    var randomEnemy;
    if (randomNum <= 3) {
        randomCombatant = knight;
        randomEnemy = shogun;
    } else if (randomNum >= 4 && randomNum <= 6) {
        randomCombatant = calvary;
        randomEnemy = assassin;
    } else if (randomNum >= 7) {
        randomCombatant = squire;
        randomEnemy = samurai;
    }
    $('.action-box h1').html("Random Fighters Chosen!");
//// populating hero stats box
    $('#Name').append(`${randomCombatant.Name}`)
    $('#Health').append(`${randomCombatant.Health}`)
    $('#Attack').append(`${randomCombatant.Damage}`)
    $('#Evade').append(`${randomCombatant.Evasion}`)
    $('#Accuracy').append(`${randomCombatant.Accuracy}`)
//// populating enemy stats box
    $('#enName').append(`${randomEnemy.Name}`)
    $('#enHealth').append(`${randomEnemy.Health}`)
    $('#enAttack').append(`${randomEnemy.Damage}`)
    $('#enEvade').append(`${randomEnemy.Evasion}`)
    $('#enAccuracy').append(`${randomEnemy.Accuracy}`)
///////removing splash screen
    $('.insertCoin').addClass('hidden');
    $('.introScreen').addClass('hidden');
    $('.main-container').removeClass('hidden');


});
