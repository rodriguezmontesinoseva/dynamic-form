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
        type: 'number',
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


