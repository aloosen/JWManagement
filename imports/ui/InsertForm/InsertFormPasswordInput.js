Template.InsertFormPasswordInput.helpers({
    getValue() {
        const data = Template.currentData().data;
        if (data.value != null) {
            return data.value;
        }
        return '';
    },
    isRequired() {
        const data = Template.currentData().data;
        if (data.required != null) {
            return data.required;
        }
        return false;
    }
});

Template.InsertFormPasswordInput.onCreated(() => {
    const template = Template.instance();
    const data = Template.currentData().data;

    template.key = data.key;
    template.insertForm = data.parentInstance;
});

Template.InsertFormPasswordInput.onRendered(() => {});

Template.InsertFormPasswordInput.onDestroyed(() => {});

Template.InsertFormPasswordInput.events({
    'change input': (e, template) => {
        const value = $(e.target).val().trim();

        template.insertForm.setFieldValue(template.key, value);
    }
});
