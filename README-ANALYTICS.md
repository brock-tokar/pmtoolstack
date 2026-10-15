# Analytics (required on every page)
Every new HTML page MUST include this block right before </head> (GA4 G-HDG5MMYRHC):

<!-- GA4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HDG5MMYRHC"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-HDG5MMYRHC');</script>
<script defer src="/assets/analytics.js"></script>

Easiest: copy an existing page as the template. assets/analytics.js sends outbound_click (tool_name, link_domain) and contact_submit (form_page). No personal info.
