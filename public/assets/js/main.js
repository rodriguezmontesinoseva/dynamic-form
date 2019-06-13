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

        console.log(dForm.appendChild(dInput));

        dForm.appendChild(dInput);
        dForm.appendChild(dLabel);

    });

    //Submit button
    const dSubmit = document.createElement("input");
    dSubmit.setAttribute('type', "submit");
    dSubmit.setAttribute('value', "Submit");

    dForm.appendChild(dSubmit);

    //Add elements to form
    const main = document.querySelector('.column-center');
    main.appendChild(dForm);

};

console.log('>> Ready :)wwwww');
// 'use strict';


// hacer test unitario

//sacar objeto a js
//sacar funcion a js
//maquetar
//hacer test unitario

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
        type: "number",
        name: "phone",
        id: "campo_telefono",
        required: true
    },

];







function correctlyForm() {
    console.log('formulario creado correctamente');
    alert('El formulario se ha creado correctamente');
}



createForm(fieldsForm, correctlyForm());

//# sourceMappingURL=main.js.map
