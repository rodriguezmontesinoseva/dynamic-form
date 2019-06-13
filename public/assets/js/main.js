
function createForm(arrObjField) {

    const dForm = document.createElement('form');
    const dSubmit = document.createElement('input');
    const main = document.querySelector('.column-center');

    dForm.setAttribute('method', 'post');
    dForm.setAttribute('class', 'main-form');

    // browse array and create elements input y label
    arrObjField.map(item => {

        const dLabel = document.createElement('label');
        const labelContent = document.createTextNode(item.id);
        const dInput = document.createElement('input');

        dLabel.setAttribute('for', item.name);
        dLabel.appendChild(labelContent);

        dInput.setAttribute('type', item.type);
        dInput.setAttribute('name', item.name);
        dInput.setAttribute('id', item.id);
        dInput.setAttribute('required', item.required);
        dInput.setAttribute('class', 'form-control')

        dForm.appendChild(dLabel);
        dForm.appendChild(dInput);
    });

    //Submit button
    dSubmit.setAttribute('type', 'submit');
    dSubmit.setAttribute('value', 'Enviar');
    dSubmit.setAttribute('class', 'btn btn-primary');
    dForm.appendChild(dSubmit);

    //Add elements to form
    main.appendChild(dForm);
};


'use strict';

const fieldsForm = [
    {
        type: 'text',
        name: 'name',
        id: 'campo_nombre',
        required: true
    },
    {
        type: 'email',
        name: 'emailAddress',
        id: 'campo_mail',
        required: true
    },
    {
        type: 'number',
        name: 'phone',
        id: 'campo_telefono',
        required: true
    },
];

const fieldsFormCar = [
    {
        type: 'text',
        name: 'brand',
        id: 'Marca',
        required: true
    },
    {
        type: 'text',
        name: 'model',
        id: 'Modelo',
        required: true
    },
    {
        type: 'text',
        name: 'license',
        id: 'Matrícula',
        required: true
    },
    {
        type: 'text',
        name: 'color',
        id: 'Color',
        required: true
    },
];

function correctlyForm() {
    console.log('El formulario se ha creado correctamente');
}

createForm(fieldsForm, correctlyForm());
createForm(fieldsFormCar);



//# sourceMappingURL=main.js.map
