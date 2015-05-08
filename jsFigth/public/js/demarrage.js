// Nous voir quelle système utilsé 'TRAORE Oumar' 
// le système de requestAnimationFrame pour la boucle du jeu
// Ou les système de setIntervall et setTimeout qui paraissent compliqué a géré ?

// Moi je Go sur du SetInterval et SetTimeout

// Socket.io
var socket = io();

var player1 = Object.create(Player);
// Bien faire attention si c'est le joueur 1 ou 2 Pour initalisier les coordonnées x,y ki sont par defaut 0,0
// player2.x = (largeur - 150); au lieu de 0 et player2.currentImage = stickmanNormalG


var lastDownTarget;
window.onload = init;

function init()
{
	canvas = document.getElementById('canvas');

	// On va obliger l'utilisateur à rentre dans le cadre avec la souris lol
	document.addEventListener('mousedown', function(event) {
        lastDownTarget = event.target;
    }, false);

    document.addEventListener('keydown', function(event) {
        if(lastDownTarget == canvas) { // Si il a cliquer au préalable avec la souris
            switch(event.keyCode) {
            	case 39: // Droite (Boutton ASCI Pour les touche Keyboard javascript)
					moveDroite(playe)
					
            		break;
            	case 37: // Gauche
					moveGauche(player1);
					
            		break;
            	case 38: // Jump
            		if(!player1.jumpStatut){
            			player1.jumpStatut = true;
		    			player1.continuJump = true;
						player1.currentImage = stickmanJump;
            		}				
            		break;
            	case 40: // Down
					player1.currentImage = stickmanCrouch;
					break;
				case 65: // Punch Bouton A
					player1.currentImage = stickmanPunch;
					break;
				case 69: // Power Bouton E
					player1.currentImage = stickmanPower;
					break;
				case 90: // kick Bouton Z
					player1.currentImage = stickmanKick;
					break;
				case 81: // Block Button Q
					player1.currentImage = stickmanBlock;
					break
            	
            }
        }
    }, false);

	document.addEventListener('keyup', function(event) { // Si le boutton est relacher on va recharger en general l'image courante
		if(lastDownTarget == canvas) {
			switch(event.keyCode) {
				case 65: 
				case 90:
				case 69:// Punch
				case 81:
				case 40:
					player1.currentImage = stickmanNormal;
					break;
			}

		}
	}, false);


	context2D = canvas.getContext('2d');
	
	setInterval(setTime, 1000);
	
	setInterval(draw, 1000 / FPS);
}



function draw()
{
	context2D.clearRect(0, 0, canvas.width, canvas.height);
	
	jumPlayer(player1);


	// Chrono du Match
	var a = (largeur/2);
	var b = 50
	context2D.font="30px Georgia";
	context2D.fillText(secondsLabel, a, b);


	context2D.drawImage(player1.currentImage, player1.x, player1.y);
}



// Doc ASCI Pour les touches du clavier
// 60 - 90 (a z) -> Au cas ou on veut changer les touches

