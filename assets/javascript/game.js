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
        i.attr('data-char', property)
        $('#characterOptions').append(i)

        let name = $('<p>' + this.characters[property].name + '</p>')
        i.append(name)

        let picture = $('<img class="characterImage">')
        picture.attr('src', this.characters[property].picture)
        i.append(picture)

        let hp = $('<p id="health">' + this.characters[property].hp + '</p>')
        i.append(hp)
      }

    //  this.pickMainCharacter()
    },
    pickMainCharacter: function(){
      //onClick function that will utilize this keyword to change data attr
      $('.initial-characters').on("click", function(){
        console.log('initial character clicked')
      //  if($(this).hasClass('initial-characters')){
          //  $(this).attr('data-char', 'mainCharacter')
          $(this).removeClass('initial-characters')
          $(this).attr('id','mainCharacter')
          //$(this).attr('data-char', 'main')
          $('#yourCharacter').append($(this))

            //loop that is going to check for class
            $('.initial-characters').each(function(){

              $(this).removeClass('initial-characters')
              $(this).addClass('possibleEnemy')
              $('#possibleEnemies').append($(this))
            })
      //  }
      //  this.firstEnemy()
      $('.possibleEnemy').on('click', function(){
      //  $(this).attr('data-char', 'defender')
        console.log('possible enemy clicked')

        $(this).removeClass('possibleEnemy mainCharacter')
        $(this).attr('id','defender')

        $('#defenderBox').append($(this))
      })

      /*$('.defender').on('click', function(){
        console.log('defender clicked')
      })*/
      })

    },
    firstEnemy: function(){
      //loop through characters searching for mainCharacter attr and populate accordingly
    /*  $('.possibleEnemy').on("click", function(){
        console.log('click event works on first enemy')
      /*  $('.initial-characters').each(function(){
          if($(this).data('char') == 'possibleEnemy'){
            console.log('click event works on possible enemy')
            $(this).addClass('enemy')
          }
        })
      })*/

    }
}


  game.displayCharacters()
  game.pickMainCharacter()

  $('#button').on('click', function(){
    console.log('button ')
  })
  //game.firstEnemy()

})
