'use strict';
var d = Object.create;
var n = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var r = Object.getPrototypeOf,
  w = Object.prototype.hasOwnProperty;
var l = (o, e) => {
    for (var t in e) n(o, t, { get: e[t], enumerable: !0 });
  },
  a = (o, e, t, s) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of m(e))
        !w.call(o, i) &&
          i !== t &&
          n(o, i, { get: () => e[i], enumerable: !(s = u(e, i)) || s.enumerable });
    return o;
  };
var v = (o, e, t) => (
    (t = o != null ? d(r(o)) : {}),
    a(e || !o || !o.__esModule ? n(t, 'default', { value: o, enumerable: !0 }) : t, o)
  ),
  p = (o) => a(n({}, '__esModule', { value: !0 }), o);
var x = {};
l(x, { activate: () => C, deactivate: () => k });
module.exports = p(x);
var c = v(require('vscode'));
function C(o) {
  let e = c.commands.registerCommand('quitblock.quit', async () => {
    let t = await c.window.showQuickPick(['Quit', 'Close current window', 'Cancel'], {
      placeHolder: 'What would you like to do?',
    });
    t === 'Quit'
      ? await c.commands.executeCommand('workbench.action.quit')
      : t === 'Close current window' &&
        (await c.commands.executeCommand('workbench.action.closeWindow'));
  });
  o.subscriptions.push(e);
}
function k() {}
0 && (module.exports = { activate, deactivate });
