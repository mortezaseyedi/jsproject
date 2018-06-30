function submit () {
  var name, family, username, email, address 
  name = document.getElementById('name').value 
  family = document.getElementById('family').value
  username = document.getElementById('username').value
  email = document.getElementById('email').value
  address = document.getElementById('address').value

  // var inpObj = document.getElementsByTagName('input');
  // for(var i in inpObj){
  //    if(inpObj[i].type == "text"){
  //         amount = inpObj[i].value;
  //     }
  // }

  if (name === '') {
    alert ('Please enter name!')
  } else if (family === '') {
    alert ('Please enter Family!')
  } else if (username === '') {
    alert ('Please enter username!')
  } else if (email === '') {
    alert ('Please enter email!')
  } else if (address === '') {
    alert ('Please enter address!')
  } else {
    clearForm()
    createResultTag('نام', name)
    createResultTag('نام خانوادگی', family)
    createResultTag('نام کاربری', username)
    createResultTag('ایمیل', email)
    createResultTag('آدرس', address)
  }
  return false
}

function clearForm () {
  document.getElementById('name').value = ''
  document.getElementById('family').value = ''
  document.getElementById('username').value = ''
  document.getElementById('email').value = ''
  document.getElementById('address').value = ''
}

function createResultTag (faName, value) {
  var pTag = document.createElement('p')
  var taskTag = document.createElement('span')
  taskTag.setAttribute('id', faName)
  var task = document.createTextNode(faName + ' : ' + value)
  taskTag.appendChild(task)
  pTag.appendChild(taskTag)
  var result = document.getElementById('result')
  result.appendChild(pTag)
  var remoTag = document.createElement('storng')
  var remoText = document.createTextNode(' x')
  remoTag.appendChild(remoText)
  pTag.appendChild(remoTag)
  remoTag.addEventListener('click', function (e) {
    var child = document.getElementById(faName).parentNode
    document.getElementById(faName).parentNode.parentNode.removeChild(child)  
  })
}

