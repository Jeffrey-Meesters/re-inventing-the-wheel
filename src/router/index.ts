import { routes } from "./routes";

function renderRoute(path: string) {
  const content = routes[path] || routes["/"];
  const app = document.querySelector("#app");

  if (!app) return;
  app.innerHTML = content;
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>("a[href]");
  if (!link) return;

  const url = new URL(link.href);

  // Only handle same-origin links
  if (url.origin !== location.origin) return;

  // Ignore links with target or download attributes
  if (link.target || link.download) return;

  event.preventDefault();
  history.pushState({}, "", url.pathname + url.search);
  renderRoute(location.pathname);
});

window.addEventListener("popstate", () => {
  console.log('1', location.pathname)
  renderRoute(location.pathname);
});

window.addEventListener("load", () => {
  renderRoute(location.pathname);
});