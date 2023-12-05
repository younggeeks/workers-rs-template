// .wrangler/tmp/bundle-x7EIl0/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// ../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}

// build/worker/shim.mjs
import z from "./f5fee1a7df8aac9d67c1a48320cf402a54236316-index.wasm";
import Vt from "./f5fee1a7df8aac9d67c1a48320cf402a54236316-index.wasm";
var D = Object.defineProperty;
var R = (e, t) => {
  for (var n in t)
    D(e, n, { get: t[n], enumerable: true });
};
var g = {};
R(g, { IntoUnderlyingByteSource: () => M, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => q, MinifyConfig: () => v, PipeOptions: () => L, PolishConfig: () => X, QueuingStrategy: () => C, R2Range: () => S, ReadableStreamGetReaderOptions: () => $, RequestRedirect: () => Y, __wbg_buffer_4e79326814bdd393: () => ut, __wbg_buffer_55ba7a6b1b92e2ac: () => Lt, __wbg_byobRequest_08c18cee35def1f4: () => rt, __wbg_byteLength_5299848ed3264181: () => bt, __wbg_byteOffset_b69b0a07afccce19: () => ft, __wbg_call_587b30eea3e09332: () => Mt, __wbg_cause_52959bcad93f9e0f: () => Ot, __wbg_cf_703652f0d2c5b8d1: () => gt, __wbg_close_da7e6fb9d9851e5a: () => ct, __wbg_close_e9110ca16e2567db: () => st, __wbg_enqueue_d71a1a518e21f5c3: () => it, __wbg_error_a7e23606158b68b9: () => dt, __wbg_headers_1eff4f53324496e6: () => xt, __wbg_instanceof_Error_fac23a8832b241da: () => jt, __wbg_length_0aab7ffd65ad19ed: () => $t, __wbg_method_e15eb9cf1c32cdbb: () => yt, __wbg_new_143b41b4342650bb: () => at, __wbg_new_2b55e405e4af4986: () => Tt, __wbg_new_2b6fea4ea03b1b95: () => kt, __wbg_new_87297f22973157c8: () => Et, __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b: () => Ct, __wbg_newwithlength_89eeca401d8918c2: () => Ft, __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf: () => wt, __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f: () => ht, __wbg_newwithoptstrandinit_ff70839f3334d3aa: () => lt, __wbg_resolve_ae38ad63c43ff98b: () => qt, __wbg_respond_8fadc5f5c9d95422: () => _t, __wbg_set_07da13cc24b69217: () => Wt, __wbg_set_3698e3ca519b3c3c: () => St, __wbg_set_76353df4722f4954: () => pt, __wbg_then_8df675b8bb5d5e3c: () => vt, __wbg_toString_506566b763774a16: () => At, __wbg_url_3325e0ef088003ca: () => mt, __wbg_view_231340b0dd8a2484: () => ot, __wbindgen_cb_drop: () => Q, __wbindgen_closure_wrapper649: () => It, __wbindgen_debug_string: () => Dt, __wbindgen_memory: () => zt, __wbindgen_number_new: () => et, __wbindgen_object_clone_ref: () => nt, __wbindgen_object_drop_ref: () => G, __wbindgen_string_get: () => tt, __wbindgen_string_new: () => Z, __wbindgen_throw: () => Rt, fetch: () => F, getMemory: () => N });
var I = new WebAssembly.Instance(z, { "./index_bg.js": g });
var r = I.exports;
function N() {
  return r.memory;
}
var H = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var W = new H("utf-8", { ignoreBOM: true, fatal: true });
W.decode();
var x = null;
function j() {
  return (x === null || x.byteLength === 0) && (x = new Uint8Array(r.memory.buffer)), x;
}
function w(e, t) {
  return e = e >>> 0, W.decode(j().subarray(e, e + t));
}
var d = new Array(128).fill(void 0);
d.push(void 0, null, true, false);
var m = d.length;
function i(e) {
  m === d.length && d.push(d.length + 1);
  let t = m;
  return m = d[t], d[t] = e, t;
}
function s(e) {
  return d[e];
}
function P(e) {
  e < 132 || (d[e] = m, m = e);
}
function p(e) {
  let t = s(e);
  return P(e), t;
}
var h = 0;
var U = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var E = new U("utf-8");
var J = typeof E.encodeInto == "function" ? function(e, t) {
  return E.encodeInto(e, t);
} : function(e, t) {
  let n = E.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function O(e, t, n) {
  if (n === void 0) {
    let f = E.encode(e), y = t(f.length) >>> 0;
    return j().subarray(y, y + f.length).set(f), h = f.length, y;
  }
  let _ = e.length, o = t(_) >>> 0, u = j(), c = 0;
  for (; c < _; c++) {
    let f = e.charCodeAt(c);
    if (f > 127)
      break;
    u[o + c] = f;
  }
  if (c !== _) {
    c !== 0 && (e = e.slice(c)), o = n(o, _, _ = c + e.length * 3) >>> 0;
    let f = j().subarray(o + c, o + _), y = J(e, f);
    c += y.written;
  }
  return h = c, o;
}
function a(e) {
  return e == null;
}
var k = null;
function b() {
  return (k === null || k.byteLength === 0) && (k = new Int32Array(r.memory.buffer)), k;
}
function A(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    let o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    let o = e.length, u = "[";
    o > 0 && (u += A(e[0]));
    for (let c = 1; c < o; c++)
      u += ", " + A(e[c]);
    return u += "]", u;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), _;
  if (n.length > 1)
    _ = n[1];
  else
    return toString.call(e);
  if (_ == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : _;
}
function V(e, t, n, _) {
  let o = { a: e, b: t, cnt: 1, dtor: n }, u = (...c) => {
    o.cnt++;
    let f = o.a;
    o.a = 0;
    try {
      return _(f, o.b, ...c);
    } finally {
      --o.cnt === 0 ? r.__wbindgen_export_2.get(o.dtor)(f, o.b) : o.a = f;
    }
  };
  return u.original = o, u;
}
function B(e, t, n) {
  r.wasm_bindgen__convert__closures__invoke1_mut__h9d5865a72365f202(e, t, i(n));
}
function F(e, t, n) {
  let _ = r.fetch(i(e), i(t), i(n));
  return p(_);
}
function l(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    r.__wbindgen_exn_store(i(n));
  }
}
function K(e, t, n, _) {
  r.wasm_bindgen__convert__closures__invoke2_mut__h1b7ae6a1ad4c95bf(e, t, i(n), i(_));
}
var X = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Y = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var M = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t, n;
    try {
      let u = r.__wbindgen_add_to_stack_pointer(-16);
      r.intounderlyingbytesource_type(u, this.__wbg_ptr);
      var _ = b()[u / 4 + 0], o = b()[u / 4 + 1];
      return t = _, n = o, w(_, o);
    } finally {
      r.__wbindgen_add_to_stack_pointer(16), r.__wbindgen_free(t, n);
    }
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>> 0;
  }
  start(t) {
    r.intounderlyingbytesource_start(this.__wbg_ptr, i(t));
  }
  pull(t) {
    let n = r.intounderlyingbytesource_pull(this.__wbg_ptr, i(t));
    return p(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = r.intounderlyingsink_write(this.__wbg_ptr, i(t));
    return p(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = r.intounderlyingsink_close(t);
    return p(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), _ = r.intounderlyingsink_abort(n, i(t));
    return p(_);
  }
};
var q = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = r.intounderlyingsource_pull(this.__wbg_ptr, i(t));
    return p(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(t);
  }
};
var v = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(t);
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.__wbg_ptr) !== 0;
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.__wbg_ptr, t);
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.__wbg_ptr) !== 0;
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.__wbg_ptr, t);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.__wbg_ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.__wbg_ptr, t);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return r.pipeoptions_preventClose(this.__wbg_ptr) !== 0;
  }
  get preventCancel() {
    return r.pipeoptions_preventCancel(this.__wbg_ptr) !== 0;
  }
  get preventAbort() {
    return r.pipeoptions_preventAbort(this.__wbg_ptr) !== 0;
  }
  get signal() {
    let t = r.pipeoptions_signal(this.__wbg_ptr);
    return p(t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return r.queuingstrategy_highWaterMark(this.__wbg_ptr);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_offset(_, this.__wbg_ptr);
      var t = b()[_ / 4 + 0], n = b()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    r.__wbg_set_r2range_offset(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
  get length() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_length(_, this.__wbg_ptr);
      var t = b()[_ / 4 + 0], n = b()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    r.__wbg_set_r2range_length(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
  get suffix() {
    try {
      let _ = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_suffix(_, this.__wbg_ptr);
      var t = b()[_ / 4 + 0], n = b()[_ / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    r.__wbg_set_r2range_suffix(this.__wbg_ptr, !a(t), a(t) ? 0 : t);
  }
};
var $ = class {
  __destroy_into_raw() {
    let t = this.__wbg_ptr;
    return this.__wbg_ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = r.readablestreamgetreaderoptions_mode(this.__wbg_ptr);
    return p(t);
  }
};
function Z(e, t) {
  let n = w(e, t);
  return i(n);
}
function G(e) {
  p(e);
}
function Q(e) {
  let t = p(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function tt(e, t) {
  let n = s(t), _ = typeof n == "string" ? n : void 0;
  var o = a(_) ? 0 : O(_, r.__wbindgen_malloc, r.__wbindgen_realloc), u = h;
  b()[e / 4 + 1] = u, b()[e / 4 + 0] = o;
}
function et(e) {
  return i(e);
}
function nt(e) {
  let t = s(e);
  return i(t);
}
function rt(e) {
  let t = s(e).byobRequest;
  return a(t) ? 0 : i(t);
}
function _t(e, t) {
  s(e).respond(t >>> 0);
}
function ot(e) {
  let t = s(e).view;
  return a(t) ? 0 : i(t);
}
function st(e) {
  s(e).close();
}
function it(e, t) {
  s(e).enqueue(s(t));
}
function ct(e) {
  s(e).close();
}
function ut(e) {
  let t = s(e).buffer;
  return i(t);
}
function ft(e) {
  return s(e).byteOffset;
}
function bt(e) {
  return s(e).byteLength;
}
function gt(e) {
  let t = s(e).cf;
  return a(t) ? 0 : i(t);
}
function at() {
  return l(function() {
    let e = new Headers();
    return i(e);
  }, arguments);
}
function pt() {
  return l(function(e, t, n, _, o) {
    s(e).set(w(t, n), w(_, o));
  }, arguments);
}
function dt(e) {
  console.error(s(e));
}
function wt() {
  return l(function(e, t) {
    let n = new Response(s(e), s(t));
    return i(n);
  }, arguments);
}
function lt() {
  return l(function(e, t, n) {
    let _ = new Response(e === 0 ? void 0 : w(e, t), s(n));
    return i(_);
  }, arguments);
}
function ht() {
  return l(function(e, t) {
    let n = new Response(s(e), s(t));
    return i(n);
  }, arguments);
}
function yt(e, t) {
  let n = s(t).method, _ = O(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = h;
  b()[e / 4 + 1] = o, b()[e / 4 + 0] = _;
}
function mt(e, t) {
  let n = s(t).url, _ = O(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = h;
  b()[e / 4 + 1] = o, b()[e / 4 + 0] = _;
}
function xt(e) {
  let t = s(e).headers;
  return i(t);
}
function kt() {
  let e = new Object();
  return i(e);
}
function jt(e) {
  let t;
  try {
    t = s(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function Et(e, t) {
  let n = new Error(w(e, t));
  return i(n);
}
function Ot(e) {
  let t = s(e).cause;
  return i(t);
}
function At(e) {
  let t = s(e).toString();
  return i(t);
}
function Mt() {
  return l(function(e, t, n) {
    let _ = s(e).call(s(t), s(n));
    return i(_);
  }, arguments);
}
function Tt(e, t) {
  try {
    var n = { a: e, b: t }, _ = (u, c) => {
      let f = n.a;
      n.a = 0;
      try {
        return K(f, n.b, u, c);
      } finally {
        n.a = f;
      }
    };
    let o = new Promise(_);
    return i(o);
  } finally {
    n.a = n.b = 0;
  }
}
function qt(e) {
  let t = Promise.resolve(s(e));
  return i(t);
}
function vt(e, t) {
  let n = s(e).then(s(t));
  return i(n);
}
function Lt(e) {
  let t = s(e).buffer;
  return i(t);
}
function Ct(e, t, n) {
  let _ = new Uint8Array(s(e), t >>> 0, n >>> 0);
  return i(_);
}
function St(e, t, n) {
  s(e).set(s(t), n >>> 0);
}
function $t(e) {
  return s(e).length;
}
function Ft(e) {
  let t = new Uint8Array(e >>> 0);
  return i(t);
}
function Wt() {
  return l(function(e, t, n) {
    return Reflect.set(s(e), s(t), s(n));
  }, arguments);
}
function Dt(e, t) {
  let n = A(s(t)), _ = O(n, r.__wbindgen_malloc, r.__wbindgen_realloc), o = h;
  b()[e / 4 + 1] = o, b()[e / 4 + 0] = _;
}
function Rt(e, t) {
  throw new Error(w(e, t));
}
function zt() {
  let e = r.memory;
  return i(e);
}
function It(e, t, n) {
  let _ = V(e, t, 88, B);
  return i(_);
}
var Bt = { fetch: F, scheduled: void 0, queue: void 0 };

// ../../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
var jsonError = async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
};
var middleware_miniflare3_json_error_default = jsonError;
var wrap = void 0;

// .wrangler/tmp/bundle-x7EIl0/middleware-insertion-facade.js
var envWrappers = [wrap].filter(Boolean);
var facade = {
  ...Bt,
  envWrappers,
  middleware: [
    middleware_miniflare3_json_error_default,
    ...Bt.middleware ? Bt.middleware : []
  ].filter(Boolean)
};
var middleware_insertion_facade_default = facade;

// .wrangler/tmp/bundle-x7EIl0/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof __Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
var __facade_modules_fetch__ = function(request, env, ctx) {
  if (middleware_insertion_facade_default.fetch === void 0)
    throw new Error("Handler does not export a fetch() function.");
  return middleware_insertion_facade_default.fetch(request, env, ctx);
};
function getMaskedEnv(rawEnv) {
  let env = rawEnv;
  if (middleware_insertion_facade_default.envWrappers && middleware_insertion_facade_default.envWrappers.length > 0) {
    for (const wrapFn of middleware_insertion_facade_default.envWrappers) {
      env = wrapFn(env);
    }
  }
  return env;
}
var registeredMiddleware = false;
var facade2 = {
  ...middleware_insertion_facade_default.tail && {
    tail: maskHandlerEnv(middleware_insertion_facade_default.tail)
  },
  ...middleware_insertion_facade_default.trace && {
    trace: maskHandlerEnv(middleware_insertion_facade_default.trace)
  },
  ...middleware_insertion_facade_default.scheduled && {
    scheduled: maskHandlerEnv(middleware_insertion_facade_default.scheduled)
  },
  ...middleware_insertion_facade_default.queue && {
    queue: maskHandlerEnv(middleware_insertion_facade_default.queue)
  },
  ...middleware_insertion_facade_default.test && {
    test: maskHandlerEnv(middleware_insertion_facade_default.test)
  },
  ...middleware_insertion_facade_default.email && {
    email: maskHandlerEnv(middleware_insertion_facade_default.email)
  },
  fetch(request, rawEnv, ctx) {
    const env = getMaskedEnv(rawEnv);
    if (middleware_insertion_facade_default.middleware && middleware_insertion_facade_default.middleware.length > 0) {
      if (!registeredMiddleware) {
        registeredMiddleware = true;
        for (const middleware of middleware_insertion_facade_default.middleware) {
          __facade_register__(middleware);
        }
      }
      const __facade_modules_dispatch__ = function(type, init) {
        if (type === "scheduled" && middleware_insertion_facade_default.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return middleware_insertion_facade_default.scheduled(controller, env, ctx);
        }
      };
      return __facade_invoke__(
        request,
        env,
        ctx,
        __facade_modules_dispatch__,
        __facade_modules_fetch__
      );
    } else {
      return __facade_modules_fetch__(request, env, ctx);
    }
  }
};
function maskHandlerEnv(handler) {
  return (data, env, ctx) => handler(data, getMaskedEnv(env), ctx);
}
var middleware_loader_entry_default = facade2;
export {
  M as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  q as IntoUnderlyingSource,
  v as MinifyConfig,
  L as PipeOptions,
  X as PolishConfig,
  C as QueuingStrategy,
  S as R2Range,
  $ as ReadableStreamGetReaderOptions,
  Y as RequestRedirect,
  ut as __wbg_buffer_4e79326814bdd393,
  Lt as __wbg_buffer_55ba7a6b1b92e2ac,
  rt as __wbg_byobRequest_08c18cee35def1f4,
  bt as __wbg_byteLength_5299848ed3264181,
  ft as __wbg_byteOffset_b69b0a07afccce19,
  Mt as __wbg_call_587b30eea3e09332,
  Ot as __wbg_cause_52959bcad93f9e0f,
  gt as __wbg_cf_703652f0d2c5b8d1,
  ct as __wbg_close_da7e6fb9d9851e5a,
  st as __wbg_close_e9110ca16e2567db,
  it as __wbg_enqueue_d71a1a518e21f5c3,
  dt as __wbg_error_a7e23606158b68b9,
  xt as __wbg_headers_1eff4f53324496e6,
  jt as __wbg_instanceof_Error_fac23a8832b241da,
  $t as __wbg_length_0aab7ffd65ad19ed,
  yt as __wbg_method_e15eb9cf1c32cdbb,
  at as __wbg_new_143b41b4342650bb,
  Tt as __wbg_new_2b55e405e4af4986,
  kt as __wbg_new_2b6fea4ea03b1b95,
  Et as __wbg_new_87297f22973157c8,
  Ct as __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b,
  Ft as __wbg_newwithlength_89eeca401d8918c2,
  wt as __wbg_newwithoptbuffersourceandinit_6c49960a834dd7cf,
  ht as __wbg_newwithoptreadablestreamandinit_d238e5b972c7b57f,
  lt as __wbg_newwithoptstrandinit_ff70839f3334d3aa,
  qt as __wbg_resolve_ae38ad63c43ff98b,
  _t as __wbg_respond_8fadc5f5c9d95422,
  Wt as __wbg_set_07da13cc24b69217,
  St as __wbg_set_3698e3ca519b3c3c,
  pt as __wbg_set_76353df4722f4954,
  vt as __wbg_then_8df675b8bb5d5e3c,
  At as __wbg_toString_506566b763774a16,
  mt as __wbg_url_3325e0ef088003ca,
  ot as __wbg_view_231340b0dd8a2484,
  Q as __wbindgen_cb_drop,
  It as __wbindgen_closure_wrapper649,
  Dt as __wbindgen_debug_string,
  zt as __wbindgen_memory,
  et as __wbindgen_number_new,
  nt as __wbindgen_object_clone_ref,
  G as __wbindgen_object_drop_ref,
  tt as __wbindgen_string_get,
  Z as __wbindgen_string_new,
  Rt as __wbindgen_throw,
  middleware_loader_entry_default as default,
  F as fetch,
  N as getMemory,
  Vt as wasmModule
};
//# sourceMappingURL=shim.js.map
