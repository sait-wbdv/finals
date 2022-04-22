<script>
  import Card from '$lib/components/Card.svelte'
  import students from '$lib/data/w22/roster-w22.js'

  export let details
</script>
<article class="presentation">
  <header>
    <h4>{details.title}</h4>
    {#if details.members}
    <h5>{details.name}</h5>
    {/if}
  </header>
  {#if !details.members}
  <div>
    <ul>
      <li>
        <Card student={students.find(student => student.label === details.name)} />
      </li>
    </ul>
  </div>
  {:else}
  <div>
    <ul>
      {#each details.members as member}
      <li>
        <Card student={students.find(student => student.label === member)} />
      </li>
      {/each}
    </ul>
  </div>
  {/if}

</article>
