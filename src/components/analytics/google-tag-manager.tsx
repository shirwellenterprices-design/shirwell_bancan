import { GTM_ID, isGtmConfigured } from "@/config/gtm";

/**
 * Exact GTM snippet for `<head>` (as high as possible).
 * @see https://developers.google.com/tag-platform/tag-manager/web
 */
export function GoogleTagManagerHead() {
  if (!isGtmConfigured()) return null;

  return (
    <script
      id="gtm-init"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

/** Exact GTM noscript iframe — immediately after the opening `<body>` tag. */
export function GoogleTagManagerNoScript() {
  if (!isGtmConfigured()) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
