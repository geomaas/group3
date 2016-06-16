class Combatant {
    constructor(opts) {
        this.Name = opts.Name || 'Default';
        this.Health = opts.Health || 100;
        this.Damage = opts.Damage || 0;
        this.Accuracy = opts.Accuracy || 0;
        this.Evasion = opts.Evasion || 0;
        this.Attack = opts.Attack || 0;
        this.mod = opts.mod || 2;
    }

    attackMain(enemy) {
        var swing = (this.Accuracy + 2 + (Math.floor(Math.random() * 10)))
        var dodge = (enemy.Evasion + (Math.floor(Math.random() * 10)))
        var attackpower = (this.Damage - Math.floor(Math.random() * 10))
        var enemyHealth = enemy.Health -= attackpower;
        var heroHealth = this.Health -= attackpower;
        console.log(swing, dodge)
        console.log(enemyHealth);
        if (swing >= dodge) {
            console.log("hit!");
            $('.action-box h1').html("You Hit! " + "Attack Power: " + attackpower);
            // enemy.Health -= attackpower;
            console.log(enemy.Health);
            console.log("Attack power", attackpower, "remaingin health: ", enemyHealth);
            $('#enHealth').html("Health: " + enemyHealth)
            $('#Health').html("Health: " + heroHealth)
        } else if (swing <= dodge) {
            $('.action-box h1').html("You Miss!");
        }
        if (enemyHealth <= 0) {
            console.log("you ded");
            $('.action-box h1').html("Player 2 is dead!");
            $('.ninja').slideUp(), 4000;
        }

    }
    attackSecondary(enemy) {
        var attackpower = Math.floor((this.Damage - Math.random() * 10) / 2);
        var enemyHealth = enemy.Health -= attackpower;
        var heroHealth = this.Health -= attackpower;
        $('.action-box h1').html("Light hit!  " + "Attack Power: " + attackpower);
        console.log(attackpower);
        $('#enHealth').html("Health: " + enemyHealth)
        if (enemyHealth <= 0) {
            console.log("you ded");
            $('#Health').html("Health: " + heroHealth)
            $('.action-box h1').html("Player 2 is dead!");
            $('.ninja').slideUp(), 4000;

        }
    }

    dodge(enemy) {
        var swing = (this.Accuracy + (Math.floor(Math.random() * 10)))
        var block = (enemy.Evasion + 2 + (Math.floor(Math.random() * 10)))
        var attackpower = Math.floor((this.Damage - Math.random() * 10) / 4);
        var enemyHealth = enemy.Health -= attackpower;

        console.log(swing, block)
        if (swing >= block) {
            enemyHealth
            console.log(attackpower, this.Damage);
            console.log(enemyHealth, "")
            $('.action-box h1').html("Dodge Fail! " + "Scratch! " + "Attack Power: ", attackpower);
            $('#enHealth').html("Health: " + enemyHealth)
        } else {
            $('.action-box h1').html("Dodge!");
        }
    }
}

class Europe extends Combatant {
    constructor(opts) {
        super(opts)
        this.Block = opts.Block || 0;
    }
}



class Japan extends Combatant {
    constructor(opts) {
        super(opts)
        this.Evade = opts.Evade || 0;
    }
}



var samurai = new Japan({
    Name: "Samurai",
    Damage: 12,
    Health: 100,
    Evasion: 8,
    Accuracy: 2,
});
var assassin = new Japan({
    Name: "Assasin",
    Damage: 15,
    Health: 100,
    Evasion: 6,
    Accuracy: 4,
});
var shogun = new Japan({
    Name: "Shogun",
    Damage: 25,
    Health: 100,
    Evasion: 4,
    Accuracy: 3,
});
var squire = new Europe({
    Name: "Squire",
    Damage: 12,
    Health: 100,
    Block: 0,
    Evasion: 7,
    Accuracy: 2,
});
var calvary = new Europe({
    Name: "Calvary",
    Damage: 15,
    Health: 100,
    Evasion: 4,
    Accuracy: 5,
});
var knight = new Europe({
    Name: "Knight",
    Damage: 25,
    Health: 100,
    Evasion: 3,
    Accuracy: 4,
})
