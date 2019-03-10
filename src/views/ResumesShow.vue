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
    <div class="bio row">
      <div class="left-column col-sm-4 pt-5">
        <h2 class="text-right font-weight-bold ">Bio</h2>
        <h2 class="pt-5"></h2>
      </div>
      <div class="col-sm-8 pt-5">
        <h6 class = "text-left bio">{{student.short_bio}}</h6>
      </div>
    </div>
    <div class="skills row">
      <div class="left-column col-sm-4">
        <h2 class="text-right font-weight-bold">Skills</h2>
        <h2 class="pt-5"></h2>
      </div>
      <div class="col-sm-8">
        <div v-for="skill in student.skills">
          <p class="text-left">{{skill.skill}}</p>
        </div>
      </div>
    </div>
    <div class="experiences row">
      <div class="left-column col-sm-4">
        <h2 class="text-right font-weight-bold">Experiences</h2>
        <h2 class="pt-5"></h2>
      </div>
      <div class="col-sm-8">
        <div v-for="experience in student.experiences">
          <h6 class="text-left">{{experience.start_date}}</h6>
          <h6 class="text-left">{{experience.end_date}}</h6>
          <h6 class="text-left">{{experience.job_title}}</h6>
          <h6 class="text-left">{{experience.company_name}}</h6>
          <h6 class="text-left">{{experience.details}}</h6>
          <div class="pt-5"></div>
        </div>
      </div>
    </div>
    <div class="educations row">
      <div class="left-column col-sm-4">
        <h2 class="text-right font-weight-bold">Educations</h2>
        <h2 class="pt-5"></h2>
      </div>     
      <div class="col-sm-8">
        <div v-for="education in student.educations">
          <h6 class="text-left">{{education.start_date}}</h6>
          <h6 class="text-left">{{education.end_date}}</h6>
          <h6 class="text-left">{{education.degree}}</h6>
          <h6 class="text-left">{{education.university_name}}</h6>
          <h6 class="text-left">{{education.details}}</h6>
          <div class="pb-5"></div>
        </div>
      </div>
    </div>
    <div class="capstone row">
      <div class="left-column col-sm-4">
        <h2 class="text-right font-weight-bold">Capstone</h2>
      </div>
      <div v-if="student.capstone" class="col-sm-8">
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
            // skills: [],
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
                      start_date: "",
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
                      educations: [
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