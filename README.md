Softshake's Website


# URLs : NO CONTENT OUTSIDE A YEAR

All HTML content has to be in a </YEAR/LG> directory.

For exemple, the association page for the 2013 edition has to be in the file `/2013/fr/association/index.html`.

This is to prevent several yearly editions.


# Technologies

## Github Pages

Workflow:

 - Modify sources
 - `git commit -m "Explanation of the modification"` 
 - `git push" (to put modifications on the server)
 - See online the modification !

You can also use the Github app : http://mac.github.com/ (or http://windows.github.com/)


## Markdowm (Text Templating)

Github Pages supporting Markdown as default text templating engine to facilitate development.

It is HTML compliant : 

 - Or you can write full HTML code
 - Or you can use Markdown synthax (http://daringfireball.net/projects/markdown/syntax)
 - Or both.


## kramdown

	$ sudo gem install kramdown


## Jekyll

As Github Pages uses Jekyll (a blog engine), our website too :

How run locally (to test for example) :

 - Install Ruby on rails
 - `gem install jekyll`
 - `jekyll serve` (from the softshake root source directory)
 - `localhost:4000` (from your favorite browser)

GitHub uses **version 2.2.0** of Jekyll (see [this page](https://pages.github.com/versions/) for the version that is currently running. To install this version:

	gem install jekyll -v 2.2.0

Configuration file: `_config.yml`.
