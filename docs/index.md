---
layout: home
sidebar: true

# Hero section
hero:
  name: CodeDispatch
  text: The Developer Newspaper
  image:
    src: /logo.PNG
    alt: CodeDispatch logo
  tagline: Made from Developers, for Developers. Don't miss anything inside the Developer World!
  actions:
    - theme: brand
      text: Latest News
      link: /guide
    - theme: alt
      text: View on GitHub
      link: https://github.com/CodeDispatch/codedispatch.github.io

# Features section
features:
  - icon: ⚡️
    title: Fast and ready
    details: We've got the articles before the things happen
  - icon: 🔒
    title: Secure
    details: We do not safe personal data or use any accounting methods
  - icon: 🧠
    title: By humans, for humans
    details: We are here to provide human-made articles. We think that making mistakes is more important that delivering 100% accurate AI articles.
  - icon: 🌐
    title: Trustworthy
    details: We are trying to use as many trustworthy sources as we can, so you can use our articles too.

# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: CodeDispatch
  - - meta
    - property: og:image
      content: /logo.PNG
  - - meta
    - property: og:url
      content: https://codedispatch.github.io/
  - - meta
    - name: title
      content: CodeDispatch
  - - meta
    - name: twitter:card
      content: /logo.PNG
  - - link
    - rel: icon
      type: image/png
      href: /logo.PNG
---

<!-- Custom home layout -->
<div class="follow">
  <h1>🔔</h1>
  <h1>Don't miss anything.</h1>
  <p>Star and Watch our GitHub Repository, so you'll get notified if something happens.</p>
  <a href="https://github.com/CodeDispatch/codedispatch.github.io" target="_blank" class="btn">Subscribe!</a>
</div>


<!-- Custom home layout -->
<div class="custom-layout">
  <div class="custom-container">
    <Contributors ></Contributors>
  </div>
</div>

<style scoped>
/* horizonal padding copied from .VPFeatures's padding */
.custom-layout {
  padding: 0 24px;
}

@media (min-width: 640px) {
  .custom-layout {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .custom-layout {
    padding: 0 64px;
  }
}

.custom-container {
  max-width: 1152px;
  margin: 2rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
}
</style>
