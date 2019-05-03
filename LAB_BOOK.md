#### Notes 

**1. Using 3rd part scripts**
https://github.com/gatsbyjs/gatsby/issues/6299
https://www.w3schools.com/tags/att_script_defer.asp

<br/>

#### Issues 

**1. Flickering of old fonts on initial load** 
Fix: I 'fixed' this by preloading google fonts using `gatsby-plugin-prefetch-google-fonts`

Similar issue: Flickering of unstyled components  
https://github.com/gatsbyjs/gatsby/issues/5667
https://imgur.com/cU8LQvv


**2. Site title (anchor) overflows the parent container**
Fix: `display: inline-block`
https://stackoverflow.com/questions/18585069/why-anchor-tag-does-not-take-height-and-width-of-its-containing-element
https://stackoverflow.com/questions/8969381/what-is-the-difference-between-display-inline-and-display-inline-block
    
<br/>
 
#### Misc
**1. Responsive breakpoints**
https://getbootstrap.com/docs/4.3/layout/overview/

**2. Additional colors that I might consider using in the future**
``` 
--paper: #f8f4e3;
--brightyellow: #ffe74c;
--sunflower: #fed766;
--mustard: #e3c567;
--inchworm: #9be564;
--shamrock: #5bba6f;
--keylime: #e2eb98;
--blue: #a1b5d8;
--lightblue: #9ae5e6;
--lightbeige: #c69f89;
--chestnut: #d5aca9;
```

<br/>

**Don't forget**

> development server `gatsby develop`
> build script `gatsby build`
> serve prod build locally `gatsby serve`