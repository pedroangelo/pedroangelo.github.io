// GET FUNCTIONS

// get paper references
function getPaperReferences() {
    // get all .paper-entry elements
    let paperEntries = document.querySelectorAll(".paper-entry");
    // initialize references variables
    let paperReferences = [];
    // for each .paper-entry, collect its paper reference
    for (let i = 0; i < paperEntries.length; i++) {
	paperReferences.push(paperEntries[i].classList[1]);
    }
    return paperReferences;
}

// get modal element from paper reference
function getModal(paperReference) {
    return document.querySelector("." + paperReference + " div.modal");
}

// get modal element from child object
function getModalFromChild(object) {
    let paperReference = object.closest(".paper-entry").classList[1];
    return getModal(paperReference);
}

// SHOW AND HIDE FUNCTIONS

// show selected modal
function showModal(reference) {
    let modal = getModal(reference);
    modal.style.display = "block";
}

// show modal from child object
function showModalFromChild(object) {
    let modal = getModalFromChild(object);
    modal.style.display = "block";    
}

// hide selected modal
function hideModal(reference) {
    let modal = getModal(reference);
    modal.style.display = "none";
}

// hide modal from child object
function hideModalFromChild(object) {
    let modal = getModalFromChild(object);
    modal.style.display = "none";    
}

// hide all modal
function hideAllModal() {
    // get selected modal
    let modal = document.querySelector("div.modal");
    // hide modal by changing css style
    for (let i = 0; i < modal.length; i++) {
	modal[i].style.display = "none";
    }
}

// BUTTON ACTION FUNCTIONS

// copy .bib file contents
function copyBib(object) {
    // get .bib file contents from .modal-content p element
    let modalContent = object.closest('.modal-content').querySelector('div.modal-content-body');
    // obtain inner html from element
    let bibText = modalContent.innerHTML;
    // copy to clipboard
    navigator.clipboard.writeText(bibText);
}

// download .bib file
function downloadBib(object) {
    // get paper reference from object
    let paperReference = object.closest(".paper-entry").classList[1];
    // open window with object, causing browser to download it
    window.open("/resources/papers/" + paperReference + ".bib");
}

// INITIALIZATION FUNCTONS

// fill modal with information
function populateModal(paperReference) {
    // get selected modal
    let modal = getModal(paperReference);
    // get modal text element
    let modalText = modal.querySelector("div.modal-content div.modal-content-body");
    // get bib file contents
    let content = paperReference;
    // write contents
    modalText.innerHTML = content;
}

// initialize modals
function initializeModals() {
    // get paper references
    let paperReferences = getPaperReferences();
    // for each paper reference:
    for (let i = 0; i < paperReferences.length; i++) {
	// populate modal with information relative to paper reference
	// populateModal(paperReferences[i]);
	// add event listener to close modal on click
	window.addEventListener('click', function(event) { if (event.target == getModal(paperReferences[i])) { hideModal(paperReferences[i]); }});
    }
}
