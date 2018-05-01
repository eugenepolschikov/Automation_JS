// addTodoItem(todoItem: object)
//Check if todoItem is valid and if yes, add it to todoItems array. 
//Function should return the result of validity check (text field is not empty, all fields are present and id is unique). 
//todoItem : { text: string, completed: boolean, id: number }. 
 function addTodoItem(todoItem){
	var ifValid = true;

	if(todoItem["text"].length === 0 || (todoItem["completed"]!=true && todoItem["completed"]!=false  )|| todoItem["id"].length === 0 ){
		ifValid = false;
		return ifValid;
	}
	//check for uniqueness of id
	else {
		for (var i in todoItems){
			if(todoItems[i]["id"] ===todoItem["id"]) {
				ifValid = false;
				return ifValid;

			}
		}
	}
	todoItems.push(todoItem);
	return ifValid;
}


// viewTodoList(itemsType: string)
//Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’) and returns all items of this type. 
function viewTodoList(typeOfTodoItem) {

    if (typeOfTodoItem === "all") {
        return todoItems;
    }

    else if(typeOfTodoItem === "completed"){
    	var resultArray = todoItems.filter(function (item) {
            return item["completed"] === true;
        });
        return resultArray;
    }
    else if(typeOfTodoItem === "not_completed"){
    	var resultArray = todoItems.filter(function (item) {
            return item["completed"] === false;
        });
        return resultArray;	
    }
     
}

// editTodoItem(todoItemId: number, newText: string) 
//If newText is not empty, function changes text of todoItem by todoItemId on the new text. 
//It should return flag, whether edit was successful. 
function editTodoItem(number, newText) {
    var IfUpdated = false;
    if (newText.length != 0) {
        for (var i in todoItems) {
            if (todoItems[i]["id"] === number) {
                todoItems[i]["text"] = newText;
                IfUpdated = true;
                break;
            }
        }
    }
    else {
        IfUpdated = false;
    }
    return IfUpdated;
}

// deleteTodoItem(todoItemId: number)
//Delete todoItem by todoItemId, return flag, whether delete was successful. 
//todoItem : { text: string, completed: boolean, id: number }. 
function deleteTodoItem(todoItemId){	
	var ifDeleted = false;
	for (var i = 0; i < todoItems.length; i++) {
		if(todoItems[i]['id'] === todoItemId){
			todoItems.splice(i,1);
			ifDeleted = true;
			break;
		}
	}
	return ifDeleted;
}

// completeTodoItem(todoItemId: number) 
//Change completed field of todoItem (get it by todoItemId) on true.
function completeTodoItem(todoItemId){	
	for (var i = 0; i < todoItems.length; i++) {
		if(todoItems[i]["id"]===todoItemId){
			todoItems[i]["completed"] = true;
			break;
		}
	}
}