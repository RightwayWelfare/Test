document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-menu-open]");
  const drawer = document.querySelector(".mobile-drawer");
  const closeButtons = document.querySelectorAll("[data-menu-close]");
  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle?.addEventListener("click", () => setDrawer(true));
  closeButtons.forEach(el => el.addEventListener("click", () => setDrawer(false)));
  drawer?.addEventListener("click", e => { if (e.target === drawer) setDrawer(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") setDrawer(false); });

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.addEventListener("click", () => {
      const group = button.closest("[data-filter-group]");
      const filter = button.dataset.filter;
      group?.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
      group?.parentElement.querySelectorAll("[data-category]").forEach(item => {
        item.classList.toggle("hidden", filter !== "all" && item.dataset.category !== filter);
      });
    });
  });

  const modal = document.querySelector(".modal");
  if (modal) {
    const modalImage = modal.querySelector("img");
    const close = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
    document.querySelectorAll("[data-lightbox]").forEach(item => item.addEventListener("click", () => {
      modalImage.src = item.dataset.lightbox;
      modalImage.alt = item.dataset.alt || "Expanded gallery photograph";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    }));
    modal.querySelector("button")?.addEventListener("click", close);
    modal.addEventListener("click", e => { if (e.target === modal) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
  }

  const form = document.querySelector("[data-contact-form]");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim() || "Website enquiry";
    const message = form.querySelector('[name="message"]').value.trim();
    const recipient = form.dataset.email || "your-email@example.com";
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const note = form.querySelector("[data-form-note]");
    if (note) note.textContent = "Your email app should open with your message ready to send. This static website does not send messages directly.";
  });
});
