// The idea is simple jQuery is supposed to simplify code
// Creating an app with jQuery 
// a to do list allowing you to 
// add and delete items, change orders of items

//https://jquery.com/
//https://releases.jquery.com/
//https://api.jquery.com/category/traversing/
// chosing a library on https://www.javascripting.com/

//# is for the ID and $('.') for the class

function newItem(){
// Adding a new item to the list of items: 
//see mini tutorial : Getting input values
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

function crossOut() {
  li.classList.toggle("strike");
}
//Crossing out item with Event handling mini tuto 
	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});


//Adding a delete button X appending HTML button 
//deleteButton.append(document.createTextNode('X')); 
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);

  function deleteListItem(){
		li.addClass("delete");
  	}

// reordering items ref to list of functions available with JQ
   $('#list').sortable();
  }


