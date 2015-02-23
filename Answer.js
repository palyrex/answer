var $ = function (selector) {
  var elements = [];

  selectById(selector, elements);

  findByClass(selector, elements);

  if (selector[0] !== "." && selector[0] !== "#") {
    if (selector.indexOf(".") === -1 && selector.indexOf("#") === -1) {
      elements = document.getElementsByTagName(selector);
    } 

    else if (selector.indexOf(".") >= 0 && selector.indexOf("#") === -1) {
      var classTags = document.getElementsByTagName(selector.slice(0, selector.indexOf(".")));

      for (i = 0; i < classTags.length; i++) { 
        objectClassName = selector.slice(selector.indexOf(".") + 1, selector.length);
        if (classTags[i].className.indexOf(objectClassName) >= 0) {
          elements.push(classTags[i]);
        }
      }
    }

    else if (selector.indexOf(".") === -1 && selector.indexOf("#") >= 0) {
      // selectById();
      var idElement = document.getElementById(selector.indexOf("#") + 1, selector.length);
      if (idElement !== null) {
        elements.push(idElement);
      }
    }

    else if (selector.indexOf(".") >= 0 && selector.indexOf("#") >= 0) {
      var element;
      if (selector.indexOf(".") < selector.indexOf("#")) {
        element = document.getElementById(selector.slice(selector.indexOf("#") + 1, selector.length));
      } else {
        element = document.getElementById(selector.slice(selector.indexOf("#") + 1, selector.indexOf(".")));
      }

      if (element !== null) {
        elements.push(element);
      }
    }
  }
  return elements;
};

var selectById = function(selector, elements) {
  if (selector[0] === "#") {
    elements.push(document.getElementById(selector.slice(1, selector.length)));
  } 
};

var findByClass = function(selector, elements) {
  if (selector[0] === ".") {
    var classResults = document.getElementsByClassName(selector.slice(1, selector.length));
    for (i = 0; i < classResults.length; i++) { 
      elements.push(classResults[i]);
    }
  } 
};


