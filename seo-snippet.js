// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.uneekglassfusions.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.uneekglassfusions.com/","title_tag":"Fused Glass Knobs California | Uneek Glass Fusions","meta_description":"Handcrafted fused glass knobs, pulls, decor and jewelry from our California studio. Unique home decor and custom glass hardware to elevate any space."},{"page_url":"https://www.uneekglassfusions.com/about-3","title_tag":"Handcrafted Glass Art California | Uneek Glass Fusions","meta_description":"Discover the story behind Uneek Glass Fusions in California. Handcrafted glass art, cabinet hardware and decor that transform ordinary spaces into artful homes."},{"page_url":"https://www.uneekglassfusions.com/knobs-and-pulls","title_tag":"Art Glass Pulls California | Uneek Glass Fusions","meta_description":"Handcrafted fused art glass knobs and pulls for kitchen cabinets and bathroom. Custom glass hardware and decorative cabinet handles made in California."},{"page_url":"https://www.uneekglassfusions.com/home-decor","title_tag":"Unique Home Decor California | Uneek Glass Fusions","meta_description":"Art glass home decor handcrafted in California. Unique home decor and exquisite glass designs to brighten tabletops, shelves and special spaces."},{"page_url":"https://www.uneekglassfusions.com/jewelry","title_tag":"Dichroic Glass Jewelry California | Uneek Glass Fusions","meta_description":"Sparkling dichroic glass jewelry handcrafted in California. Unique necklaces and pendants with exquisite glass designs to add artful style to any outfit."},{"page_url":"https://www.uneekglassfusions.com/policy-and-shipping","title_tag":"Custom Glass Hardware California | Uneek Glass Fusions","meta_description":"Learn about shipping, policies and lead times for handcrafted fused glass knobs, pulls, decor and jewelry from Uneek Glass Fusions in California."},{"page_url":"https://www.uneekglassfusions.com/reviews","title_tag":"Exquisite Glass Designs California | Uneek Glass Fusions","meta_description":"Read customer testimonials for Uneek Glass Fusions. See why clients love our handcrafted fused glass knobs, pulls, jewelry and unique home decor."},{"page_url":"https://www.uneekglassfusions.com/contact","title_tag":"Unique Home Decor California | Uneek Glass Fusions","meta_description":"Contact Uneek Glass Fusions in Concord, California for fused glass knobs, art glass pulls, unique home decor and custom handcrafted glass art."}],"keywords":["Fused Glass Knobs California","Art Glass Pulls California","Unique Home Decor California","Handcrafted Glass Art California","Custom Glass Hardware California","Dichroic Glass Jewelry California","Kitchen Cabinet Knobs California","Bathroom Pulls California","Decorative Cabinet Handles California","Exquisite Glass Designs California"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": "https://www.uneekglassfusions.com/#store",
  "name": "Uneek Glass Fusions",
  "url": "https://www.uneekglassfusions.com/",
  "image": [
    "https://static.wixstatic.com/media/11255a_e86ca63857b149faa75eb19527efd49b~mv2.jpg/v1/fill/w_134,h_91,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_avif,quality_auto/11255a_e86ca63857b149faa75eb19527efd49b~mv2.jpg",
    "https://static.wixstatic.com/media/11255a_cb662b0e78154bb49c0995ef389f7f20~mv2.jpg/v1/crop/x_39,y_0,w_1969,h_2048/fill/w_325,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Photoroom_20251009_222510_edited.jpg",
    "https://static.wixstatic.com/media/11255a_bf434fbb3d3a4f1994df52bbacef76bd~mv2.jpg/v1/fill/w_335,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11255a_bf434fbb3d3a4f1994df52bbacef76bd~mv2.jpg",
    "https://static.wixstatic.com/media/11255a_aa2a257d39364a2186d7683672e65f23~mv2.jpg/v1/fill/w_307,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11255a_aa2a257d39364a2186d7683672e65f23~mv2.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/11255a_d3caf9c330af4f31995d719ccd21a5db%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/11255a_d3caf9c330af4f31995d719ccd21a5db%7Emv2.jpg",
  "description": "Uneek Glass Fusions specializes in handcrafting fused art glass knobs and pulls, home decor, and jewelry. Each piece is uniquely designed in a California studio to add elegance and individuality to your home.",
  "email": "mailto:uneekglass1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Concord",
    "addressRegion": "CA",
    "postalCode": "94519",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "sameAs": [
    "https://static.wixstatic.com/media/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_2381e8a6e7444f4f902e7b649aa3f0ac~mv2.png",
    "https://static.wixstatic.com/media/11062b_8901513665d24c988eef522137193c31~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_8901513665d24c988eef522137193c31~mv2.png",
    "https://static.wixstatic.com/media/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_55e4be1e75564866b6c28290f9a9d271~mv2.png"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Uneek Glass Fusions",
    "logo": "https://static.wixstatic.com/media/11255a_d3caf9c330af4f31995d719ccd21a5db%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/11255a_d3caf9c330af4f31995d719ccd21a5db%7Emv2.jpg"
  },
  "knowsAbout": [
    "fused art glass knobs",
    "glass cabinet pulls",
    "glass home decor",
    "glass jewelry",
    "custom glass cabinet hardware"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Uneek Glass Fusions Product Catalog",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Knobs and Pulls",
        "url": "https://www.uneekglassfusions.com/knobs-and-pulls"
      },
      {
        "@type": "OfferCatalog",
        "name": "Home Decor",
        "url": "https://www.uneekglassfusions.com/home-decor"
      },
      {
        "@type": "OfferCatalog",
        "name": "Jewelry",
        "url": "https://www.uneekglassfusions.com/jewelry"
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Praveen"
      },
      "reviewBody": "I had an amazing experience with Uneek Glass Fusions! The customer service was top-notch and the quality of the products exceeded my expectations. I highly recommend them for all your glass fusing needs. The website was easy to navigate and the ordering process was seamless."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Kara Andersen"
      },
      "reviewBody": "Uneek Glass Fusions is a great company. I’ve ordered from them and the products are beautiful. Highly recommend."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Charlot"
      },
      "reviewBody": "I plan to order more!! Sea Foam Glass Knobs… absolutely stunning."
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
