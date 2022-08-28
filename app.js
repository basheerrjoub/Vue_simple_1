Vue.createApp({
  data() {
    return {
      name: "Basheer Rjoub",
      ranImg: "https://picsum.photos/200/300",
    };
  },
  methods: {
    randomNumber() {
      const ranNUM = Math.random();
      if (ranNUM < 0.5) return "<h1>Learn Vue</h1>";
      else return "<h1>Learn React</h1>";
    },
    age() {
      const date = new Date();
      const currentYear = date.getFullYear();
      const age = currentYear - 1999;
      return `<h1>AGE: ${age}</h1>`;
    },
    ran() {
      var rn = Math.random() + 1;
      rn = Math.floor(rn * 1000) / 1000;

      return rn;
    },
  },
}).mount("#form-div");

Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullName() {
      return this.name;
    },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      console.log("Hello");
      window.alert("Submitting the Form 👍");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
}).mount("#div2");

Vue.createApp({
  data() {
    return {
      nameCounter: 2,
    };
  },
  computed: {},
  watch: {
    nameCounter(newValue, oldValue) {
      console.log(newValue, " ", oldValue);
      if (this.nameCounter > 50) this.nameCounter = 0;
    },
  },

  methods: {},
}).mount("#div-3");

Vue.createApp({
  data() {
    return {
      box1Selected: false,
      box2Selected: false,
      box3Selected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "box1") this.box1Selected = !this.box1Selected;
      else if (box === "box2") this.box2Selected = !this.box2Selected;
      else if (box === "box3") this.box3Selected = !this.box3Selected;
    },
  },
}).mount("#div-4");
