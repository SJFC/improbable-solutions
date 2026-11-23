// The Ministry of Improbable Solutions to Small Problems
// Plain JavaScript, no dependencies. Nothing here sends or stores data.

(function () {
  'use strict';

  // The deal is rigged: the Ministry only deals combinations that have been written.
  // To add a report, add a line here and a matching button on the home page.
  var REPORTS = [
    { problem: 'Parking fines',     creature: 'Starling',      form: 'sestina',            page: 'broadside.html' },
    { problem: 'Parking fines',     creature: 'Starling',      form: 'ballad',             page: 'report-40.html' },
    { problem: 'Unanswered emails', creature: 'Woodpecker',    form: 'villanelle',         page: 'report-50.html' },
    { problem: 'Rising sea levels', creature: 'Woodpecker',    form: 'alliterative verse', page: 'report-51.html' },
    { problem: 'Loneliness',        creature: 'House sparrow', form: 'ballad',             page: 'report-52.html' },
    { problem: 'Long meetings',     creature: 'Domestic cat',  form: 'cyhydedd naw ban',   page: 'report-54.html' },
    { problem: 'Food waste',        creature: 'Hermit crab',   form: 'somonka',            page: 'report-55.html' },
    { problem: 'Cold tea',          creature: 'Minke whale',   form: 'pantoum',            page: 'report-61.html' }
  ];

  // Shown when a problem has only one written solution and the visitor deals again.
  var SAME_DEAL_NOTE = 'The Ministry has dealt again. The result is unchanged.';

  // Shown wherever a register would, in a finished site, save something.
  var PROTOTYPE_NOTE = 'Thank you. This is a prototype: nothing has been stored.';

  function setAll(selector, text) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) { nodes[i].textContent = text; }
  }

  function show(el, text) {
    if (!el) { return; }
    if (text !== undefined) { el.textContent = text; }
    el.hidden = false;
  }

  // ---- Home: choose a problem, be dealt a creature and a form ----

  var problems = document.getElementById('problems');
  var deal = document.getElementById('deal');
  var dealStatus = document.getElementById('deal-status');
  var findings = document.getElementById('findings');
  var current = REPORTS[0];

  function reportsFor(problem) {
    var list = [];
    for (var i = 0; i < REPORTS.length; i++) {
      if (REPORTS[i].problem === problem) { list.push(REPORTS[i]); }
    }
    return list;
  }

  function issue(report) {
    current = report;
    setAll('[data-problem]', report.problem);
    setAll('[data-creature]', report.creature);
    setAll('[data-form]', report.form);
    if (findings) { findings.href = report.page; }
  }

  function dealFor(problem, avoid) {
    var list = reportsFor(problem);
    if (!list.length) { return; }
    var choices = list.filter(function (r) { return r !== avoid; });
    if (!choices.length) { choices = list; }
    issue(choices[Math.floor(Math.random() * choices.length)]);
  }

  if (problems) {
    problems.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) { return; }
      var all = problems.querySelectorAll('button');
      for (var i = 0; i < all.length; i++) {
        all[i].setAttribute('aria-pressed', all[i] === button ? 'true' : 'false');
      }
      if (dealStatus) { dealStatus.hidden = true; }
      dealFor(button.textContent.trim());
    });
  }

  if (deal) {
    deal.addEventListener('click', function () {
      var several = reportsFor(current.problem).length > 1;
      dealFor(current.problem, current);
      if (dealStatus) {
        if (several) { dealStatus.hidden = true; } else { show(dealStatus, SAME_DEAL_NOTE); }
      }
    });
  }

  // ---- Broadside: objection first; amendments only for objectors ----

  var objectionForm = document.getElementById('objection-form');
  var amendmentForm = document.getElementById('amendment-form');
  if (objectionForm && amendmentForm) {
    var objectionStatus = document.getElementById('objection-status');
    objectionForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var chosen = objectionForm.querySelector('input[name="objection"]:checked');
      if (!chosen) {
        show(objectionStatus, 'Please select one option.');
        return;
      }
      if (chosen.value === 'perfect') {
        amendmentForm.hidden = true;
        show(objectionStatus, 'Your satisfaction has been filed.');
      } else {
        objectionStatus.hidden = true;
        amendmentForm.hidden = false;
        var box = document.getElementById('amendment');
        if (box) { box.focus(); }
      }
    });

    amendmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      show(document.getElementById('amendment-status'), PROTOTYPE_NOTE);
    });
  }

  var problemForm = document.getElementById('problem-form');
  if (problemForm) {
    problemForm.addEventListener('submit', function (event) {
      event.preventDefault();
      show(document.getElementById('problem-status'), PROTOTYPE_NOTE);
    });
  }
})();
