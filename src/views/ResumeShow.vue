<template>
  <div class="resume-show">
    <h1>{{ student.first_name}} {{ student.last_name }}</h1>
    <div>
      <h6>{{ student.email }}</h6>
    </div>
    <p></p>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            bio: "",
            linkedin_url: "",
            twitter_handle: "",
            website_url: "",
            resume_url: "",
            github_url: "",
            photo: "" 
            }
  },
  created: function() {
    this.student = [
                      {
                        // student_id: #,
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
                      }
                    ]
  },
  methods: {}
};
</script>
