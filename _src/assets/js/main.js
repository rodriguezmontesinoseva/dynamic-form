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

createForm(fieldsForm, correctlyForm());
