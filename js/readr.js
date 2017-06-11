console.log(window.currentBook);
var Book = ePub(window.currentBook, {
    restore: true,
    spreads: false,
    storage: true,
    fixedLayout: true
});
Book.renderTo("area");

var area = document.getElementById('area');
var mc = new Hammer(area);
mc.on("swipeleft", function(ev){
  Book.nextPage();
});
mc.on("swiperight", function(ev){
  Book.prevPage();
});
