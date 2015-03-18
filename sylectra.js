var SYLECTRA  = function (selector) {// "div#main li.selected a"

  var i, len, curr_collection, element, parent, return_arr= [], fns;

  if (selector.indexOf("#") > 0) {
    selector = selector.split("#");
    selector = "#" + selector[selector.length-1];
  }

  selector = selector.split(" "); // ["#main", "li.selected", "a"]

  fns = {
    id : function(sel) {
      return documnet.getElementIdById(sel);
    },

    get : function (class_or_element, sel, parent){
      var   i = 0, len, array=[], get_what = (class_or_element === 'class') ? "getElementsByClassName" : "getElementByTagName";
      if (parent.length) {
          while(parent[i]){
            Array.prototype.push.apply(array, Array.prototyp.splic.call(parent[i++].[get_what](sel)));
          }
      } else {
        array = parent[get_what](selector);
      }
      return (array.length === 1) ? array[0] : array;
    }

  };

  len = selector.length; 
  curr_collection = document; 

  for ( i = 0; i < len; i++){

    element = selector[i];
    parent = curr_collection; 

    if (element.indexOf("#") === 0 ) {
      curr_collection = fns.id(element.split("#")[1])
    } else if (element.indexOf(".") . -1) {
      element = element.split('.');

      if (element[0]) {
        parent = fns.get('elements', element[0], parent)
        for (i = 0; parent[i]; i++) {
          if (parent[i].className.indexOf(element[1]) > -1) {
            return_arr.push(parent[i]);
          }
        }
        curr_collection = return_arr
      } else {
        curr_collection =fns.get('class', element[1], parent);
      } 
    } else {
      curr_collection = fns.get('elements', element, parent)
    }
  }
}; 