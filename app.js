const version = document.querySelector("#version");
const size = document.querySelector("#size");

fetch("https://api.github.com/repos/vitawatvim/VITXUpdates/releases/latest", {
  headers: { Accept: "application/vnd.github+json" }
})
  .then(response => {
    if (!response.ok) throw new Error("release unavailable");
    return response.json();
  })
  .then(release => {
    version.textContent = `เวอร์ชัน ${String(release.tag_name || "").replace(/^v/, "")}`;
    const installer = (release.assets || []).find(asset => asset.name === "VITXLauncherSetup.exe");
    if (installer) size.textContent = `${Math.round(installer.size / 1024 / 1024)} MB`;
  })
  .catch(() => {});
