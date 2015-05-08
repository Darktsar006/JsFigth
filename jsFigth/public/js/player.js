// Classe Player
// Pour instancier un nouveau Player faire -> Object.create(Player);

// playerId : Represente l'identifiant du joueur (Player 1 ou 2)


var Player = {
	x : 0,
	y : (hauteur - 150),
	jumpStatut : false,
	continuJump : false,
	currentImage : stickmanNormal,
}

function jumPlayer(player){
	if(!player.continuJump && player.jumpStatut){
		player.y += 2 * 13;
		if(player.y >= (hauteur - 150)){
			player.jumpStatut = false;
			player.currentImage = stickmanNormal;
		}
	}
	if(player.continuJump && player.jumpStatut){
		player.y -= 2 * 13;
		if(player.y <= 120){
			player.continuJump = false;
		}
	}
}

function moveGauche(player) {
	if(player.jumpStatut){ // Dans le cas ou il saute on vas le faire avancé plus vite dans les airs
		if(player.x > 0){
			player.x -= 2 * 30;	
		}else {
			player.x = 0;
		}
	}else{
		player.currentImage = stickmanNormal;	
		if(player.x > 0){
			player.x -= 2 * 20;	
		}else {
			player.x = 0;
		}	
	}
}

function moveDroite(player) {
	if(player.jumpStatut){
		if(player.x < (largeur - 151)){
			player.x += 2 * 30;
		}else {
			player.x = largeur - 151;
		}
	}else {
		player.currentImage = stickmanNormal;	
		if(player.x < (largeur - 151)){
			player.x += 2 * 20;
		}else {
			player.x = largeur - 151;
		}
	}
}