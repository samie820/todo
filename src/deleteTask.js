const deleteTask = function(e) {
  console.log("Delete Task...", e);
  //Remove the parent list item from the ul
  var listItem = e.target.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
};


export default deleteTask;
