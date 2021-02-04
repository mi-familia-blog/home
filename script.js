function myFunction() {
    // Declare variables
    var input, filter, list, listItem, a, i, txtValue;
    input = document.getElementById('textInput');
    filter = input.value.toUpperCase();
    list = document.getElementById("theUL");
    listItem = list.getElementsByTagName("li");
    listItem[i].style.display = "none";
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < listItem.length; i++) {
      a = listItem[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        listItem.classList.remove("hide")
        listItem[i].style.display = "";
      } else {
        listItem[i].style.display = "none";
      }
    }
  }
  