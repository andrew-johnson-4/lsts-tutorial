mdBook:
	rm -rf docs
	mdbook build --dest-dir docs

sitemap:
	cd docs; npx sscli --base https://andrew-johnson-4.github.io/lsts-tutorial/
	sed -i 's/<\/loc>/.html<\/loc>/g' docs/sitemap.xml
