<script>
  import badgeInfo from '$lib/data/badges.js'
  export let badges = []

  // Filter the full badgesInfo info array based on the student badges
  const badgeList = badgeInfo.filter(item => badges.find(badge => item.id === badge.name))
</script>

{#if badges}
<ul>
  {#each badgeList as badge}
    <li><img src="/assets/images/icons/{badge.imgSrc}" alt="{badge.name} Icon" title="{badge.name}"></li>
  {/each}
</ul>
{/if}