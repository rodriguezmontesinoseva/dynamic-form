'use strict';

console.log('>> Ready :)wwwww');
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
        type: 'email',
        name: "emailAddress",
        id: "campo_mail",
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

    const dForm = document.createElement("form");
    dForm.setAttribute('method', "post");
    dForm.setAttribute('class', "main-form");

    // recorrer array de objetos, pintando inputs
    arrObjField.map(item => {

        const dLabel = document.createElement("label");
        dLabel.setAttribute('for', item.name);
        const labelContent = document.createTextNode(item.id);
        dLabel.appendChild(labelContent);

        const dInput = document.createElement("input"); //input element, text


        dInput.setAttribute('type', item.type);
        dInput.setAttribute('name', item.name);
        dInput.setAttribute('id', item.id);
        dInput.setAttribute('required', item.required);

        console.log(dForm.appendChild(dInput));

        dForm.appendChild(dInput);
        dForm.appendChild(dLabel);

    });


    var dSubmit = document.createElement("input"); //input element, Submit button
    dSubmit.setAttribute('type', "submit");
    dSubmit.setAttribute('value', "Submit");

    dForm.appendChild(dSubmit);


    const main = document.querySelector('.column-center');
    main.appendChild(dForm);
};




function correctlyForm() {
    console.log('formulario creado correctamente');
    alert('El formulario se ha creado correctamente');
}



createForm(fieldsForm, correctlyForm());

//# sourceMappingURL=main.js.map
