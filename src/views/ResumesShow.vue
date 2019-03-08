<template>
  <div class="resumes-show bg-white">
    <div class="heading row"> 
      <h1 class="text-center col-12">{{ student.first_name}} {{ student.last_name }}</h1>
      <div class="col-12">
      <h6 class="text-center">{{ student.email }}</h6>
      <h6 class="text-center">{{ student.phone_number }}</h6>
      <h6 class="text-center">{{ student.github_url }}</h6>
    </div>
  </div>
  <div class="row">
    <div class="left-column col-sm-4 pt-5">
      <h2 class="text-right font-weight-bold ">Bio</h2>
      <h2 class="pt-5"></h2>
    </div>
    <div class="col-sm-8 pt-5">
    <h6 class = "text-left bio">{{student.short_bio}}</h6>
    </div>
  </div>
  <div class="row">
    <div class="left-column col-sm-4">
      <h2 class="text-right font-weight-bold">Skills</h2>
      <h2 class="pt-5"></h2>
    </div>
    <div class="col-sm-8">
      <h6 class = "text-left">{{student.skills.skill}}</h6>
    </div>
  </div>
  <div class="row">
    <div class="left-column col-sm-4">
      <h2 class="text-right font-weight-bold">Experiences</h2>
      <h2 class="pt-5"></h2>
    </div>
    <div class="col-sm-8">
      <h6 class="text-left">{{student.experiences.start_date}}</h6>
      <h6 class="text-left">{{student.experiences.end_date}}</h6>
      <h6 class="text-left">{{student.experiences.job_title}}</h6>
      <h6 class="text-left">{{student.experiences.company_name}}</h6>
      <h6 class="text-left">{{student.experiences.details}}</h6>
      <div class="pt-5"></div>
    </div>
  </div>
  <div class="row">
    <div class="left-column col-sm-4">
     <h2 class="text-right font-weight-bold">Educations</h2>
     <h2 class="pt-5"></h2>
    </div>     
     <div class="col-sm-8">
      <h6 class="text-left">{{student.educations.start_date}}</h6>
      <h6 class="text-left">{{student.educations.end_date}}</h6>
      <h6 class="text-left">{{student.educations.degree}}</h6>
      <h6 class="text-left">{{student.educations.university_name}}</h6>
      <h6 class="text-left">{{student.educations.details}}</h6>
      <div class="pb-5"></div>
     </div>
  </div>
  <div class="row">
    <div class="left-column col-sm-4">
      <h2 class="text-right font-weight-bold">Capstone</h2>
    </div>
    <div class="col-sm-8">
      <h6 class="text-left">{{student.capstone.name}}</h6>
      <h6 class="text-left">{{student.capstone.description}}</h6>
      <h6 class="text-left">{{student.capstone.url}}</h6>
    </div>
  </div>
 </div>
</template>


<style>
</style>


<script>
  var axios = require("axios");
export default {
 data: function() {
  return {
     student: {
       id: "",
       first_name: "",
       last_name: "",
       email: "",
       phone_number: "",
       short_bio: "",
       linkedin_url: "",
       twitter_handle: "",
       personal_blog: "",
       online_resume_url: "",
       github_url: "",
       photo: "",
       experiences: [
                     {
                     id: "",
                     student_id: "",
                     start_date: "",
                     end_date: "",
                     job_title: "",
                     company_name: "",
                     details: ""
                   }
                   ],
       education: [
                   {
                     id: "",
                     student_id: "",
                     start_date: "",
                     end_date: "",
                     degree: "",
                     university_name: "",
                     details: ""  
                   }
                   ],
       skills: [
                 {
                 id: "",
                 student_id: "",
                 skill: ""                           
                 }
               ],
       capstone: {
                 id: "",
                 name: "",
                 description: "",
                 url: ""
                 }
     }
      };
 },
 created: function() {
  axios.get("/api/students/" + this.$route.params.id)
  .then(response => {
    this.student = response.data;
    });
  },
 methods: {}
};
</script>