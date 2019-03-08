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
        <div class="left-column col-sm-4">
          <h2 class="pt-5"></h2>
          <h2 class="text-right pt-5 font-weight-bold">Skills</h2>
          <div>
            <h6 class="text-right">{{student[0].skills[0].skill}}</h6>
          </div>
          <div class="pb-5"></div>
          <div class="pb-5"></div>
          <h2 class="text-right font-weight-bold">Experiences</h2>
          <div>
            <h6 class="text-right">{{student[0].experiences[0].start_date}}</h6>
            <h6 class="text-right">{{student[0].experiences[0].end_date}}</h6>
            <h6 class="text-right">{{student[0].experiences[0].job_title}}</h6>
            <h6 class="text-right">{{student[0].experiences[0].company_name}}</h6>
            <h6 class="text-right">{{student[0].experiences[0].details}}</h6>
          </div>
          <div class="pb-5"></div>
          <div class="pb-5"></div>
          <h2 class="text-right font-weight-bold">Educations</h2>
          <div>
            <h6 class="text-right">{{student[0].educations[0].start_date}}</h6>
            <h6 class="text-right">{{student[0].educations[0].end_date}}</h6>
            <h6 class="text-right">{{student[0].educations[0].degree}}</h6>
            <h6 class="text-right">{{student[0].educations[0].university_name}}</h6>
            <h6 class="text-right">{{student[0].educations[0].details}}</h6>
          </div>
          <div class="pb-5"></div>
          <div class="pb-5"></div>
          <h2 class="text-right font-weight-bold">Capstone</h2>
          <div>
            <h6 class="text-right">{{student[0].capstone[0].name}}</h6>
            <h6 class="text-right">{{student[0].capstone[0].description}}</h6>
            <h6 class="text-right">{{student[0].capstone[0].url}}</h6>
          </div>
        </div>
        <div class="col-sm-8 bg-light">
          <h2 class="text-left pt-5 font-weight-bold">Bio</h2>
          <div>
            <h6 class = "text-left">{{student[0].short_bio}}</h6>
          </div>
          <div class="pb-5"></div>
          <div class="pb-5"></div>
          <h2 class="text-left font-weight-bold">Experience</h2>
          <div>
            <h6 class = "text-left">{{student[0].experiences[0].start_date}}</h6>
            <h6 class = "text-left">{{student[0].experiences[0].end_date}}</h6>
            <h6 class = "text-left">{{student[0].experiences[0].job_title}}</h6>
            <h6 class = "text-left">{{student[0].experiences[0].company_name}}</h6>
            <h6 class = "text-left">{{student[0].experiences[0].details}}</h6>
          </div>
          <div class="pb-5"></div>
          <div class="pb-5"></div>
          <h2 class="text-left font-weight-bold">Talents</h2>
          <div>
            <h6 class = "text-left">{{student[0].skills[0].skill}}</h6>
          </div>
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
            student_id: 0,
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
    this.student = [{
                      "student_id": "#",
                      "first_name": "Herman",
                      "last_name": "Munster",
                      "email": "bossmunster@gmail.com",
                      "phone_number": "847-657-7890",
                      "short_bio": "I am a former TV star, transitioning over to the coding world. I am currently attending Actualize Bootcamp in Chicago.",
                      "linkedin_url": "www.linkedinurl.com",
                      "twitter_handle": "bossmunster",
                      "personal_blog": "its personal",
                      "online_resume_url": "www.onlineresumeurl.com",
                      "github_url": "www.githuburl.com",
                      "photo": "https://i.ebayimg.com/images/g/wd8AAOxy4kpQ~uGQ/s-l300.jpg",
                      "experiences": [
                                     {
                                       "student_id": "#",
                                       "start_date": "01/02/03",
                                       "end_date": "01/03/03",
                                       "job_title": "Driver",
                                       "company_name": "FedEx",
                                       "details": "Real good at driving"
                                     }
                      ],
                      "educations":[
                                  {
                                    "student_id": "#",
                                    "start_date": "12/31/02",
                                    "end_date": "01/01/03",
                                    "degree": "Bachelors degree in driving",
                                    "university_name": "UoD",
                                    "details": "Learned to Drive"
                                  }
                      ],
                      "skills": [
                                  {
                                    "student_id": "#",
                                    "skill": "Can use a steering wheel, a gas pedal, sometimes a brake. I deliver all packages in a timely manner"
                                  }
                      ],
                      "capstone":[
                                  {
                                    "student_id": "#",
                                    "name": "MunsterHunter",
                                    "description": "Use to hunt Munsters",
                                    "url": "www.url.com"
                                  }]
                    }]
  },
  methods: {}
};
</script>
