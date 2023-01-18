<script setup>
import WelcomeItem from './AboutItem.vue'
import AboutIcon from './icons/IconAbout.vue'
import ContentIcon from './icons/IconContent.vue'
import EncyclopediasIcon from './icons/IconEncyclopedias.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <AboutIcon />
    </template>
    <template #heading>About</template>
    Animal World is a website dedicated to showcasing the diversity and beauty of the animal kingdom.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ContentIcon />
    </template>
    <template #heading>Content</template>
    From majestic lions and graceful giraffes to tiny insects and deep-sea creatures, you'll find a wide
    variety of animals featured on our site.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EncyclopediasIcon />
    </template>
    <template #heading>Encyclopedias</template>
    We provide in-depth information about each animal, including their
    natural habitats, behaviors, and conservation status through our encyclopedia selection.<br><br>
    You can also contribute by adding your own encyclopedia to our existing list!
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Whether you're a student, a nature lover, or simply curious about the world around you,
    Animals World is the perfect resource for learning about the incredible animals that call our planet home.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Us</template>

    As an unprofitable organization, Animal World relies on community backing for its sustainability. You can help
    us by
    <a href="https://headlines.peta.org/donate/" target="_blank" rel="noopener">donating to PETA</a>.
  </WelcomeItem>
</template>
