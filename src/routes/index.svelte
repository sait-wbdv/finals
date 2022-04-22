<script>
  import finals from '$lib/data/w22/finals-w22.js'
  import Presentation from '$lib/components/Presentation.svelte'

  const rounds = [
    {
      speakers: finals.round1,
      container: 'round1'
    },
    {
      speakers: finals.round2,
      container: 'round2'
    }
  ];
  console.log(rounds);
  
</script>

<main>
  <h3>Introductions</h3>
  <ul class="overview">
    <li><a href="https://www.linkedin.com/in/tony-grimes-778ba135/">Tony Grimes</a>: Lead Instructor</li>
    <li><a href="https://www.linkedin.com/in/ashlyn-knox13/">Ashlyn Knox</a>: Co-Instructor</li>
    <li><a href="https://www.linkedin.com/in/dasachadwick/">Dasa Chadwick</a>: Career and Consulting Instructor</li>
    <li>Facilitators:
      <ul>
        <li>Jess</li>
        <li>Patrick</li>
        <li>Mike</li>
        <li>Fesal</li>
      </ul>
    </li>
    <li><a href="https://www.linkedin.com/in/autumn-heinze-48624a50/">Autumn Heinze</a>: Work Integrated Learning Coordinator</li>
    <li><a href="https://www.linkedin.com/in/eringates28/">Erin Gates</a>: Academic Chair, School of Advanced Digital Technology</li>
  </ul>
  <h3>Program Overview</h3>
  <ul class="overview">
    <li><em>Tools</em>: Git/npm, VS Code, Postman</li>
    <li><em>Development</em>: HTML/CSS/JS, VueJS/NuxtJS, StoryBlok, CSS Tailwind</li>
    <li><em>Deployment</em>: GitHub, Netlify</li>
    <li><em>Design</em>: Figma, Photoshop/GIMP</li>
  </ul>
  <h3 class="rounds open">10:15am: Round 1 Presentations</h3>
  <section id="round1">
    <!-- Dynamic Content Here-->
    {#each rounds[0].speakers as presentation}
      <Presentation details={presentation} />
    {/each}
  </section>
  <h3 class="rounds">11:30am: Round 2 Presentations</h3>
  <section id="round2">
    <!-- Dynamic Content Here-->
    {#each rounds[1].speakers as presentation}
      <Presentation details={presentation} />
    {/each}
  </section>
  <h3 class="rounds">End of Presentations!</h3>
</main>