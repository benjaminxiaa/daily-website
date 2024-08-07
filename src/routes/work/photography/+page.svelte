<script>
  import Gallery from 'svelte-gallery';

  const images = [
		{
			src: '/portfolio/SaltPonds/1-_DSC9404.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/1-DSC08756.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/2-_DSC9111.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/2-DSC08748.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/3-_DSC9099.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/3-DSC08723.jpg',
			width: 1365,
			height: 2048
		},
		{
			src: '/portfolio/SaltPonds/4-DSC07982.jpg',
			width: 2048,
			height: 1365
		}
	];
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/gallery.css" />
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
  <h1 class="center">Alviso Salt Ponds</h1>
</main>
<div class="after-page">
  <Gallery {images} rowHeight={600} />
	<iframe src="https://www.youtube.com/watch?v=jfKfPfyJRdk&pp=ygUEbG9maQ%3D%3D" frameborder="0"></iframe>
</div>