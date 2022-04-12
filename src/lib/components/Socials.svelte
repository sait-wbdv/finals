<script>
  export let socials = []
  const socialInfo = [
    {
      label: 'homepage', 
      group: 'fas',
      icon: 'fa-home'      
    },
    {
      label: 'github', 
      group: 'fab',
      icon: 'fa-github'      
    },
    {
      label: 'codepen', 
      group: 'fab',
      icon: 'fa-codepen'      
    },
    {
      label: 'linkedin', 
      group: 'fab',
      icon: 'fa-linkedin'
    },
    {
      label: 'facebook', 
      group: 'fab',
      icon: 'fa-facebook'
    },
    {
      label: 'instagram', 
      group: 'fab',
      icon: 'fa-instagram'
    },
    {
      label: 'youtube', 
      group: 'fab',
      icon: 'fa-youtube'
    },
    {
      label: 'email', 
      group: 'far',
      icon: 'fa-envelope'
    },
    {
      label: 'default', 
      group: 'fas',
      icon: 'fa-user-tie'
    }
  ]
  socials = socials.map(item => {
    let info = socialInfo.find(social => {
      return item.label === social.label
    })

    return {...item, ...info};
  })
</script>

{#if socials}
<ul>
  {#each socials as linkInfo}
    <li><a href="{linkInfo.link}" title="${linkInfo.label}">{linkInfo.icon}</a></li>
  {/each}
</ul>
{/if}