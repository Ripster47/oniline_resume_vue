<template>
  <div class="resumes-index">
    <div class="container">
      <div class="row row-eq-height">
        <div class="sidebar col-md-4 bg-info">
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
          <h1 class="text-center font-weight-bold"> Meet Our Class </h1>

          <div class="card-deck row">
            <div class="col-md-4" v-for="student in students">
              <div class="card mt-3">
                <router-link v-bind:to="'/resumes/' + student.id">
                  <img v-bind:src="student.image_url" v-bind:alt="student.name">
                </router-link>
                <h3 class="card-title font-weight-bold mt-2"> {{ student.first_name }} {{ student.last_name }}</h3>
                <p class="card-text mb-2"> Capstone {{student.capstone.description}} </p>
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
    // this.student = {
    //                 first_name: "Herman",
    //                 last_name: "Munster",
    //                 email: "bossmunster@gmail.com",
    //                 phone_number: "18003456789",
    //                 bio: "I am a monster, who somehow still has a happy family",
    //                 linkedin_url: "www.linkedinurl.com",
    //                 twitter_handle: "BossMunster",
    //                 website_url: "www.websiteurl.com",
    //                 resume_url: "www.resumeurl.com",
    //                 github_url: "www.githuburl.com",
    //                 photo: "picture"
    //                 }
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
                      },                
                    ]},


  methods: {}
};
</script>