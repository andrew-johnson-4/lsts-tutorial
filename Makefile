mdBook:
	rm -rf docs
	mdbook build --dest-dir docs
	cd docs; npx sscli --base https://andrew-johnson-4.github.io/lsts-tutorial/
