webpackJsonp([15], {
  271: function(e, t, n) {
    'use strict';
    function o(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function i(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
    }
    function a(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
    var r,
      s,
      l,
      u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function(t, n, o) {
          return n && e(t.prototype, n), o && e(t, o), t;
        };
      })(),
      p = (function(e, t) {
        return Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        );
      })(
        [
          '\n      <x-layout title="link()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ],
        [
          '\n      <x-layout title="link()">\n        <x-marked src="',
          '"></x-marked>\n      </x-layout>\n    '
        ]
      );
    n(26), n(30);
    var f = n(7),
      c = n(22),
      h =
        (0, f.define)(
          ((l = s = (function(e) {
            function t() {
              return (
                o(this, t),
                i(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).apply(
                    this,
                    arguments
                  )
                )
              );
            }
            return (
              a(t, e),
              u(t, [
                {
                  key: 'render',
                  value: function() {
                    return this.$(
                      p,
                      "\n          The `link()` function automatically links any element that has a `value` property, using an event, back to your component's state, or any other object.\n\n          For example, if I have an input element that I want to link back to some internal state, I can do so in a couple lines of code. Let's first build out our component, then we'll link it up. We'll use [LitHTML](https://github.com/PolymerLabs/lit-html) for this example.\n\n          ```js\n          import { html } from 'lit-html/lib/lit-extended';\n          import { link, withComponent } from 'skatejs';\n          import withLitHtml from '@skatejs/renderer-lit-html';\n\n          export default class extends withComponent(withLitHtml()) {\n            render({ state }) {\n              return html`\n                <input\n                  name=\"email\"\n                  on-change=\"${link(this)}\"\n                  type=\"email\"\n                  value=\"${state.email}\"\n                >\n              `;\n            }\n          }\n          ```\n\n          If we look at the above example, we'll notice a few things. First, you must pass in the element as the first argument to `link()`. This is so that it can update the corresponding identifier you specify as the second argument, if you do. If you don't specify the second argument, it defaults to \"state.\", which means:\n\n          > Update `state` on the element using the name of the input as the key for `state`. So: update `state.email`.\n\n          The `link()` function will update the `state` property on the element so that it triggers an update, as opposed to reaching into `state` and updating the corresponding key directly.\n\n          ### Using a different name\n\n          If you want to use a different name for your `state` key, all you have to do is specify it after the dot separator. For example:\n\n          ```js\n          link(this, 'state.customName');\n          ```\n\n          ### Using a completely different property\n\n          As seen above, if you want a custom name, you've got to specify the `state` prefix. So all we need to do if we want to target a different property, or sub property is to do something like:\n\n          ```js\n          link(this, 'someProp');\n          link(this, 'props.someProp');\n          ```\n        "
                    );
                  }
                }
              ]),
              t
            );
          })(c.Component)),
          (s.is = 'x-pages-utils-link'),
          (r = l))
        ) || r;
    t.default = h;
  }
});
