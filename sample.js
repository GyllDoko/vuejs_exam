var app = new Vue({

    el: '#app',
    data: {
        name: '',
        course: "",
        terme: '',
        defaultLastId: 3,
        students: [
            { id: 1, name: 'Gyll-christ', course: 'Anglais', terme: '2020-12-05' },
            { id: 2, name: 'Rodolpho', course: "Cours d'Ingénieur Web", terme: '2017-11-21' },
            { id: 3, name: 'Kaguya', course: "Cours d'Ingénieur Web", terme: '2018-12-04' }
        ]
    },

    methods: {
        addStudent: function () {
            this.students.push({ id: this.students.length + 1, name: this.name, course: this.course, terme: this.terme })
        }
    }
})