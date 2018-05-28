$(document).ready(function(){
  //define 3 character objects to start
let game = {
  characters: {
    char1: {
      name: "Obi-Wan-Kenobi",
      picture: "./assets/images/obi-wan.jpg",
      hp: 150
    },
    char2: {
      name: "Luke SkyWalker",
      picture: "./assets/images/luke.jpg",
      hp: 200
    },
    char3: {
      name: "Darth Sidious",
      picture: "./assets/images/darthSidious.jpg",
      hp: 220
    },
    char4: {
      name: "Darth Maul",
      picture: "./assets/images/darthMaul.jpg",
      hp: 240
    }
  },
    displayCharacters: function(){
        //loop through characters object
      for(let property in this.characters){
        //console.log('character name ' + characters[property].name)
        let i = $('<div class="initial-characters">')
        $('#characterOptions').append(i)

        let name = $('<p>' + this.characters[property].name + '</p>')
        i.append(name)

        let picture = $('<img class="characterImage">')
        picture.attr('src', this.characters[property].picture)
        i.append(picture)

        let hp = $('<p>' + this.characters[property].hp + '</p>')
        i.append(hp)
      }
    }

}


  game.displayCharacters()

})
