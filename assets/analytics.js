(function(){
  function g(){ if (typeof window.gtag === 'function') window.gtag.apply(null, arguments); }
  function toolName(a){
    var el = a.closest('[data-tool]'); if (el) return el.getAttribute('data-tool');
    var td = a.closest('td,th'), table = a.closest('table');
    if (td && table){
      var idx = Array.prototype.indexOf.call(td.parentNode.children, td);
      var head = table.querySelector('thead tr');
      if (head && head.children[idx]) { var t = head.children[idx].textContent.trim(); if (t) return t.slice(0,80); }
    }
    var card = a.closest('article,li,section');
    var h = card && card.querySelector('h1,h2,h3');
    var txt = (h ? h.textContent : a.textContent).trim();
    return txt.slice(0,80);
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var u; try { u = new URL(a.href, location.href); } catch(_) { return; }
    if (!/^https?:$/.test(u.protocol) || u.hostname === location.hostname) return;
    g('event', 'outbound_click', { tool_name: toolName(a), link_domain: u.hostname, transport_type: 'beacon' });
  }, true);
  document.addEventListener('submit', function(e){
    var f = e.target; if (!f || !/formsubmit\.co/.test(f.action || '')) return;
    g('event', 'contact_submit', { form_page: location.pathname, transport_type: 'beacon' });
  }, true);
})();
