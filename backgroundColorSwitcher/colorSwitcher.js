const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function (button) {

    button.addEventListener('click', function (e) {


        if (e.target.id === 'grey') {
            body.style.background = e.target.id;
            body.style.backgroundImage = `url('https://images.pexels.com/photos/8118094/pexels-photo-8118094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            body.style.color ='white'
            body.style.backgroundSize='cover'
            body.style.backgroundRepeat='no-repeat'
            body.style.backfaceVisibility='auto'
        }
        if (e.target.id === 'black') {
            body.style.background = e.target.id;
            body.style.backgroundImage = `url('https://images.pexels.com/photos/2017021/pexels-photo-2017021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            body.style.color ='white'
            body.style.backgroundSize='cover'
            body.style.backgroundRepeat='no-repeat'
           
        }
        if (e.target.id === 'blue') {
            body.style.background = e.target.id;
            body.style.backgroundImage = `url('https://images.pexels.com/photos/1146715/pexels-photo-1146715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            body.style.color ='white'
            body.style.backgroundSize='cover'
            body.style.backgroundRepeat='no-repeat'

        }
        if (e.target.id === 'yellow') {
            body.style.background = e.target.id;
            body.style.backgroundImage = `url('https://images.pexels.com/photos/5987178/pexels-photo-5987178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
            body.style.color ='black'
            body.style.backgroundSize='cover'
            body.style.backgroundRepeat='no-repeat'

        }
        if (e.target.id === 'pink') {
            body.style.background = e.target.id;
            body.style.backgroundImage = `url('https://images.pexels.com/photos/2736613/pexels-photo-2736613.jpeg')`
            body.style.color ='black'
            body.style.backgroundSize='cover'
            body.style.backgroundRepeat='no-repeat'

        }
        // switch (e.target.id) {
        //     case 'grey':
        //       console.log('grey');
        //       body.style.backgroundColor = e.target.id;
        //   }
        //   switch (e.target.id) {
        //     case 'white':
        //       console.log('white');
        //       body.style.backgroundColor = e.target.id;
        //   }
        //   switch (e.target.id) {
        //     case 'blue':
        //       console.log('blue');
        //       body.style.backgroundColor = e.target.id;
        //   }
        //   switch (e.target.id) {
        //     case 'yellow':
        //       console.log('yellow');
        //       body.style.backgroundColor = e.target.id;
        //   }

    })
})