'use strict';

function createForm(arrObjField) {

    const dForm = document.createElement("form");
    dForm.setAttribute('method', "post");
    dForm.setAttribute('class', "main-form");

    // browse array and create elements input y label
    arrObjField.map(item => {

        const dLabel = document.createElement("label");
        const labelContent = document.createTextNode(item.id);
        const dInput = document.createElement("input");

        dLabel.setAttribute('for', item.name);
        dLabel.appendChild(labelContent);

        dInput.setAttribute('type', item.type);
        dInput.setAttribute('name', item.name);
        dInput.setAttribute('id', item.id);
        dInput.setAttribute('required', item.required);
        dInput.setAttribute('class', 'form-control')

        console.log(dForm.appendChild(dInput));

        dForm.appendChild(dLabel);
        dForm.appendChild(dInput);

    });

    //Submit button
    const dSubmit = document.createElement("input");
    dSubmit.setAttribute('type', "submit");
    dSubmit.setAttribute('value', "Submit");
    dSubmit.setAttribute('class', 'btn btn-primary');

    dForm.appendChild(dSubmit);

    //Add elements to form
    const main = document.querySelector('.column-center');
    main.appendChild(dForm);

};

console.log('>> Ready :)wwwww');