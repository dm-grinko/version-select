test:
	@echo "  Testing..."
	@node ./node_modules/.bin/mocha
	@echo "  Done!"
.PHONY: test