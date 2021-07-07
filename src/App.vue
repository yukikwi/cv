<template>
  <div class="container mx-auto my-3">
    <div class="grid grid-rows-1 grid-cols-3 gap-4">
      <div class="row-span-1 col-span-1 glass">
        <div class="m-3">
          <ProfilePicture />
          <ProfileContact class="mt-6" />
          <ProfileAboutMe class="mt-6" />
          <ProfileSkill class="mt-6" />
          <ProfileReference class="mt-6" />
        </div>
      </div>
      <div class="row-span-1 col-span-2 glass">
        <div class="m-3">
          <h1 class="text-4xl font-semibold">Pachara</h1>
          <h1 class="text-6xl font-semibold">Chantawong</h1>
          <h1 class="text-xl">Web Developers</h1>
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
const ProfilePicture = defineAsyncComponent({
  loader: () => import('./components/ProfilePicture.vue'),
  loadingComponent: Spinner
})
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

@Options({
  components: {
    ProfilePicture,
    ProfileContact,
    ProfileAboutMe,
    ProfileSkill,
    ProfileReference
  },
})
export default class App extends Vue {}
</script>

<style scoped>
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
</style>