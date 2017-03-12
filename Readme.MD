## mQuery

> (mini)Query

I wrote this helper library to be an alternative of jQuery for me when I just want basic DOM operation and nothing fancy.

## In a glance

```javascript
$m('#element').toggleClass('active').text('text in element');
```


### What it can do

Instead of `$` in jQuery, you'll have to use `$m` for this.

`$m` is a method with uses [`Document.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) under the hood. It returns a NodeList the methods mentioned below can be chained to it.

It has support for some of most basic jQuery methods like:

- `eq`: Because `querySelectorAll` does not support `:eq` style selection so this method can be used for accessing element by index.

- `on`: Uses `addEventListener`. Does not support namespacing for events.

- `off`: Uses `removeEventListener`.
- `css`: Accepts a key-value object like jQuery. It also supports *underscore instead of hyphen* keys. e.g.:

```javascript
$m('#element').css({
  background_color: 'purple'
});
```
would actually apply `background-color` property.

- `show`: sets elements' `display` to `inline-block`.

- `hide`: sets elements' `display` to `none`.

- `data`: Like jQuery, it can access attributes with 'data-' prefix. But it *does not* use variable to store `data`, like jQuery does.

- `attr`:
- `removeAttr`:
- `addClass`
- `removeClass`
- `toggleClass`
- `hasClass`:
- `val`:
- `html`
- `text`

### What it can't do

Anything thats not mentioned above. Like animations, ajax etc.
