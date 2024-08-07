<svelte:head>
  <link rel="stylesheet" href="/css/about.css" />
</svelte:head>

<input
  type="checkbox"
  id="main-navigation-toggle"
  class="btn btn--close"
  title="Toggle main navigation"
/>
<label for="main-navigation-toggle">
  <span>menu</span>
</label>

<nav id="main-navigation" class="nav-main">
  <ul class="menu">
    <li class="menu__item">
      <a class="menu__link" href="/">Home</a>
    </li>
    <li class="menu__item">
      <span class="menu__link menu__parent">Work</span>
      <ul class="submenu">
        <li class="menu__item">
          <a class="menu__link" href="/work/photography">Alviso Salt Ponds</a>
        </li>
      </ul>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="/about">About</a>
    </li>
    <li class="menu__item">
      <a class="menu__link" href="/contact">Contact</a>
    </li>
  </ul>
</nav>

<main class="page-container">
  <h1 class="center">About Me</h1>
</main>
<div class="after-page">
  <p>
    o/ 👋. I am a student who is passionate about photography and programming.
    I started photography in late 2021 and programming a few years ago.
    I love taking photos of the environment and other interesting subjects.
    I listen to lofi basically every time I edit photos or code. ⬇️
  </p>
  <p style="font-size: 0.5rem">
    Credit to the owner of the video. I do not own nor created the video.
  </p>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk?si=R8Tq31bQl06b1X1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
