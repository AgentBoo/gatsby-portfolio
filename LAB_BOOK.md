## Lab-book notes

**Don't forget**

> build `gatsby build`
> local production server `gatsby serve`
> development server `gatsby develop`

**Todo**
1. Peekaboo component with mouse tracking 
2. `about.css` spacer is currently 1.333rem, check if correct

<br/>

#### Project design 
1. Reuse `Gatsby` boilerplate 
2. Text content is stored as a `.json` file in `/l10n`  
3. `Page` components are rendered inside the `Layout` component 
4. `Layout` renders children into a `div` wrapper styled with a `page-grid` class 
5. Reusable components are exported from `/components/index.js` (taking advantage of how `npm` resolves file paths)
6. Reusable unique components are exported as `default` 
7. Reusable utility components are exported as is 

<br/>

#### Color palette

```sh
--white: #fdfffc;
--grey: #757780;
--lightgrey: #f2f2f3;
--black: #2f243a;
--pale: #f7f8f9;
--pink: #ee4266;
```

Additional colors that I might consider using in the future:
```sh 
--paper: #f8f4e3;
--lightbeige: #c69f89;
--brightyellow: #ffe74c;
--sunflower: #fed766;
--mustard: #e3c567;
--inchworm: #9be564;
--shamrock: #5bba6f;
--keylime: #e2eb98;
--lightblue: #9ae5e6;
--robin: #93e1d8;
```

<br/>

#### Notes 

1. Using 3rd part scripts
https://github.com/gatsbyjs/gatsby/issues/6299
https://www.w3schools.com/tags/att_script_defer.asp

2. Stop worrying about components that won't change anymore 
```
layout.js 
layout.css 

// pages
404.js 
404.css 

about.js 

index.js

// utilities 
button.js
formattedText.js
glyph.js
seo.js

// subcomponents 
header.js
footer.js

// components
about.js
introduction.js
projects.js 

// components with custom text content
updates.js
```


<br/>

#### Issues 

**1. Flickering of default fonts on initial load** 
Issue: On initial load, the page displays the default fonts, and then displays the custom fonts immediately after, which results in the annoying 'flickering' effect

Fix: I 'fixed' this by preloading google fonts using `gatsby-plugin-prefetch-google-fonts`

Similar issue: Flickering of unstyled components [1],[2]


**2. Site title (anchor) overflows the parent container**
Issue: Parent container does not expand with the expading child. 

Fix: `display: inline-block` [3],[4]

<br/>

Links: 

[1]: https://github.com/gatsbyjs/gatsby/issues/5667
[2]: https://imgur.com/cU8LQvv
[3]: https://stackoverflow.com/questions/18585069/why-anchor-tag-does-not-take-height-and-width-of-its-containing-element
[4]: https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block