$(document).ready(function(){
  //define 3 character objects to start
  let defenderData;
  let defenderAttack;
  let defenderHP
  let mainCharData
  let mainAttack
  let mainHP
  let newMain
  let newDefend
  let newMainAttack

  let i = $('<p>')
  let j = $('<p>')

let game = {

  characters: {
    char1: {
      name: "Obi-Wan-Kenobi",
      picture: "./assets/images/obi-wan.jpg",
      hp: 50,
      attack: 14
    },
    char2: {
      name: "Luke SkyWalker",
      picture: "./assets/images/luke.jpg",
      hp: 75,
      attack: 12
    },
    char3: {
      name: "Darth Sidious",
      picture: "./assets/images/darthSidious.jpg",
      hp: 80,
      attack: 10
    },
    char4: {
      name: "Darth Maul",
      picture: "./assets/images/darthMaul.jpg",
      hp: 95,
      attack: 8
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

        let hp = $('<p class="health">' + this.characters[property].hp + '</p>')
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

    //console.log(mainAttack)
      defenderData = $('#defender').attr("data-char")
      defenderAttack = this.characters[defenderData].attack
      defenderHP = this.characters[defenderData].hp

      //console.log(defenderData)
      mainCharData = $('#mainCharacter').attr("data-char")
      mainAttack = this.characters[mainCharData].attack
      mainHP = this.characters[mainCharData].hp
      //console.log(mainCharData)

      //$('#fightScore').append(i).append(j)
      //console.log('new main char hp = ' + (mainHP - defenderAttack))
      //mainHP = (mainHP - defenderAttack)
      console.log(mainAttack)

      this.characters[mainCharData].hp  = this.characters[mainCharData].hp - defenderAttack
      this.characters[defenderData].hp  = this.characters[defenderData].hp - mainAttack
    //  console.log('new main  HP is ' + mainHP)
    console.log('character objec attack is ' +this.characters[mainCharData].attack)
//newDefend = (defenderHP - mainAttack)
    //  mainAttack = mainAttack + mainAttack


      i.html('Youve attacked with '+  this.characters[mainCharData].attack + '<br></br>')

      j.html('Youve been hit with '+ this.characters[defenderData].attack)

      $('#fightScore').html(i).append(j)

      $('#mainCharacter>p.health').html(this.characters[mainCharData].hp)
      $('#defender>p.health').html(this.characters[defenderData].hp)
    //  this.displayDamage()
    this.characters[mainCharData].attack = this.characters[mainCharData].attack + (mainAttack/2)

    this.endCheck()
    },
    endCheck: function(){
      //console.log('display damage working')
    /*  $('#mainCharacter').on('click', function(){
        console.log('main button working')
      })*/
    if (this.characters[defenderData].hp < 1){
        alert('you win')
        $('#defender').remove()
        $('#fightScore').html('Youve defeated ' + this.characters[defenderData].name + '<br></br>')
        $('#fightScore').append('Select another opponent if youd like')

        //check to see if there are any more opponents
        if($('#possibleEnemies').children().length == 1){
          $('#fightScore').html('no more enemies to fight. GAME OVER')
          let b = $('<button type="submit" id="reloadButton">')
          b.html('Restart')
          $('#fightScore').append('<br></br>').append(b)
        }
      }else if(this.characters[mainCharData].hp < 1){
          alert('You Lose')
          $('#fightScore').html('you lose. GAME OVER')
          let b = $('<button type="submit" id="reloadButton" onClick="location.href=location.href">')
          b.html('Restart')
          $('#fightScore').append('<br></br>').append(b)
        }

    }
}


  game.displayCharacters()
  game.pickMainCharacter()

  $('#button').on('click', function(){
    //console.log('button clicked')
    game.firstEnemy()
    //we need to find link the defender and main char w their objects
  })

  $('#reloadButton').on('click', function(){
    console.log('reload button clicked')
    location.href=location.href
  })

})
