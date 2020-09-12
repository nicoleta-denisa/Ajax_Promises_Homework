var root = 'https://games-app-siit.herokuapp.com/games/';
var root2 = 'https://games-app-siit.herokuapp.com/regenerate-games/';
$(function(){
    getAllGames();
    getId();
    doPut();
    doDelete();
    doCreate(); 
    doRegenerate()
});

function getAllGames() {
    fetch(root, {
        method: 'GET'
    }).then(function(response){
        return response.json();
    }).then(function(jsonResp) {
        console.log(jsonResp);
        var html = jsonResp.map(function(game) {
            return `
                <div class="game">
                    <p><img src="${game.imageUrl} " alt="Avatar" style="width:100%"></p>
                    <p><b>${game.title}</b></p>
                    <p>${game.description}</p>
                </div>
            `;
        });
        //console.log(html);
        document.querySelector('#gameDetails').innerHTML = html;
    }); 
}

function getId() {
    fetch(root + '5f5b90f4b97e2f0024a0342c', {
        method: 'GET'
    }).then(function(responsegetId) {
        return responsegetId.json();
    }).then(function(RespId) {
        console.log(RespId);
    });     
}

function doPut() {
    fetch(root + '5f5a7af675accd0024a739ee', {
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            title: 'new titlee'
        })
    }).then(function(res){
        return res.json();
    }).then(function(resp) {
        console.log(resp); 
    }).catch(function(error) {
        console.log('There was a network error', error);
    });
}

function doDelete() {
    fetch(root + '5f5a7af675accd0024a739e8', {
        method: 'DELETE'
    }).then(function(responseDel){
        return responseDel.json();
    }).then(function(jsonDel) {
        console.log(jsonDel);
    });
}

function doCreate() {
    fetch(root , {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Call of Duty®: WWII Returned-8',
            imageUrl:'https://psmedia.playstation.com/is/image/psmedia/call-of-duty-wwii-two-column-01-ps4-eu-19apr17?$TwoColumn_Image$',
            description: 'This is my description',
        })
    }).then(function(responseCreate) {
        return responseCreate.json();
    }).then(function(jsonCreate) {
        console.log(jsonCreate);
        document.querySelector('#createGame').innerHTML ="Above is the new game"
    });
}

function doRegenerate() {
    fetch(root2 , {
        method: 'GET'
    }).then(function(responseRegenerate){
    return responseRegenerate.json();
    }).then(function(jsonRegenerate) {
        console.log(jsonRegenerate);
    }); 
}

