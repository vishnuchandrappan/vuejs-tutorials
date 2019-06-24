new Vue({
  el: '#app',
  data : {
    gameStarted : false,
    playerHealth : 100,
    monsterHealth : 100,
    logs : []
  },
  methods : {
    startGame : function() {
      this.gameStarted = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.logs = [];
    },
    calculateDamage : function (min,max) {
      return Math.max(min,Math.floor(Math.random() * max) + 1);
    },
    monsterAttack : function() {
      this.playerHealth -= this.calculateDamage(5,10);
      this.logs.push({
        isPlayer : false,
        text : 'Monster attacks Player by ' + this.playerHealth
      });
    },
    playerAttack : function(min,max) {
      this.monsterHealth -= this.calculateDamage(min,max);
      this.logs.push({
        isPlayer : true,
        text : 'Player attacks Monster by ' + this.monsterHealth
      });
      this.monsterAttack();
    },
    attack : function() {
      this.playerAttack(3,10);
    },
    specialAttack : function() {
      this.playerAttack(10,20);
    },
    heal : function() {
      this.playerHealth = Math.min(this.playerHealth + Math.floor(0.3 * this.playerHealth),100);
      this.monsterHealth = Math.min(this.monsterHealth + Math.floor(0.2 * this.monsterHealth),100);
    },
    giveUp : function() {
      this.gameStarted = false;
    }
  },
  watch : {
    playerHealth : function () {

      if (this.playerHealth <= 0 /home/v15hnu/vue-js/js/master-1.js) {
        alert('You Lost !');
        this.gameStarted = false;
      }
      if (this.playerHealth >=100) {
        this.playerHealth = 100;
      }
    },
      monsterHealth : function () {

      if (this.monsterHealth <= 0 /home/v15hnu/vue-js/js/master-1.js) {
        alert('You Won !');
        this.gameStarted = false;
      }
      if (this.monsterHealth >=100) {
        this.monsterHealth = 100;
      }
    }
  }
});
