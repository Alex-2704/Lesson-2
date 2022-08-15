let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
let box3 = document.getElementById('box3')

box1.addEventListener('click', function()
                     {
  if (box1.classList.contains('circle')) {
    this.classList.remove('circle')
  } else {
    this.classList.add('circle')
  }
})

box2.addEventListener('click', function ()
                     {
  if (box2.classList.contains('blue')) {
    this.classList.add('orange')
  this.classList.remove('blue')
  } else {
    this.classList.remove('orange')
  this.classList.add('blue')
  } 
})

box3.addEventListener('click', function ()
                     {
  if (box3.classList.contains('orange')) {
    this.classList.add('green')
  this.classList.remove('orange', 'circle')
  } else {
    this.classList.remove('green')
  this.classList.add('orange', 'circle')
  }
})
  
