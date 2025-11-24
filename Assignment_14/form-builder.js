// Q4: Dynamic Form Builder Class

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.form = document.getElementById('dynamicForm');
        this.render();
    }

    render() {
        this.fields.forEach(field => {
            const label = document.createElement('label');
            label.textContent = field.label;
            const input = document.createElement('input');
            input.type = field.type;
            input.name = field.name || field.label.toLowerCase();
            input.placeholder = field.placeholder || '';
            this.form.appendChild(label);
            this.form.appendChild(input);
            this.form.appendChild(document.createElement('br'));
        });

        const btn = document.createElement('button');
        btn.type = "button";
        btn.textContent = "Submit";
        btn.onclick = () => this.showData();
        this.form.appendChild(btn);
    }

    getFormData() {
        const data = {};
        this.fields.forEach(field => {
            const input = document.querySelector(`input[name="${field.name || field.label.toLowerCase()}"]`);
            data[field.name || field.label.toLowerCase()] = input.value;
        });
        return data;
    }

    showData() {
        console.log("Form Data:", this.getFormData());
        alert("Check console for form data!");
    }
}

// Usage
const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password" }
];

new FormBuilder(fields);