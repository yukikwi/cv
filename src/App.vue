<template>
  <div class="container mx-auto my-3">
    <div class="grid grid-rows-none grid-cols-3 gap-4">
      <div class="row-span-1 col-span-3 glass">
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-1">
            <ProfilePicture />
          </div>
          <div class="col-span-2 middle">
            <h1 class="text-xl md:text-4xl font-semibold">Pachara</h1>
            <h1 class="text-2xl md:text-6xl font-semibold">Chantawong</h1>
            <h1 class="text-base md:text-xl mt-3">Web Developers 💻</h1>
          </div>
        </div>
      </div>
      <div class="row-span-1 col-span-3 md:col-span-1 glass">
        <div class="m-3">
          <h2 class="h2withline text-2xl font-semibold">Contact</h2>
          <ProfileContact />
          <h2 class="h2withline text-2xl font-semibold mt-6">About Me</h2>
          <ProfileAboutMe />
          <h2 class="h2withline text-2xl font-semibold mt-6">Skill</h2>
          <ProfileSkill />
          <h2 class="h2withline text-2xl font-semibold mt-6">References</h2>
          <ProfileReference />
        </div>
      </div>
      <div class="row-span-1 col-span-3 md:col-span-2 glass">
        <div class="m-3">
          <div class="mt-5">
            <h2 class="h2withline text-2xl font-semibold mt-6">Work Experience</h2>
            <WorkExp />
          </div>
          <div class="mt-5">
            <h2 class="h2withline text-2xl font-semibold mt-6">Education</h2>
            <Education />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<iframe class="video-background" src="https://www.youtube.com/embed/kzdJkT4kp-A?autoplay=1&controls=0&disablekb=[m]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue'
import Spinner from "./components/Spinner.vue";
import ProfilePicture from "./components/ProfilePicture.vue";
const ProfileContact = defineAsyncComponent({
  loader: () => import('./components/ProfileContact.vue'),
  loadingComponent: Spinner
})
const ProfileAboutMe = defineAsyncComponent({
  loader: () => import('./components/ProfileAboutMe.vue'),
  loadingComponent: Spinner
})
const ProfileSkill = defineAsyncComponent({
  loader: () => import('./components/ProfileSkill.vue'),
  loadingComponent: Spinner
})
const ProfileReference = defineAsyncComponent({
  loader: () => import('./components/ProfileReference.vue'),
  loadingComponent: Spinner
})
const WorkExp = defineAsyncComponent({
  loader: () => import('./components/WorkExp.vue'),
  loadingComponent: Spinner
})
const Education = defineAsyncComponent({
  loader: () => import('./components/Education.vue'),
  loadingComponent: Spinner
})

@Options({
  components: {
    ProfilePicture,
    ProfileContact,
    ProfileAboutMe,
    ProfileSkill,
    ProfileReference,
    WorkExp,
    Education
  },
})
export default class App extends Vue {}
</script>

<style scoped>
.h2withline{
  border-bottom: #000 3px solid;
}
.glass:before{
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px) saturate(100%) contrast(45%) brightness(130%);
  content: '';
  height: 100%;
  position: absolute;
  width: 100%;
}
.glass > div{
  position: relative;
}
.video-background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
.middle{
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
</style>