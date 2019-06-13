'use strict';

console.log('>> Ready :)wwwww');
// 'use strict';

console.log('>> Ready :)');

const obj01 = {
    type: "text",
    name: "phone",
    id: "campo_telefono",
    required: true
};


function createForm(obj01) {

    var dForm = document.createElement("form");
    dForm.setAttribute('method', "post");
    dForm.setAttribute('class', "main-form");

    var dInput = document.createElement("input"); //input element, text
    dInput.setAttribute('type', obj01.type);
    dInput.setAttribute('name', obj01.name);
    dInput.setAttribute('id', obj01.id);
    dInput.setAttribute('required', obj01.required);


    var dSubmit = document.createElement("input"); //input element, Submit button
    dSubmit.setAttribute('type', "submit");
    dSubmit.setAttribute('value', "Submit");

    dForm.appendChild(dInput);
    dForm.appendChild(dSubmit);

    console.log(dInput);


    const main = document.querySelector('.column-center');
    main.appendChild(dForm);



};

function correctlyForm() {
    console.log('formulario creado correctamente');
    alert('El formulario se ha creado correctamente');
}

createForm(obj01, correctlyForm());

//# sourceMappingURL=main.js.map
