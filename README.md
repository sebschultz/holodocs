# holocaustdocumentaries
<p>Thesis on Women's Representation in Holocaust Documentaries, written and defended in 2015 by Sebastian Schultz to fulfill the requirements of departmental honours in the field of Humanities. Thesis advisor Dr. Ann Taylor Allen, with readers Drs Michael Williams and Michael Johmann.</p>

<p>I wanted to create a more accessible way for people to read/view the work, with html markup compatable with screen reading technology. Footnote citations also jump down to the reference and allow the user to jump back up to the text.</p>

<p>I experimented with an accordian-style layout but disliked the look, and the accordian popout only worked with mouse, not keyboard, a design that went against the accesiblity I wanted in this particular project. I also ultimately decided to include less of the actual essay in the page, simply because the essay needs to be be rewritten in such a way to make it more web-friendly (more graphic content, more interactive for users).</p>

<p>My custom Javascript introduces a "night mode" that flips the background/text colors and turns it off.</p>

<p>JQuery: finds/selects the .onbutton element (the "on" button for night mode); action "click" selects the various elements and changes the css (makes text white/red and background black); then JQuery: finds/selects the .offbutton element (to undo the styling of the night mode); action "click" selects various elements and removes the style attributes.</p>

<p>I over-ride bootstrap's CSS rules with my own selectors. I add some padding to the h1 to bring down my content a little in the jumbotron, change the size of the h2 to better fit the page, and indent the p elements for readability. I target the class elements .blockquote, .caption, and .footnotes to change color, add padding, and align the text.</p>

<p>Future development could include: switching the two-button "night mode" with a sleek toggle and stickying it to the top of the viewport, adding the meat of the thesis into the page after extensive rewrites (probably as a multipage document, and potentially adding video clips to supplement the later parts of the essay.</p>
