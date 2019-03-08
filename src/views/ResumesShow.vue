<template>
 <div class="resumes-show bg-white">
  <div class="heading row"> 
   <h1 class="text-center col-12">{{ student[0].first_name}} {{ student[0].last_name }}</h1>
   <div class="col-12">
    <h6 class="text-center">{{ student[0].email }}</h6>
    <h6 class="text-center">{{ student[0].phone_number }}</h6>
    <h6 class="text-center">{{ student[0].github_url }}</h6>
   </div>
  </div>
    <div class="row">
      <div class="left-column col-sm-4 pt-5">
        <h2 class="text-right font-weight-bold ">Bio</h2>
        <h2 class="pt-5"></h2>
      </div>
      <div class="col-sm-8 pt-5">
        <h6 class = "text-left bio">{{student[0].short_bio}}</h6>
      </div>
    </div>
    <div class="row">
      <div class="left-column col-sm-4">
     <h2 class="text-right font-weight-bold">Skills</h2>
     <h2 class="pt-5"></h2>
    </div>
   <div class="col-sm-8">
      <h6 class = "text-left">{{student[0].skills[0].skill}}</h6>
    </div>
   </div>
   <div class="row">
     <div class="left-column col-sm-4">
      <h2 class="text-right font-weight-bold">Experiences</h2>
      <h2 class="pt-5"></h2>
   </div>
     <div class="col-sm-8">
      <h6 class="text-left">{{student[0].experiences[0].start_date}}</h6>
      <h6 class="text-left">{{student[0].experiences[0].end_date}}</h6>
      <h6 class="text-left">{{student[0].experiences[0].job_title}}</h6>
      <h6 class="text-left">{{student[0].experiences[0].company_name}}</h6>
      <h6 class="text-left">{{student[0].experiences[0].details}}</h6>
      <div class="pt-5"></div>
     </div>
    </div>



  <div class="row">
    <div class="left-column col-sm-4">
     <h2 class="text-right font-weight-bold">Educations</h2>
     <h2 class="pt-5"></h2>
  </div>     
     <div class="col-sm-8">
      <h6 class="text-left">{{student[0].educations[0].start_date}}</h6>
      <h6 class="text-left">{{student[0].educations[0].end_date}}</h6>
      <h6 class="text-left">{{student[0].educations[0].degree}}</h6>
      <h6 class="text-left">{{student[0].educations[0].university_name}}</h6>
      <h6 class="text-left">{{student[0].educations[0].details}}</h6>
      <div class="pb-5"></div>
     </div>
   </div>

   <div class="row">
      <div class="left-column col-sm-4">
      <h2 class="text-right font-weight-bold">Capstone</h2>
    </div>
    <div class="col-sm-8">
      <h6 class="text-left">{{student[0].capstone[0].name}}</h6>
      <h6 class="text-left">{{student[0].capstone[0].description}}</h6>
      <h6 class="text-left">{{student[0].capstone[0].url}}</h6>
     </div>
    </div>
     
     <!-- <div class="pb-5"></div>
    </div>     
     <div class="pb-5"></div>
     <div class="pb-5"></div>
     <div class="pb-5"></div>
     <div class="pb-5"></div>
     <div>
     </div> -->
   <!--   <div>
      <h6 class = "text-left">{{student[0].experiences[0].start_date}}</h6>
      <h6 class = "text-left">{{student[0].experiences[0].end_date}}</h6>
      <h6 class = "text-left">{{student[0].experiences[0].job_title}}</h6>
      <h6 class = "text-left">{{student[0].experiences[0].company_name}}</h6>
      <h6 class = "text-left">{{student[0].experiences[0].details}}</h6>
     </div> -->
  <!--    <div class="pb-5"></div>
     <div class="pb-5"></div> -->
    </div>
   </div>
  </div>
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
            short_bio: "",
            linkedin_url: "",
            twitter_handle: "",
            personal_blog: "",
            online_resume_url: "",
            github_url: "",
            photo: "",
            start_date: "",
            end_date: "",
            job_title: "",
            company_name: "",
            details: "",
            start_date: "",
            end_date: "",
            degree: "",
            university_name: "",
            skill: "",
            name: "",
            description: "",
            url: ""
            };
  },
  created: function() { 
  },
  methods: {}
};
</script>