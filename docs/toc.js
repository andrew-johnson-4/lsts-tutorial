// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">User Guide</li><li class="chapter-item expanded "><a href="guide/installation.html"><strong aria-hidden="true">1.</strong> Installation</a></li><li class="chapter-item expanded "><a href="guide/syntax.html"><strong aria-hidden="true">2.</strong> Syntax Overview</a></li><li class="chapter-item expanded affix "><li class="part-title">Tutorial</li><li class="chapter-item expanded "><a href="tutorial/terms.html"><strong aria-hidden="true">3.</strong> Terms</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/values.html"><strong aria-hidden="true">3.1.</strong> Value Expressions</a></li><li class="chapter-item expanded "><a href="tutorial/blocks.html"><strong aria-hidden="true">3.2.</strong> Block Expressions</a></li><li class="chapter-item expanded "><a href="tutorial/compounds.html"><strong aria-hidden="true">3.3.</strong> Compound Values</a></li><li class="chapter-item expanded "><a href="tutorial/quantifiers.html"><strong aria-hidden="true">3.4.</strong> Quantified Values</a></li><li class="chapter-item expanded "><a href="tutorial/fallible_arrows.html"><strong aria-hidden="true">3.5.</strong> Fallible Arrows</a></li></ol></li><li class="chapter-item expanded "><a href="tutorial/types.html"><strong aria-hidden="true">4.</strong> Types</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/value_types.html"><strong aria-hidden="true">4.1.</strong> Value Types</a></li><li class="chapter-item expanded "><a href="tutorial/struct_types.html"><strong aria-hidden="true">4.2.</strong> Structured Types</a></li><li class="chapter-item expanded "><a href="tutorial/union_types.html"><strong aria-hidden="true">4.3.</strong> Union Types</a></li><li class="chapter-item expanded "><a href="tutorial/parameterized_types.html"><strong aria-hidden="true">4.4.</strong> Parameterized Types</a></li><li class="chapter-item expanded "><a href="tutorial/type_invariants.html"><strong aria-hidden="true">4.5.</strong> Type Invariants</a></li><li class="chapter-item expanded "><a href="tutorial/constant_types.html"><strong aria-hidden="true">4.6.</strong> Constant Types</a></li><li class="chapter-item expanded "><a href="tutorial/unification.html"><strong aria-hidden="true">4.7.</strong> Type Unification</a></li></ol></li><li class="chapter-item expanded "><a href="tutorial/statements.html"><strong aria-hidden="true">5.</strong> Statements</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/theorem_statements.html"><strong aria-hidden="true">5.1.</strong> Theorem Statements</a></li><li class="chapter-item expanded "><a href="tutorial/axiom_statements.html"><strong aria-hidden="true">5.2.</strong> Axiom Statements</a></li></ol></li><li class="chapter-item expanded "><a href="tutorial/kinds.html"><strong aria-hidden="true">6.</strong> Kinds</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tutorial/normal_kinds.html"><strong aria-hidden="true">6.1.</strong> Normal Kinds</a></li><li class="chapter-item expanded "><a href="tutorial/operations_on_kinds.html"><strong aria-hidden="true">6.2.</strong> Operations on Kinds</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Examples</li><li class="chapter-item expanded "><a href="examples/examples.html"><strong aria-hidden="true">7.</strong> Programs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="examples/right_triangles.html"><strong aria-hidden="true">7.1.</strong> Right Triangles</a></li><li class="chapter-item expanded "><a href="examples/goto_statement_considered_harmful.html"><strong aria-hidden="true">7.2.</strong> Jump Control Flow</a></li><li class="chapter-item expanded "><a href="examples/batteries_not_included.html"><strong aria-hidden="true">7.3.</strong> Batteries Not Included</a></li><li class="chapter-item expanded "><a href="examples/l1ir.html"><strong aria-hidden="true">7.4.</strong> L1 Intermediate Representation</a></li></ol></li><li class="chapter-item expanded "><a href="proof/proofs.html"><strong aria-hidden="true">8.</strong> Proofs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="proof/rules.html"><strong aria-hidden="true">8.1.</strong> Rules Based Logic</a></li><li class="chapter-item expanded "><a href="proof/trivial.html"><strong aria-hidden="true">8.2.</strong> Trivial Proofs</a></li><li class="chapter-item expanded "><a href="proof/sqrt2.html"><strong aria-hidden="true">8.3.</strong> Irrationality of the Square Root of Two</a></li><li class="chapter-item expanded "><a href="proof/primes.html"><strong aria-hidden="true">8.4.</strong> Infinitude of Primes</a></li><li class="chapter-item expanded "><a href="proof/strict_mode.html"><strong aria-hidden="true">8.5.</strong> Strictly Verified Proofs</a></li><li class="chapter-item expanded "><a href="proof/justified_algebra.html"><strong aria-hidden="true">8.6.</strong> Justified Algebraic Manipulation</a></li><li class="chapter-item expanded "><a href="proof/skolemization.html"><strong aria-hidden="true">8.7.</strong> Skolemization</a></li><li class="chapter-item expanded "><a href="proof/most_general_unifier.html"><strong aria-hidden="true">8.8.</strong> Most General Unifier</a></li><li class="chapter-item expanded "><a href="proof/implication_unifier.html"><strong aria-hidden="true">8.9.</strong> Implication Unifier</a></li></ol></li><li class="chapter-item expanded "><a href="meta/meta.html"><strong aria-hidden="true">9.</strong> Meta Programming</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="meta/ast.html"><strong aria-hidden="true">9.1.</strong> Traversing the AST</a></li><li class="chapter-item expanded "><a href="meta/types.html"><strong aria-hidden="true">9.2.</strong> Types and Kinds</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Reference Guide</li><li class="chapter-item expanded "><a href="cli/index.html"><strong aria-hidden="true">10.</strong> Command Line Tool</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cli/lsts_parse.html"><strong aria-hidden="true">10.1.</strong> lsts parse</a></li><li class="chapter-item expanded "><a href="cli/lsts_check.html"><strong aria-hidden="true">10.2.</strong> lsts check</a></li><li class="chapter-item expanded "><a href="cli/lsts_build.html"><strong aria-hidden="true">10.3.</strong> lsts build</a></li><li class="chapter-item expanded "><a href="cli/lsts_run.html"><strong aria-hidden="true">10.4.</strong> lsts run</a></li></ol></li><li class="chapter-item expanded "><a href="validity/soundness.html"><strong aria-hidden="true">11.</strong> Soundness</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="validity/kinds.html"><strong aria-hidden="true">11.1.</strong> Kinded Proofs</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Quantitative Information</li><li class="chapter-item expanded "><a href="perf/statistics.html"><strong aria-hidden="true">12.</strong> Performance</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="misc/contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
