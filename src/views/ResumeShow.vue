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
            };
  },
  created: function() {
    this.student = {
                    first_name: "Herman",
                    last_name: "Munster",
                    email: "bossmunster@gmail.com",
                    phone_number: "18003456789",
                    bio: "I am a monster, who somehow still has a happy family",
                    linkedin_url: "www.linkedinurl.com",
                    twitter_handle: "BossMunster",
                    website_url: "www.websiteurl.com",
                    resume_url: "www.resumeurl.com",
                    github_url: "www.githuburl.com",
                    photo: "picture"
                    }
  },
  methods: {}
};
</script>
