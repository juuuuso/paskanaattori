//Perustuu Cloud To Butt -laajennukseen: https://github.com/hank/cloud-to-butt 
walk(document.body);

function walk(node) 
{
	// Varastettu täältä:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	
  //HAASTEET - monikon nominatiivi    
  v = v.replace(/\b(H|h)(aasteet|AASTEET)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askahärdellit";
  });

  v = v.replace(/\b(H|h)(aasteita|AASTEITA)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askahärdelleitä";
  });

  v = v.replace(/\b(H|h)(aasteesta|AASTEESTA)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askahärdellistä";
  });

  v = v.replace(/\b(H|h)(aasteista|AASTEISTA)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askahärdelleistä";
  });

  //HAASTEELLISUUS
  //nominatiivi
  v = v.replace(/\b(H|h)(AASTEELLISUUS|aasteellisuus|AASTAVUUS|aastavuus)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askamaisuus";
  });  

	//genetiivi
  v = v.replace(/\b(H|h)(AASTEELLISUUDEN|aasteellisuuden|AASTAVUUDEN|aastavuuden)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askamaisuuden";
  });  
  
  // HAASTEELLINEN / HAASTAVA
    //komparatiivi
    v = v.replace(/\b(H|h)(AASTEELLISEMPI|aasteellisempi|AASTAVAMPI|aastavampi)/g, function(match, p1, p2, offset, string) {
      h = String.fromCharCode(p1.charCodeAt(0) + 8);
      // h + 8 = p
      return h + "askempi";
    });

    //superlatiivi
    v = v.replace(/\b(H|h)(AASTEELLISIN|aasteellisin|AASTAVIN|aastavin)/g, function(match, p1, p2, offset, string) {
      h = String.fromCharCode(p1.charCodeAt(0) + 8);
      // h + 8 = p
      return h + "askin";
    });

    // partitiivi
    v = v.replace(/\b(H|h)(AASTEELLISTA|aasteellista|AASTAVAA|aastavaa)/g, function(match, p1, p2, offset, string) {
      h = String.fromCharCode(p1.charCodeAt(0) + 8);
      // h + 8 = p
      return h + "askaa";
    });
    
    // adverbi
      v = v.replace(/\b(H|h)aast(eellisesti|avasti)/g, function(match, p1, p2, offset, string) {
      // h + 8 = p
      h = String.fromCharCode(p1.charCodeAt(0) + 8);
      return h + "askasti";
    });
  
    // elatiivi
    v = v.replace(/\b(H|h)aast(eellisesta|astavasta)/g, function(match, p1, p2, offset, string) {
      // h + 8 = p
      h = String.fromCharCode(p1.charCodeAt(0) + 8);
      return h + "askasta";
    });

  // nominatiivi
  v = v.replace(/\b(H|h)(aasteellinen|AASTEELLINEN|AASTAVA|aastava)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "aska";
  });
  


  v = v.replace(/\b(H|h)aast(eellisista|astavista)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askoista";
  });

  //HAASTE - nominatiivi
  v = v.replace(/(H|h)(AASTE|aaste)/g, function(match, p1, p2, offset, string) {
    // h + 8 = p
    h = String.fromCharCode(p1.charCodeAt(0) + 8);
    return h + "askahärdelli";
  });
  
	textNode.nodeValue = v;
}


