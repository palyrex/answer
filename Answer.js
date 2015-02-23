var $ = function (selector) {
  elements = [];

  selectById(selector, elements);

  findByClass(selector, elements);

  if (selector[0] !== "." && selector[0] !== "#") {

    findByTag(selector, elements);

    if (selector.indexOf(".") === -1 && selector.indexOf("#") >= 0) {
      tagById(selector, elements);
    }

    else if (selector.indexOf(".") >= 0 && selector.indexOf("#") >= 0) {
      tagById(selector, elements);
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

var findByTag = function(selector, elements) {
  if (selector.indexOf(".") === -1 && selector.indexOf("#") === -1) {
    var tagResults = document.getElementsByTagName(selector);
    for (i = 0; i < tagResults.length; i++) { 
      elements.push(tagResults[i]);
    }
  } else if (selector.indexOf(".") >= 0 && selector.indexOf("#") === -1) {
      var classTags = document.getElementsByTagName(selector.slice(0, selector.indexOf(".")));

      for (i = 0; i < classTags.length; i++) { 
        objectClassName = selector.slice(selector.indexOf(".") + 1, selector.length);
        if (classTags[i].className.indexOf(objectClassName) >= 0) {
          elements.push(classTags[i]);
        }
      }
    }
};

var tagById = function(selector, elements) {
  var element;
  var id = setId(selector);
  var tagResults = setTag(selector);
  for (i = 0; i < tagResults.length; i++) { 
    if (tagResults[i].id !== null && tagResults[i].id === id) {
      element = tagResults[i];
    }
  }
  if (element !== undefined) {
    elements.push(element);
  }
};

var setTag = function(selector) {
  if (selector.indexOf(".") < selector.indexOf("#") && selector.indexOf(".") !== -1 ) {
    return document.getElementsByTagName(selector.slice(0, selector.indexOf(".")));
  } else {
    return document.getElementsByTagName(selector.slice(0, selector.indexOf("#")));
  }
};

var setId = function(selector) {
  if (selector.indexOf(".") < selector.indexOf("#")) {
    return selector.slice(selector.indexOf("#") + 1, selector.length);
  } else {
    return selector.slice(selector.indexOf("#") + 1, selector.indexOf("."));
  }
};



