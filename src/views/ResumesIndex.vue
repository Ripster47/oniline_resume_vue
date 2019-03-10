<template>
  <div class="resumes-index">
    <div class="container">
      <div class="row row-eq-height">
        <div class="sidebar col-md-4" style="background-color: #9ee3fa">
          <div class="row">
            <h3 class=" text-center font-weight-bold col-12">A C T U A L I Z E</h3>
            <h6 class=" text-center col-12"> Start Date: December 1, 2019</h6>
            <h6 class=" text-center col-12"> End Date: March 29, 2019</h6>
            <div class="text-center col-12 ">
              While the particular languages and frameworks we use to teach are those that we feel are best suited towards teaching, they also happen to be very popular in the industry today. They include Ruby, Rails, JavaScript, VueJS, HTML, CSS, SQL, and Git. You’ll learn back end development by utilizing and creating APIs, delving into database design, and working with Ruby on Rails. You’ll learn front-end development using JavaScript and VueJS, a powerful JavaScript framework.
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h1 class="text-center"> Meet Our Class </h1>
          <div class="card-deck row">
            <div class="col-md-4" v-for="student in students">
              <div class="card rounded mt-3">
                <router-link v-bind:to="'/developers/' + student.id">
                  <img v-bind:src="student.image_url" v-bind:alt="student.first_name">
                </router-link>
                <div>
                  <h5 class="card-title text-center mt-2"> {{ student.first_name }} {{ student.last_name }}</h5>
                </div>
                <router-link v-bind:to="'/developers/' + student.id">
                  <div class="overlay" v-if="student.capstone">
                    <p class="card-text text-center mb-2"> {{ student.capstone.name }}  </p>
                    <p class="text-center">{{  student.capstone.description  }}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');

.resumes-index {
  font-family: "Raleway";
}
.card {
  width: 225px;
  height: 175px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: lightgrey;
}

.card:hover .overlay {
  opacity: 1;
}



</style>

<script>
  var axios = require("axios");
export default {
  data: function() {
    return {
          students: [],
          first_name: "",
          last_name: "",
          photo: "",
          capstone:
                      {
                        // "student_id: #,
                        name: "",
                        description: "",
                      }
      }
    },
  created: function() {
    axios.get("/api/students")
    .then(response => {
      this.students = response.data;
    });
  },
  methods: {}
};
</script>