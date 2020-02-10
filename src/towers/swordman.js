function Swordman() {
    this.name = "Swordman";
    this.description = "Basic melee unit.";
    this.cost = 100;
    this.range = 50;
    this.maxHealthPoints = 1000;
    this.healthPoints = 1000;
    this.attackDamage = 100;
    this.attackSpeed = 1.5;
    this.movementSpeed = 2;
    this.vision = 200;
    this.attackType = "Normal";
    this.defenseType = "Medium";
    this.target = undefined;
    this.hitBox = 10;
}
Swordman.prototype.setTarget = function () {

};
Swordman.prototype.move = function () {

};
Swordman.prototype.attack = function () {
    if (this.onAttackRange())
        this.target.receiveNormalAttack();
};
Swordman.prototype.receiveNormalAttack = function () {

};
Swordman.prototype.receivePierceAttack = function () {

};
Swordman.prototype.receiveMagicAttack = function () {

};
Swordman.prototype.onAttackRange = function () {

};