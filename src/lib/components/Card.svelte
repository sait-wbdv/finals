<script>
  import Badges from '$lib/components/Badges.svelte'
  import Socials from '$lib/components/Socials.svelte'
  export let student
</script>
<figure>
  <img src="/assets/images/students/w22/{student.avatar}" alt="{student.label} Profile Pic">
  <figcaption>
    <aside class="badges"><Badges badges={student.badges} /></aside>
    <header>{student.label}</header>
    {#if student.tagline}
      <p>{student.tagline}</p>
    {/if}
    <footer class="social">
      <Socials socials={student.links} />
    </footer>
  </figcaption>
</figure>