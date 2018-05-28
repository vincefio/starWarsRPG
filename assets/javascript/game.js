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
        i.attr('data-char', 'original')
        $('#characterOptions').append(i)

        let name = $('<p>' + this.characters[property].name + '</p>')
        i.append(name)

        let picture = $('<img class="characterImage">')
        picture.attr('src', this.characters[property].picture)
        i.append(picture)

        let hp = $('<p>' + this.characters[property].hp + '</p>')
        i.append(hp)
      }

      this.pickMainCharacter()
    },
    pickMainCharacter: function(){
      //onClick function that will utilize this keyword to change data attr
      $('.initial-characters').on("click", function(){
        //if($(this).data('char') == 'original'){
        $(this).attr('data-char', 'mainCharacter')
        //console.log($(this))
        //$('#yourCharacter').append($(this))
        //loop that is going to check for data attributes
        $('.initial-characters').each(function(){
          //counter++
          //console.log('loop works')
          if($(this).data('char') == 'mainCharacter'){
            //console.log('main character ' + $(this).html())
            $('#yourCharacter').append($(this))
          }else if($(this).data('char') == 'original'){
            $('#possibleEnemies').append($(this))
            $(this).attr('data-char', 'possibleEnemy')
          }
        })
    //  }
      })
    //  this.firstCharacterChange()
    },
    /*firstCharacterChange: function(){
      //loop through characters searching for mainCharacter attr and populate accordingly
      let childCounter = 0
      for(let i = 0; i < characterOptions.attributes.length; i++){
        childCounter++
      }
      console.log(childCounter)
    }*/
}


  game.displayCharacters()
  //game.pickMainCharacter()
})
