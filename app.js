let applicationDatabaseArray = [];
const PRODUCT_REVIEWS_API_URL = "https://shop.yash12007.com/api/reviews";
let activeProductReviewsRequest = null;
let activeProductReviewId = null;
let productReviewsRenderToken = 0;
async function fetchAndRenderAdBrandingBanner() {
  try {
    let e = await fetch("https://store.yash12007.com/store_ads.json");
    if (!e.ok) throw Error(`HTTP status: ${e.status}`);
    let t = await e.json(),
      r = document.getElementById("heroBannerBlock");
    if (!r || !Array.isArray(t) || 0 === t.length) return;
    if (((r.innerHTML = ""), 1 === t.length)) {
      let a = t[0],
        i =
          a.BannerImage ||
          a.heroImage ||
          "https://www.yash12007.com/192x192.png",
        n = a.click || a.link_to_trigger_on_click_banner,
        o = document.createElement("a");
      ((o.className = "hero-banner-frame d-block"),
        (o.style.backgroundImage = `url('${i}')`),
        o.setAttribute("aria-label", "Featured Storefront Announcement Banner"),
        (o.innerHTML = `
                <a style="background:#eee; color:#000;" class="btn" title="Learn more about banner Ads" href="https://www.yash12007.com/#contact" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
                </a>
            `),
        n
          ? ((o.href = n),
            (o.target = "_blank"),
            (o.rel = "noopener"),
            (o.style.cursor = "pointer"))
          : (o.style.cursor = "default"),
        r.appendChild(o));
    } else {
      let l = "storefrontHeroCarousel",
        s = document.createElement("div");
      ((s.id = l),
        (s.className = "carousel slide carousel-fade"),
        s.setAttribute("data-bs-ride", "carousel"),
        s.setAttribute("data-bs-interval", "4000"));
      let d = document.createElement("div");
      if (
        ((d.className = "carousel-inner h-100 w-100"),
        t.forEach((e, t) => {
          let r =
              e.BannerImage ||
              e.heroImage ||
              "https://www.yash12007.com/192x192.png",
            a = e.click || e.link_to_trigger_on_click_banner,
            i = document.createElement("div");
          i.className = `carousel-item h-100 w-100 ${0 === t ? "active" : ""}`;
          let n = document.createElement("a");
          ((n.className = "hero-banner-frame d-block"),
            (n.style.backgroundImage = `url('${r}')`),
            a
              ? ((n.href = a),
                (n.target = "_blank"),
                (n.rel = "noopener"),
                (n.style.cursor = "pointer"))
              : (n.style.cursor = "default"),
            i.appendChild(n),
            d.appendChild(i));
        }),
        s.appendChild(d),
        t.length > 1)
      ) {
        let c = document.createElement("button");
        ((c.className = "carousel-control-prev"),
          (c.type = "button"),
          c.setAttribute("data-bs-target", `#${l}`),
          c.setAttribute("data-bs-slide", "prev"),
          (c.innerHTML =
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'));
        let p = document.createElement("button");
        ((p.className = "carousel-control-next"),
          (p.type = "button"),
          p.setAttribute("data-bs-target", `#${l}`),
          p.setAttribute("data-bs-slide", "next"),
          (p.innerHTML =
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>'),
          s.appendChild(c),
          s.appendChild(p));
      }
      (r.appendChild(s),
        new bootstrap.Carousel(s, {
          interval: 4e3,
          ride: "carousel",
          pause: "hover",
        }));
    }
  } catch ($) {
    console.warn("Branding layout system verification fallback triggered: ", $);
  }
}
async function acquireMarketplaceProductsDataMatrix() {
  try {
    let e = await fetch("https://shop.yash12007.com/products");
    if (!e.ok)
      throw Error(
        `HTTP fetch exception context validation status: ${e.status}`,
      );
    let t = await e.json();
    if (!Array.isArray(t))
      throw Error(
        "Validation structural error: Payload must match sequential array layout schemas.",
      );
    return ((applicationDatabaseArray = t), t);
  } catch (r) {
    return (
      console.error("Telemetry resource pipeline tracing exception: ", r),
      []
    );
  }
}
function routeAndRenderDetailedApplicationPage(e) {
  ((document.getElementById("section").style.display = "none"),
    (document.getElementById("heroBannerBlock").style.display = "none"));
  let t = document.getElementById("detailedContainer");
  ((t.style.display = "block"),
    (document.getElementById("detailAppLogo").src =
      e.Image?.[0] || "https://www.yash12007.com/192x192.png"),
    (document.getElementById("detailAppName").innerText = e.Name));
  let r = e.Price || e.price || "Free to Download";
  ((document.getElementById("detailAppPrice").innerText = r),
    (document.getElementById("detailShortDesc").innerText =
      e.Description ||
      "No short description parameters available for this software file."));
  let a = document.getElementById("detailInstallLink");
  ((a.href = e.PPF || "#"),
    (a.target = "_blank"),
    (a.rel = "noopener"),
    (document.getElementById("specSize").innerText =
      e.Size || e.size || "0 MB"),
    (document.getElementById("specType").innerText =
      e.Type || e.type || "Native Subsystem Tool"),
    (document.getElementById("specQC").innerText =
      e.QC || e.qc || "Passed Verified Check"),
    (document.getElementById("specSecurity").innerText =
      e.Security || e.security || "Sera Core Secured"),
    (document.getElementById("detailLongDesc").innerText =
      e.LongDescription || e.longDescription || e.Description),
    e.Publisher &&
      ((document.getElementById("publisherName").innerText =
        e.Publisher.Name || e.Publisher.name || "Yash12007"),
      (document.getElementById("publisherEmail").innerText =
        e.Publisher.Email || e.Publisher.email || "info@yash12007.com"),
      (e.Publisher.Avatar || e.Publisher.avatar) &&
        (document.getElementById("publisherAvatar").src =
          e.Publisher.Avatar ||
          e.Publisher.avatar ||
          "https://www.yash12007.com/192x192.png")));
  let i = document.getElementById("videoMediaTrack"),
    n = document.getElementById("ytliteVideoWrapper"),
    o = e.YoutubeID || e.youtubeID || e.VideoID;
  n.innerHTML = "";
  let l = !1;
  if (o) {
    l = !0;
    let s = document.createElement("div");
    ((s.className = "video-container-box me-3"),
      (s.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${o}" title="${e.Name} Demo Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 6px;"></iframe>
        `),
      n.appendChild(s));
  }
  if (Array.isArray(e.Image) && e.Image.length > 1) {
    l = !0;
    for (let d = 1; d < e.Image.length; d++) {
      let c = e.Image[d],
        p = document.createElement("div");
      ((p.className = "video-container-box me-3"),
        (p.style.display = "inline-block"));
      let $ = document.createElement("img");
      (($.src = c),
        ($.alt = `${e.Name} Interface View Frame ${d}`),
        ($.style.width = "100%"),
        ($.style.height = "100%"),
        ($.style.objectFit = "cover"),
        ($.style.borderRadius = "6px"),
        $.setAttribute("loading", "lazy"),
        p.appendChild($),
        n.appendChild(p));
    }
  }
  (l ? (i.style.display = "block") : (i.style.display = "none"),
    updateApplicationJsonLdSchema(e),
    renderApplicationReviewsModule(e),
    window.scrollTo(0, 0));
}
async function loadAppDetails(e) {
  try {
    let t = await fetch(`https://store.yash12007.com/Apps/${e}.json`),
      r = await t.json(),
      a = r.Name,
      i = r.id,
      n = r.DN,
      o = new Date(r.createdAt),
      l = await fetch("https://store.yash12007.com/Apps/index.json"),
      s = await l.json(),
      d = s.find((e) => e.id === i),
      c = d?.logoURL,
      p = d?.price;
    ((document.getElementById("PDADetailsContainer").style.display = "block"),
      (document.getElementById("PDADetailsContainer").innerHTML = `
            <div style="display:flex; place-items:center; justify-content:start; gap:10px;">
                <img src="${c}" width="120" height="120" style="border-radius:1rem;" alt="${a}">
                <div>
                    <b style="font-size:1.2rem;">${a}</b>
                    <p>${r.description}</p>
                    <b>In-app purchase • $${p}</b>
                </div>
            </div>
            <div style="display:flex; place-items:center; width:fit-content; gap:10px; justify-content:start;">
                <button style="margin:20px auto; color:#fff; background:#0045ce; border-radius:1rem; padding:5px 80px; border:none;" onclick="window.open('${n}', '_blank')">Download Now</button>
                <button onclick="shareApp('${a}', 'Take a look at ${r.description}', 'https://store.yash12007.com/?PID=${i}')" style="display:flex; place-items:center; justify-content:center; width:30px !important; height:30px !important; aspect-ratio:1; border:none; border-radius:50%; background:#ccc; color:#000;" title="Share the App">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                    </svg>
                </button>
            </div>
            <br>
            <b>Scan Results:</b>
            <div style="display:flex; place-items:center; justify-content:start; width:100%; overflow-x:auto; gap:10px;">
                <div style="padding:20px; width:140px; margin:10px; border-radius:1rem; border:1px solid #ccc7; background:#112;">
                    <b>Check</b>
                    <p>${r.scan.safe}</p>
                </div>
                <div style="padding:20px; width:140px; margin:10px; border-radius:1rem; border:1px solid #ccc7; background:#112;">
                    <b>Score</b>
                    <p>${r.scan.score}%</p>
                </div>
                <div style="padding:20px; width:140px; margin:10px; border-radius:1rem; border:1px solid #ccc7; background:#112;">
                    <b>HTTPS</b>
                    <p>${r.scan.checks.https}</p>
                </div>
                <div style="padding:20px; width:140px; margin:10px; border-radius:1rem; border:1px solid #ccc7; background:#112;">
                    <b>Reachable</b>
                    <p>${r.scan.checks.reachable}</p>
                </div>
                <div style="padding:20px; width:140px; margin:10px; border-radius:1rem; border:1px solid #ccc7; background:#112;">
                    <b><500MB</b>
                    <p>${r.scan.checks.sizeValid}</p>
                </div>
            </div>
            <p>Published on: ${o.toString()}</p>
            <b>Publisher:</b>
            <br>
            <div style="margin:10px auto; display:flex; place-items:center; justify-content:start; gap:10px;">
                <img src="${r.PublisherLogo}" width="50" height="50" style="border-radius:1rem;">
                <div style="display:flex; flex-direction:column; place-items:start; justify-content:center;">
                    <b>${r.Publisher}</b>
                    <p>Email: <a style="color:#0ef; text-decoration:none;" href="mailto:${r.PublisherEmail}">${r.PublisherEmail}</a></p>
                </div>
            </div>
        `));
  } catch ($) {
    console.error($);
  }
}
function getProductReviewsContainer() {
  let container = document.getElementById("appReviewsContainer");

  if (!container) {
    container = document.createElement("section");
    container.id = "appReviewsContainer";
    document.getElementById("detailedContainer")?.appendChild(container);
  }

  return container;
}

function normalizeProductReview(review) {
  const numericRating = Number(review?.rating);

  return {
    reviewId: String(review?.review_id || review?.id || ""),
    productId: String(review?.product_id || ""),
    reviewerName: String(review?.reviewer_name || review?.author || "Customer"),
    rating: Number.isFinite(numericRating)
      ? Math.min(5, Math.max(1, Math.round(numericRating)))
      : 0,
    title: String(review?.title || ""),
    content: String(review?.content || review?.comment || review?.text || ""),
    createdAt: String(review?.created_at || review?.date || ""),
  };
}

function formatProductReviewDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function createProductRatingStars(rating) {
  const stars = document.createElement("span");
  const normalizedRating = Math.min(5, Math.max(0, Math.round(rating || 0)));
  stars.className = "review-stars";
  stars.textContent = `${"★".repeat(normalizedRating)}${"☆".repeat(5 - normalizedRating)}`;
  stars.setAttribute("role", "img");
  stars.setAttribute("aria-label", `${normalizedRating} out of 5 stars`);
  return stars;
}

function createProductReviewForm(productId, renderToken, onSubmitted) {
  const form = document.createElement("form");
  form.className = "product-review-form";
  form.innerHTML = `
    <h4>Write a review</h4>
    <p>Share your experience with this product. Your review will appear in the public product rating summary.</p>
    <div class="review-form-grid">
      <label class="review-field">
        <span>Your name</span>
        <input class="review-input" name="reviewer_name" type="text" maxlength="80" autocomplete="name" required>
      </label>
      <label class="review-field">
        <span>Rating</span>
        <select class="review-input" name="rating" required>
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Average</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Very poor</option>
        </select>
      </label>
      <label class="review-field review-field-full">
        <span>Review title <small>(optional)</small></span>
        <input class="review-input" name="title" type="text" maxlength="120">
      </label>
      <label class="review-field review-field-full">
        <span>Your review</span>
        <textarea class="review-input" name="content" maxlength="2000" placeholder="What did you like or dislike about this product?" required></textarea>
      </label>
    </div>
    <button class="review-submit" type="submit">Submit review</button>
    <p class="review-status" role="status" aria-live="polite"></p>
  `;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector(".review-submit");
    const status = form.querySelector(".review-status");
    const formData = new FormData(form);
    const payload = {
      product_id: productId,
      reviewer_name: String(formData.get("reviewer_name") || "").trim(),
      rating: Number(formData.get("rating")),
      title: String(formData.get("title") || "").trim(),
      content: String(formData.get("content") || "").trim(),
    };

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";
    status.className = "review-status";
    status.textContent = "";

    try {
      const response = await fetch(PRODUCT_REVIEWS_API_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          response.status >= 500
            ? "The review service is temporarily unavailable. Please try again later."
            : "The review could not be submitted. Please check your details and try again."
        );
      }
      if (result.status !== true) {
        throw new Error("The review could not be submitted. Please try again.");
      }
      if (
        activeProductReviewId !== productId ||
        productReviewsRenderToken !== renderToken
      ) return;

      form.reset();
      onSubmitted(
        normalizeProductReview(
          result.review || {
            ...payload,
            created_at: new Date().toISOString(),
          }
        )
      );
    } catch (error) {
      console.warn("Product review submission failed:", error);
      if (
        activeProductReviewId !== productId ||
        productReviewsRenderToken !== renderToken
      ) return;
      status.className = "review-status is-error";
      status.textContent = "The review could not be submitted. Please try again.";
      submitButton.disabled = false;
      submitButton.textContent = "Submit review";
    }
  });

  return form;
}

function createProductReviewItem(review) {
  const item = document.createElement("article");
  item.className = "review-item";
  item.setAttribute("role", "listitem");

  const header = document.createElement("div");
  header.className = "review-item-header";

  const author = document.createElement("div");
  author.className = "review-item-author";
  const reviewerName = document.createElement("strong");
  reviewerName.textContent = review.reviewerName;
  author.appendChild(reviewerName);

  const reviewDate = formatProductReviewDate(review.createdAt);
  if (reviewDate) {
    const date = document.createElement("span");
    date.className = "review-date";
    date.textContent = reviewDate;
    author.appendChild(date);
  }

  header.append(author, createProductRatingStars(review.rating));
  item.appendChild(header);

  if (review.title) {
    const title = document.createElement("h5");
    title.textContent = review.title;
    item.appendChild(title);
  }

  const content = document.createElement("p");
  content.textContent = review.content || "No written comment was provided.";
  item.appendChild(content);

  return item;
}

function renderProductReviewPanel(
  container,
  product,
  reviews,
  notice = "",
  renderToken = ++productReviewsRenderToken
) {
  const normalizedReviews = reviews
    .map(normalizeProductReview)
    .filter((review) => review.rating > 0 && review.content);
  const ratingTotal = normalizedReviews.reduce((total, review) => total + review.rating, 0);
  const averageRating = normalizedReviews.length
    ? (ratingTotal / normalizedReviews.length).toFixed(1)
    : "New";
  const reviewLabel = normalizedReviews.length === 1 ? "review" : "reviews";

  container.replaceChildren();
  container.setAttribute("aria-busy", "false");

  const header = document.createElement("div");
  header.className = "review-section-header";
  const title = document.createElement("h3");
  title.textContent = "Product reviews & ratings";
  const subtitle = document.createElement("p");
  subtitle.textContent = `Ratings and customer feedback for ${product.Name || product.name || "this product"}.`;
  header.append(title, subtitle);
  container.appendChild(header);

  if (notice) {
    const noticeElement = document.createElement("p");
    noticeElement.className = "review-status is-success";
    noticeElement.setAttribute("role", "status");
    noticeElement.textContent = notice;
    container.appendChild(noticeElement);
  }

  const summary = document.createElement("div");
  summary.className = "review-summary";
  const average = document.createElement("strong");
  average.className = "review-average";
  average.textContent = averageRating;
  const summaryCopy = document.createElement("div");
  summaryCopy.className = "review-summary-copy";
  const count = document.createElement("small");
  count.textContent = normalizedReviews.length
    ? `Based on ${normalizedReviews.length} ${reviewLabel}`
    : "No ratings submitted yet";
  summaryCopy.append(createProductRatingStars(Number(averageRating) || 0), count);
  summary.append(average, summaryCopy);
  container.appendChild(summary);

  const layout = document.createElement("div");
  layout.className = "review-layout";
  const list = document.createElement("div");
  list.className = "review-list";
  list.setAttribute("role", "list");

  if (normalizedReviews.length) {
    normalizedReviews.forEach((review) => {
      list.appendChild(createProductReviewItem(review));
    });
  } else {
    const emptyState = document.createElement("p");
    emptyState.className = "review-empty";
    emptyState.textContent = "Be the first to share a rating and written review for this product.";
    list.appendChild(emptyState);
  }

  layout.append(
    createProductReviewForm(
      String(product.ID || product.id || "").trim(),
      renderToken,
      (newReview) => {
        const currentReviews = [
          newReview,
          ...reviews.filter(
            (review) => String(review.review_id || review.id || "") !== newReview.reviewId
          ),
        ];
        renderProductReviewPanel(
          container,
          product,
          currentReviews,
          "Thank you. Your review was submitted successfully."
        );
      }
    ),
    list
  );
  container.appendChild(layout);
}

function renderProductReviewLoadError(container, product) {
  container.replaceChildren();
  container.setAttribute("aria-busy", "false");
  container.innerHTML = `
    <div class="review-section-header">
      <h3>Product reviews & ratings</h3>
      <p>Customer feedback for this product.</p>
    </div>
    <p class="review-error">Reviews are temporarily unavailable. Please try again.</p>
  `;

  const retryButton = document.createElement("button");
  retryButton.className = "review-submit";
  retryButton.type = "button";
  retryButton.textContent = "Try again";
  retryButton.addEventListener("click", () => renderApplicationReviewsModule(product));
  container.appendChild(retryButton);
}

async function renderApplicationReviewsModule(product) {
  const container = getProductReviewsContainer();
  if (!container) return;

  const renderToken = ++productReviewsRenderToken;
  const productId = String(product.ID || product.id || "").trim();
  if (!productId) {
    activeProductReviewId = null;
    activeProductReviewsRequest?.abort();
    renderProductReviewLoadError(container, product);
    return;
  }

  activeProductReviewId = productId;
  activeProductReviewsRequest?.abort();
  const requestController = new AbortController();
  activeProductReviewsRequest = requestController;
  container.setAttribute("aria-busy", "true");
  container.innerHTML = '<p class="review-loading">Loading product reviews...</p>';

  try {
    const response = await fetch(
      `${PRODUCT_REVIEWS_API_URL}?product_id=${encodeURIComponent(productId)}`,
      {
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: requestController.signal,
      }
    );
    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.status !== true || !Array.isArray(result.reviews)) {
      throw new Error(result.message || "The product reviews could not be loaded.");
    }

    if (
      activeProductReviewsRequest === requestController &&
      productReviewsRenderToken === renderToken
    ) {
      renderProductReviewPanel(container, product, result.reviews, "", renderToken);
    }
  } catch (error) {
    if (error.name === "AbortError") return;
    console.warn("Product reviews could not be loaded:", error);
    if (
      activeProductReviewsRequest === requestController &&
      productReviewsRenderToken === renderToken
    ) {
      renderProductReviewLoadError(container, product);
    }
  } finally {
    if (activeProductReviewsRequest === requestController) {
      activeProductReviewsRequest = null;
    }
  }
}
function updateApplicationJsonLdSchema(e) {
  let t = document.getElementById("yash12007JsonLdSchema");
  t && t.remove();
  let r = e.Price || e.price || "0",
    a = parseFloat(r.replace(/[^0-9.]/g, "")) || 0,
    i = r.includes("₹") ? "INR" : "USD",
    n = e.Size || e.size || "42 MB",
    o = e.Type || e.type || "UtilitiesApplication",
    l = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: e.Name,
      description: e.Description,
      applicationCategory: o,
      operatingSystem: "Windows, Android, Web",
      fileSize: n,
      image: e.Image?.[0] || "https://www.yash12007.com/192x192.png",
      offers: {
        "@type": "Offer",
        price: a,
        priceCurrency: i,
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
      },
      author: {
        "@type": "Organization",
        name: "Yash12007",
        url: "https://www.yash12007.com",
      },
    };
  (((t = document.createElement("script")).id = "yash12007JsonLdSchema"),
    (t.type = "application/ld+json"),
    (t.text = JSON.stringify(l)),
    document.head.appendChild(t));
}
document.addEventListener("DOMContentLoaded", async () => {
  fetchAndRenderAdBrandingBanner();
  let e = document.getElementById("viewer");
  if (!e) return;
  let t = await acquireMarketplaceProductsDataMatrix(),
    r = document.createDocumentFragment();
  (t.forEach((e) => {
    if ("yes" !== e.instock) return;
    let t = document.createElement("div");
    t.className = "product-box-card";
    let a = e.Price || e.price || "Get Free";
    ((t.innerHTML = `
            <img src="${e.Image?.[0] || "https://www.yash12007.com/192x192.png"}" title="${e.Name} Visual Index Identification Emblem Graphic" alt="${e.Name} 1:1 Box Design Platform Matrix Target Display File" loading="lazy">
            <b>${(productDataRecordModelModel = e.Name)}</b>
            <div class="box-card-price">${a}</div>
        `),
      t.addEventListener("click", (t) => {
        t.preventDefault();
        let r = `?id=${e.ID}`;
        (window.history.pushState({ appID: e.ID }, "", r),
          routeAndRenderDetailedApplicationPage(e));
      }),
      r.appendChild(t));
  }),
    e.appendChild(r));
  let a = new URLSearchParams(window.location.search).get("id"),
    i = new URLSearchParams(window.location.search).get("PID");
  if (
    (i &&
      fetch("https://store.yash12007.com/Apps/" + i + ".json")
        .then((e) => e.json())
        .then((e) => {
          loadAppDetails(i);
        }),
    a)
  ) {
    let n = t.find((e) => e.ID === a);
    n && routeAndRenderDetailedApplicationPage(n);
  }
});

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.appID) {
    let t = applicationDatabaseArray.find((t) => t.ID === e.state.appID);
    t && routeAndRenderDetailedApplicationPage(t);
  } else {
    activeProductReviewId = null;
    productReviewsRenderToken += 1;
    activeProductReviewsRequest?.abort();
    ((document.getElementById("detailedContainer").style.display = "none"),
      (document.getElementById("section").style.display = "block"),
      (document.getElementById("heroBannerBlock").style.display = "block"));
  }
});
