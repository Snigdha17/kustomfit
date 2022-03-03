document.querySelectorAll(".wishlist-icon").forEach((wishListIcon) => {
  wishListIcon.addEventListener("click", () => {
    if (wishListIcon.classList.contains("favourite")) {
      wishListIcon.classList.remove("favourite");
      wishListIcon.name = "heart-outline";
      // wishListIcon.style.color = "var(--demo-color-1)";
    } else {
      wishListIcon.name = "heart";
      wishListIcon.classList.add("favourite");
    }
  });
});
