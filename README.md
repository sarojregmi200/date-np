# date-np
Simple & minimal Nepali date picker that just works.

> # Back story:
> Why create this package?
> Because I was looking for a simple & minimal Nepali date picker that just works.
> Found some but either they were bit qworky had bugs or they were not maintained.
> So I decided to create my own. 
> During my work at [Bright Software] (https://brightit.com.np)

## Installation
### bun:
```bash
bunx jsr add @bright/date-np
```

### npm:
```bash
npx jsr install @bright/date-np
```

 TODO: 
This project is still in it's early stages it's a work in progress.
- [x] Add docs 
    - [x] For documentation 
    - [x] For publishing to jsr Not going this route 
- [x] Setting up test cases for conversion functions.
- [x] Writing basic conversion functions and making nepali date work.
    - [x] Conversion from AD to BS date. 
    - [x] Conversion from BS to AD date.
- [x] Add tests.
- [x] Date picker. (AD)
    - [x] month switching. 
    - [x] selection of date. 
    - [x] month selection. 
    - [x] year selection.
- [x] Date Picker (BS).
- [x] creating a input feild and using direction aware container for the picker.
- [ ] Creating path aliases.
- [x] Deciding on using date-fns or using custom functions. we are not going to use it.
      we will take inspiration but won't use it.
- [ ] Fixing and making the styles expandable and customizable.
- [ ] Fixing the scripts naming convention and scripts.
- [ ] Making error handling better. 
- [ ] Fixing the auto generated docs.
- [ ] Making the exports good and publishing to jsr.
- [ ] Publishing to npm.
- [ ] Creating a good enough landing page and hosting it on github pages.
- [ ] Creating contributing guidelines and design guidelines. 
- [ ] Creating a custom scrollbar.
