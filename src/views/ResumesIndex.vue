<template>
  <div class="resumes-index">
    <h1> Meet Our Class </h1>

    <div class="card-deck">
      <div class="col-md-4" v-for="student in students">
        <div class="card mt-3">
          <router-link v-bind:to="'/resumes/' + student.id">
            <img v-bind:src="student.image_url" v-bind:alt="student.name">
          </router-link>
          <h3 class="card-title mt-2"> {{ student.first_name }} {{ student.last_name }}</h3>
          <p class="card-text mb-2"> Capstone {{student.capstone.description}} </p>
        </div>
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
          // "student_id": #,
          students: [],
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
          experience: [
                         {
                           // "student_id: #,
                            start_date: "",
                            end_date: "",
                            job_title: "",
                            company_name: "",
                            details: ""
                         }
          ],
          education:[
                      {
                        // "student_id: #,
                        start_date: "",
                        end_date: "",
                        degree: "",
                        university_name: "",
                        details: ""
                      }
          ],
          skills: [
                      {
                        // "student_id: #,
                        skill: ""
                      }
          ],
          capstone:
                      {
                        // "student_id: #,
                        name: "",
                        description: "",
                        url: ""
                      }
      }
    },
  created: function() {
    this.students =   
                    [
                      {
                        student_id: 1,
                        first_name: "Phuoc",
                        last_name: "Bui",
                        email: "phuocbui@gmail.com",
                        phone_number: "123-456-7891",
                        short_bio: "IT'S ME",
                        linkedin_url: "linkedin.com",
                        twitter_handle: "pnb90",
                        personal_blog: "",
                        online_resume_url: "",
                        github_url: "",
                        photo: "",
                        experience: [
                                       {
                                         // student_id: #,
                                         start_date: "",
                                         end_date: "",
                                         job_title: "",
                                         company_name: "",
                                         details: ""
                                       }
                        ],
                        education:[
                                    {
                                      // student_id: #,
                                      start_date: "",
                                      end_date: "",
                                      degree: "",
                                      university_name: "",
                                      details: ""
                                    }
                        ],
                        skills: [
                                    {
                                      // student_id: #,
                                      skill: ""
                                    }
                        ],
                        capstone:
                                    {
                                      // student_id: #,
                                      name: "",
                                      description: "",
                                      url: ""
                                    }
                      },
                      {
                        student_id: 2,
                        first_name: "Victoria",
                        last_name: "Roos-Walls",
                        email: "phuocbui@gmail.com",
                        phone_number: "123-456-7891",
                        short_bio: "IT'S ME",
                        linkedin_url: "linkedin.com",
                        twitter_handle: "pnb90",
                        personal_blog: "",
                        online_resume_url: "",
                        github_url: "",
                        photo: "",
                        experience: [
                                       {
                                         // student_id: #,
                                         start_date: "",
                                         end_date: "",
                                         job_title: "",
                                         company_name: "",
                                         details: "CAPPA CAPPA CAPPA "
                                       }
                        ],
                        education:[
                                    {
                                      // student_id: #,
                                      start_date: "",
                                      end_date: "",
                                      degree: "",
                                      university_name: "",
                                      details: ""
                                    }
                        ],
                        skills: [
                                    {
                                      // student_id: #,
                                      skill: ""
                                    }
                        ],
                        capstone:
                                    {
                                      // student_id: #,
                                      name: "",
                                      description: "STUFF ",
                                      url: ""
                                    }
                      }
                    ]
  },
  methods: {}
};
</script>
