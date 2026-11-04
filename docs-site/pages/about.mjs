// Support & About - the docs-site twin of the app's Support & About page
// (src/components/SupportView.jsx). Keep the two saying the same things.
import { SITE } from '../site.mjs';

const ui = (s) => `<span class="ui">${s}</span>`;
const SERVICES = [
  ['Custom software &amp; web apps', 'Websites, web apps and business tools built for how you work.'],
  ['Customising this app', 'Your own invoice layout, reports or features in MuseGST.'],
  ['Setup &amp; data migration', 'Installation, moving your data from Tally or Excel, and training.'],
  ['Support plans for businesses', 'Priority help and updates on a yearly plan.'],
  ['AI integration', 'Add AI to your product: assistants, document reading, smart search.'],
  ['AI automation', 'Automate the repetitive work in the software you already use.'],
  ['Mobile apps', 'Android and iPhone apps for your business or customers.'],
];
const share = encodeURIComponent(`I make my GST invoices with MuseGST. It's free, works offline and keeps data on your own computer: ${SITE.repo}`);

export default [
{
  slug: 'support',
  title: 'Support & About',
  nav: 'Support & About',
  lead: 'Who makes MuseGST, how you can help it grow, and what MuseGST builds for businesses.',
  body: `
<section id="about">
<h2>Free, and it stays free</h2>
<p>MuseGST is built and maintained in India. No ads, no account, no locked features, and your invoices never leave your computer. The full source code is on <a href="${SITE.repo}">GitHub</a> under the MIT licence.</p>
<p>After the ways to support, <b>Safe and private</b> lists what happens to your data: it stays on this computer, no account, works offline, no tracking, other computers cannot open it, open source, a safe install, daily backups, the PIN lock, problem reports, security fixes, and your part. Each point opens its part of <a href="security.html">Is it safe? Security and privacy</a>.</p>
<p>If it saves you time every month, you can help keep the fixes and new features coming.</p>
</section>

<section id="upi">
<h2>Support with UPI</h2>
<p>UPI support is not open yet, so the app shows no payment QR code and no supporters list. The free ways below help just as much.</p>
<span id="supporters-card"></span>
</section>

<section id="free-ways">
<h2>Help without paying</h2>
<p>These matter just as much.</p>
<ul>
  <li><strong><a href="${SITE.repo}">Star it on GitHub</a></strong>: helps other businesses find it.</li>
  <li><strong><a href="https://wa.me/?text=${share}">Tell another business</a></strong>: send it to a friend on WhatsApp.</li>
  <li><strong><a href="${SITE.repo}/issues/new/choose">Report a bug or ask for a feature</a></strong>: many features started as a request.</li>
</ul>
<p>In the app each line is a link that opens in your browser. <b>Star it on GitHub</b> needs a free GitHub account: click the ☆ <b>Star</b> button at the top right of the page. <b>Tell another business</b> opens WhatsApp with a short message and the link already written; pick a contact and send. <b>Report a bug or ask for a feature</b> opens GitHub's forms (see <a href="troubleshooting.html#report-problem">Reporting a problem</a>).</p>
</section>

<section id="weekly">
<h2>A new update every Saturday</h2>
<p>Every Saturday we release one update with that week's fixes and new features. The app tells you when it is ready: click <b>Update</b> in the sidebar, and your invoices and settings are kept. Anything urgent, such as the app not opening, is fixed straight away.</p>
<ul>
  <li><strong><a href="${SITE.repo}/issues/new?template=bug_report.yml">Report a problem</a></strong>: say which version, which computer, and what you did. That lets us fix it the same week.</li>
  <li><strong><a href="${SITE.repo}/issues/new?template=feature_request.yml">Ask for a feature</a></strong>: we read every request each week, and the ones most people ask for come first. Add a 👍 to an <a href="${SITE.repo}/issues">open request</a> to vote for it.</li>
</ul>
<p>You get a reply on GitHub when it ships. What each update changed is in the app under <b>Support &amp; About → What's new</b>, in the <a href="${SITE.repo}/blob/main/CHANGELOG.md">full changelog</a>, and on <a href="${SITE.repo}/releases">GitHub Releases</a>.</p>
<p>The card in the app has four buttons:</p>
<div class="table-wrap"><table>
  <tr><th>Button</th><th>What it does</th></tr>
  <tr><td>${ui('Report a problem')}</td><td>Opens GitHub's problem form. For a problem the app logged, ${ui('Report')} in the <a href="troubleshooting.html#problem-log">Problem log</a> is better: it fills in the details for you.</td></tr>
  <tr><td>${ui('Ask for a feature')}</td><td>Opens GitHub's feature request form.</td></tr>
  <tr><td>${ui('See all requests')}</td><td>Every open request. Search it first; if yours is already there, add a 👍 to it.</td></tr>
  <tr><td>${ui("What's new")} or ${ui('Changelog')}</td><td>Scrolls down to the <a href="#whats-new">What's new</a> card. When the app cannot read its changelog, the button is called <b>Changelog</b> and opens the full list on GitHub instead.</td></tr>
</table></div>
<p>To install an update, see <a href="update.html#in-app">Updating the app</a>.</p>
</section>

<section id="whats-new">
<h2>What's new</h2>
<p>The <b>What's new</b> card in the app lists the last six updates, read from the changelog that comes with your copy of the app. The newest is open; click any version number to open or close it. Each shows its date, a one-line summary and the changes grouped under headings such as <i>Added</i> and <i>Fixed</i>.</p>
<p>The card shows what <b>your</b> copy contains. If it stops at an older version, you have not updated yet: see <a href="update.html#in-app">Updating the app</a>. The <b>full changelog</b> link has every version since the first, and <b>GitHub Releases</b> has the downloads. If the card is missing, the changelog file could not be read; the ${ui('Changelog')} button above opens it on GitHub.</p>
</section>

<section id="services">
<h2>Work with MuseGST</h2>
<p>The team behind this app builds software for businesses too.</p>
<div class="service-grid">
${SERVICES.map(([t, d]) => `  <div class="service"><strong>${t}</strong><span>${d}</span></div>`).join('\n')}
</div>
<p>Email <a href="mailto:web@kaizeninfotech.com?subject=${encodeURIComponent('Project enquiry (from the MuseGST docs)')}">web@kaizeninfotech.com</a> or visit <a href="${SITE.publisher.url}">GitHub</a>.</p>
<p>In the app, ${ui('Email web@kaizeninfotech.com')} opens your email program with the subject "Project enquiry (from MuseGST)" filled in; say what you need and roughly when. ${ui('GitHub')} opens the website. This is paid work and separate from the free app: the app stays free whether or not you hire us. For a problem with the app itself, use <a href="troubleshooting.html#report-problem">Reporting a problem</a> instead.</p>
</section>

<section id="in-the-app">
<h2>In the app</h2>
<p>The same page is in the app: <b>Support &amp; About</b>, near the bottom of the sidebar. From top to bottom it has these cards, each with a small ? that opens its part of this page:</p>
<ul>
  <li><a href="#about">Free, and it stays free</a></li>
  <li><a href="#free-ways">Help without paying</a></li>
  <li><a href="#weekly">A new update every Saturday</a> and <a href="#whats-new">What's new</a></li>
  <li><a href="troubleshooting.html#problem-log">Problem log</a></li>
  <li><a href="#services">Work with MuseGST</a></li>
</ul>
<p>See <a href="shortcuts.html#support">Getting around</a> for the GitHub star note.</p>
</section>
`,
},
];
