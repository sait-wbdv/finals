<script>
  import Badges from '$lib/components/Badges.svelte'
  export let student
</script>
<figure>
  <img src="roster/images/students/f21/{student.avatar}" alt="{student.label} Profile Pic">
  <figcaption>
    <aside class="badges"><Badges badges={student.badges} /></aside>
    <header>{student.label}</header>
    {#if student.tagline}
      <p>{student.tagline}</p>
    {/if}
    <footer class="social">
      
    </footer>
  </figcaption>
</figure>