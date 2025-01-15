<link href="fa/css/all.min.css" rel="stylesheet">
<link href="resume.css" rel="stylesheet">
<style>
@media print {
	body {margin-top: 1rem;}
}</style>
<table class="header" style="margin-top: -60px; padding-top: 0px;">
<tr><td rowspan="3">
<img src="data:image/png;base64,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">
</td><td><h1 style="margin-top: 0px; padding-top: 0px;">Jan “Yahn” Szpila</h1></td></tr>
<tr><td><h3>JavaScript Engineer</h3></td></tr>
<tr><td>
<ul class="lankz"> 
<li><i class="fa fa-link"></i> [jan.szpi.la](http://jan.szpi.la/)</li>
<li><i class="far fa-paper-plane"></i> [jan@szpi.la](mailto:jan@szpi.la?subject=Hi Jan!&body=I was just reading your resume and...)</li>
<li><i class="fa fa-phone"></i> [708.250.1866](callto:+17082501866)</li>
<li><i class="fab fa-linkedin"></i>&nbsp;[jszpila](https://www.linkedin.com/in/jszpila)</li>
</td>
</tr>
</table>

<h2><i class="fa fa-cogs"></i> Skills</h2>
<table class="skills">
<thead>
<tr>
<th>Languages</th>
<th>Frameworks & Libraries</th>
<th>Tools</th>
</tr>
</thead>
<tbody>
<tr>
<td>JavaScript <i class="text-muted">(+TypeScript)</i>, HTML,<br>CSS <i class="text-muted">(+SCSS)</i></td>
<td>React, Redux, Redux Saga,<br>Next.js, Express</td>
<td>Webpack, Yarn, Jest,<br>React Testing Library</td>
</tr>
</tbody>
</table>

<h2><i class="fa fa-history"></i> Experience</h2>
<div style="text-align: right; margin-top: -35px; margin-bottom: 20px;"><i class="text-muted"><i class="far fa-clock"></i> indicates a contract position</i></div>
<table class="experience">
<thead>
<tr>
<th class="employer"><h4>Caesar's Digital</h4></th>
<th class="title">Software Engineer, Front-End</th>
<th class="span">11/21 - 1/25</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><i class="text-muted">React, SCSS, Redux, Redux Saga, Cordova/Capacitor, Next.js</i>
</td>
</tr>
<tr>
<td colspan="3">
<ul>
<li>Specialized in mobile-first development of Caear's Sportsbook, using functional React with TypeScript</li>
<li>Lead feature teams to define, implement, and deliver new functionality</li>
<!--<li>Contributed React components to an internal UI library to provide consistent UX</li>-->
<li>Worked across teams to ensure feature parity across various build targets (Web, Android, iOS)</li>
</ul>
</td>
</tr>
</tbody>
</table>

<table class="experience">
<thead>
<tr>
<th class="employer"><h4>Nerdery</h4></th>
<th class="title">Sr. Software Engineer, Front-End</th>
<th class="span">12/19 - 11/21</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="3"><i class="text-muted">Angular, React, TypeScript, JSX, SCSS, Material UI</i>
</td>
</tr>
<tr>
<td colspan="3">
<ul>
<li>Specialized in progressive web apps and sites using functional React with TypeScript</li>
<li>Worked across multiple clients and project teams to deliver mobile-friendly greenfield projects </li>
<li>Implemented new features on existing projects with an emphasis on accessibility</li>
</ul>
</td>
</tr>
</tbody>
</table>
<!--<i class="info text-muted"><i class="fa fa-info-circle"></i> Less recent experience condensed for brevity.</i>-->
<table class="experience experience--condensed">
<tr>
<td class="employer"><h4>Washington Post</h4></td>
<td class="title">Sr. Full-Stack Engineer <i class="text-muted"><i class="far fa-clock"></td>
<td class="span">9/19 - 12/19</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">React, Redux, Node, Express, Flow, SCSS, Jest</i></td></tr><td colspan="3"><ul><li>Implemented new features in their flagship SaaS content publishing platform using React and Redux</li><li>Mentored junior engineers in web development best practices</li></ul><br></td>
</tr>
<tr>
<td class="employer"><h4>BlueCrew</h4></td>
<td class="title">Full-Stack Engineer II</td>
<td class="span">1/19 - 9/19</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">React, Redux, Node, Flow, Express, Sequelize, Jest, Mocha</i></td>
</tr>
<tr>
<td colspan="3">
<ul>
<li>Implemented designs for employee management UI using React, Redux, and Styled Components</li>
<!--<li>Developed greenfield, RESTful API using Node, Express, and Sequelize</li>-->
<li>Mentored junior developers, developed best practices and implemented coding standards</li>
</ul>
<br>
</td>
</tr>
<tr>
<td class="employer"><h4>Trōv</h4></td>
<td class="title">Web Engineer</td>
<td class="span">9/17 - 8/18</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">React, Redux, Node, Flow, SCSS, Mocha, Angular</i></td>
</tr>
<tr>
<td colspan="3">
<ul>
<li>Worked with multiple teams to bring the Trōv web client to the US</li>
<li>Implemented features in Trov’s web client to keep parity with Android and iOS apps</li>
</ul>
<br>
</td>
</tr>
<tr><td colspan="3"><i class="info text-muted"><i class="fa fa-info-circle"></i> Less recent experience condensed for brevity.</i><br><br></td></tr>
<tr>
<td class="employer"><h4>Guaranteed Rate</h4></td>
<td class="title">Sr. Software Engineer, Front-End</td>
<td class="span">1/16 - 9/17</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">ClojureScript, re-frame, jQuery, Bootstrap, SCSS, Aurelia, Stylus, Pug</i></td>
</tr>
<!--<tr>
<td colspan="3">
<ul>
<li>Architected and developed consumer-facing online mortgage applications</li>
<li>Collaborated with team members to define and implement RESTful APIs and responsive designs/UX</li>
</ul>
<br>
</td>
</tr>-->
<tr><td colspan="3"><br></td></tr>
<tr>
<td class="employer"><h4>Rush Street Gaming</h4></td>
<td class="title">Software Engineer, Full-Stack</td>
<td class="span">2/15 - 1/16</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">jQuery, Bootstrap, Knockout, Pug, LESS, IO.js, Koa, PostgreSQL</i></td>
</tr>
<!--<tr>
<td colspan="3">
<ul>
<li>Architected and developed business analysis apps using full-stack JS and responsive UIs</li>
<li>Developed proof-of-concepts to evaluate back-end and database technologies</li>
</ul>
<br>
</td>
</tr>-->
<tr><td colspan="3"><br></td></tr>
<tr>
<td class="employer"><h4>Amazon</h4></td>
<td class="title">Web Development Engineer II</td>
<td class="span">1/14 - 2/15</td>
</tr>
<tr>
<td colspan="3" class="tech"><i class="text-muted">jQuery, Pug, LESS, Knockout, Node</i></td>
</tr>
<!--<tr>
<td colspan="3">
<ul>
<li>Maintained retail website code and assets across multiple locales, markets, and devices</li>
<li>Designed and implemented web-based and command-line developer tools</li>
</ul>
<br>
</td>
</tr>-->
</table>
    
<br />
<br />
<br />
<br />
<!--
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
-->
<i class="info text-muted"><i class="fa fa-info-circle"></i> Further experience ('05 - '14), references, and education available at [linkedin.com/in/jszpila](https://www.linkedin.com/in/jszpila)</i><br>
<table class="footer">
<tr class="text-muted">
<td><i class="info"><i class="fa fa-tags"></i> #webdev #frontend #fed #fullstack</i></td>
<td style="text-align: center;"></td>
<td style="text-align: right;"><i class="info text-muted">v4.20.1 01.13.2025 11:22 CST</i></td></tr></table>
