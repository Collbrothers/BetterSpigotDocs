

# Contributing

*Since BetterSpigotDocs & the mother organization [Blazify](https://github.com/Blazifyorg) are 100% open source we rely on contributors, and this is the place where you can become one* :tada:


## Instructions

1. Fork & clone the [repository](https://github.com/BlazifyOrg/BetterSpigotDocs)
2. Run `npm install`
3. Make sure to follow the [formats](#formats)
4. Make some magic :sparkles:
5. Push to your fork
6. Create a pull request [here](https://github.com/BlazifyOrg/BetterSpigotDocs/pulls) and assign the right [label](https://github.com/BlazifyOrg/BetterSpigotDocs/labels)
7. And like that you've done it! Maintainers will then verify your pr and either accept or we might ask you to change something etc 

## Formats

*Listed under here are all the types of formats that should be followed*

**NOTE:** To add your page and all its subheaders to the sidebar edit the config.js file located at docs/.vuepress/config.js and put your page in either the docs endpoint or guide endpoint 

#### New Markdown files 

New markdown files will create a new page; let's go with this page as an example: 

- File is located at BetterSpigotDocs/docs/guide/contributing.md 
- Every markdown file will become an endpoint 
- Always use BetterSpigotDocs links if they exist, otherwise point to the official documentation
- Please refrain from linking other sites than: official documentation, w3 and GitHub 
- Documentation is located at BetterSpigotDocs/docs/docs/
- Every file should always start with two empty lines and then a h1 header with the title
- File may also have a description in italic

#### Documentation Markdown files

- Documentation files will be formatted more exactly; Header - inheritance - description - table - properties - methods - events
- Try to anchor all the inherited classes/interfaces to the respective pages
- Events are linked to the `org.bukkit.event` version of your class
- Always provide an example of your method/event/property being used
- You should also include the return type and why it returns that (if not void)

