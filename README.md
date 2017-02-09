#Nature Global Refugees

Interactive graphic for @naturenews

[Circular migration plot](http://www.global-refugees.info/) adapted for nature.com/news

## Collect and compile data

	sh compile-data.sh

You will need [csvkit](https://csvkit.readthedocs.io/en/749/) and [circular-migration-plot](https://github.com/null2/circular-migration-plot).

## Build and serve

	gulp

## Dist

	gulp dist

## gh-pages

	git subtree push --prefix build origin gh-pages