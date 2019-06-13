// 'use strict';

console.log('>> Ready :)');


// hacer test unitario

const fieldsForm = [
    {
        type: 'text',
        name: "name",
        id: "campo_nombre",
        required: true
    },
    {
        type: "text",
        name: "phone",
        id: "campo_telefono",
        required: true
    },

];


function createForm(arrObjField) {
    console.log('entra en la funcion')

    var dForm = document.createElement("form");
    dForm.setAttribute('method', "post");
    dForm.setAttribute('class', "main-form");


    arrObjField.map(item => {
        var dInput = document.createElement("input"); //input element, text


        dInput.setAttribute('type', item.type);
        dInput.setAttribute('name', item.name);
        dInput.setAttribute('id', item.id);
        dInput.setAttribute('required', item.required);

        dForm.appendChild(dInput);

    });


    var dSubmit = document.createElement("input"); //input element, Submit button
    dSubmit.setAttribute('type', "submit");
    dSubmit.setAttribute('value', "Submit");

    // dForm.appendChild(dInput);
    dForm.appendChild(dSubmit);

    // console.log(dInput);


    const main = document.querySelector('.column-center');
    main.appendChild(dForm);
};




function correctlyForm() {
    console.log('formulario creado correctamente');
    alert('El formulario se ha creado correctamente');
}



createForm(fieldsForm, correctlyForm());
