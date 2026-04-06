<script setup>
import links from '../data/links.json'

function resolveIcon(iconImage) {
  // Vite requires dynamic imports to use a string literal with a glob-friendly base path.
  // We import all PNGs from assets/icons at build time and look up by filename.
  const icons = import.meta.glob('../assets/icons/*.png', { eager: true, query: '?url', import: 'default' })
  return icons[`../assets/icons/${iconImage}`] ?? null
}
</script>

<template>
  <div class="linktree">
    <div class="card">
      <div class="logo-wrapper">
        <img src="../assets/logo.svg" alt="BabyBelt.Pro Logo" class="logo" />
      </div>

      <h1 class="title">BabyBelt.Pro</h1>
      <p class="subtitle">The Baby Belt Pro 3D Printer</p>

      <nav class="links">
        <a
          v-for="link in links"
          :key="link.path"
          :href="link.path"
          class="link-btn"
        >
          <span class="link-icon">
            <img
              v-if="link.iconImage && resolveIcon(link.iconImage)"
              :src="resolveIcon(link.iconImage)"
              :alt="link.label"
              class="link-icon-img"
            />
            <template v-else>{{ link.icon }}</template>
          </span>
          <span class="link-label">{{ link.label }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
:root {
  --hunter-green: #355e3b;
  --hunter-green-dark: #264530;
  --hunter-green-light: #4a7c52;
  --hunter-green-muted: rgba(53, 94, 59, 0.12);
}

.linktree {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background: linear-gradient(160deg, #f0f4f1 0%, #e6ede7 100%);
}

.card {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.logo-wrapper {
  width: 320px;
  height: 320px;
  border-radius: 50%;
  background: #355e3b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 16px rgba(53, 94, 59, 0.3);
  overflow: hidden;
}

.logo {
  width: 300px;
  height: 300px;
  object-fit: contain;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #264530;
  letter-spacing: 0.01em;
  margin: 0;
}

.subtitle {
  font-size: 0.95rem;
  color: #4a7c52;
  margin: 0 0 1rem;
}

.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.link-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.85rem 1.25rem;
  border-radius: 10px;
  background: #ffffff;
  border: 2px solid #355e3b;
  color: #264530;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s,
    transform 0.15s;
  box-shadow: 0 2px 6px rgba(53, 94, 59, 0.1);
}

.link-btn:hover {
  background: #355e3b;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(53, 94, 59, 0.35);
  transform: translateY(-2px);
}

.link-icon {
  font-size: 2rem;
  flex-shrink: 0;
  line-height: 1;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.link-icon-img {
  width: 3rem;
  height: 3rem;
  object-fit: contain;
}

.link-label {
  flex: 1;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .linktree {
    background: linear-gradient(160deg, #1a231b 0%, #111a12 100%);
  }

  .title {
    color: #a8d5ae;
  }

  .subtitle {
    color: #6aab71;
  }

  .link-btn {
    background: #1e2d1f;
    border-color: #4a7c52;
    color: #c8e6cb;
  }

  .link-btn:hover {
    background: #355e3b;
    color: #ffffff;
  }
}
</style>
