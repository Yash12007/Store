let applicationDatabaseArray = [];
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
    window.scrollTo({ top: 0, behavior: "smooth" }));
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
function renderApplicationReviewsModule(e) {
  let t = document.getElementById("appReviewsContainer");
  (t ||
    (((t = document.createElement("div")).id = "appReviewsContainer"),
    (t.className = "mt-5 pt-4 border-top"),
    (t.style.color = "var(--text-main)"),
    document.getElementById("detailedContainer").appendChild(t)),
    (t.innerHTML = `
        <h3 class="mb-4" style="font-size: 1.35rem; font-weight: 700; letter-spacing: -0.5px;">Customer Reviews & Ratings</h3>
    `));
  let r = e.Reviews || e.reviews;
  if (Array.isArray(r) && r.length > 0) {
    let a = document.createElement("div");
    ((a.className = "d-flex flex-column gap-3"),
      r.forEach((e) => {
        let t = document.createElement("div");
        ((t.className = "p-3 border rounded"),
          (t.style.backgroundColor = "var(--navy-panel)"),
          (t.style.borderColor = "var(--border-line)"));
        let r = e.author || e.username || "Verified Buyer",
          i = parseInt(e.rating) || 5,
          n = e.comment || e.text || e,
          o = e.date || e.timestamp || "",
          l = o ? `<small class="text-muted ms-2">${o}</small>` : "";
        ((t.innerHTML = `
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div>
                        <strong style="font-size: 0.95rem; color: #ffffff;">${r}</strong>
                        ${l}
                    </div>
                    <span style="color: #ffb700; font-weight: 700; font-size: 0.85rem;" aria-label="${i} out of 5 stars">
                        ${"★".repeat(i)}${"☆".repeat(5 - i)}
                    </span>
                </div>
                <p class="m-0 text-muted" style="font-size: 0.9rem; line-height: 1.5;">${n}</p>
            `),
          a.appendChild(t));
      }),
      t.appendChild(a));
    let i = document.createElement("div");
    ((i.className = "mt-4 text-start"),
      (i.innerHTML = `
            <button id="review-button" class="btn btn-outline-info btn-sm" style="font-size: 0.85rem; font-weight: 600; border-radius: 4px;">
                Write an Ecosystem Review
            </button>
        `),
      t.appendChild(i));
  } else
    t.innerHTML += `
            <div class="p-4 text-center rounded border" style="background: rgba(255,255,255,0.01); border-style: dashed !important; border-color: var(--border-line);">
                <p class="text-muted m-0" style="font-size: 0.9rem;">No public structural feedback submitted for this item yet.</p>
                <p class="text-muted small mt-1 mb-3">Reviews collected here help calibrate product evaluation scores inside Google Merchant Center.</p>
                <button id="review-button" onclick="invokeReviewCollector()" class="btn btn-primary btn-sm px-4" style="font-size: 0.85rem; font-weight: 600; border-radius: 4px;">
                    Be the First to Review ⭐
                </button>
            </div>
        `;
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
function invokeReviewCollector() {
  getCustomerReviews(prompt("Enter your email for feedback"));
}
async function getCustomerReviews(e) {
  let t,
    r,
    a = Date.now().toString(36) + Math.random().toString(36).slice(2),
    i = new Date(Date.now() + 432e6).toISOString().slice(0, 10);
  try {
    let n = await fetch("https://ipinfo.io/country");
    if (!n.ok) {
      let o = await n.text();
      throw Error(
        `Failed to fetch country: ${n.status} ${n.statusText} - ${o}`,
      );
    }
    t = (r = await n.text()).replace("\n", "");
  } catch (l) {
    (console.error("Error fetching country:", l), (t = "US"));
  } finally {
    ((window.renderOptIn = function () {
      window.gapi.load("surveyoptin", function () {
        window.gapi.surveyoptin.render({
          merchant_id: 5587645429,
          order_id: a,
          email: e,
          delivery_country: t,
          estimated_delivery_date: i,
        });
      });
    }),
      window.renderOptIn());
  }
}
(document.addEventListener("DOMContentLoaded", async () => {
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
}),
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.appID) {
      let t = applicationDatabaseArray.find((t) => t.ID === e.state.appID);
      t && routeAndRenderDetailedApplicationPage(t);
    } else
      ((document.getElementById("detailedContainer").style.display = "none"),
        (document.getElementById("section").style.display = "block"),
        (document.getElementById("heroBannerBlock").style.display = "block"));
  }),
  (window.prompt = function (e, t = "") {
    return new Promise((r) => {
      let a = document.getElementById("yash12007-custom-prompt");
      a && a.remove();
      let i = document.createElement("div");
      ((i.id = "yash12007-custom-prompt"),
        (i.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(5, 8, 13, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 20000;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
        `));
      let n = document.createElement("div");
      n.style.cssText = `
            background: #111a24;
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            padding: 24px;
            width: 90%;
            max-width: 420px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
            transform: scale(0.95);
            transition: transform 0.2s ease-in-out;
        `;
      let o = e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      ((n.innerHTML = `
            <div style="font-size: 1rem; font-weight: 600; color: #ffffff; margin-bottom: 14px; line-height: 1.4;">
                ${o}
            </div>
            <div style="margin-bottom: 20px;">
                <input type="text" id="yash12007-prompt-input" value="${t}" style="
                    width: 100%;
                    height: 42px;
                    background: #090e17;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 4px;
                    color: #f3f4f6;
                    padding: 0 14px;
                    font-size: 0.95rem;
                    outline: none;
                    box-sizing: border-box;
                    transition: border-color 0.15s ease;
                " />
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 12px;">
                <button id="yash12007-prompt-cancel" style="
                    background: transparent;
                    color: #9ca3af;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 8px 18px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.15s ease, color 0.15s ease;
                ">Cancel</button>
                <button id="yash12007-prompt-confirm" style="
                    background: #0078d4;
                    color: #ffffff;
                    border: none;
                    padding: 8px 18px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.15s ease;
                ">Confirm</button>
            </div>
        `),
        i.appendChild(n),
        document.body.appendChild(i));
      let l = document.getElementById("yash12007-prompt-input"),
        s = document.getElementById("yash12007-prompt-cancel"),
        d = document.getElementById("yash12007-prompt-confirm");
      (l.focus(),
        l.select(),
        (l.onfocus = () => (l.style.borderColor = "#0078d4")),
        (l.onblur = () => (l.style.borderColor = "rgba(255, 255, 255, 0.08)")),
        (s.onmouseover = () => {
          ((s.style.backgroundColor = "rgba(255, 255, 255, 0.02)"),
            (s.style.color = "#ffffff"));
        }),
        (s.onmouseout = () => {
          ((s.style.backgroundColor = "transparent"),
            (s.style.color = "#9ca3af"));
        }),
        (d.onmouseover = () => (d.style.backgroundColor = "#0066ff")),
        (d.onmouseout = () => (d.style.backgroundColor = "#0078d4")));
      let c = (e) => {
        ((i.style.opacity = "0"),
          (n.style.transform = "scale(0.95)"),
          setTimeout(() => {
            (i.remove(), r(e));
          }, 200));
      };
      ((d.onclick = () => c(l.value)),
        (s.onclick = () => c(null)),
        (i.onclick = (e) => {
          e.target === i && c(null);
        }),
        (l.onkeydown = (e) => {
          "Enter" === e.key
            ? (e.preventDefault(), c(l.value))
            : "Escape" === e.key && (e.preventDefault(), c(null));
        }),
        requestAnimationFrame(() => {
          ((i.style.opacity = "1"), (n.style.transform = "scale(1)"));
        }));
    });
  }));
