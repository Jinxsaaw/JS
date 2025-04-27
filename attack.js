document.addEventListener('DOMContentLoaded', (event) =>{

    function playerTurn() {

        const form2 = document.getElementById('fml');

        form2.addEventListener('keypress', function(event){

            if (event.key === 'Enter' ){

                event.preventDefault();

                const userInputAttack = document.getElementById('attack').value;

                const specificWord = 'ATTACK MONSTER'

                const minPlayerDamage = 50;

                const maxPlayerDamage = 150;

                let randomNumber = Math.floor(Math.random() * (maxPlayerDamage - minPlayerDamage +1)) + minPlayerDamage;

                const monsterHealthBar = document.getElementById('health2');
                const playerHealthBar = document.getElementById('health1');

                if (userInputAttack === specificWord) {
                    alert(`You have dealt ${randomNumber} damage!`);
                    monsterHealthBar.value -= randomNumber;
                    if ((monsterHealthBar.value) < 1) {
                        alert(`Congratz! you have won!`);
                        playerHealthBar.value = 1000;
                        monsterHealthBar.value = 1000;
                    }

                    function monsterTurn() {    
                    
                        function monsterAttack() {

                            const monsterAttacks = [
                                {
                                    name: 'Fire',
                                    min: 20,
                                    max: 90
                                },
                                {
                                    name: 'Shadow',
                                    min: 120,
                                    max: 200
                                },
                                {
                                    name: 'Arcane',
                                    min: 70,
                                    max: 140
                                },
                            ]
                        
                            let randomElement = monsterAttacks[(Math.floor(Math.random() * monsterAttacks.length))];
                            let monsterDamage = Math.floor(Math.random() * (randomElement.max - randomElement.min + 1)) + randomElement.min;
                            playerHealthBar.value -= monsterDamage
                            alert(`Monster dealt ${monsterDamage} ${randomElement.name} damage!`);
                            if ((playerHealthBar.value) < 1) {
                                alert(`Ops! You have lost.`);
                                playerHealthBar.value = 1000;
                                monsterHealthBar.value = 1000;
                            }    
        
                        }
                        monsterAttack();
                    }
                    monsterTurn();
                    
                } else {
                    alert(`Please write 'ATTACK MONSTER' in uppercase!`);
                }


            }
        })
    }
    playerTurn();

    
});

