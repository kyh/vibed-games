var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@tamagui/adapt/dist/cjs/Adapt.js
var require_Adapt = __commonJS({
  "../../node_modules/@tamagui/adapt/dist/cjs/Adapt.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Adapt_exports = {};
    __export2(Adapt_exports, {
      Adapt: () => Adapt2,
      AdaptContents: () => AdaptContents,
      AdaptParentContext: () => AdaptParentContext,
      useAdaptParent: () => useAdaptParent2
    });
    module2.exports = __toCommonJS2(Adapt_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_react10 = require("react");
    var AdaptParentContext = (0, import_react10.createContext)(null);
    var AdaptContents = /* @__PURE__ */ __name((props) => {
      const context = (0, import_react10.useContext)(AdaptParentContext);
      if (!(context == null ? void 0 : context.Contents)) {
        throw new Error("Adapt not supported by this component");
      }
      return (0, import_react10.createElement)(context.Contents, props);
    }, "AdaptContents");
    AdaptContents["shouldForwardSpace"] = true;
    var useAdaptParent2 = /* @__PURE__ */ __name(({
      Contents
    }) => {
      const [when, setWhen] = (0, import_react10.useState)(null);
      const AdaptProvider = (0, import_react10.useMemo)(() => {
        const context = {
          Contents,
          setWhen
        };
        function AdaptProviderView(props) {
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AdaptParentContext.Provider, {
            value: context,
            children: props.children
          });
        }
        __name(AdaptProviderView, "AdaptProviderView");
        return AdaptProviderView;
      }, [Contents]);
      return {
        AdaptProvider,
        when
      };
    }, "useAdaptParent");
    var Adapt2 = (0, import_core27.withStaticProperties)(
      /* @__PURE__ */ __name(function Adapt22({ platform, when, children }) {
        const context = (0, import_react10.useContext)(AdaptParentContext);
        let enabled = !platform;
        if (platform === "touch")
          enabled = import_core27.isTouchable;
        if (platform === "native")
          enabled = !import_core27.isWeb;
        if (platform === "web")
          enabled = import_core27.isWeb;
        (0, import_core27.useIsomorphicLayoutEffect)(() => {
          if (!enabled)
            return;
          context == null ? void 0 : context.setWhen(when);
        }, [when, context, enabled]);
        if (!enabled) {
          return null;
        }
        return children;
      }, "Adapt2"),
      {
        Contents: AdaptContents
      }
    );
  }
});

// ../../node_modules/@tamagui/adapt/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/@tamagui/adapt/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Adapt(), module2.exports);
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var compose_refs_exports = {};
    __export2(compose_refs_exports, {
      composeRefs: () => composeRefs2,
      useComposedRefs: () => useComposedRefs2
    });
    module2.exports = __toCommonJS2(compose_refs_exports);
    var React13 = __toESM2(require("react"));
    function setRef2(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ;
        ref.current = value;
      }
    }
    __name(setRef2, "setRef");
    function composeRefs2(...refs) {
      return (node) => refs.forEach((ref) => setRef2(ref, node));
    }
    __name(composeRefs2, "composeRefs");
    function useComposedRefs2(...refs) {
      return React13.useCallback(composeRefs2(...refs), refs);
    }
    __name(useComposedRefs2, "useComposedRefs");
  }
});

// ../../node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_compose_refs(), module2.exports);
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var create_context_exports = {};
    __export2(create_context_exports, {
      createContext: () => createContext3,
      createContextScope: () => createContextScope3
    });
    module2.exports = __toCommonJS2(create_context_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var React13 = __toESM2(require("react"));
    function createContext3(rootComponentName, defaultContext) {
      const Context = React13.createContext(defaultContext);
      function Provider(props) {
        const { children, ...context } = props;
        const value = React13.useMemo(
          () => context,
          Object.values(context)
        );
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Context.Provider, {
          value,
          children
        });
      }
      __name(Provider, "Provider");
      function useContext2(consumerName) {
        const context = React13.useContext(Context);
        if (context)
          return context;
        if (defaultContext !== void 0)
          return defaultContext;
        throw new Error(
          `\`${consumerName}\` must be used within \`${rootComponentName}\``
        );
      }
      __name(useContext2, "useContext");
      Provider.displayName = `${rootComponentName}Provider`;
      return [Provider, useContext2];
    }
    __name(createContext3, "createContext");
    function createContextScope3(scopeName, createContextScopeDeps = []) {
      let defaultContexts = [];
      function createContext22(rootComponentName, defaultContext) {
        const BaseContext = React13.createContext(
          defaultContext
        );
        const index = defaultContexts.length;
        defaultContexts = [...defaultContexts, defaultContext];
        function Provider(props) {
          const { scope, children, ...context } = props;
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const value = React13.useMemo(
            () => context,
            Object.values(context)
          );
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Context.Provider, {
            value,
            children
          });
        }
        __name(Provider, "Provider");
        function useContext2(consumerName, scope) {
          const Context = (scope == null ? void 0 : scope[scopeName][index]) || BaseContext;
          const context = React13.useContext(Context);
          if (context)
            return context;
          if (defaultContext !== void 0)
            return defaultContext;
          throw new Error(
            `\`${consumerName}\` must be used within \`${rootComponentName}\``
          );
        }
        __name(useContext2, "useContext");
        Provider.displayName = `${rootComponentName}Provider`;
        return [Provider, useContext2];
      }
      __name(createContext22, "createContext2");
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeContexts = defaultContexts.map((defaultContext) => {
          return React13.createContext(defaultContext);
        });
        return /* @__PURE__ */ __name(function useScope(scope) {
          const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
          return React13.useMemo(
            () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
            [scope, contexts]
          );
        }, "useScope");
      }, "createScope");
      createScope.scopeName = scopeName;
      return [
        createContext22,
        composeContextScopes(createScope, ...createContextScopeDeps)
      ];
    }
    __name(createContextScope3, "createContextScope");
    function composeContextScopes(...scopes) {
      const baseScope = scopes[0];
      if (scopes.length === 1)
        return baseScope;
      const createScope = /* @__PURE__ */ __name(() => {
        const scopeHooks = scopes.map((createScope2) => ({
          useScope: createScope2(),
          scopeName: createScope2.scopeName
        }));
        return /* @__PURE__ */ __name(function useComposedScopes(overrideScopes) {
          const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
            const scopeProps = useScope(overrideScopes);
            const currentScope = scopeProps[`__scope${scopeName}`];
            return { ...nextScopes2, ...currentScope };
          }, {});
          return React13.useMemo(
            () => ({ [`__scope${baseScope.scopeName}`]: nextScopes }),
            [nextScopes]
          );
        }, "useComposedScopes");
      }, "createScope");
      createScope.scopeName = baseScope.scopeName;
      return createScope;
    }
    __name(composeContextScopes, "composeContextScopes");
  }
});

// ../../node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_create_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js
var require_LayoutGroupContext = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/LayoutGroupContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LayoutGroupContext_exports = {};
    __export2(LayoutGroupContext_exports, {
      LayoutGroupContext: () => LayoutGroupContext
    });
    module2.exports = __toCommonJS2(LayoutGroupContext_exports);
    var import_react10 = require("react");
    var LayoutGroupContext = (0, import_react10.createContext)({});
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceContext_exports = {};
    __export2(PresenceContext_exports, {
      PresenceContext: () => PresenceContext
    });
    module2.exports = __toCommonJS2(PresenceContext_exports);
    var import_react10 = require("react");
    var PresenceContext = (0, import_react10.createContext)(null);
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var usePresence_exports = {};
    __export2(usePresence_exports, {
      isPresent: () => isPresent,
      useIsPresent: () => useIsPresent,
      usePresence: () => usePresence
    });
    module2.exports = __toCommonJS2(usePresence_exports);
    var import_react10 = require("react");
    var import_PresenceContext = require_PresenceContext();
    function usePresence() {
      const context = (0, import_react10.useContext)(import_PresenceContext.PresenceContext);
      if (!context) {
        return [true, null, context];
      }
      const { isPresent: isPresent2, onExitComplete, register } = context;
      const id = (0, import_react10.useId)() || "";
      (0, import_react10.useEffect)(() => register(id), [id, register]);
      const safeToRemove = /* @__PURE__ */ __name(() => onExitComplete == null ? void 0 : onExitComplete(id), "safeToRemove");
      return !isPresent2 && onExitComplete ? [false, safeToRemove, context] : [true, void 0, context];
    }
    __name(usePresence, "usePresence");
    function useIsPresent() {
      return isPresent((0, import_react10.useContext)(import_PresenceContext.PresenceContext));
    }
    __name(useIsPresent, "useIsPresent");
    function isPresent(context) {
      return context === null ? true : context.isPresent;
    }
    __name(isPresent, "isPresent");
  }
});

// ../../node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_PresenceContext(), module2.exports);
    __reExport2(src_exports, require_usePresence(), module2.exports);
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js
var require_PresenceChild = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/PresenceChild.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PresenceChild_exports = {};
    __export2(PresenceChild_exports, {
      PresenceChild: () => PresenceChild
    });
    module2.exports = __toCommonJS2(PresenceChild_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_use_presence = require_cjs4();
    var React13 = __toESM2(require("react"));
    var import_react10 = require("react");
    var PresenceChild = /* @__PURE__ */ __name(({
      children,
      initial,
      isPresent,
      onExitComplete,
      exitVariant,
      enterVariant,
      presenceAffectsLayout
    }) => {
      const presenceChildren = React13.useMemo(newChildrenMap, []);
      const id = (0, import_react10.useId)() || "";
      const context = React13.useMemo(
        () => {
          return {
            id,
            initial,
            isPresent,
            exitVariant,
            enterVariant,
            onExitComplete: (id2) => {
              presenceChildren.set(id2, true);
              for (const isComplete of presenceChildren.values()) {
                if (!isComplete) {
                  return;
                }
              }
              onExitComplete == null ? void 0 : onExitComplete();
            },
            register: (id2) => {
              presenceChildren.set(id2, false);
              return () => presenceChildren.delete(id2);
            }
          };
        },
        presenceAffectsLayout ? void 0 : [isPresent, exitVariant, enterVariant]
      );
      React13.useMemo(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
      }, [isPresent]);
      React13.useEffect(() => {
        !(isPresent || presenceChildren.size) && (onExitComplete == null ? void 0 : onExitComplete());
      }, [isPresent]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_use_presence.PresenceContext.Provider, {
        value: context,
        children
      });
    }, "PresenceChild");
    function newChildrenMap() {
      return /* @__PURE__ */ new Map();
    }
    __name(newChildrenMap, "newChildrenMap");
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js
var require_AnimatePresence = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/AnimatePresence.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AnimatePresence_exports = {};
    __export2(AnimatePresence_exports, {
      AnimatePresence: () => AnimatePresence2
    });
    module2.exports = __toCommonJS2(AnimatePresence_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_react10 = __toESM2(require("react"));
    var import_LayoutGroupContext = require_LayoutGroupContext();
    var import_PresenceChild = require_PresenceChild();
    var getChildKey = /* @__PURE__ */ __name((child) => child.key || "", "getChildKey");
    var isDev = process.env.NODE_ENV !== "production";
    function updateChildLookup(children, allChildren) {
      const seenChildren = isDev ? /* @__PURE__ */ new Set() : null;
      children.forEach((child) => {
        const key = getChildKey(child);
        if (isDev && seenChildren && seenChildren.has(key)) {
          console.warn(
            `Children of AnimatePresence require unique keys. "${key}" is a duplicate.`
          );
          seenChildren.add(key);
        }
        allChildren.set(key, child);
      });
    }
    __name(updateChildLookup, "updateChildLookup");
    function onlyElements(children) {
      const filtered = [];
      import_react10.Children.forEach(children, (child, index) => {
        if ((0, import_react10.isValidElement)(child)) {
          if (!child.key) {
            if (process.env.NODE_ENV === "development") {
              console.warn(
                "No key given to AnimatePresence child, assigning index as key"
              );
            }
            filtered.push(
              import_react10.default.cloneElement(child, {
                key: index
              })
            );
          } else {
            filtered.push(child);
          }
        }
      });
      return filtered;
    }
    __name(onlyElements, "onlyElements");
    var AnimatePresence2 = /* @__PURE__ */ __name(({
      children,
      enterVariant,
      exitVariant,
      initial = true,
      onExitComplete,
      exitBeforeEnter,
      presenceAffectsLayout = true
    }) => {
      let forceRender = (0, import_core27.useForceUpdate)();
      const isClientMounted = (0, import_core27.useDidFinishSSR)();
      const forceRenderLayoutGroup = (0, import_react10.useContext)(import_LayoutGroupContext.LayoutGroupContext).forceRender;
      if (forceRenderLayoutGroup)
        forceRender = forceRenderLayoutGroup;
      const isMounted = (0, import_react10.useRef)(false);
      const filteredChildren = onlyElements(children);
      let childrenToRender = filteredChildren;
      const exiting = /* @__PURE__ */ new Set();
      const presentChildren = (0, import_react10.useRef)(childrenToRender);
      const allChildren = (0, import_react10.useRef)(/* @__PURE__ */ new Map()).current;
      const isInitialRender = (0, import_react10.useRef)(true);
      (0, import_react10.useEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
          isInitialRender.current = true;
          allChildren.clear();
          exiting.clear();
        };
      }, []);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        isInitialRender.current = false;
        updateChildLookup(filteredChildren, allChildren);
        presentChildren.current = childrenToRender;
      });
      const hasWarned = process.env.NODE_ENV === "development" ? (0, import_react10.useRef)(false) : null;
      if (isInitialRender.current) {
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
          children: childrenToRender.map((child) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: Boolean(isClientMounted ? true : isMounted.current),
            exitVariant,
            enterVariant,
            initial: initial ? void 0 : false,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child)))
        });
      }
      childrenToRender = [...childrenToRender];
      const presentKeys = presentChildren.current.map(getChildKey);
      const targetKeys = filteredChildren.map(getChildKey);
      const numPresent = presentKeys.length;
      for (let i = 0; i < numPresent; i++) {
        const key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
          exiting.add(key);
        }
      }
      if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
      }
      exiting.forEach((key) => {
        if (targetKeys.indexOf(key) !== -1)
          return;
        const child = allChildren.get(key);
        if (!child)
          return;
        const insertionIndex = presentKeys.indexOf(key);
        childrenToRender.splice(
          insertionIndex,
          0,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_PresenceChild.PresenceChild, {
            isPresent: false,
            onExitComplete: () => {
              allChildren.delete(key);
              exiting.delete(key);
              const removeIndex = presentChildren.current.findIndex(
                (presentChild) => presentChild.key === key
              );
              presentChildren.current.splice(removeIndex, 1);
              if (!exiting.size) {
                presentChildren.current = filteredChildren;
                if (isMounted.current === false)
                  return;
                forceRender();
                onExitComplete == null ? void 0 : onExitComplete();
              }
            },
            exitVariant,
            enterVariant,
            presenceAffectsLayout,
            children: child
          }, getChildKey(child))
        );
      });
      childrenToRender = childrenToRender.map((child) => {
        const key = child.key;
        return exiting.has(key) ? child : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_PresenceChild.PresenceChild, {
          isPresent: true,
          exitVariant,
          enterVariant,
          presenceAffectsLayout,
          children: child
        }, getChildKey(child));
      });
      if (process.env.NODE_ENV === "development") {
        const shouldWarn = exitBeforeEnter && childrenToRender.length > 1;
        if (shouldWarn && hasWarned && !hasWarned.current) {
          hasWarned.current = true;
          console.log(
            `You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.`
          );
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
        children: exiting.size ? childrenToRender : childrenToRender.map((child) => (0, import_react10.cloneElement)(child))
      });
    }, "AnimatePresence");
    AnimatePresence2.displayName = "AnimatePresence";
  }
});

// ../../node_modules/@tamagui/animate-presence/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../node_modules/@tamagui/animate-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AnimatePresence(), module2.exports);
    __reExport2(src_exports, require_cjs4(), module2.exports);
  }
});

// ../../node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "../../node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = /* @__PURE__ */ __name(function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    }, "unwrapHost");
    var correctTargets = /* @__PURE__ */ __name(function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x) {
        return Boolean(x);
      });
    }, "correctTargets");
    var applyAttributeToOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    }, "applyAttributeToOthers");
    var hideOthers3 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    }, "hideOthers");
    exports.hideOthers = hideOthers3;
    var inertOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-inert-ed";
      }
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
    }, "inertOthers");
    exports.inertOthers = inertOthers;
    var supportsInert = /* @__PURE__ */ __name(function() {
      return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
    }, "supportsInert");
    exports.supportsInert = supportsInert;
    var suppressOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-suppressed";
      }
      return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
    }, "suppressOthers");
    exports.suppressOthers = suppressOthers;
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AriaHidden_exports = {};
    __export2(AriaHidden_exports, {
      hideOthers: () => import_aria_hidden2.hideOthers
    });
    module2.exports = __toCommonJS2(AriaHidden_exports);
    var import_aria_hidden2 = require_es5();
  }
});

// ../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AriaHidden(), module2.exports);
  }
});

// ../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "../../node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e;
    var r;
    var t = (e = {}, r = require("react"), Object.keys(r).forEach(function(t2) {
      "default" !== t2 && "__esModule" !== t2 && Object.defineProperty(e, t2, { enumerable: true, get: function() {
        return r[t2];
      } });
    }), e);
    exports.useCallbackRef = function(e2) {
      const r2 = t.useRef(e2);
      return t.useEffect(() => {
        r2.current = e2;
      }), t.useMemo(() => (...e3) => {
        var t2;
        return null === (t2 = r2.current) || void 0 === t2 ? void 0 : t2.call(r2, ...e3);
      }, []);
    };
  }
});

// ../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "../../node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e;
    var t;
    var n = require_dist().useCallbackRef;
    var r = (e = {}, t = require("react"), Object.keys(t).forEach(function(n2) {
      "default" !== n2 && "__esModule" !== n2 && Object.defineProperty(e, n2, { enumerable: true, get: function() {
        return t[n2];
      } });
    }), e);
    exports.useEscapeKeydown = function(e2) {
      const t2 = n(e2);
      r.useEffect(() => {
        const e3 = /* @__PURE__ */ __name((e4) => {
          "Escape" === e4.key && t2(e4);
        }, "e");
        return document.addEventListener("keydown", e3), () => document.removeEventListener("keydown", e3);
      }, [t2]);
    };
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGet_exports = {};
    __export2(useGet_exports, {
      useGet: () => useGet4
    });
    module2.exports = __toCommonJS2(useGet_exports);
    var import_react10 = require("react");
    var isWeb8 = process.env.TAMAGUI_TARGET === "web";
    var isClient3 = typeof window !== "undefined";
    var useIsomorphicLayoutEffect3 = !isWeb8 || isClient3 ? import_react10.useLayoutEffect : import_react10.useEffect;
    function useGet4(currentValue, initialValue, forwardToFunction) {
      const curRef = (0, import_react10.useRef)(initialValue ?? currentValue);
      useIsomorphicLayoutEffect3(() => {
        curRef.current = currentValue;
      });
      return (0, import_react10.useCallback)(
        forwardToFunction ? (...args) => {
          var _a;
          return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
        } : () => curRef.current,
        []
      );
    }
    __name(useGet4, "useGet");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useEvent_exports = {};
    __export2(useEvent_exports, {
      useEvent: () => useEvent3
    });
    module2.exports = __toCommonJS2(useEvent_exports);
    var import_useGet2 = require_useGet();
    function useEvent3(callback) {
      return (0, import_useGet2.useGet)(callback, defaultValue2, true);
    }
    __name(useEvent3, "useEvent");
    var defaultValue2 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "defaultValue");
  }
});

// ../../node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "../../node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useEvent(), module2.exports);
    __reExport2(src_exports, require_useGet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js
var require_Dismissable = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/Dismissable.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dismissable_exports = {};
    __export2(Dismissable_exports, {
      Dismissable: () => Dismissable2,
      DismissableBranch: () => DismissableBranch
    });
    module2.exports = __toCommonJS2(Dismissable_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_use_escape_keydown = require_dist2();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_use_event2 = require_cjs7();
    var React13 = __toESM2(require("react"));
    var ReactDOM = __toESM2(require("react-dom"));
    function dispatchDiscreteCustomEvent(target, event) {
      if (target)
        ReactDOM.flushSync(() => target.dispatchEvent(event));
    }
    __name(dispatchDiscreteCustomEvent, "dispatchDiscreteCustomEvent");
    var DISMISSABLE_LAYER_NAME = "Dismissable";
    var CONTEXT_UPDATE = "dismissable.update";
    var POINTER_DOWN_OUTSIDE = "dismissable.pointerDownOutside";
    var FOCUS_OUTSIDE = "dismissable.focusOutside";
    var originalBodyPointerEvents;
    var DismissableContext = React13.createContext({
      layers: /* @__PURE__ */ new Set(),
      layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
      branches: /* @__PURE__ */ new Set()
    });
    var Dismissable2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          disableOutsidePointerEvents = false,
          forceUnmount,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          onDismiss,
          ...layerProps
        } = props;
        const context = React13.useContext(DismissableContext);
        const [node, setNode] = React13.useState(null);
        const [, force] = React13.useState({});
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node2) => setNode(node2));
        const layers = Array.from(context.layers);
        const [highestLayerWithOutsidePointerEventsDisabled] = [
          ...context.layersWithOutsidePointerEventsDisabled
        ].slice(-1);
        const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(
          highestLayerWithOutsidePointerEventsDisabled
        );
        const index = node ? layers.indexOf(node) : -1;
        const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
        const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
        const pointerDownOutside = usePointerDownOutside((event) => {
          const target = event.target;
          const isPointerDownOnBranch = [...context.branches].some(
            (branch) => branch.contains(target)
          );
          if (!isPointerEventsEnabled || isPointerDownOnBranch)
            return;
          onPointerDownOutside == null ? void 0 : onPointerDownOutside(event);
          onInteractOutside == null ? void 0 : onInteractOutside(event);
          if (!event.defaultPrevented)
            onDismiss == null ? void 0 : onDismiss();
        });
        const focusOutside = useFocusOutside((event) => {
          const target = event.target;
          const isFocusInBranch = [...context.branches].some(
            (branch) => branch.contains(target)
          );
          if (isFocusInBranch)
            return;
          onFocusOutside == null ? void 0 : onFocusOutside(event);
          onInteractOutside == null ? void 0 : onInteractOutside(event);
          if (!event.defaultPrevented)
            onDismiss == null ? void 0 : onDismiss();
        });
        (0, import_react_use_escape_keydown.useEscapeKeydown)((event) => {
          const isHighestLayer = index === context.layers.size - 1;
          if (!isHighestLayer)
            return;
          onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(event);
          if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
          }
        });
        React13.useEffect(() => {
          if (!node)
            return;
          if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
              originalBodyPointerEvents = document.body.style.pointerEvents;
              document.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
          }
          context.layers.add(node);
          dispatchUpdate();
          return () => {
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
              document.body.style.pointerEvents = originalBodyPointerEvents;
            }
          };
        }, [node, disableOutsidePointerEvents, context]);
        React13.useEffect(() => {
          if (forceUnmount)
            return;
          return () => {
            if (!node)
              return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
          };
        }, [node, context, forceUnmount]);
        React13.useEffect(() => {
          const handleUpdate = /* @__PURE__ */ __name(() => {
            force({});
          }, "handleUpdate");
          document.addEventListener(CONTEXT_UPDATE, handleUpdate);
          return () => document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
        }, []);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
          ...layerProps,
          ref: composedRefs,
          style: {
            display: "contents",
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
          },
          onFocusCapture: (0, import_core27.composeEventHandlers)(
            props.onFocusCapture,
            focusOutside.onFocusCapture
          ),
          onBlurCapture: (0, import_core27.composeEventHandlers)(
            props.onBlurCapture,
            focusOutside.onBlurCapture
          ),
          onPointerDownCapture: (0, import_core27.composeEventHandlers)(
            props.onPointerDownCapture,
            pointerDownOutside.onPointerDownCapture
          )
        });
      }
    );
    Dismissable2.displayName = DISMISSABLE_LAYER_NAME;
    var BRANCH_NAME = "DismissableBranch";
    var DismissableBranch = React13.forwardRef(
      (props, forwardedRef) => {
        const context = React13.useContext(DismissableContext);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        React13.useEffect(() => {
          const node = ref.current;
          if (node) {
            context.branches.add(node);
            return () => {
              context.branches.delete(node);
            };
          }
        }, [context.branches]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
          style: { display: "contents" },
          ...props,
          ref: composedRefs
        });
      }
    );
    DismissableBranch.displayName = BRANCH_NAME;
    function usePointerDownOutside(onPointerDownOutside) {
      const handlePointerDownOutside = (0, import_use_event2.useEvent)(onPointerDownOutside);
      const isPointerInsideReactTreeRef = React13.useRef(false);
      const handleClickRef = React13.useRef(() => {
      });
      React13.useEffect(() => {
        const handlePointerDown = /* @__PURE__ */ __name((event) => {
          if (event.target && !isPointerInsideReactTreeRef.current) {
            let handleAndDispatchPointerDownOutsideEvent2 = /* @__PURE__ */ __name(function() {
              handleAndDispatchCustomEvent(
                POINTER_DOWN_OUTSIDE,
                handlePointerDownOutside,
                eventDetail,
                { discrete: true }
              );
            }, "handleAndDispatchPointerDownOutsideEvent2");
            var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
            const eventDetail = { originalEvent: event };
            if (event.pointerType === "touch") {
              document.removeEventListener("click", handleClickRef.current);
              handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
              document.addEventListener("click", handleClickRef.current, { once: true });
            } else {
              handleAndDispatchPointerDownOutsideEvent2();
            }
          }
          isPointerInsideReactTreeRef.current = false;
        }, "handlePointerDown");
        const timerId = setTimeout(() => {
          document.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return () => {
          window.clearTimeout(timerId);
          document.removeEventListener("pointerdown", handlePointerDown);
          document.removeEventListener("click", handleClickRef.current);
        };
      }, [handlePointerDownOutside]);
      return {
        onPointerDownCapture: () => isPointerInsideReactTreeRef.current = true
      };
    }
    __name(usePointerDownOutside, "usePointerDownOutside");
    function useFocusOutside(onFocusOutside) {
      const handleFocusOutside = (0, import_use_event2.useEvent)(onFocusOutside);
      const isFocusInsideReactTreeRef = React13.useRef(false);
      React13.useEffect(() => {
        const handleFocus = /* @__PURE__ */ __name((event) => {
          if (event.target && !isFocusInsideReactTreeRef.current) {
            const eventDetail = { originalEvent: event };
            handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
              discrete: false
            });
          }
        }, "handleFocus");
        document.addEventListener("focusin", handleFocus);
        return () => document.removeEventListener("focusin", handleFocus);
      }, [handleFocusOutside]);
      return {
        onFocusCapture: () => isFocusInsideReactTreeRef.current = true,
        onBlurCapture: () => isFocusInsideReactTreeRef.current = false
      };
    }
    __name(useFocusOutside, "useFocusOutside");
    function dispatchUpdate() {
      const event = new CustomEvent(CONTEXT_UPDATE);
      document.dispatchEvent(event);
    }
    __name(dispatchUpdate, "dispatchUpdate");
    function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
      const target = detail.originalEvent.target;
      const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
      if (handler)
        target.addEventListener(name, handler, { once: true });
      if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
      } else {
        target.dispatchEvent(event);
      }
    }
    __name(handleAndDispatchCustomEvent, "handleAndDispatchCustomEvent");
  }
});

// ../../node_modules/@tamagui/dismissable/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "../../node_modules/@tamagui/dismissable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dismissable(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var FocusScope_exports = {};
    __export2(FocusScope_exports, {
      FocusScope: () => FocusScope2
    });
    module2.exports = __toCommonJS2(FocusScope_exports);
    var import_compose_refs3 = require_cjs2();
    var import_use_event2 = require_cjs7();
    var React13 = __toESM2(require("react"));
    var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
    var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
    var EVENT_OPTIONS = { bubbles: false, cancelable: true };
    var FOCUS_SCOPE_NAME = "FocusScope";
    var FocusScope2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          loop = false,
          trapped = false,
          onMountAutoFocus: onMountAutoFocusProp,
          onUnmountAutoFocus: onUnmountAutoFocusProp,
          children,
          forceUnmount,
          ...scopeProps
        } = props;
        const [container, setContainer] = React13.useState(null);
        const onMountAutoFocus = (0, import_use_event2.useEvent)(onMountAutoFocusProp);
        const onUnmountAutoFocus = (0, import_use_event2.useEvent)(onUnmountAutoFocusProp);
        const lastFocusedElementRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => setContainer(node));
        const focusScope = React13.useRef({
          paused: false,
          pause() {
            this.paused = true;
          },
          resume() {
            this.paused = false;
          }
        }).current;
        React13.useEffect(() => {
          if (!trapped)
            return;
          function handleFocusIn(event) {
            if (focusScope.paused || !container)
              return;
            const target = event.target;
            if (container.contains(target)) {
              lastFocusedElementRef.current = target;
            } else {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusIn, "handleFocusIn");
          function handleFocusOut(event) {
            if (focusScope.paused || !container)
              return;
            if (!container.contains(event.relatedTarget)) {
              focus(lastFocusedElementRef.current, { select: true });
            }
          }
          __name(handleFocusOut, "handleFocusOut");
          document.addEventListener("focusin", handleFocusIn);
          document.addEventListener("focusout", handleFocusOut);
          return () => {
            document.removeEventListener("focusin", handleFocusIn);
            document.removeEventListener("focusout", handleFocusOut);
          };
        }, [trapped, forceUnmount, container, focusScope.paused]);
        React13.useEffect(() => {
          if (!container)
            return;
          if (forceUnmount)
            return;
          focusScopesStack.add(focusScope);
          const previouslyFocusedElement = document.activeElement;
          const hasFocusedCandidate = container.contains(previouslyFocusedElement);
          if (!hasFocusedCandidate) {
            const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            container.dispatchEvent(mountEvent);
            if (!mountEvent.defaultPrevented) {
              focusFirst(removeLinks(getTabbableCandidates(container)), { select: true });
              if (document.activeElement === previouslyFocusedElement) {
                focus(container);
              }
            }
          }
          return () => {
            container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
            const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
            container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            container.dispatchEvent(unmountEvent);
            if (!unmountEvent.defaultPrevented) {
              focus(previouslyFocusedElement ?? document.body, { select: true });
            }
            container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
            focusScopesStack.remove(focusScope);
          };
        }, [container, forceUnmount, onMountAutoFocus, onUnmountAutoFocus, focusScope]);
        const handleKeyDown = React13.useCallback(
          (event) => {
            if (!(loop || trapped))
              return;
            if (focusScope.paused)
              return;
            const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
            const focusedElement = document.activeElement;
            if (isTabKey && focusedElement) {
              const container2 = event.currentTarget;
              const [first, last] = getTabbableEdges(container2);
              const hasTabbableElementsInside = first && last;
              if (!hasTabbableElementsInside) {
                if (focusedElement === container2)
                  event.preventDefault();
              } else {
                if (!event.shiftKey && focusedElement === last) {
                  event.preventDefault();
                  if (loop)
                    focus(first, { select: true });
                } else if (event.shiftKey && focusedElement === first) {
                  event.preventDefault();
                  if (loop)
                    focus(last, { select: true });
                }
              }
            }
          },
          [loop, trapped, focusScope.paused]
        );
        const child = React13.Children.only(children);
        return React13.cloneElement(child, {
          tabIndex: -1,
          ...scopeProps,
          ref: composedRefs,
          onKeyDown: handleKeyDown
        });
      }
    );
    FocusScope2.displayName = FOCUS_SCOPE_NAME;
    function focusFirst(candidates, { select = false } = {}) {
      const previouslyFocusedElement = document.activeElement;
      for (const candidate of candidates) {
        focus(candidate, { select });
        if (document.activeElement !== previouslyFocusedElement)
          return;
      }
    }
    __name(focusFirst, "focusFirst");
    function getTabbableEdges(container) {
      const candidates = getTabbableCandidates(container);
      const first = findVisible(candidates, container);
      const last = findVisible(candidates.reverse(), container);
      return [first, last];
    }
    __name(getTabbableEdges, "getTabbableEdges");
    function getTabbableCandidates(container) {
      const nodes = [];
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node) => {
          const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
          if (node.disabled || node.hidden || isHiddenInput)
            return NodeFilter.FILTER_SKIP;
          return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
      });
      while (walker.nextNode())
        nodes.push(walker.currentNode);
      return nodes;
    }
    __name(getTabbableCandidates, "getTabbableCandidates");
    function findVisible(elements, container) {
      for (const element of elements) {
        if (!isHidden(element, { upTo: container }))
          return element;
      }
    }
    __name(findVisible, "findVisible");
    function isHidden(node, { upTo }) {
      if (getComputedStyle(node).visibility === "hidden")
        return true;
      while (node) {
        if (upTo !== void 0 && node === upTo)
          return false;
        if (getComputedStyle(node).display === "none")
          return true;
        node = node.parentElement;
      }
      return false;
    }
    __name(isHidden, "isHidden");
    function isSelectableInput(element) {
      return element instanceof HTMLInputElement && "select" in element;
    }
    __name(isSelectableInput, "isSelectableInput");
    function focus(element, { select = false } = {}) {
      if (element == null ? void 0 : element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({ preventScroll: true });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select)
          element.select();
      }
    }
    __name(focus, "focus");
    var focusScopesStack = createFocusScopesStack();
    function createFocusScopesStack() {
      let stack = [];
      return {
        add(focusScope) {
          const activeFocusScope = stack[0];
          if (focusScope !== activeFocusScope) {
            activeFocusScope == null ? void 0 : activeFocusScope.pause();
          }
          stack = arrayRemove(stack, focusScope);
          stack.unshift(focusScope);
        },
        remove(focusScope) {
          var _a;
          stack = arrayRemove(stack, focusScope);
          (_a = stack[0]) == null ? void 0 : _a.resume();
        }
      };
    }
    __name(createFocusScopesStack, "createFocusScopesStack");
    function arrayRemove(array, item) {
      const updatedArray = [...array];
      const index = updatedArray.indexOf(item);
      if (index !== -1) {
        updatedArray.splice(index, 1);
      }
      return updatedArray;
    }
    __name(arrayRemove, "arrayRemove");
    function removeLinks(items) {
      return items.filter((item) => item.tagName !== "A");
    }
    __name(removeLinks, "removeLinks");
  }
});

// ../../node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "../../node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_FocusScope(), module2.exports);
  }
});

// ../../node_modules/@tamagui/polyfill-dev/index.js
var require_polyfill_dev = __commonJS({
  "../../node_modules/@tamagui/polyfill-dev/index.js"() {
    if (typeof globalThis["__DEV__"] === "undefined") {
      globalThis["__DEV__"] = process.env.NODE_ENV === "development";
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Stacks_exports = {};
    __export2(Stacks_exports, {
      XStack: () => XStack2,
      YStack: () => YStack2,
      ZStack: () => ZStack2,
      getElevation: () => getElevation2,
      getSizedElevation: () => getSizedElevation2
    });
    module2.exports = __toCommonJS2(Stacks_exports);
    var import_core27 = require("@tamagui/core-node");
    var getElevation2 = /* @__PURE__ */ __name((size, extras) => {
      if (!size)
        return;
      const { tokens } = extras;
      const token = tokens.size[size];
      const sizeNum = (0, import_core27.isVariable)(token) ? +token.val : size;
      return getSizedElevation2(sizeNum, extras);
    }, "getElevation");
    var fullscreenStyle2 = {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    var variants2 = {
      fullscreen: {
        true: fullscreenStyle2
      },
      elevation: {
        "...size": getElevation2
      }
    };
    var YStack2 = (0, import_core27.styled)(import_core27.Stack, {
      flexDirection: "column",
      name: "YStack",
      variants: variants2
    });
    var XStack2 = (0, import_core27.styled)(import_core27.Stack, {
      flexDirection: "row",
      name: "XStack",
      variants: variants2
    });
    var ZStack2 = (0, import_core27.styled)(
      YStack2,
      {
        name: "ZStack",
        position: "relative"
      },
      {
        neverFlatten: true,
        isZStack: true
      }
    );
    var getSizedElevation2 = /* @__PURE__ */ __name((val, { theme, tokens }) => {
      let num = 0;
      if (val === true) {
        const val2 = (0, import_core27.getVariableValue)(tokens.size["true"]);
        if (typeof val2 === "number") {
          num = val2;
        } else {
          num = 10;
        }
      } else {
        num = +val;
      }
      if (process.env.NODE_ENV === "development") {
        if (num !== null && isNaN(num)) {
          console.warn("NaN shadow", num, val);
        }
      }
      const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
      const shadow = {
        shadowColor: theme.shadowColor,
        shadowRadius,
        shadowOffset: { height, width: 0 }
      };
      return shadow;
    }, "getSizedElevation");
  }
});

// ../../node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "../../node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getSize: () => getSize,
      stepTokenUpOrDown: () => stepTokenUpOrDown2
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core27 = require("@tamagui/core-node");
    var getSize = /* @__PURE__ */ __name((size, shift = 0, bounds = [0]) => {
      return stepTokenUpOrDown2("size", size, shift, bounds);
    }, "getSize");
    var stepTokenUpOrDown2 = /* @__PURE__ */ __name((type, name = "$true", shift = 0, bounds = [0]) => {
      const tokens = (0, import_core27.getTokens)(true)[type];
      const keysOrdered = import_core27.tokensKeysOrdered.get(tokens) || Object.keys(tokens);
      const min = bounds[0] ?? 0;
      const max = bounds[1] ?? keysOrdered.length - 1;
      const currentIndex = keysOrdered.indexOf(name);
      if (name === "$true") {
        shift += shift === 0 ? 0 : shift > 0 ? 1 : -1;
      }
      const index = Math.min(max, Math.max(min, currentIndex + shift));
      const key = keysOrdered[index];
      return tokens[key] || tokens["$true"];
    }, "stepTokenUpOrDown");
  }
});

// ../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "../../node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getButtonSized: () => getButtonSized5
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_get_size2 = require_cjs10();
    var getButtonSized5 = /* @__PURE__ */ __name((val, { tokens }) => {
      if (typeof val === "number") {
        return {
          paddingHorizontal: val * 0.25,
          height: val,
          borderRadius: val * 0.2
        };
      }
      const ySize = (0, import_get_size2.getSize)(val, 0);
      const xSize = (0, import_get_size2.stepTokenUpOrDown)("space", val);
      const radiusToken = tokens.radius[val] ?? tokens.radius["$4"];
      return {
        paddingHorizontal: xSize,
        height: ySize,
        borderRadius: radiusToken
      };
    }, "getButtonSized");
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var variants_exports = {};
    __export2(variants_exports, {
      bordered: () => bordered2,
      circular: () => circular2,
      elevate: () => elevate2,
      focusTheme: () => focusTheme2,
      hoverTheme: () => hoverTheme2,
      padded: () => padded2,
      pressTheme: () => pressTheme2,
      radiused: () => radiused2
    });
    module2.exports = __toCommonJS2(variants_exports);
    var import_Stacks4 = require_Stacks();
    var elevate2 = {
      true: (_, extras) => {
        return (0, import_Stacks4.getElevation)(extras.props["size"], extras);
      }
    };
    var bordered2 = /* @__PURE__ */ __name((val, { props }) => {
      return {
        borderWidth: typeof val === "number" ? val : 1,
        borderColor: "$borderColor",
        ...props.hoverTheme && {
          hoverStyle: {
            borderColor: "$borderColorHover"
          }
        },
        ...props.pressTheme && {
          pressStyle: {
            borderColor: "$borderColorPress"
          }
        },
        ...props.focusTheme && {
          focusStyle: {
            borderColor: "$borderColorFocus"
          }
        }
      };
    }, "bordered");
    var padded2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          padding: tokens.space[props.size] || tokens.space["$4"]
        };
      }
    };
    var radiused2 = {
      true: (_, extras) => {
        const { tokens, props } = extras;
        return {
          borderRadius: tokens.radius[props.size] || tokens.radius["$4"]
        };
      }
    };
    var circular2 = {
      true: (_, { props, tokens }) => {
        const size = tokens.size[props.size];
        return {
          width: size,
          height: size,
          maxWidth: size,
          maxHeight: size,
          minWidth: size,
          minHeight: size,
          borderRadius: 1e5,
          padding: 0
        };
      }
    };
    var hoverTheme2 = {
      true: {
        hoverStyle: {
          backgroundColor: "$backgroundHover",
          borderColor: "$borderColorHover"
        }
      },
      false: {}
    };
    var pressTheme2 = {
      true: {
        pressStyle: {
          backgroundColor: "$backgroundPress",
          borderColor: "$borderColorPress"
        }
      },
      false: {}
    };
    var focusTheme2 = {
      true: {
        focusStyle: {
          backgroundColor: "$backgroundFocus",
          borderColor: "$borderColorFocus"
        }
      },
      false: {}
    };
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableStack_exports = {};
    __export2(SizableStack_exports, {
      SizableStack: () => SizableStack2
    });
    module2.exports = __toCommonJS2(SizableStack_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_get_button_sized5 = require_cjs11();
    var import_Stacks4 = require_Stacks();
    var import_variants3 = require_variants();
    var SizableStack2 = (0, import_core27.styled)(import_Stacks4.YStack, {
      name: "SizableStack",
      backgroundColor: "$background",
      flexDirection: "row",
      flexShrink: 1,
      variants: {
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        size: {
          "...size": import_get_button_sized5.getButtonSized
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ThemeableStack_exports = {};
    __export2(ThemeableStack_exports, {
      ThemeableStack: () => ThemeableStack2
    });
    module2.exports = __toCommonJS2(ThemeableStack_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_Stacks4 = require_Stacks();
    var import_variants3 = require_variants();
    var chromelessStyle2 = {
      backgroundColor: "transparent",
      borderColor: "transparent",
      shadowColor: "transparent"
    };
    var ThemeableStack2 = (0, import_core27.styled)(import_Stacks4.YStack, {
      name: "SizableStack",
      variants: {
        backgrounded: {
          true: {
            backgroundColor: "$background"
          }
        },
        radiused: import_variants3.radiused,
        hoverTheme: import_variants3.hoverTheme,
        pressTheme: import_variants3.pressTheme,
        focusTheme: import_variants3.focusTheme,
        circular: import_variants3.circular,
        padded: import_variants3.padded,
        elevate: import_variants3.elevate,
        bordered: import_variants3.bordered,
        transparent: {
          true: {
            backgroundColor: "transparent"
          }
        },
        chromeless: {
          true: chromelessStyle2,
          all: {
            ...chromelessStyle2,
            hoverStyle: chromelessStyle2,
            pressStyle: chromelessStyle2,
            focusStyle: chromelessStyle2
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "../../node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Stacks(), module2.exports);
    __reExport2(src_exports, require_SizableStack(), module2.exports);
    __reExport2(src_exports, require_ThemeableStack(), module2.exports);
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/Portal.js
var require_Portal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/Portal.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Portal_exports = {};
    __export2(Portal_exports, {
      Portal: () => Portal
    });
    module2.exports = __toCommonJS2(Portal_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_core27 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var Portal = /* @__PURE__ */ __name(({ host = ((_a) => (_a = globalThis.document) == null ? void 0 : _a.body)(), ...props }) => {
      const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
        contain: "strict",
        fullscreen: true,
        position: import_core27.isWeb ? "fixed" : "absolute",
        maxWidth: import_core27.isWeb ? "100vw" : "100%",
        maxHeight: import_core27.isWeb ? "100vh" : "100%",
        pointerEvents: "none",
        ...props
      });
      const [hostElement, setHostElement] = React13.useState(null);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        setHostElement(host);
      }, [host]);
      if (hostElement) {
        return (0, import_react_dom.createPortal)(contents, hostElement);
      }
      return null;
    }, "Portal");
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/PortalProps.js
var require_PortalProps = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/PortalProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var PortalProps_exports = {};
    module2.exports = __toCommonJS2(PortalProps_exports);
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js
var require_GorhomPortal = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/GorhomPortal.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var GorhomPortal_exports = {};
    __export2(GorhomPortal_exports, {
      ACTIONS: () => ACTIONS,
      INITIAL_STATE: () => INITIAL_STATE,
      PortalHost: () => PortalHost2,
      PortalItem: () => PortalItem2,
      PortalProvider: () => PortalProvider3,
      usePortal: () => usePortal
    });
    module2.exports = __toCommonJS2(GorhomPortal_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_react10 = __toESM2(require("react"));
    var ACTIONS = /* @__PURE__ */ ((ACTIONS2) => {
      ACTIONS2[ACTIONS2["REGISTER_HOST"] = 0] = "REGISTER_HOST";
      ACTIONS2[ACTIONS2["DEREGISTER_HOST"] = 1] = "DEREGISTER_HOST";
      ACTIONS2[ACTIONS2["ADD_UPDATE_PORTAL"] = 2] = "ADD_UPDATE_PORTAL";
      ACTIONS2[ACTIONS2["REMOVE_PORTAL"] = 3] = "REMOVE_PORTAL";
      return ACTIONS2;
    })(ACTIONS || {});
    var INITIAL_STATE = {};
    var registerHost = /* @__PURE__ */ __name((state, hostName) => {
      if (!(hostName in state)) {
        state[hostName] = [];
      }
      return state;
    }, "registerHost");
    var deregisterHost = /* @__PURE__ */ __name((state, hostName) => {
      delete state[hostName];
      return state;
    }, "deregisterHost");
    var addUpdatePortal = /* @__PURE__ */ __name((state, hostName, portalName, node) => {
      if (!(hostName in state)) {
        state = registerHost(state, hostName);
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1) {
        state[hostName][index].node = node;
      } else {
        state[hostName].push({
          name: portalName,
          node
        });
      }
      return state;
    }, "addUpdatePortal");
    var removePortal = /* @__PURE__ */ __name((state, hostName, portalName) => {
      if (!(hostName in state)) {
        console.log(
          `Failed to remove portal '${portalName}', '${hostName}' was not registered!`
        );
        return state;
      }
      const index = state[hostName].findIndex((item) => item.name === portalName);
      if (index !== -1)
        state[hostName].splice(index, 1);
      return state;
    }, "removePortal");
    var reducer = /* @__PURE__ */ __name((state, action) => {
      const { type } = action;
      switch (type) {
        case 0:
          return registerHost({ ...state }, action.hostName);
        case 1:
          return deregisterHost({ ...state }, action.hostName);
        case 2:
          return addUpdatePortal(
            { ...state },
            action.hostName,
            action.portalName,
            action.node
          );
        case 3:
          return removePortal(
            { ...state },
            action.hostName,
            action.portalName
          );
        default:
          return state;
      }
    }, "reducer");
    var PortalStateContext = (0, import_react10.createContext)(null);
    var PortalDispatchContext = (0, import_react10.createContext)(null);
    var usePortalState = /* @__PURE__ */ __name((hostName) => {
      const state = (0, import_react10.useContext)(PortalStateContext);
      if (state === null) {
        throw new Error(
          "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      return state[hostName] || [];
    }, "usePortalState");
    var usePortal = /* @__PURE__ */ __name((hostName = "root") => {
      const dispatch = (0, import_react10.useContext)(PortalDispatchContext);
      if (dispatch === null) {
        throw new Error(
          "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
        );
      }
      const registerHost2 = (0, import_react10.useCallback)(() => {
        dispatch({
          type: 0,
          hostName
        });
      }, []);
      const deregisterHost2 = (0, import_react10.useCallback)(() => {
        dispatch({
          type: 1,
          hostName
        });
      }, []);
      const addUpdatePortal2 = (0, import_react10.useCallback)((name, node) => {
        dispatch({
          type: 2,
          hostName,
          portalName: name,
          node
        });
      }, []);
      const removePortal2 = (0, import_react10.useCallback)((name) => {
        dispatch({
          type: 3,
          hostName,
          portalName: name
        });
      }, []);
      return {
        registerHost: registerHost2,
        deregisterHost: deregisterHost2,
        addPortal: addUpdatePortal2,
        updatePortal: addUpdatePortal2,
        removePortal: removePortal2
      };
    }, "usePortal");
    var PortalProviderComponent = /* @__PURE__ */ __name(({
      rootHostName = "root",
      shouldAddRootHost = true,
      children
    }) => {
      const [state, dispatch] = (0, import_react10.useReducer)(reducer, INITIAL_STATE);
      const transitionDispatch = (0, import_react10.useMemo)(() => {
        const next = /* @__PURE__ */ __name((value) => {
          (0, import_react10.startTransition)(() => {
            dispatch(value);
          });
        }, "next");
        return next;
      }, [dispatch]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalDispatchContext.Provider, {
        value: transitionDispatch,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(PortalStateContext.Provider, {
          value: state,
          children: [
            children,
            shouldAddRootHost && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalHost2, {
              name: rootHostName
            })
          ]
        })
      });
    }, "PortalProviderComponent");
    var PortalProvider3 = (0, import_react10.memo)(PortalProviderComponent);
    PortalProvider3.displayName = "PortalProvider";
    var PortalHostComponent = /* @__PURE__ */ __name((props) => {
      const { name, forwardProps } = props;
      const isServer2 = !(0, import_core27.useDidFinishSSR)();
      const state = usePortalState(name);
      const { registerHost: registerHost2, deregisterHost: deregisterHost2 } = usePortal(props.name);
      (0, import_react10.useEffect)(() => {
        if (isServer2)
          return;
        registerHost2();
        return () => {
          deregisterHost2();
        };
      }, [isServer2]);
      if (forwardProps) {
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
          children: state.map((item) => {
            let next = item.node;
            if (forwardProps) {
              return import_react10.default.Children.map(next, (child) => {
                return import_react10.default.isValidElement(child) ? import_react10.default.cloneElement(child, { key: child.key, ...forwardProps }) : child;
              });
            }
            return next;
          })
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
        children: state.map((item) => item.node)
      });
    }, "PortalHostComponent");
    var PortalHost2 = (0, import_react10.memo)(PortalHostComponent);
    PortalHost2.displayName = "PortalHost";
    var PortalComponent = /* @__PURE__ */ __name((props) => {
      const {
        name: _providedName,
        hostName,
        handleOnMount: _providedHandleOnMount,
        handleOnUnmount: _providedHandleOnUnmount,
        handleOnUpdate: _providedHandleOnUpdate,
        children
      } = props;
      const { addPortal: addUpdatePortal2, removePortal: removePortal2 } = usePortal(hostName);
      const id = (0, import_react10.useId)();
      const name = _providedName || id;
      const handleOnMount = (0, import_core27.useEvent)(() => {
        if (_providedHandleOnMount) {
          _providedHandleOnMount(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      });
      const handleOnUnmount = (0, import_core27.useEvent)(() => {
        if (_providedHandleOnUnmount) {
          _providedHandleOnUnmount(() => removePortal2(name));
        } else {
          removePortal2(name);
        }
      });
      const handleOnUpdate = (0, import_core27.useEvent)(() => {
        if (_providedHandleOnUpdate) {
          _providedHandleOnUpdate(() => addUpdatePortal2(name, children));
        } else {
          addUpdatePortal2(name, children);
        }
      });
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        handleOnMount();
        return () => {
          handleOnUnmount();
        };
      }, []);
      (0, import_react10.useEffect)(() => {
        handleOnUpdate();
      }, [children]);
      return null;
    }, "PortalComponent");
    var PortalItem2 = (0, import_react10.memo)(PortalComponent);
    PortalItem2.displayName = "Portal";
  }
});

// ../../node_modules/@tamagui/portal/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "../../node_modules/@tamagui/portal/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Portal(), module2.exports);
    __reExport2(src_exports, require_PortalProps(), module2.exports);
    __reExport2(src_exports, require_GorhomPortal(), module2.exports);
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module2) {
    var __extends;
    var __assign;
    var __rest;
    var __decorate;
    var __param;
    var __metadata;
    var __awaiter;
    var __generator;
    var __exportStar;
    var __values;
    var __read;
    var __spread;
    var __spreadArrays;
    var __spreadArray;
    var __await;
    var __asyncGenerator;
    var __asyncDelegator;
    var __asyncValues;
    var __makeTemplateObject;
    var __importStar;
    var __importDefault;
    var __classPrivateFieldGet;
    var __classPrivateFieldSet;
    var __classPrivateFieldIn;
    var __createBinding;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module2 === "object" && typeof module2.exports === "object") {
        factory(createExporter(root, createExporter(module2.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
      __name(createExporter, "createExporter");
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p))
            d[p] = b[p];
      };
      __extends = /* @__PURE__ */ __name(function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        __name(__, "__");
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }, "__extends");
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest = /* @__PURE__ */ __name(function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }, "__rest");
      __decorate = /* @__PURE__ */ __name(function(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }, "__decorate");
      __param = /* @__PURE__ */ __name(function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      }, "__param");
      __metadata = /* @__PURE__ */ __name(function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      }, "__metadata");
      __awaiter = /* @__PURE__ */ __name(function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        __name(adopt, "adopt");
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          __name(fulfilled, "fulfilled");
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          __name(rejected, "rejected");
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          __name(step, "step");
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }, "__awaiter");
      __generator = /* @__PURE__ */ __name(function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        __name(verb, "verb");
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
        __name(step, "step");
      }, "__generator");
      __exportStar = /* @__PURE__ */ __name(function(m, o) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
            __createBinding(o, m, p);
      }, "__exportStar");
      __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __values = /* @__PURE__ */ __name(function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, "__values");
      __read = /* @__PURE__ */ __name(function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      }, "__read");
      __spread = /* @__PURE__ */ __name(function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
        return ar;
      }, "__spread");
      __spreadArrays = /* @__PURE__ */ __name(function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }, "__spreadArrays");
      __spreadArray = /* @__PURE__ */ __name(function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      }, "__spreadArray");
      __await = /* @__PURE__ */ __name(function(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }, "__await");
      __asyncGenerator = /* @__PURE__ */ __name(function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        __name(verb, "verb");
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        __name(resume, "resume");
        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        __name(step, "step");
        function fulfill(value) {
          resume("next", value);
        }
        __name(fulfill, "fulfill");
        function reject(value) {
          resume("throw", value);
        }
        __name(reject, "reject");
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
        __name(settle, "settle");
      }, "__asyncGenerator");
      __asyncDelegator = /* @__PURE__ */ __name(function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
        __name(verb, "verb");
      }, "__asyncDelegator");
      __asyncValues = /* @__PURE__ */ __name(function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        __name(verb, "verb");
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
        __name(settle, "settle");
      }, "__asyncValues");
      __makeTemplateObject = /* @__PURE__ */ __name(function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      }, "__makeTemplateObject");
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar = /* @__PURE__ */ __name(function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      }, "__importStar");
      __importDefault = /* @__PURE__ */ __name(function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      }, "__importDefault");
      __classPrivateFieldGet = /* @__PURE__ */ __name(function(receiver, state, kind, f) {
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
      }, "__classPrivateFieldGet");
      __classPrivateFieldSet = /* @__PURE__ */ __name(function(receiver, state, value, kind, f) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
      }, "__classPrivateFieldSet");
      __classPrivateFieldIn = /* @__PURE__ */ __name(function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      }, "__classPrivateFieldIn");
      exporter("__extends", __extends);
      exporter("__assign", __assign);
      exporter("__rest", __rest);
      exporter("__decorate", __decorate);
      exporter("__param", __param);
      exporter("__metadata", __metadata);
      exporter("__awaiter", __awaiter);
      exporter("__generator", __generator);
      exporter("__exportStar", __exportStar);
      exporter("__createBinding", __createBinding);
      exporter("__values", __values);
      exporter("__read", __read);
      exporter("__spread", __spread);
      exporter("__spreadArrays", __spreadArrays);
      exporter("__spreadArray", __spreadArray);
      exporter("__await", __await);
      exporter("__asyncGenerator", __asyncGenerator);
      exporter("__asyncDelegator", __asyncDelegator);
      exporter("__asyncValues", __asyncValues);
      exporter("__makeTemplateObject", __makeTemplateObject);
      exporter("__importStar", __importStar);
      exporter("__importDefault", __importDefault);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn);
    });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// ../../node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          value: initialValue,
          callback,
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue2) {
      return (0, useRef_1.useCallbackRef)(defaultValue2 || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// ../../node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "../../node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// ../../node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "../../node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// ../../node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// ../../node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e) {
            return setError(function() {
              return e;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// ../../node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React13.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e) {
        return console.error(e);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// ../../node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = require_tslib();
    function ItoI(a) {
      return a;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x) {
              return x !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x) {
              return cb(x);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x) {
              pendingQueue.push(x);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// ../../node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React13.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children2 = React13.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React13.useRef(defaults(props));
        var ref = React13.useRef(function(state) {
          return defaultState.current = state;
        });
        return React13.createElement(
          React13.Fragment,
          null,
          React13.createElement(State, { stateRef: ref, props }),
          React13.createElement(Children2, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React13.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// ../../node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "../../node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll2 = React13.forwardRef(function(props, parentRef) {
      var ref = React13.useRef(null);
      var _a = React13.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React13.createElement(
        React13.Fragment,
        null,
        enabled && React13.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? React13.cloneElement(React13.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React13.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll2;
    RemoveScroll2.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll2.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// ../../node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "../../node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// ../../node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React13.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle = (0, hook_1.styleHookSingleton)();
      var Sheet = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// ../../node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "../../node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x) {
      return parseInt(x || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React13.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React13.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// ../../node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "../../node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
          if (s > d) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x, y) {
      return x[0] === y[0] && x[1] === y[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React13.useRef([]);
      var touchStartRef = React13.useRef([0, 0]);
      var activeAxis = React13.useRef();
      var id = React13.useState(idCounter++)[0];
      var Style = React13.useState(function() {
        return (0, react_style_singleton_1.styleSingleton)();
      })[0];
      var lastProps = React13.useRef(props);
      React13.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React13.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React13.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React13.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
          return e.name === event.type && e.target === event.target && deltaCompare(e.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React13.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
            return e !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React13.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React13.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React13.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React13.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React13.createElement(
        React13.Fragment,
        null,
        inert ? React13.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React13.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require_tslib();
    var React13 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React13.forwardRef(function(props, ref) {
      return React13.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// ../../node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "../../node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = require_tslib();
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js
var require_RemoveScroll = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/RemoveScroll.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var RemoveScroll_exports = {};
    __export2(RemoveScroll_exports, {
      RemoveScroll: () => RemoveScroll2
    });
    module2.exports = __toCommonJS2(RemoveScroll_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_remove_scroll = require_es57();
    var RemoveScroll2 = /* @__PURE__ */ __name((props) => {
      if (!props.children)
        return null;
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_remove_scroll.RemoveScroll, {
        ...props
      });
    }, "RemoveScroll");
    RemoveScroll2.classNames = import_react_remove_scroll.RemoveScroll.classNames;
  }
});

// ../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "../../node_modules/@tamagui/remove-scroll/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_RemoveScroll(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-constant/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "../../node_modules/@tamagui/use-constant/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      useConstant: () => useConstant
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react10 = require("react");
    function useConstant(fn) {
      if (typeof document === "undefined") {
        return (0, import_react10.useMemo)(() => fn(), []);
      }
      const ref = (0, import_react10.useRef)();
      if (!ref.current) {
        ref.current = { v: fn() };
      }
      return ref.current.v;
    }
    __name(useConstant, "useConstant");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useControllableState_exports = {};
    __export2(useControllableState_exports, {
      useControllableState: () => useControllableState2
    });
    module2.exports = __toCommonJS2(useControllableState_exports);
    var import_use_event2 = require_cjs7();
    var import_react10 = require("react");
    var emptyCallbackFn2 = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
    function useControllableState2({
      prop,
      defaultProp,
      onChange,
      strategy = "prop-wins",
      preventUpdate,
      transition
    }) {
      const [state, setState] = (0, import_react10.useState)(prop ?? defaultProp);
      const previous = (0, import_react10.useRef)(state);
      const propWins = strategy === "prop-wins" && prop !== void 0;
      const value = propWins ? prop : state;
      const onChangeCb = (0, import_use_event2.useEvent)(onChange || idFn4);
      const transitionFn = transition ? import_react10.startTransition : emptyCallbackFn2;
      (0, import_react10.useEffect)(() => {
        if (prop === void 0)
          return;
        previous.current = prop;
        transitionFn(() => {
          setState(prop);
        });
      }, [prop]);
      (0, import_react10.useEffect)(() => {
        if (propWins)
          return;
        if (state !== previous.current) {
          previous.current = state;
          onChangeCb(state);
        }
      }, [onChangeCb, state, propWins]);
      const setter = (0, import_use_event2.useEvent)((next) => {
        if (preventUpdate)
          return;
        if (propWins) {
          const nextValue = typeof next === "function" ? next(previous.current) : next;
          onChangeCb(nextValue);
        } else {
          transitionFn(() => {
            setState(next);
          });
        }
      });
      return [value, setter];
    }
    __name(useControllableState2, "useControllableState");
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
  }
});

// ../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "../../node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useControllableState(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/constants.js
var require_constants2 = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      SHEET_HANDLE_NAME: () => SHEET_HANDLE_NAME,
      SHEET_NAME: () => SHEET_NAME,
      constants: () => constants
    });
    module2.exports = __toCommonJS2(constants_exports);
    var constants = {};
    var SHEET_NAME = "Sheet";
    var SHEET_HANDLE_NAME = "SheetHandle";
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js
var require_SheetContext = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetContext.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetContext_exports = {};
    __export2(SheetContext_exports, {
      SheetProvider: () => SheetProvider,
      createSheetContext: () => createSheetContext,
      createSheetScope: () => createSheetScope2,
      useSheetContext: () => useSheetContext
    });
    module2.exports = __toCommonJS2(SheetContext_exports);
    var import_create_context4 = require_cjs3();
    var import_constants = require_constants2();
    var [createSheetContext, createSheetScope2] = (0, import_create_context4.createContextScope)(import_constants.SHEET_NAME);
    var [SheetProvider, useSheetContext] = createSheetContext(
      import_constants.SHEET_NAME,
      {}
    );
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js
var require_ScrollView = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/ScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ScrollView_exports = {};
    __export2(ScrollView_exports, {
      ScrollView: () => ScrollView2
    });
    module2.exports = __toCommonJS2(ScrollView_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_core28 = require("@tamagui/core-node");
    var import_react_native8 = require("react-native-web-lite");
    (0, import_core28.setupReactNative)({
      ScrollView: import_react_native8.ScrollView
    });
    var ScrollView2 = (0, import_core27.styled)(
      import_react_native8.ScrollView,
      {
        name: "ScrollView"
      },
      {
        isReactNative: true
      }
    );
  }
});

// ../../node_modules/@tamagui/scroll-view/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "../../node_modules/@tamagui/scroll-view/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ScrollView(), module2.exports);
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js
var require_SheetScrollView = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/SheetScrollView.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SheetScrollView_exports = {};
    __export2(SheetScrollView_exports, {
      SheetScrollView: () => SheetScrollView
    });
    module2.exports = __toCommonJS2(SheetScrollView_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_scroll_view = require_cjs17();
    var import_react10 = require("react");
    var import_SheetContext = require_SheetContext();
    var SHEET_SCROLL_VIEW_NAME = "SheetScrollView";
    var SheetScrollView = (0, import_react10.forwardRef)(
      ({ __scopeSheet, children, ...props }, ref) => {
        const { scrollBridge, position, snapPoints, frameSize, open } = (0, import_SheetContext.useSheetContext)(
          SHEET_SCROLL_VIEW_NAME,
          __scopeSheet
        );
        const [scrollEnabled, setScrollEnabled_] = (0, import_react10.useState)(true);
        const scrollRef = (0, import_react10.useRef)(null);
        const percentOpened = snapPoints[position] ?? 0;
        const [percentToPadBottom, setPercentToPadBottom] = (0, import_react10.useState)(0);
        const next = 100 - percentOpened;
        if (open && next !== percentToPadBottom) {
          setPercentToPadBottom(next);
        }
        const setScrollEnabled = /* @__PURE__ */ __name((next2) => {
          var _a, _b;
          (_b = (_a = scrollRef.current) == null ? void 0 : _a.setNativeProps) == null ? void 0 : _b.call(_a, {
            scrollEnabled: next2
          });
          setScrollEnabled_(next2);
        }, "setScrollEnabled");
        const state = (0, import_react10.useRef)({
          lastPageY: 0,
          dragAt: 0,
          dys: [],
          isScrolling: false,
          isDragging: false
        });
        const release = /* @__PURE__ */ __name(() => {
          if (!state.current.isDragging) {
            return;
          }
          state.current.isDragging = false;
          scrollBridge.scrollStartY = -1;
          state.current.isScrolling = false;
          setScrollEnabled(true);
          let vy = 0;
          if (state.current.dys.length) {
            const recentDys = state.current.dys.slice(-10);
            const dist = recentDys.length ? recentDys.reduce((a, b) => a + b, 0) : 0;
            const avgDy = dist / recentDys.length;
            vy = avgDy * 0.04;
          }
          state.current.dys = [];
          scrollBridge.release({
            dragAt: state.current.dragAt,
            vy
          });
        }, "release");
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_scroll_view.ScrollView, {
          ref: (0, import_core27.composeRefs)(scrollRef, ref),
          flex: 1,
          scrollEventThrottle: 8,
          scrollEnabled,
          onScroll: (e) => {
            const { y } = e.nativeEvent.contentOffset;
            scrollBridge.y = y;
            if (y > 0) {
              scrollBridge.scrollStartY = -1;
            }
          },
          onStartShouldSetResponder: () => {
            scrollBridge.scrollStartY = -1;
            state.current.isDragging = true;
            return true;
          },
          onMoveShouldSetResponder: () => true,
          onResponderRelease: release,
          ...props,
          children: [
            (0, import_react10.useMemo)(() => children, [children]),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Stack, {
              height: percentToPadBottom / 100 * frameSize,
              width: 0
            })
          ]
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js
var require_Sheet = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/Sheet.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Sheet_exports = {};
    __export2(Sheet_exports, {
      ControlledSheet: () => ControlledSheet2,
      Sheet: () => Sheet,
      SheetController: () => SheetController2,
      SheetFrame: () => SheetFrame,
      SheetFrameFrame: () => SheetFrameFrame,
      SheetHandle: () => SheetHandle,
      SheetHandleFrame: () => SheetHandleFrame,
      SheetOverlay: () => SheetOverlay,
      SheetOverlayFrame: () => SheetOverlayFrame,
      createSheetScope: () => import_SheetContext2.createSheetScope
    });
    module2.exports = __toCommonJS2(Sheet_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_stacks9 = require_cjs12();
    var import_use_constant = require_cjs15();
    var import_use_controllable_state2 = require_cjs16();
    var import_react10 = __toESM2(require("react"));
    var import_react_native8 = require("react-native-web-lite");
    var import_constants = require_constants2();
    var import_SheetContext = require_SheetContext();
    var import_SheetScrollView = require_SheetScrollView();
    var import_SheetContext2 = require_SheetContext();
    var SheetHandleFrame = (0, import_core27.styled)(import_stacks9.XStack, {
      name: import_constants.SHEET_HANDLE_NAME,
      height: 10,
      borderRadius: 100,
      backgroundColor: "$background",
      zIndex: 10,
      marginHorizontal: "35%",
      marginBottom: "$2",
      opacity: 0.5,
      hoverStyle: {
        opacity: 0.7
      },
      variants: {
        open: {
          true: {
            pointerEvents: "auto"
          },
          false: {
            opacity: 0,
            pointerEvents: "none"
          }
        }
      }
    });
    var SheetHandle = SheetHandleFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(import_constants.SHEET_HANDLE_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetHandleFrame, {
          onPress: () => {
            const max = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
            const nextPos = (context.position + 1) % max;
            context.setPosition(nextPos);
          },
          open: context.open,
          ...props
        });
      }
    );
    var SHEET_OVERLAY_NAME = "SheetOverlay";
    var SheetOverlayFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: SHEET_OVERLAY_NAME,
      backgroundColor: "$background",
      fullscreen: true,
      opacity: 0.5,
      zIndex: 0,
      variants: {
        closed: {
          true: {
            opacity: 0,
            pointerEvents: "none"
          },
          false: {
            pointerEvents: "auto"
          }
        }
      }
    });
    var SheetOverlay = SheetOverlayFrame.extractable(
      ({ __scopeSheet, ...props }) => {
        const context = (0, import_SheetContext.useSheetContext)(SHEET_OVERLAY_NAME, __scopeSheet);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetOverlayFrame, {
          closed: !context.open || context.hidden,
          ...props,
          onPress: (0, import_core27.mergeEvent)(
            props.onPress,
            context.dismissOnOverlayPress ? () => {
              context.setOpen(false);
            } : void 0
          )
        });
      }
    );
    var selectionStyleSheet = import_core27.isClient ? document.createElement("style") : null;
    if (selectionStyleSheet) {
      document.head.appendChild(selectionStyleSheet);
    }
    var SheetFrameFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: import_constants.SHEET_NAME,
      flex: 1,
      backgroundColor: "$background",
      borderTopLeftRadius: "$4",
      borderTopRightRadius: "$4",
      width: "100%",
      maxHeight: "100%",
      overflow: "hidden",
      pointerEvents: "auto"
    });
    var SheetFrame = SheetFrameFrame.extractable(
      (0, import_react10.forwardRef)(
        ({ __scopeSheet, ...props }, forwardedRef) => {
          const context = (0, import_SheetContext.useSheetContext)(import_constants.SHEET_NAME, __scopeSheet);
          const composedContentRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.contentRef);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetFrameFrame, {
            ref: composedContentRef,
            ...props
          });
        }
      )
    );
    var HIDDEN_SIZE = 1e4;
    var sheetComponents = {
      Handle: SheetHandle,
      Frame: SheetFrame,
      Overlay: SheetOverlay,
      ScrollView: import_SheetScrollView.SheetScrollView
    };
    var ParentSheetContext = (0, import_react10.createContext)({
      zIndex: 40
    });
    var useSheetContoller = /* @__PURE__ */ __name(() => {
      const controller = (0, import_react10.useContext)(SheetControllerContext);
      const isHidden = controller == null ? void 0 : controller.hidden;
      const isShowingNonSheet = isHidden && (controller == null ? void 0 : controller.open);
      return {
        controller,
        isHidden,
        isShowingNonSheet
      };
    }, "useSheetContoller");
    var Sheet = (0, import_core27.withStaticProperties)(
      (0, import_react10.forwardRef)(/* @__PURE__ */ __name(function Sheet2(props, ref) {
        const hydrated = (0, import_core27.useDidFinishSSR)();
        const { isShowingNonSheet } = useSheetContoller();
        if (isShowingNonSheet || !hydrated) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetImplementation, {
          ref,
          ...props
        });
      }, "Sheet2")),
      sheetComponents
    );
    var SheetImplementation = (0, import_core27.themeable)(
      (0, import_react10.forwardRef)(/* @__PURE__ */ __name(function SheetImplementation2(props, ref) {
        const parentSheet = (0, import_react10.useContext)(ParentSheetContext);
        const { isHidden, controller } = useSheetContoller();
        const {
          __scopeSheet,
          snapPoints: snapPointsProp = [80],
          open: openProp,
          defaultOpen,
          children: childrenProp,
          position: positionProp,
          onPositionChange,
          onOpenChange,
          defaultPosition,
          dismissOnOverlayPress = true,
          animationConfig,
          dismissOnSnapToBottom = false,
          forceRemoveScrollEnabled = null,
          disableDrag: disableDragProp,
          modal = false,
          zIndex = parentSheet.zIndex + 1,
          portalProps
        } = props;
        if (process.env.NODE_ENV === "development") {
          if (snapPointsProp.some((p) => p < 0 || p > 100)) {
            console.warn(
              "\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame"
            );
          }
        }
        const driver = (0, import_core27.getAnimationDriver)();
        if (!driver) {
          throw new Error("Must set animations in tamagui.config.ts");
        }
        const disableDrag = disableDragProp ?? (controller == null ? void 0 : controller.disableDrag);
        const themeName = (0, import_core27.useThemeName)();
        const contentRef = import_react10.default.useRef(null);
        const scrollBridge = (0, import_use_constant.useConstant)(() => ({
          enabled: false,
          y: 0,
          paneY: 0,
          paneMinY: 0,
          scrollStartY: -1,
          drag: () => {
          },
          release: () => {
          },
          scrollLock: false
        }));
        const onOpenChangeInternal = /* @__PURE__ */ __name((val) => {
          var _a;
          (_a = controller == null ? void 0 : controller.onOpenChange) == null ? void 0 : _a.call(controller, val);
          onOpenChange == null ? void 0 : onOpenChange(val);
        }, "onOpenChangeInternal");
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: (controller == null ? void 0 : controller.open) ?? openProp,
          defaultProp: true,
          onChange: onOpenChangeInternal,
          strategy: "most-recent-wins",
          transition: true
        });
        const [frameSize, setFrameSize] = (0, import_react10.useState)(0);
        const snapPoints = (0, import_react10.useMemo)(
          () => dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp,
          [JSON.stringify(snapPointsProp), dismissOnSnapToBottom]
        );
        const [position_, setPosition_] = (0, import_use_controllable_state2.useControllableState)({
          prop: positionProp,
          defaultProp: defaultPosition || (open ? 0 : -1),
          onChange: onPositionChange,
          strategy: "most-recent-wins",
          transition: true
        });
        const position = open === false ? -1 : position_;
        if (open && dismissOnSnapToBottom && position === snapPoints.length - 1) {
          setPosition_(0);
        }
        const setPosition = (0, import_react10.useCallback)(
          (next) => {
            if (dismissOnSnapToBottom && next === snapPoints.length - 1) {
              setOpen(false);
            } else {
              setPosition_(next);
            }
          },
          [dismissOnSnapToBottom, snapPoints.length, setPosition_, setOpen]
        );
        const { useAnimatedNumber, useAnimatedNumberReaction, useAnimatedNumberStyle } = driver;
        const animatedNumber = useAnimatedNumber(HIDDEN_SIZE);
        const at = (0, import_react10.useRef)(0);
        useAnimatedNumberReaction(animatedNumber, (value) => {
          at.current = value;
          scrollBridge.paneY = value;
        });
        const [isResizing, setIsResizing] = (0, import_react10.useState)(true);
        (0, import_core27.useIsomorphicLayoutEffect)(() => {
          if (!isResizing) {
            setIsResizing(true);
          }
        }, [modal]);
        function stopSpring() {
          animatedNumber.stop();
          if (scrollBridge.onFinishAnimate) {
            scrollBridge.onFinishAnimate();
            scrollBridge.onFinishAnimate = void 0;
          }
        }
        __name(stopSpring, "stopSpring");
        const shouldSetPositionOpen = open && position < 0;
        (0, import_react10.useEffect)(() => {
          if (shouldSetPositionOpen) {
            setPosition(0);
          }
        }, [setPosition, shouldSetPositionOpen]);
        const positions = (0, import_react10.useMemo)(
          () => snapPoints.map((point) => getPercentSize(point, frameSize)),
          [frameSize, snapPoints]
        );
        const [opacity, setOpacity] = (0, import_react10.useState)(open ? 1 : 0);
        if (open && opacity === 0) {
          setOpacity(1);
        }
        (0, import_react10.useEffect)(() => {
          if (!open) {
            const tm = setTimeout(() => {
              setOpacity(0);
            }, 400);
            return () => {
              clearTimeout(tm);
            };
          }
        }, [open]);
        const animateTo = (0, import_core27.useEvent)((position2) => {
          const current = animatedNumber.getValue();
          if (isHidden && open)
            return;
          if (!current)
            return;
          if (frameSize === 0)
            return;
          const hiddenValue = frameSize === 0 ? HIDDEN_SIZE : frameSize;
          const toValue = isHidden || position2 === -1 ? hiddenValue : positions[position2];
          if (at.current === toValue)
            return;
          stopSpring();
          if (isHidden || isResizing) {
            if (isResizing) {
              setIsResizing(false);
            }
            animatedNumber.setValue(toValue, {
              type: "timing",
              duration: 0
            });
            at.current = toValue;
            return;
          }
          const overshootClamping = at.current === HIDDEN_SIZE;
          animatedNumber.setValue(toValue, {
            ...animationConfig,
            type: "spring",
            overshootClamping
          });
        });
        (0, import_core27.useIsomorphicLayoutEffect)(() => {
          animateTo(position);
        }, [isHidden, frameSize, position, animateTo]);
        const [isShowingInnerSheet, setIsShowingInnerSheet] = (0, import_react10.useState)(false);
        const shouldHideParentSheet = !import_core27.isWeb && modal && isShowingInnerSheet;
        const parentSheetContext = (0, import_react10.useContext)(SheetInsideSheetContext);
        const onInnerSheet = (0, import_react10.useCallback)((hasChild) => {
          setIsShowingInnerSheet(hasChild);
        }, []);
        const panResponder = (0, import_react10.useMemo)(
          () => {
            if (disableDrag)
              return;
            if (!frameSize)
              return;
            if (isShowingInnerSheet)
              return;
            const minY = positions[0];
            scrollBridge.paneMinY = minY;
            let startY = at.current;
            function makeUnselectable(val) {
              if (!selectionStyleSheet)
                return;
              if (!val) {
                selectionStyleSheet.innerText = "";
              } else {
                selectionStyleSheet.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }";
              }
            }
            __name(makeUnselectable, "makeUnselectable");
            const release = /* @__PURE__ */ __name(({ vy, dragAt }) => {
              isExternalDrag = false;
              previouslyScrolling = false;
              makeUnselectable(false);
              const at2 = dragAt + startY;
              const end = at2 + frameSize * vy * 0.2;
              let closestPoint = 0;
              let dist = Infinity;
              for (let i = 0; i < positions.length; i++) {
                const position2 = positions[i];
                const curDist = end > position2 ? end - position2 : position2 - end;
                if (curDist < dist) {
                  dist = curDist;
                  closestPoint = i;
                }
              }
              setPosition(closestPoint);
              animateTo(closestPoint);
            }, "release");
            const finish = /* @__PURE__ */ __name((_e, state) => {
              release({
                vy: state.vy,
                dragAt: state.dy
              });
            }, "finish");
            let previouslyScrolling = false;
            const onMoveShouldSet = /* @__PURE__ */ __name((_e, { dy }) => {
              const isScrolled = scrollBridge.y !== 0;
              const isDraggingUp = dy < 0;
              const isAtTop = scrollBridge.paneY <= scrollBridge.paneMinY;
              if (isScrolled) {
                previouslyScrolling = true;
                return false;
              }
              if (previouslyScrolling) {
                previouslyScrolling = false;
                return true;
              }
              if (isAtTop) {
                if (!isScrolled && isDraggingUp) {
                  return false;
                }
              }
              return Math.abs(dy) > 5;
            }, "onMoveShouldSet");
            const grant = /* @__PURE__ */ __name(() => {
              makeUnselectable(true);
              stopSpring();
              startY = at.current;
            }, "grant");
            let isExternalDrag = false;
            scrollBridge.drag = (dy) => {
              if (!isExternalDrag) {
                isExternalDrag = true;
                grant();
              }
              const to = dy + startY;
              animatedNumber.setValue(resisted(to, minY), { type: "direct" });
            };
            scrollBridge.release = release;
            return import_react_native8.PanResponder.create({
              onMoveShouldSetPanResponder: onMoveShouldSet,
              onPanResponderGrant: grant,
              onPanResponderMove: (_e, { dy }) => {
                const toFull = dy + startY;
                const to = resisted(toFull, minY);
                animatedNumber.setValue(to, { type: "direct" });
              },
              onPanResponderEnd: finish,
              onPanResponderTerminate: finish,
              onPanResponderRelease: finish
            });
          },
          [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]
        );
        let handleComponent = null;
        let overlayComponent = null;
        let frameComponent = null;
        import_react10.default.Children.forEach(childrenProp, (child) => {
          var _a, _b;
          if ((0, import_react10.isValidElement)(child)) {
            const name = (_b = (_a = child.type) == null ? void 0 : _a["staticConfig"]) == null ? void 0 : _b.componentName;
            switch (name) {
              case "SheetHandle":
                handleComponent = child;
                break;
              case "Sheet":
                frameComponent = child;
                break;
              case "SheetOverlay":
                overlayComponent = child;
                break;
              default:
                console.warn("Warning: passed invalid child to Sheet", child);
            }
          }
        });
        const animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
          const translateY = frameSize === 0 ? HIDDEN_SIZE : val;
          return {
            transform: [{ translateY }]
          };
        });
        const AnimatedView = driver["NumberView"] ?? driver.View;
        (0, import_core27.useIsomorphicLayoutEffect)(() => {
          if (!(parentSheetContext && open))
            return;
          parentSheetContext(true);
          return () => {
            parentSheetContext(false);
          };
        }, [parentSheetContext, open]);
        const nextParentContext = (0, import_react10.useMemo)(
          () => ({
            zIndex
          }),
          [zIndex]
        );
        const handleLayout = (0, import_react10.useCallback)((e) => {
          var _a;
          let next = (_a = e.nativeEvent) == null ? void 0 : _a.layout.height;
          if (import_core27.isWeb && import_core27.isTouchable && !open) {
            next += 100;
          }
          if (!next)
            return;
          setFrameSize((prev) => {
            const isBigChange = Math.abs(prev - next) > 20;
            setIsResizing(isBigChange);
            return next;
          });
        }, []);
        const removeScrollEnabled = forceRemoveScrollEnabled ?? (open && modal);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ParentSheetContext.Provider, {
          value: nextParentContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_SheetContext.SheetProvider, {
            modal,
            contentRef,
            frameSize,
            dismissOnOverlayPress,
            dismissOnSnapToBottom,
            open,
            hidden: !!isHidden,
            scope: __scopeSheet,
            position,
            snapPoints,
            setPosition,
            setOpen,
            scrollBridge,
            children: [
              isResizing || shouldHideParentSheet ? null : overlayComponent,
              /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(AnimatedView, {
                ref,
                ...panResponder == null ? void 0 : panResponder.panHandlers,
                onLayout: handleLayout,
                pointerEvents: open && !shouldHideParentSheet ? "auto" : "none",
                style: [
                  {
                    position: "absolute",
                    zIndex,
                    width: "100%",
                    height: "100%",
                    opacity
                  },
                  animatedStyle
                ],
                children: [
                  handleComponent,
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_remove_scroll2.RemoveScroll, {
                    forwardProps: true,
                    enabled: removeScrollEnabled,
                    allowPinchZoom: true,
                    shards: [contentRef],
                    removeScrollBar: false,
                    children: isResizing ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {}) : frameComponent
                  })
                ]
              })
            ]
          })
        });
        const adaptContext = (0, import_react10.useContext)(import_adapt2.AdaptParentContext);
        if (modal) {
          const modalContents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.Portal, {
            zIndex,
            ...portalProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Theme, {
              forceClassName: true,
              name: themeName,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_adapt2.AdaptParentContext.Provider, {
                value: adaptContext,
                children: contents
              })
            })
          });
          if (import_core27.isWeb) {
            return modalContents;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetInsideSheetContext.Provider, {
            value: onInnerSheet,
            children: modalContents
          });
        }
        return contents;
      }, "SheetImplementation2")),
      { componentName: "Sheet" }
    );
    var SheetInsideSheetContext = (0, import_react10.createContext)(null);
    var ControlledSheet2 = Sheet;
    function getPercentSize(point, frameSize) {
      if (!frameSize)
        return 0;
      if (point === void 0) {
        console.warn("No snapPoint");
        return 0;
      }
      const pct = point / 100;
      const next = Math.round(frameSize - pct * frameSize);
      return next;
    }
    __name(getPercentSize, "getPercentSize");
    function resisted(y, minY, maxOverflow = 25) {
      if (y < minY) {
        const past = minY - y;
        const pctPast = Math.min(maxOverflow, past) / maxOverflow;
        const diminishBy = 1.1 - Math.pow(0.1, pctPast);
        const extra = -diminishBy * maxOverflow;
        return minY + extra;
      }
      return y;
    }
    __name(resisted, "resisted");
    var SheetControllerContext = (0, import_react10.createContext)(null);
    var SheetController2 = /* @__PURE__ */ __name(({
      children,
      onOpenChange: onOpenChangeProp,
      ...value
    }) => {
      const onOpenChange = (0, import_core27.useEvent)(onOpenChangeProp);
      const memoValue = (0, import_react10.useMemo)(
        () => ({
          open: value.open,
          hidden: value.hidden,
          disableDrag: value.disableDrag,
          onOpenChange
        }),
        [onOpenChange, value.open, value.hidden, value.disableDrag]
      );
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetControllerContext.Provider, {
        value: memoValue,
        children
      });
    }, "SheetController");
  }
});

// ../../node_modules/@tamagui/sheet/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "../../node_modules/@tamagui/sheet/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Sheet(), module2.exports);
  }
});

// ../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "../../node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      getFontSized: () => getFontSized4
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_core27 = require("@tamagui/core-node");
    var getFontSized4 = /* @__PURE__ */ __name((val = "$true", { fonts, theme, props }) => {
      var _a, _b, _c;
      const family = (0, import_core27.getVariableValue)(props.fontFamily) || "$body";
      const font = fonts[family] || fonts["$body"];
      if (!font) {
        if (process.env.NODE_ENV === "development") {
          console.warn("\u26A0\uFE0F no font found", {
            family,
            fontTokens: Object.keys(fonts),
            val
          });
        }
        return {};
      }
      const fontFamily = font.family;
      const fontSize = props.fontSize || font.size[val];
      const lineHeight = props.lineHeight || font.lineHeight[val];
      const fontWeight = props.fontWeight || font.weight[val];
      const letterSpacing = props.letterSpacing || font.letterSpacing[val];
      const fontStyle = props.fontStyle || ((_a = font.style) == null ? void 0 : _a[val]);
      const textTransform = props.textTransform || ((_b = font.transform) == null ? void 0 : _b[val]);
      const color = props.color || ((_c = font.color) == null ? void 0 : _c[val]) || theme.color;
      const style = {
        color,
        fontStyle,
        textTransform,
        fontFamily,
        fontWeight,
        letterSpacing,
        fontSize,
        lineHeight
      };
      if (process.env.NODE_ENV === "development") {
        if (props["debug"]) {
          console.groupCollapsed("  \u{1F539} getFont", val, props["fontWeight"], props["fow"]);
          console.log({ style, props, font });
          console.groupEnd();
        }
      }
      return style;
    }, "getFontSized");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SizableText_exports = {};
    __export2(SizableText_exports, {
      SizableText: () => SizableText2
    });
    module2.exports = __toCommonJS2(SizableText_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_get_font_sized4 = require_cjs19();
    var SizableText2 = (0, import_core27.styled)(import_core27.Text, {
      name: "SizableText",
      fontFamily: "$body",
      variants: {
        size: import_get_font_sized4.getFontSized
      },
      defaultVariants: {
        size: "$true"
      }
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Paragraph_exports = {};
    __export2(Paragraph_exports, {
      Paragraph: () => Paragraph2
    });
    module2.exports = __toCommonJS2(Paragraph_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_SizableText2 = require_SizableText();
    var Paragraph2 = (0, import_core27.styled)(import_SizableText2.SizableText, {
      name: "Paragraph",
      tag: "p",
      selectable: true
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Headings_exports = {};
    __export2(Headings_exports, {
      H1: () => H12,
      H2: () => H22,
      H3: () => H32,
      H4: () => H42,
      H5: () => H52,
      H6: () => H62,
      Heading: () => Heading2
    });
    module2.exports = __toCommonJS2(Headings_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_Paragraph2 = require_Paragraph();
    var Heading2 = (0, import_core27.styled)(import_Paragraph2.Paragraph, {
      tag: "span",
      name: "Heading",
      accessibilityRole: "header",
      fontFamily: "$heading",
      size: "$8",
      margin: 0
    });
    var H12 = (0, import_core27.styled)(Heading2, {
      name: "H1",
      tag: "h1",
      size: "$10"
    });
    var H22 = (0, import_core27.styled)(Heading2, {
      name: "H2",
      tag: "h2",
      size: "$9"
    });
    var H32 = (0, import_core27.styled)(Heading2, {
      name: "H3",
      tag: "h3",
      size: "$8"
    });
    var H42 = (0, import_core27.styled)(Heading2, {
      name: "H4",
      tag: "h4",
      size: "$7"
    });
    var H52 = (0, import_core27.styled)(Heading2, {
      name: "H5",
      tag: "h5",
      size: "$6"
    });
    var H62 = (0, import_core27.styled)(Heading2, {
      name: "H6",
      tag: "h6",
      size: "$5"
    });
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var wrapChildrenInText_exports = {};
    __export2(wrapChildrenInText_exports, {
      wrapChildrenInText: () => wrapChildrenInText2
    });
    module2.exports = __toCommonJS2(wrapChildrenInText_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react10 = __toESM2(require("react"));
    function wrapChildrenInText2(TextComponent, propsIn) {
      const {
        children,
        textProps,
        size,
        noTextWrap,
        color,
        fontFamily,
        fontSize,
        fontWeight,
        letterSpacing,
        textAlign
      } = propsIn;
      if (noTextWrap || !children) {
        return children;
      }
      const allChildren = import_react10.default.Children.toArray(children);
      const nextChildren = [];
      let lastIsString = false;
      const props = {};
      if (color)
        props.color = color;
      if (fontFamily)
        props.fontFamily = fontFamily;
      if (fontSize)
        props.fontSize = fontSize;
      if (fontWeight)
        props.fontWeight = fontWeight;
      if (letterSpacing)
        props.letterSpacing = letterSpacing;
      if (textAlign)
        props.textAlign = textAlign;
      if (size)
        props.size = size;
      function concatStringChildren() {
        if (!lastIsString)
          return;
        const index = nextChildren.length - 1;
        const childrenStrings = nextChildren[index];
        nextChildren[index] = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TextComponent, {
          ...props,
          ...textProps,
          children: childrenStrings
        }, index);
      }
      __name(concatStringChildren, "concatStringChildren");
      for (const child of allChildren) {
        const last = nextChildren[nextChildren.length - 1];
        const isString = typeof child === "string";
        if (isString) {
          if (lastIsString) {
            last.push(child);
          } else {
            nextChildren.push([child]);
          }
        } else {
          concatStringChildren();
          nextChildren.push(child);
        }
        lastIsString = isString;
      }
      concatStringChildren();
      return nextChildren;
    }
    __name(wrapChildrenInText2, "wrapChildrenInText");
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/types.js
var require_types = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs20 = __commonJS({
  "../../node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_SizableText(), module2.exports);
    __reExport2(src_exports, require_Paragraph(), module2.exports);
    __reExport2(src_exports, require_Headings(), module2.exports);
    __reExport2(src_exports, require_wrapChildrenInText(), module2.exports);
    __reExport2(src_exports, require_types(), module2.exports);
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js
var require_Dialog = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/Dialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Dialog_exports = {};
    __export2(Dialog_exports, {
      Dialog: () => Dialog3,
      DialogClose: () => DialogClose2,
      DialogContent: () => DialogContent2,
      DialogDescription: () => DialogDescription2,
      DialogOverlay: () => DialogOverlay2,
      DialogPortal: () => DialogPortal2,
      DialogPortalFrame: () => DialogPortalFrame2,
      DialogSheetContents: () => DialogSheetContents2,
      DialogTitle: () => DialogTitle2,
      DialogTrigger: () => DialogTrigger2,
      DialogWarningProvider: () => DialogWarningProvider2,
      createDialogScope: () => createDialogScope2
    });
    module2.exports = __toCommonJS2(Dialog_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_animate_presence2 = require_cjs5();
    var import_aria_hidden2 = require_cjs6();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_dismissable2 = require_cjs8();
    var import_focus_scope2 = require_cjs9();
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var DIALOG_NAME2 = "Dialog";
    var [createDialogContext2, createDialogScope2] = (0, import_create_context4.createContextScope)(DIALOG_NAME2);
    var [DialogProvider2, useDialogContext2] = createDialogContext2(DIALOG_NAME2);
    var TRIGGER_NAME2 = "DialogTrigger";
    var DialogTriggerFrame2 = (0, import_core27.styled)(import_stacks9.YStack, {
      name: TRIGGER_NAME2
    });
    var DialogTrigger2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...triggerProps } = props;
        const context = useDialogContext2(TRIGGER_NAME2, __scopeDialog);
        const composedTriggerRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.triggerRef);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogTriggerFrame2, {
          tag: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": context.open,
          "aria-controls": context.contentId,
          "data-state": getState2(context.open),
          ...triggerProps,
          ref: composedTriggerRef,
          onPress: (0, import_core27.composeEventHandlers)(props.onPress, context.onOpenToggle)
        });
      }
    );
    DialogTrigger2.displayName = TRIGGER_NAME2;
    var PORTAL_NAME2 = "DialogPortal";
    var [PortalProvider3, usePortalContext2] = createDialogContext2(
      PORTAL_NAME2,
      {
        forceMount: void 0
      }
    );
    var DialogPortalFrame2 = (0, import_core27.styled)(import_stacks9.YStack, {
      alignItems: "center",
      justifyContent: "center",
      fullscreen: true,
      zIndex: 100,
      ...import_core27.isWeb && {
        maxHeight: "100vh",
        position: "fixed"
      }
    });
    var DialogPortalItem2 = /* @__PURE__ */ __name((props) => {
      const themeName = (0, import_core27.useThemeName)();
      const context = useDialogContext2(PORTAL_NAME2, props.__scopeDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalItem, {
        hostName: props.hostName,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPortalItemContent2, {
          ...props,
          themeName,
          context
        })
      });
    }, "DialogPortalItem");
    function DialogPortalItemContent2(props) {
      const {
        __scopeDialog,
        children,
        context,
        themeName,
        space,
        spaceDirection,
        separator
      } = props;
      let childrenSpaced = children;
      if (space || separator) {
        childrenSpaced = (0, import_core27.spacedChildren)({
          children,
          separator,
          space,
          direction: spaceDirection
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogProvider2, {
        scope: __scopeDialog,
        ...context,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Theme, {
          name: themeName,
          children: childrenSpaced
        })
      });
    }
    __name(DialogPortalItemContent2, "DialogPortalItemContent");
    var DialogPortal2 = /* @__PURE__ */ __name((props) => {
      const { __scopeDialog, forceMount, children, ...frameProps } = props;
      const context = useDialogContext2(PORTAL_NAME2, __scopeDialog);
      const isShowing = forceMount || context.open;
      const [isFullyHidden, setIsFullyHidden] = React13.useState(!isShowing);
      if (isShowing && isFullyHidden) {
        setIsFullyHidden(false);
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_animate_presence2.AnimatePresence, {
        onExitComplete: () => {
          setIsFullyHidden(true);
        },
        children: isShowing ? children : null
      });
      const isSheet = useShowDialogSheet2(context);
      if (isSheet) {
        return children;
      }
      if (context.modal) {
        if (isFullyHidden) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPortalItem2, {
          __scopeDialog,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PortalProvider3, {
            scope: __scopeDialog,
            forceMount,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPortalFrame2, {
              pointerEvents: isShowing ? "auto" : "none",
              ...frameProps,
              children: contents
            })
          })
        });
      }
      return contents;
    }, "DialogPortal");
    DialogPortal2.displayName = PORTAL_NAME2;
    var OVERLAY_NAME2 = "DialogOverlay";
    var DialogOverlayFrame2 = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: OVERLAY_NAME2,
      backgrounded: true,
      fullscreen: true
    });
    var DialogOverlay2 = React13.forwardRef(
      ({ __scopeDialog, ...props }, forwardedRef) => {
        const portalContext = usePortalContext2(OVERLAY_NAME2, __scopeDialog);
        const { forceMount = portalContext.forceMount, ...overlayProps } = props;
        const context = useDialogContext2(OVERLAY_NAME2, __scopeDialog);
        const showSheet = useShowDialogSheet2(context);
        if (!forceMount) {
          if (!context.modal || showSheet) {
            return null;
          }
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogOverlayImpl2, {
          context,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    DialogOverlay2.displayName = OVERLAY_NAME2;
    var DialogOverlayImpl2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { context, ...overlayProps } = props;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogOverlayFrame2, {
          "data-state": getState2(context.open),
          pointerEvents: context.open ? "auto" : "none",
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    var CONTENT_NAME2 = "DialogContent";
    var DialogContentFrame2 = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: CONTENT_NAME2,
      tag: "dialog",
      position: "relative",
      backgrounded: true,
      padded: true,
      radiused: true,
      elevate: true,
      variants: {
        size: {
          "...size": (val, extras) => {
            return {};
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var DialogContent2 = DialogContentFrame2.extractable(
      React13.forwardRef(
        ({ __scopeDialog, ...props }, forwardedRef) => {
          const portalContext = usePortalContext2(CONTENT_NAME2, __scopeDialog);
          const { forceMount = portalContext.forceMount, ...contentProps } = props;
          const context = useDialogContext2(CONTENT_NAME2, __scopeDialog);
          const contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogContentModal2, {
            context,
            ...contentProps,
            ref: forwardedRef
          }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogContentNonModal2, {
            context,
            ...contentProps,
            ref: forwardedRef
          });
          if (!import_core27.isWeb) {
            return contents;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_remove_scroll2.RemoveScroll, {
            forwardProps: true,
            enabled: context.open,
            allowPinchZoom: context.allowPinchZoom,
            shards: [context.contentRef],
            removeScrollBar: false,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
              className: "_dsp_contents",
              children: contents
            })
          });
        }
      )
    );
    DialogContent2.displayName = CONTENT_NAME2;
    var DialogContentModal2 = React13.forwardRef(
      ({ children, context, ...props }, forwardedRef) => {
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.contentRef, contentRef);
        if (import_core27.isWeb) {
          React13.useEffect(() => {
            if (!context.open)
              return;
            const content = contentRef.current;
            if (content)
              return (0, import_aria_hidden2.hideOthers)(content);
          }, [context.open]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogContentImpl2, {
          ...props,
          context,
          ref: composedRefs,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core27.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core27.composeEventHandlers)(
            props.onPointerDownOutside,
            (event) => {
              const originalEvent = event["detail"].originalEvent;
              const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
              const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
              if (isRightClick)
                event.preventDefault();
            }
          ),
          onFocusOutside: (0, import_core27.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault()
          ),
          children
        });
      }
    );
    var DialogContentNonModal2 = React13.forwardRef(
      (props, forwardedRef) => {
        const hasInteractedOutsideRef = React13.useRef(false);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogContentImpl2, {
          ...props,
          ref: forwardedRef,
          trapFocus: false,
          disableOutsidePointerEvents: false,
          onCloseAutoFocus: (event) => {
            var _a, _b;
            (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented) {
              if (!hasInteractedOutsideRef.current) {
                (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
              }
              event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
          },
          onInteractOutside: (event) => {
            var _a;
            (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
            if (!event.defaultPrevented)
              hasInteractedOutsideRef.current = true;
            const target = event.target;
            const trigger = props.context.triggerRef.current;
            if (!(trigger instanceof HTMLElement))
              return;
            const targetIsTrigger = trigger.contains(target);
            if (targetIsTrigger)
              event.preventDefault();
          }
        });
      }
    );
    var DialogContentImpl2 = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeDialog,
          trapFocus,
          onOpenAutoFocus,
          onCloseAutoFocus,
          disableOutsidePointerEvents,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          context,
          ...contentProps
        } = props;
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
        const showSheet = useShowDialogSheet2(context);
        const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogContentFrame2, {
          id: context.contentId,
          "aria-describedby": context.descriptionId,
          "aria-labelledby": context.titleId,
          "data-state": getState2(context.open),
          ...contentProps
        });
        if (showSheet) {
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogPortalItem2, {
            hostName: getSheetContentsName2(context),
            children: contentProps.children
          });
        }
        if (!import_core27.isWeb) {
          return contents;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_focus_scope2.FocusScope, {
              loop: true,
              trapped: trapFocus,
              onMountAutoFocus: onOpenAutoFocus,
              forceUnmount: !context.open,
              onUnmountAutoFocus: onCloseAutoFocus,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dismissable2.Dismissable, {
                disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
                forceUnmount: !context.open,
                onEscapeKeyDown,
                onPointerDownOutside,
                onFocusOutside,
                onInteractOutside,
                ref: composedRefs,
                onDismiss: () => context.onOpenChange(false),
                children: contents
              })
            }),
            process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(TitleWarning2, {
                  titleId: context.titleId
                }),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DescriptionWarning2, {
                  contentRef,
                  descriptionId: context.descriptionId
                })
              ]
            })
          ]
        });
      }
    );
    var TITLE_NAME2 = "DialogTitle";
    var DialogTitleFrame2 = (0, import_core27.styled)(import_text5.H2, {
      name: TITLE_NAME2
    });
    var DialogTitle2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...titleProps } = props;
        const context = useDialogContext2(TITLE_NAME2, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogTitleFrame2, {
          id: context.titleId,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    DialogTitle2.displayName = TITLE_NAME2;
    var DialogDescriptionFrame2 = (0, import_core27.styled)(import_text5.Paragraph, {
      name: "DialogDescription"
    });
    var DESCRIPTION_NAME2 = "DialogDescription";
    var DialogDescription2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, ...descriptionProps } = props;
        const context = useDialogContext2(DESCRIPTION_NAME2, __scopeDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogDescriptionFrame2, {
          id: context.descriptionId,
          ...descriptionProps,
          ref: forwardedRef
        });
      }
    );
    DialogDescription2.displayName = DESCRIPTION_NAME2;
    var CLOSE_NAME2 = "DialogClose";
    var DialogClose2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
        const context = useDialogContext2(CLOSE_NAME2, __scopeDialog);
        const isSheet = useShowDialogSheet2(context);
        if (isSheet && !displayWhenAdapted) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
          tag: "button",
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core27.composeEventHandlers)(
            props.onPress,
            () => context.onOpenChange(false)
          )
        });
      }
    );
    DialogClose2.displayName = CLOSE_NAME2;
    function getState2(open) {
      return open ? "open" : "closed";
    }
    __name(getState2, "getState");
    var TITLE_WARNING_NAME2 = "DialogTitleWarning";
    var [DialogWarningProvider2, useWarningContext2] = (0, import_create_context4.createContext)(TITLE_WARNING_NAME2, {
      contentName: CONTENT_NAME2,
      titleName: TITLE_NAME2,
      docsSlug: "dialog"
    });
    var TitleWarning2 = /* @__PURE__ */ __name(({ titleId }) => {
      if (process.env.NODE_ENV === "development") {
        const titleWarningContext = useWarningContext2(TITLE_WARNING_NAME2);
        const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
        React13.useEffect(() => {
          if (!import_core27.isWeb)
            return;
          if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) {
              console.warn(MESSAGE);
            }
          }
        }, [MESSAGE, titleId]);
      }
      return null;
    }, "TitleWarning");
    var DESCRIPTION_WARNING_NAME2 = "DialogDescriptionWarning";
    var DescriptionWarning2 = /* @__PURE__ */ __name(({
      contentRef,
      descriptionId
    }) => {
      if (process.env.NODE_ENV === "development") {
        const descriptionWarningContext = useWarningContext2(DESCRIPTION_WARNING_NAME2);
        const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
        React13.useEffect(() => {
          if (!import_core27.isWeb)
            return;
          const contentNode = contentRef.current;
          if (!(contentNode instanceof HTMLElement)) {
            return;
          }
          const describedById = contentNode.getAttribute("aria-describedby");
          if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) {
              console.warn(MESSAGE);
            }
          }
        }, [MESSAGE, contentRef, descriptionId]);
      }
      return null;
    }, "DescriptionWarning");
    var Dialog3 = (0, import_core27.withStaticProperties)(
      React13.forwardRef(/* @__PURE__ */ __name(function Dialog22(props, ref) {
        const {
          __scopeDialog,
          children,
          open: openProp,
          defaultOpen = false,
          onOpenChange,
          modal = true,
          allowPinchZoom = false
        } = props;
        const scopeId = (0, import_core27.useId)();
        const contentId = (0, import_core27.useId)();
        const titleId = (0, import_core27.useId)();
        const descriptionId = (0, import_core27.useId)();
        const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
        const sheetContentsName = getSheetContentsName2({ scopeKey, contentId });
        const triggerRef = React13.useRef(null);
        const contentRef = React13.useRef(null);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen,
          onChange: onOpenChange
        });
        const onOpenToggle = React13.useCallback(
          () => setOpen((prevOpen) => !prevOpen),
          [setOpen]
        );
        const context = {
          scope: __scopeDialog,
          scopeKey,
          triggerRef,
          contentRef,
          contentId,
          titleId,
          descriptionId,
          open,
          onOpenChange: setOpen,
          onOpenToggle,
          modal,
          allowPinchZoom
        };
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(
            (props2) => {
              return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalHost, {
                forwardProps: props2,
                name: sheetContentsName
              });
            },
            [sheetContentsName]
          )
        });
        React13.useImperativeHandle(
          ref,
          () => ({
            open: setOpen
          }),
          [setOpen]
        );
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AdaptProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogProvider2, {
            ...context,
            sheetBreakpoint: when,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DialogSheetController2, {
              onOpenChange: setOpen,
              __scopeDialog,
              children
            })
          })
        });
      }, "Dialog2")),
      {
        Trigger: DialogTrigger2,
        Portal: DialogPortal2,
        Overlay: DialogOverlay2,
        Content: DialogContent2,
        Title: DialogTitle2,
        Description: DialogDescription2,
        Close: DialogClose2,
        Sheet: import_sheet2.ControlledSheet,
        Adapt: import_adapt2.Adapt
      }
    );
    var SHEET_CONTENTS_NAME2 = "DialogSheetContents";
    var DialogSheetContents2 = /* @__PURE__ */ __name(({
      name,
      ...props
    }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalHost, {
        forwardProps: props,
        name
      });
    }, "DialogSheetContents");
    DialogSheetContents2.displayName = SHEET_CONTENTS_NAME2;
    var getSheetContentsName2 = /* @__PURE__ */ __name(({
      scopeKey,
      contentId
    }) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
    var DialogSheetController2 = /* @__PURE__ */ __name((props) => {
      const context = useDialogContext2("DialogSheetController", props.__scopeDialog);
      const showSheet = useShowDialogSheet2(context);
      const breakpointActive = useSheetBreakpointActive2(context);
      const getShowSheet = (0, import_core27.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_sheet2.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "DialogSheetController");
    var useSheetBreakpointActive2 = /* @__PURE__ */ __name((context) => {
      const media = (0, import_core27.useMedia)();
      return context.sheetBreakpoint ? media[context.sheetBreakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowDialogSheet2 = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSheetBreakpointActive2(context);
      return context.open === false ? false : breakpointActive;
    }, "useShowDialogSheet");
  }
});

// ../../node_modules/@tamagui/dialog/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "../../node_modules/@tamagui/dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Dialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js
var require_AlertDialog = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/AlertDialog.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var AlertDialog_exports = {};
    __export2(AlertDialog_exports, {
      AlertDialog: () => AlertDialog,
      AlertDialogAction: () => AlertDialogAction,
      AlertDialogCancel: () => AlertDialogCancel,
      AlertDialogContent: () => AlertDialogContent,
      AlertDialogDescription: () => AlertDialogDescription,
      AlertDialogOverlay: () => AlertDialogOverlay,
      AlertDialogPortal: () => AlertDialogPortal,
      AlertDialogTitle: () => AlertDialogTitle,
      AlertDialogTrigger: () => AlertDialogTrigger,
      createAlertDialogScope: () => createAlertDialogScope
    });
    module2.exports = __toCommonJS2(AlertDialog_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_dialog = require_cjs21();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_react_native8 = require("react-native-web-lite");
    var ROOT_NAME = "AlertDialog";
    var [createAlertDialogContext, createAlertDialogScope] = (0, import_create_context4.createContextScope)(ROOT_NAME, [
      import_dialog.createDialogScope
    ]);
    var useDialogScope = (0, import_dialog.createDialogScope)();
    var TRIGGER_NAME2 = "AlertDialogTrigger";
    var NativeAlertDialogTriggerFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: "DialogTrigger"
    });
    var AlertDialogTrigger = React13.forwardRef(
      (props, forwardedRef) => {
        if (props["__native"]) {
          const { __native, onPress, __onPress, ...rest } = props;
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(NativeAlertDialogTriggerFrame, {
            ...rest,
            onPress: (0, import_core27.composeEventHandlers)(onPress, __onPress)
          });
        }
        const { __scopeAlertDialog, ...triggerProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogTrigger, {
          ...dialogScope,
          ...triggerProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTrigger.displayName = TRIGGER_NAME2;
    var PORTAL_NAME2 = "AlertDialogPortal";
    var AlertDialogPortal = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, ...portalProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogPortal, {
        ...dialogScope,
        ...portalProps
      });
    }, "AlertDialogPortal");
    AlertDialogPortal.displayName = PORTAL_NAME2;
    var OVERLAY_NAME2 = "AlertDialogOverlay";
    var AlertDialogOverlay = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...overlayProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogOverlay, {
          ...dialogScope,
          ...overlayProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogOverlay.displayName = OVERLAY_NAME2;
    var CONTENT_NAME2 = "AlertDialogContent";
    var [AlertDialogContentProvider, useAlertDialogContentContext] = createAlertDialogContext(CONTENT_NAME2);
    var AlertDialogContent = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, children, ...contentProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const contentRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
        const cancelRef = React13.useRef(null);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogWarningProvider, {
          contentName: CONTENT_NAME2,
          titleName: TITLE_NAME2,
          docsSlug: "alert-dialog",
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AlertDialogContentProvider, {
            scope: __scopeAlertDialog,
            cancelRef,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_dialog.DialogContent, {
              role: "alertdialog",
              ...dialogScope,
              ...contentProps,
              ref: composedRefs,
              onOpenAutoFocus: (0, import_core27.composeEventHandlers)(
                contentProps.onOpenAutoFocus,
                (event) => {
                  var _a;
                  event.preventDefault();
                  if (import_core27.isWeb) {
                    (_a = cancelRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
                  }
                }
              ),
              onPointerDownOutside: (event) => event.preventDefault(),
              onInteractOutside: (event) => event.preventDefault(),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Slottable, {
                  children
                }),
                process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DescriptionWarning2, {
                  contentRef
                })
              ]
            })
          })
        });
      }
    );
    AlertDialogContent.displayName = CONTENT_NAME2;
    var TITLE_NAME2 = "AlertDialogTitle";
    var AlertDialogTitle = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...titleProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogTitle, {
          ...dialogScope,
          ...titleProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogTitle.displayName = TITLE_NAME2;
    var DESCRIPTION_NAME2 = "AlertDialogDescription";
    var AlertDialogDescription = React13.forwardRef((props, forwardedRef) => {
      const { __scopeAlertDialog, ...descriptionProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogDescription, {
        ...dialogScope,
        ...descriptionProps,
        ref: forwardedRef
      });
    });
    AlertDialogDescription.displayName = DESCRIPTION_NAME2;
    var ACTION_NAME = "AlertDialogAction";
    var AlertDialogAction = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...actionProps } = props;
        const dialogScope = useDialogScope(__scopeAlertDialog);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...actionProps,
          ref: forwardedRef
        });
      }
    );
    AlertDialogAction.displayName = ACTION_NAME;
    var CANCEL_NAME = "AlertDialogCancel";
    var AlertDialogCancel = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeAlertDialog, ...cancelProps } = props;
        const { cancelRef } = useAlertDialogContentContext(CANCEL_NAME, __scopeAlertDialog);
        const dialogScope = useDialogScope(__scopeAlertDialog);
        const ref = (0, import_compose_refs3.useComposedRefs)(forwardedRef, cancelRef);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.DialogClose, {
          ...dialogScope,
          ...cancelProps,
          ref
        });
      }
    );
    AlertDialogCancel.displayName = CANCEL_NAME;
    var DescriptionWarning2 = /* @__PURE__ */ __name(({ contentRef }) => {
      if (process.env.NODE_ENV === "development") {
        React13.useEffect(() => {
          var _a;
          if (!import_core27.isWeb)
            return;
          const hasDescription = document.getElementById(
            (_a = contentRef.current) == null ? void 0 : _a.getAttribute("aria-describedby")
          );
          if (!hasDescription) {
            console.warn(`\`${CONTENT_NAME2}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${CONTENT_NAME2}\` by passing a \`${DESCRIPTION_NAME2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${CONTENT_NAME2}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
          }
        }, [contentRef]);
      }
      return null;
    }, "DescriptionWarning");
    var AlertDialogInner = /* @__PURE__ */ __name((props) => {
      const { __scopeAlertDialog, native, ...alertDialogProps } = props;
      const dialogScope = useDialogScope(__scopeAlertDialog);
      if (process.env.TAMAGUI_TARGET === "native") {
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: props.open,
          defaultProp: props.defaultOpen || false,
          onChange: props.onOpenChange,
          transition: true
        });
        let triggerElement = null;
        let title = "";
        let description = "";
        const buttons = [];
        forEachChildDeep(React13.Children.toArray(props.children), (child) => {
          if (!React13.isValidElement(child))
            return false;
          const name = (0, import_core27.isTamaguiElement)(child) ? child.type.staticConfig.componentName : child.type["displayName"];
          switch (name) {
            case TRIGGER_NAME2: {
              triggerElement = React13.cloneElement(child, {
                __native: true
              });
              return false;
            }
            case TITLE_NAME2: {
              title = getStringChildren(child);
              return false;
            }
            case DESCRIPTION_NAME2: {
              description = getStringChildren(child);
              return false;
            }
            case ACTION_NAME:
            case CANCEL_NAME: {
              const style = name === ACTION_NAME ? "default" : "cancel";
              const text = getStringChildren(child);
              const onPress = /* @__PURE__ */ __name(() => {
                var _a;
                const childProps = child.props;
                (_a = childProps == null ? void 0 : childProps.onPress) == null ? void 0 : _a.call(childProps, { native: true });
                setOpen(false);
              }, "onPress");
              buttons.push({
                style,
                text,
                onPress
              });
              return false;
            }
            default: {
              return true;
            }
          }
        });
        React13.useLayoutEffect(() => {
          if (!open || !native)
            return;
          if (title || description) {
            import_react_native8.Alert.alert(title, description, buttons);
          }
        }, [native, open]);
        if (native) {
          return React13.cloneElement(triggerElement, {
            __onPress: () => {
              setOpen(true);
            }
          });
        }
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dialog.Dialog, {
        ...dialogScope,
        ...alertDialogProps,
        modal: true
      });
    }, "AlertDialogInner");
    function forEachChildDeep(children, onChild) {
      for (const child of children) {
        if (!React13.isValidElement(child))
          continue;
        if (!onChild(child))
          continue;
        if (child.props.children) {
          forEachChildDeep(React13.Children.toArray(child.props.children), onChild);
        }
      }
    }
    __name(forEachChildDeep, "forEachChildDeep");
    function getStringChildren(child) {
      let string = "";
      forEachChildDeep(React13.Children.toArray(child), (child2) => {
        if (typeof child2.props.children === "string") {
          string = child2.props.children;
          return false;
        }
        return true;
      });
      return string;
    }
    __name(getStringChildren, "getStringChildren");
    var AlertDialog = (0, import_core27.withStaticProperties)(AlertDialogInner, {
      Trigger: AlertDialogTrigger,
      Portal: AlertDialogPortal,
      Overlay: AlertDialogOverlay,
      Content: AlertDialogContent,
      Action: AlertDialogAction,
      Cancel: AlertDialogCancel,
      Title: AlertDialogTitle,
      Description: AlertDialogDescription
    });
    AlertDialog.displayName = ROOT_NAME;
  }
});

// ../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "../../node_modules/@tamagui/alert-dialog/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_AlertDialog(), module2.exports);
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Image_exports = {};
    __export2(Image_exports, {
      Image: () => Image2
    });
    module2.exports = __toCommonJS2(Image_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_react_native8 = require("react-native-web-lite");
    (0, import_core27.setupReactNative)({
      Image: import_react_native8.Image
    });
    var StyledImage = (0, import_core27.styled)(import_react_native8.Image, {
      name: "Image",
      position: "relative",
      source: { uri: "" },
      zIndex: 1
    });
    var Image2 = StyledImage.extractable((inProps) => {
      const props = (0, import_core27.getExpandedShorthands)(inProps);
      const { src, ...rest } = props;
      const source = typeof src === "string" ? { uri: src, ...import_core27.isWeb && { width: props.width, height: props.height } } : src;
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(StyledImage, {
        source,
        ...rest
      });
    });
  }
});

// ../../node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "../../node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Image(), module2.exports);
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js
var require_getShapeSize = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/getShapeSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getShapeSize_exports = {};
    __export2(getShapeSize_exports, {
      getShapeSize: () => getShapeSize2
    });
    module2.exports = __toCommonJS2(getShapeSize_exports);
    var getShapeSize2 = /* @__PURE__ */ __name((size, { tokens }) => {
      const width = tokens.size[size] ?? size;
      const height = tokens.size[size] ?? size;
      return {
        width,
        height,
        minWidth: width,
        maxWidth: width,
        maxHeight: height,
        minHeight: height
      };
    }, "getShapeSize");
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Square.js
var require_Square = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Square.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Square_exports = {};
    __export2(Square_exports, {
      Square: () => Square2
    });
    module2.exports = __toCommonJS2(Square_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var import_getShapeSize = require_getShapeSize();
    var Square2 = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: "Square",
      alignItems: "center",
      justifyContent: "center",
      variants: {
        circular: {
          true: {
            borderRadius: 1e5
          }
        },
        size: {
          "...size": import_getShapeSize.getShapeSize
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/Circle.js
var require_Circle = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/Circle.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Circle_exports = {};
    __export2(Circle_exports, {
      Circle: () => Circle
    });
    module2.exports = __toCommonJS2(Circle_exports);
    var import_core27 = require("@tamagui/core-node");
    var import_Square = require_Square();
    var Circle = (0, import_core27.styled)(import_Square.Square, {
      name: "Circle",
      circular: true
    });
  }
});

// ../../node_modules/@tamagui/shapes/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "../../node_modules/@tamagui/shapes/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Square(), module2.exports);
    __reExport2(src_exports, require_Circle(), module2.exports);
    __reExport2(src_exports, require_getShapeSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getFontSize_exports = {};
    __export2(getFontSize_exports, {
      getFontSize: () => getFontSize2,
      getFontSizeToken: () => getFontSizeToken,
      getFontSizeVariable: () => getFontSizeVariable
    });
    module2.exports = __toCommonJS2(getFontSize_exports);
    var import_core27 = require("@tamagui/core-node");
    var getFontSize2 = /* @__PURE__ */ __name((inSize, opts) => {
      const res = getFontSizeVariable(inSize, opts);
      if ((0, import_core27.isVariable)(res)) {
        return +res.val;
      }
      return res ? +res : 16;
    }, "getFontSize");
    var getFontSizeVariable = /* @__PURE__ */ __name((inSize, opts) => {
      const token = getFontSizeToken(inSize, opts);
      if (!token) {
        return inSize;
      }
      const conf = (0, import_core27.getConfig)();
      return conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size[token];
    }, "getFontSizeVariable");
    var getFontSizeToken = /* @__PURE__ */ __name((inSize, opts) => {
      if (typeof inSize === "number") {
        return null;
      }
      const size = inSize || "$4";
      const relativeSize = (opts == null ? void 0 : opts.relativeSize) || 0;
      const conf = (0, import_core27.getConfig)();
      const fontSize = conf.fontsParsed[(opts == null ? void 0 : opts.font) || "$body"].size;
      const sizeTokens = Object.keys(fontSize);
      let foundIndex = sizeTokens.indexOf(size);
      if (foundIndex === -1) {
        if (size.endsWith(".5")) {
          foundIndex = sizeTokens.indexOf(size.replace(".5", ""));
        }
      }
      if (process.env.NODE_ENV === "development") {
        if (foundIndex === -1) {
          console.warn("No font size found", inSize, opts, "in size tokens", sizeTokens);
        }
      }
      const tokenIndex = Math.min(
        Math.max(0, foundIndex + relativeSize),
        sizeTokens.length - 1
      );
      return sizeTokens[tokenIndex] ?? size;
    }, "getFontSizeToken");
  }
});

// ../../node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs25 = __commonJS({
  "../../node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_getFontSize(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var clamp_exports = {};
    __export2(clamp_exports, {
      clamp: () => clamp
    });
    module2.exports = __toCommonJS2(clamp_exports);
    function clamp(value, [min, max]) {
      return Math.min(max, Math.max(min, value));
    }
    __name(clamp, "clamp");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var composeEventHandlers_exports = {};
    __export2(composeEventHandlers_exports, {
      composeEventHandlers: () => composeEventHandlers2
    });
    module2.exports = __toCommonJS2(composeEventHandlers_exports);
    function composeEventHandlers2(og, next, { checkDefaultPrevented = true } = {}) {
      if (!og || !next) {
        return next || og;
      }
      return /* @__PURE__ */ __name(function composedEventHandler(event) {
        og == null ? void 0 : og(event);
        if (!(checkDefaultPrevented && "defaultPrevented" in event) || "defaultPrevented" in event && !event.defaultPrevented) {
          return next == null ? void 0 : next(event);
        }
      }, "composedEventHandler");
    }
    __name(composeEventHandlers2, "composeEventHandlers");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var concatClassName_exports = {};
    __export2(concatClassName_exports, {
      concatClassName: () => concatClassName
    });
    module2.exports = __toCommonJS2(concatClassName_exports);
    function concatClassName(_cn) {
      const args = arguments;
      const usedPrefixes = [];
      let final = "";
      const len = args.length;
      let propObjects = null;
      for (let x = len; x >= 0; x--) {
        const cns = args[x];
        if (!cns)
          continue;
        if (!Array.isArray(cns) && typeof cns !== "string") {
          propObjects = propObjects || [];
          propObjects.push(cns);
          continue;
        }
        const names = Array.isArray(cns) ? cns : cns.split(" ");
        const numNames = names.length;
        for (let i = numNames - 1; i >= 0; i--) {
          const name = names[i];
          if (!name || name === " ")
            continue;
          if (name[0] !== "_") {
            final = name + " " + final;
            continue;
          }
          const splitIndex = name.indexOf("-");
          if (splitIndex < 1) {
            final = name + " " + final;
            continue;
          }
          const nextChar = name[splitIndex + 1];
          const isMediaQuery = nextChar === "_";
          const styleKey = name.slice(1, name.lastIndexOf("-"));
          const mediaKey = isMediaQuery ? name.slice(splitIndex + 2, splitIndex + 7) : null;
          const uid = mediaKey ? styleKey + mediaKey : styleKey;
          if (usedPrefixes.indexOf(uid) > -1) {
            continue;
          }
          usedPrefixes.push(uid);
          const propName = styleKey;
          if (propName && propObjects) {
            if (propObjects.some((po) => {
              if (mediaKey) {
                const propKey = pseudoInvert[mediaKey];
                return po && po[propKey] && propName in po[propKey] && po[propKey] !== null;
              }
              const res = po && propName in po && po[propName] !== null;
              return res;
            })) {
              continue;
            }
          }
          final = name + " " + final;
        }
      }
      return final;
    }
    __name(concatClassName, "concatClassName");
    var pseudoInvert = {
      hover: "hoverStyle",
      focus: "focusStyle",
      press: "pressStyle"
    };
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var validStyleProps_exports = {};
    __export2(validStyleProps_exports, {
      stylePropsAll: () => stylePropsAll,
      stylePropsText: () => stylePropsText,
      stylePropsTextOnly: () => stylePropsTextOnly,
      stylePropsTransform: () => stylePropsTransform,
      stylePropsView: () => stylePropsView,
      validPseudoKeys: () => validPseudoKeys,
      validStyles: () => validStyles,
      validStylesOnBaseProps: () => validStylesOnBaseProps
    });
    module2.exports = __toCommonJS2(validStyleProps_exports);
    var stylePropsTransform = Object.freeze({
      x: true,
      y: true,
      scale: true,
      perspective: true,
      scaleX: true,
      scaleY: true,
      skewX: true,
      skewY: true,
      matrix: true,
      rotate: true,
      rotateY: true,
      rotateX: true,
      rotateZ: true
    });
    var validStylesOnBaseProps = Object.freeze({
      placeholderTextColor: true
    });
    var stylePropsView = Object.freeze({
      backfaceVisibility: true,
      backgroundColor: true,
      borderBottomColor: true,
      borderBottomStyle: true,
      borderTopStyle: true,
      borderLeftStyle: true,
      borderRightStyle: true,
      borderBottomEndRadius: true,
      borderBottomLeftRadius: true,
      borderBottomRightRadius: true,
      borderBottomStartRadius: true,
      borderBottomWidth: true,
      borderColor: true,
      borderEndColor: true,
      borderLeftColor: true,
      borderLeftWidth: true,
      borderRadius: true,
      borderRightColor: true,
      borderRightWidth: true,
      borderStartColor: true,
      borderStyle: true,
      borderTopColor: true,
      borderTopEndRadius: true,
      borderTopLeftRadius: true,
      borderTopRightRadius: true,
      borderTopStartRadius: true,
      borderTopWidth: true,
      borderWidth: true,
      opacity: true,
      transform: true,
      alignContent: true,
      alignItems: true,
      alignSelf: true,
      aspectRatio: true,
      borderEndWidth: true,
      borderStartWidth: true,
      bottom: true,
      display: true,
      end: true,
      flex: true,
      flexBasis: true,
      flexDirection: true,
      flexGrow: true,
      flexShrink: true,
      flexWrap: true,
      height: true,
      justifyContent: true,
      left: true,
      margin: true,
      marginBottom: true,
      marginEnd: true,
      marginHorizontal: true,
      marginLeft: true,
      marginRight: true,
      marginStart: true,
      marginTop: true,
      marginVertical: true,
      maxHeight: true,
      maxWidth: true,
      minHeight: true,
      minWidth: true,
      overflow: true,
      padding: true,
      paddingBottom: true,
      paddingEnd: true,
      paddingHorizontal: true,
      paddingLeft: true,
      paddingRight: true,
      paddingStart: true,
      paddingTop: true,
      paddingVertical: true,
      position: true,
      right: true,
      start: true,
      top: true,
      width: true,
      zIndex: true,
      direction: true,
      shadowColor: true,
      shadowOffset: true,
      shadowOpacity: true,
      shadowRadius: true,
      ...validStylesOnBaseProps,
      ...stylePropsTransform,
      ...process.env.TAMAGUI_TARGET === "web" && {
        overflowX: true,
        overflowY: true,
        userSelect: true,
        cursor: true,
        contain: true,
        pointerEvents: true,
        boxSizing: true,
        boxShadow: true,
        outlineColor: true,
        outlineStyle: true,
        outlineOffset: true,
        outlineWidth: true
      }
    });
    var stylePropsTextOnly = Object.freeze({
      color: true,
      fontFamily: true,
      fontSize: true,
      fontStyle: true,
      fontWeight: true,
      letterSpacing: true,
      lineHeight: true,
      textAlign: true,
      textDecorationLine: true,
      textDecorationStyle: true,
      textDecorationColor: true,
      textShadowColor: true,
      textShadowOffset: true,
      textShadowRadius: true,
      textTransform: true,
      ...process.env.TAMAGUI_TARGET === "web" && {
        whiteSpace: true,
        wordWrap: true,
        textOverflow: true,
        textDecorationDistance: true,
        userSelect: true,
        selectable: true,
        cursor: true,
        WebkitLineClamp: true,
        WebkitBoxOrient: true
      }
    });
    var stylePropsText = Object.freeze({
      ...stylePropsView,
      ...stylePropsTextOnly
    });
    var stylePropsAll = stylePropsText;
    var validPseudoKeys = Object.freeze({
      enterStyle: true,
      exitStyle: true,
      hoverStyle: true,
      pressStyle: true,
      focusStyle: true
    });
    var validStyles = Object.freeze({
      ...validPseudoKeys,
      ...stylePropsView
    });
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types2 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var types_exports = {};
    module2.exports = __toCommonJS2(types_exports);
  }
});

// ../../node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs26 = __commonJS({
  "../../node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      isValidCSSCharCode: () => isValidCSSCharCode,
      simpleHash: () => simpleHash
    });
    module2.exports = __toCommonJS2(src_exports);
    var simpleHash = /* @__PURE__ */ __name((str, hashMin = 10) => {
      let hash = 0;
      let valids = "";
      const len = str.length;
      for (let i = 0; i < len; i++) {
        const char = str.charCodeAt(i);
        if (isValidCSSCharCode(char) && len <= hashMin) {
          valids += str[i];
        } else {
          hash = (hash << 5) - hash + char;
          hash &= hash;
        }
      }
      return valids + (hash ? new Uint32Array([hash])[0].toString(36) : "");
    }, "simpleHash");
    function isValidCSSCharCode(code) {
      return code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95 || code === 45 || code >= 48 && code <= 57;
    }
    __name(isValidCSSCharCode, "isValidCSSCharCode");
  }
});

// ../../node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs27 = __commonJS({
  "../../node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_clamp(), module2.exports);
    __reExport2(src_exports, require_composeEventHandlers(), module2.exports);
    __reExport2(src_exports, require_concatClassName(), module2.exports);
    __reExport2(src_exports, require_validStyleProps(), module2.exports);
    __reExport2(src_exports, require_types2(), module2.exports);
    __reExport2(src_exports, require_cjs26(), module2.exports);
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var prevent_exports = {};
    __export2(prevent_exports, {
      prevent: () => prevent
    });
    module2.exports = __toCommonJS2(prevent_exports);
    var prevent = /* @__PURE__ */ __name((e) => [e.preventDefault(), e.stopPropagation()], "prevent");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var getSpace_exports = {};
    __export2(getSpace_exports, {
      getSpace: () => getSpace
    });
    module2.exports = __toCommonJS2(getSpace_exports);
    var import_core27 = require("@tamagui/core-node");
    var getSpace = /* @__PURE__ */ __name((token, sizeUpOrDownBy = 0) => {
      const spaces = (0, import_core27.getTokens)(true).space;
      const spaceNames = Object.keys(spaces);
      const key = spaceNames[Math.max(0, spaceNames.indexOf(String(token || "$4")) + sizeUpOrDownBy)];
      return spaces[key] || spaces["$4"];
    }, "getSpace");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useCurrentColor_exports = {};
    __export2(useCurrentColor_exports, {
      useCurrentColor: () => useCurrentColor
    });
    module2.exports = __toCommonJS2(useCurrentColor_exports);
    var import_core27 = require("@tamagui/core-node");
    var useCurrentColor = /* @__PURE__ */ __name((colorProp) => {
      const theme = (0, import_core27.useTheme)();
      return (0, import_core27.variableToString)(theme[colorProp] || colorProp || theme.color);
    }, "useCurrentColor");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useGetThemedIcon_exports = {};
    __export2(useGetThemedIcon_exports, {
      useGetThemedIcon: () => useGetThemedIcon2
    });
    module2.exports = __toCommonJS2(useGetThemedIcon_exports);
    var import_react10 = require("react");
    var import_useCurrentColor = require_useCurrentColor();
    var useGetThemedIcon2 = /* @__PURE__ */ __name((props) => {
      const color = (0, import_useCurrentColor.useCurrentColor)(props.color);
      return (el) => {
        if (!el)
          return el;
        if ((0, import_react10.isValidElement)(el)) {
          return (0, import_react10.cloneElement)(el, {
            ...props,
            ...el.props
          });
        }
        return (0, import_react10.createElement)(el, props);
      };
    }, "useGetThemedIcon");
  }
});

// ../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs28 = __commonJS({
  "../../node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_cjs27(), module2.exports);
    __reExport2(src_exports, require_prevent(), module2.exports);
    __reExport2(src_exports, require_getSpace(), module2.exports);
    __reExport2(src_exports, require_useCurrentColor(), module2.exports);
    __reExport2(src_exports, require_useGetThemedIcon(), module2.exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var registerFocusable_exports = {};
    __export2(registerFocusable_exports, {
      focusFocusable: () => focusFocusable2,
      registerFocusable: () => registerFocusable,
      unregisterFocusable: () => unregisterFocusable
    });
    module2.exports = __toCommonJS2(registerFocusable_exports);
    var registerFocusable = /* @__PURE__ */ __name((id, input) => () => {
    }, "registerFocusable");
    var unregisterFocusable = /* @__PURE__ */ __name((id) => {
    }, "unregisterFocusable");
    var focusFocusable2 = /* @__PURE__ */ __name((id) => {
    }, "focusFocusable");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusableInputHOC_exports = {};
    __export2(focusableInputHOC_exports, {
      focusableInputHOC: () => focusableInputHOC3
    });
    module2.exports = __toCommonJS2(focusableInputHOC_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_react10 = require("react");
    var import_registerFocusable = require_registerFocusable();
    function focusableInputHOC3(Component2) {
      const component = Component2.extractable(
        (0, import_react10.forwardRef)(
          (props, ref) => {
            const isInput = (0, import_core27.isTamaguiComponent)(Component2) && Component2.staticConfig.isInput;
            const inputValue = (0, import_react10.useRef)(props.value || props.defaultValue || "");
            const unregisterFocusable = (0, import_react10.useRef)();
            const inputRef = (0, import_react10.useCallback)(
              (input) => {
                var _a;
                if (!props.id)
                  return;
                if (!input)
                  return;
                (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
                unregisterFocusable.current = (0, import_registerFocusable.registerFocusable)(props.id, {
                  focus: input.focus,
                  ...isInput && {
                    focusAndSelect() {
                      input.focus();
                      if (input.setSelection && typeof inputValue.current === "string") {
                        input.setSelection(0, inputValue.current.length);
                      }
                    }
                  }
                });
              },
              [isInput, props.id]
            );
            const combinedRefs = (0, import_compose_refs3.composeRefs)(ref, inputRef);
            (0, import_react10.useEffect)(() => {
              return () => {
                var _a;
                (_a = unregisterFocusable.current) == null ? void 0 : _a.call(unregisterFocusable);
              };
            }, []);
            const onChangeText = (0, import_core27.useEvent)((value) => {
              var _a;
              inputValue.current = value;
              (_a = props.onChangeText) == null ? void 0 : _a.call(props, value);
            });
            const finalProps = isInput ? {
              ...props,
              onChangeText
            } : props;
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Component2, {
              ref: combinedRefs,
              ...finalProps
            });
          }
        )
      );
      return component;
    }
    __name(focusableInputHOC3, "focusableInputHOC");
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var focusable_exports = {};
    module2.exports = __toCommonJS2(focusable_exports);
  }
});

// ../../node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs29 = __commonJS({
  "../../node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_registerFocusable(), module2.exports);
    __reExport2(src_exports, require_focusableInputHOC(), module2.exports);
    __reExport2(src_exports, require_focusable(), module2.exports);
  }
});

// ../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js
function NativeLinearGradient(props) {
  const { colors, locations, startPoint, endPoint, ...viewProps } = props;
  console.warn("LinearGradient is not available on this platform");
  return React8.createElement(import_react_native2.View, { ...viewProps });
}
var React8, import_react_native2;
var init_NativeLinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/NativeLinearGradient.js"() {
    React8 = __toESM(require("react"));
    import_react_native2 = require("react-native-web-lite");
    __name(NativeLinearGradient, "NativeLinearGradient");
  }
});

// ../../node_modules/expo-linear-gradient/build/LinearGradient.js
var LinearGradient_exports = {};
__export(LinearGradient_exports, {
  LinearGradient: () => LinearGradient2
});
function _normalizePoint(point) {
  if (!point) {
    return void 0;
  }
  if (Array.isArray(point) && point.length !== 2) {
    console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}");
    return void 0;
  }
  return Array.isArray(point) ? point : [point.x, point.y];
}
var React9, import_react_native3, LinearGradient2;
var init_LinearGradient = __esm({
  "../../node_modules/expo-linear-gradient/build/LinearGradient.js"() {
    React9 = __toESM(require("react"));
    import_react_native3 = require("react-native-web-lite");
    init_NativeLinearGradient();
    LinearGradient2 = class extends React9.Component {
      render() {
        const { colors, locations, start, end, ...props } = this.props;
        let resolvedLocations = locations;
        if (locations && colors.length !== locations.length) {
          console.warn("LinearGradient colors and locations props should be arrays of the same length");
          resolvedLocations = locations.slice(0, colors.length);
        }
        return React9.createElement(NativeLinearGradient, { ...props, colors: import_react_native3.Platform.select({
          web: colors,
          default: colors.map(import_react_native3.processColor)
        }), locations: resolvedLocations, startPoint: _normalizePoint(start), endPoint: _normalizePoint(end) });
      }
    };
    __name(LinearGradient2, "LinearGradient");
    __name(_normalizePoint, "_normalizePoint");
  }
});

// ../../node_modules/@tamagui/linear-gradient/dist/cjs/linear-gradient.js
var require_linear_gradient = __commonJS({
  "../../node_modules/@tamagui/linear-gradient/dist/cjs/linear-gradient.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var linear_gradient_exports = {};
    __export2(linear_gradient_exports, {
      LinearGradient: () => import_expo_linear_gradient.LinearGradient
    });
    module2.exports = __toCommonJS2(linear_gradient_exports);
    var import_expo_linear_gradient = (init_LinearGradient(), __toCommonJS(LinearGradient_exports));
  }
});

// ../../node_modules/@tamagui/linear-gradient/dist/cjs/LinearGradient.shared.js
var require_LinearGradient_shared = __commonJS({
  "../../node_modules/@tamagui/linear-gradient/dist/cjs/LinearGradient.shared.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LinearGradient_shared_exports = {};
    __export2(LinearGradient_shared_exports, {
      LinearGradient: () => LinearGradient3
    });
    module2.exports = __toCommonJS2(LinearGradient_shared_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_native8 = require("react-native-web-lite");
    var import_linear_gradient = require_linear_gradient();
    var LinearGradient3 = import_stacks9.YStack.extractable(
      (0, import_core27.themeable)(
        React13.forwardRef((props, ref) => {
          const { start, end, colors: colorsProp, locations, children, ...stackProps } = props;
          const colors = useThemeColors(colorsProp || []);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LinearGradientFrame, {
            ref,
            ...stackProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_linear_gradient.LinearGradient, {
              start,
              end,
              colors,
              locations,
              style: import_react_native8.StyleSheet.absoluteFill,
              children
            })
          });
        })
      )
    );
    var LinearGradientFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: "LinearGradient",
      overflow: "hidden",
      position: "relative"
    });
    var useThemeColors = /* @__PURE__ */ __name((colors) => {
      const theme = (0, import_core27.useTheme)();
      return colors.map((color) => {
        if (color[0] === "$") {
          return (0, import_core27.getVariable)(theme[color] || color);
        }
        return color;
      });
    }, "useThemeColors");
  }
});

// ../../node_modules/@tamagui/linear-gradient/dist/cjs/LinearGradient.js
var require_LinearGradient = __commonJS({
  "../../node_modules/@tamagui/linear-gradient/dist/cjs/LinearGradient.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var LinearGradient_exports2 = {};
    module2.exports = __toCommonJS2(LinearGradient_exports2);
    __reExport2(LinearGradient_exports2, require_LinearGradient_shared(), module2.exports);
  }
});

// ../../node_modules/@tamagui/linear-gradient/dist/cjs/index.js
var require_cjs30 = __commonJS({
  "../../node_modules/@tamagui/linear-gradient/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_LinearGradient(), module2.exports);
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var ListItem_exports = {};
    __export2(ListItem_exports, {
      ListItem: () => ListItem,
      ListItemFrame: () => ListItemFrame,
      ListItemSubtitle: () => ListItemSubtitle,
      ListItemText: () => ListItemText,
      ListItemTitle: () => ListItemTitle,
      listItemStaticConfig: () => listItemStaticConfig,
      useListItem: () => useListItem
    });
    module2.exports = __toCommonJS2(ListItem_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_font_size2 = require_cjs25();
    var import_get_size2 = require_cjs10();
    var import_helpers_tamagui2 = require_cjs28();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_react10 = require("react");
    var NAME3 = "ListItem";
    var ListItemFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: NAME3,
      tag: "li",
      alignItems: "center",
      flexWrap: "nowrap",
      width: "100%",
      borderColor: "$borderColor",
      maxWidth: "100%",
      overflow: "hidden",
      flexDirection: "row",
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              minHeight: tokens.size[val],
              paddingHorizontal: tokens.space[val],
              paddingVertical: (0, import_helpers_tamagui2.getSpace)(val, -2)
            };
          }
        },
        active: {
          true: {
            hoverStyle: {
              backgroundColor: "$background"
            }
          }
        },
        disabled: {
          true: {
            opacity: 0.5,
            pointerEvents: "none"
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var ListItemText = (0, import_core27.styled)(import_text5.SizableText, {
      name: "ListItemText",
      color: "$color",
      userSelect: "none",
      flexGrow: 1,
      flexShrink: 1,
      ellipse: true,
      cursor: "default"
    });
    var ListItemSubtitle = (0, import_core27.styled)(ListItemText, {
      name: "ListItemSubtitle",
      color: "$colorPress",
      marginTop: "$-2",
      opacity: 0.65,
      maxWidth: "100%",
      size: "$3"
    });
    var ListItemTitle = (0, import_core27.styled)(ListItemText, {
      name: "ListItemTitle"
    });
    var useListItem = /* @__PURE__ */ __name((props, {
      Text: Text5 = ListItemText,
      Subtitle = ListItemSubtitle,
      Title = ListItemTitle
    } = { Text: ListItemText, Subtitle: ListItemSubtitle, Title: ListItemTitle }) => {
      const {
        children,
        icon,
        iconAfter,
        noTextWrap,
        theme: themeName,
        space,
        spaceFlex,
        scaleIcon = 1,
        scaleSpace = 1,
        subTitle,
        color,
        fontWeight,
        letterSpacing,
        fontSize,
        fontFamily,
        textAlign,
        textProps,
        title,
        ...rest
      } = props;
      const mediaActiveProps = (0, import_core27.useMediaPropsActive)(props);
      const size = mediaActiveProps.size || "$4";
      const subtitleSizeToken = (0, import_get_size2.getSize)(size, -3);
      const subtitleSize = `$${subtitleSizeToken.key}`;
      const iconSize = (0, import_font_size2.getFontSize)(size) * scaleIcon;
      const getThemedIcon = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: iconSize, color });
      const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
      const spaceSize = (0, import_core27.getVariableValue)(iconSize) * scaleSpace;
      const contents = (0, import_text5.wrapChildrenInText)(Text5, mediaActiveProps);
      return {
        props: {
          fontFamily,
          ...rest,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
            children: [
              themedIcon ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
                children: [
                  themedIcon,
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Spacer, {
                    size: spaceSize
                  })
                ]
              }) : null,
              title || subTitle ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_stacks9.YStack, {
                flex: 1,
                children: [
                  noTextWrap === "all" ? title : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Title, {
                    size,
                    children: title
                  }),
                  subTitle ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Spacer, {
                        flex: true,
                        size: spaceSize * 0.333
                      }),
                      typeof subTitle === "string" && noTextWrap !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Subtitle, {
                        size: subtitleSize,
                        children: subTitle
                      }) : subTitle
                    ]
                  }) : null,
                  contents
                ]
              }) : contents,
              themedIconAfter ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Spacer, {
                    size: spaceSize
                  }),
                  themedIconAfter
                ]
              }) : null
            ]
          })
        }
      };
    }, "useListItem");
    var ListItemComponent = (0, import_react10.forwardRef)((props, ref) => {
      const { props: listItemProps } = useListItem(props);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ListItemFrame, {
        ref,
        justifyContent: "space-between",
        ...listItemProps
      });
    });
    var listItemStaticConfig = {
      inlineProps: /* @__PURE__ */ new Set([
        "color",
        "fontWeight",
        "fontSize",
        "fontFamily",
        "letterSpacing",
        "textAlign"
      ])
    };
    var ListItem = (0, import_core27.withStaticProperties)(
      ListItemFrame.extractable(
        (0, import_core27.themeable)(ListItemComponent, { componentName: NAME3 }),
        listItemStaticConfig
      ),
      {
        Text: ListItemText,
        Subtitle: ListItemSubtitle
      }
    );
  }
});

// ../../node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs31 = __commonJS({
  "../../node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_ListItem(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js
var require_floating_ui_core_umd = __commonJS({
  "../../node_modules/@floating-ui/core/dist/floating-ui.core.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUICore = {}));
    })(exports, function(exports2) {
      "use strict";
      function getAlignment(placement) {
        return placement.split("-")[1];
      }
      __name(getAlignment, "getAlignment");
      function getLengthFromAxis(axis) {
        return axis === "y" ? "height" : "width";
      }
      __name(getLengthFromAxis, "getLengthFromAxis");
      function getSide(placement) {
        return placement.split("-")[0];
      }
      __name(getSide, "getSide");
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
      }
      __name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
      function computeCoordsFromPlacement(_ref, placement, rtl) {
        let {
          reference,
          floating
        } = _ref;
        const commonX = reference.x + reference.width / 2 - floating.width / 2;
        const commonY = reference.y + reference.height / 2 - floating.height / 2;
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        const commonAlign = reference[length] / 2 - floating[length] / 2;
        const side = getSide(placement);
        const isVertical = mainAxis === "x";
        let coords;
        switch (side) {
          case "top":
            coords = {
              x: commonX,
              y: reference.y - floating.height
            };
            break;
          case "bottom":
            coords = {
              x: commonX,
              y: reference.y + reference.height
            };
            break;
          case "right":
            coords = {
              x: reference.x + reference.width,
              y: commonY
            };
            break;
          case "left":
            coords = {
              x: reference.x - floating.width,
              y: commonY
            };
            break;
          default:
            coords = {
              x: reference.x,
              y: reference.y
            };
        }
        switch (getAlignment(placement)) {
          case "start":
            coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
          case "end":
            coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        }
        return coords;
      }
      __name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
      const computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
        const {
          placement = "bottom",
          strategy = "absolute",
          middleware = [],
          platform
        } = config;
        const validMiddleware = middleware.filter(Boolean);
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
        {
          if (platform == null) {
            console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
          }
          if (validMiddleware.filter((_ref) => {
            let {
              name
            } = _ref;
            return name === "autoPlacement" || name === "flip";
          }).length > 1) {
            throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement` middleware", "detected. This will lead to an infinite loop. Ensure only one of", "either has been passed to the `middleware` array."].join(" "));
          }
          if (!reference || !floating) {
            console.error(["Floating UI: The reference and/or floating element was not defined", "when `computePosition()` was called. Ensure that both elements have", "been created and can be measured."].join(" "));
          }
        }
        let rects = await platform.getElementRects({
          reference,
          floating,
          strategy
        });
        let {
          x,
          y
        } = computeCoordsFromPlacement(rects, placement, rtl);
        let statefulPlacement = placement;
        let middlewareData = {};
        let resetCount = 0;
        for (let i = 0; i < validMiddleware.length; i++) {
          const {
            name,
            fn
          } = validMiddleware[i];
          const {
            x: nextX,
            y: nextY,
            data,
            reset
          } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform,
            elements: {
              reference,
              floating
            }
          });
          x = nextX != null ? nextX : x;
          y = nextY != null ? nextY : y;
          middlewareData = {
            ...middlewareData,
            [name]: {
              ...middlewareData[name],
              ...data
            }
          };
          {
            if (resetCount > 50) {
              console.warn(["Floating UI: The middleware lifecycle appears to be running in an", "infinite loop. This is usually caused by a `reset` continually", "being returned without a break condition."].join(" "));
            }
          }
          if (reset && resetCount <= 50) {
            resetCount++;
            if (typeof reset === "object") {
              if (reset.placement) {
                statefulPlacement = reset.placement;
              }
              if (reset.rects) {
                rects = reset.rects === true ? await platform.getElementRects({
                  reference,
                  floating,
                  strategy
                }) : reset.rects;
              }
              ({
                x,
                y
              } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
            continue;
          }
        }
        return {
          x,
          y,
          placement: statefulPlacement,
          strategy,
          middlewareData
        };
      }, "computePosition");
      function expandPaddingObject(padding) {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          ...padding
        };
      }
      __name(expandPaddingObject, "expandPaddingObject");
      function getSideObjectFromPadding(padding) {
        return typeof padding !== "number" ? expandPaddingObject(padding) : {
          top: padding,
          right: padding,
          bottom: padding,
          left: padding
        };
      }
      __name(getSideObjectFromPadding, "getSideObjectFromPadding");
      function rectToClientRect(rect) {
        return {
          ...rect,
          top: rect.y,
          left: rect.x,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        };
      }
      __name(rectToClientRect, "rectToClientRect");
      async function detectOverflow(middlewareArguments, options) {
        var _await$platform$isEle;
        if (options === void 0) {
          options = {};
        }
        const {
          x,
          y,
          platform,
          rects,
          elements,
          strategy
        } = middlewareArguments;
        const {
          boundary = "clippingAncestors",
          rootBoundary = "viewport",
          elementContext = "floating",
          altBoundary = false,
          padding = 0
        } = options;
        const paddingObject = getSideObjectFromPadding(padding);
        const altContext = elementContext === "floating" ? "reference" : "floating";
        const element = elements[altBoundary ? altContext : elementContext];
        const clippingClientRect = rectToClientRect(await platform.getClippingRect({
          element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
          boundary,
          rootBoundary,
          strategy
        }));
        const rect = elementContext === "floating" ? {
          ...rects.floating,
          x,
          y
        } : rects.reference;
        const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
        const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
          x: 1,
          y: 1
        } : {
          x: 1,
          y: 1
        };
        const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect,
          offsetParent,
          strategy
        }) : rect);
        return {
          top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
          bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
          left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
          right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
        };
      }
      __name(detectOverflow, "detectOverflow");
      const min = Math.min;
      const max = Math.max;
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      __name(within, "within");
      const arrow = /* @__PURE__ */ __name((options) => ({
        name: "arrow",
        options,
        async fn(middlewareArguments) {
          const {
            element,
            padding = 0
          } = options || {};
          const {
            x,
            y,
            placement,
            rects,
            platform
          } = middlewareArguments;
          if (element == null) {
            {
              console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
            }
            return {};
          }
          const paddingObject = getSideObjectFromPadding(padding);
          const coords = {
            x,
            y
          };
          const axis = getMainAxisFromPlacement(placement);
          const length = getLengthFromAxis(axis);
          const arrowDimensions = await platform.getDimensions(element);
          const minProp = axis === "y" ? "top" : "left";
          const maxProp = axis === "y" ? "bottom" : "right";
          const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
          const startDiff = coords[axis] - rects.reference[axis];
          const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
          let clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
          if (clientSize === 0) {
            clientSize = rects.floating[length];
          }
          const centerToReference = endDiff / 2 - startDiff / 2;
          const min2 = paddingObject[minProp];
          const max2 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
          const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
          const offset2 = within(min2, center, max2);
          const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min2 ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
          const alignmentOffset = shouldAddOffset ? center < min2 ? min2 - center : max2 - center : 0;
          return {
            [axis]: coords[axis] - alignmentOffset,
            data: {
              [axis]: offset2,
              centerOffset: center - offset2
            }
          };
        }
      }), "arrow");
      const sides = ["top", "right", "bottom", "left"];
      const allPlacements = /* @__PURE__ */ sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);
      const oppositeSideMap = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
      }
      __name(getOppositePlacement, "getOppositePlacement");
      function getAlignmentSides(placement, rects, rtl) {
        if (rtl === void 0) {
          rtl = false;
        }
        const alignment = getAlignment(placement);
        const mainAxis = getMainAxisFromPlacement(placement);
        const length = getLengthFromAxis(mainAxis);
        let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
        if (rects.reference[length] > rects.floating[length]) {
          mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
        }
        return {
          main: mainAlignmentSide,
          cross: getOppositePlacement(mainAlignmentSide)
        };
      }
      __name(getAlignmentSides, "getAlignmentSides");
      const oppositeAlignmentMap = {
        start: "end",
        end: "start"
      };
      function getOppositeAlignmentPlacement(placement) {
        return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
      }
      __name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
      function getPlacementList(alignment, autoAlignment, allowedPlacements) {
        const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
        return allowedPlacementsSortedByAlignment.filter((placement) => {
          if (alignment) {
            return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
          }
          return true;
        });
      }
      __name(getPlacementList, "getPlacementList");
      const autoPlacement = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "autoPlacement",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsSortedByLe;
            const {
              rects,
              middlewareData,
              placement,
              platform,
              elements
            } = middlewareArguments;
            const {
              alignment,
              allowedPlacements = allPlacements,
              autoAlignment = true,
              ...detectOverflowOptions
            } = options;
            const placements = alignment !== void 0 || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements[currentIndex];
            if (currentPlacement == null) {
              return {};
            }
            const {
              main,
              cross
            } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            if (placement !== currentPlacement) {
              return {
                reset: {
                  placement: placements[0]
                }
              };
            }
            const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
            const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
              placement: currentPlacement,
              overflows: currentOverflows
            }];
            const nextPlacement = placements[currentIndex + 1];
            if (nextPlacement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
            const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
            const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find((_ref) => {
              let {
                overflows
              } = _ref;
              return overflows.every((overflow2) => overflow2 <= 0);
            })) == null ? void 0 : _placementsSortedByLe.placement;
            const resetPlacement = placementThatFitsOnAllSides || placementsSortedByLeastOverflow[0].placement;
            if (resetPlacement !== placement) {
              return {
                data: {
                  index: currentIndex + 1,
                  overflows: allOverflows
                },
                reset: {
                  placement: resetPlacement
                }
              };
            }
            return {};
          }
        };
      }, "autoPlacement");
      function getExpandedPlacements(placement) {
        const oppositePlacement = getOppositePlacement(placement);
        return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
      }
      __name(getExpandedPlacements, "getExpandedPlacements");
      function getSideList(side, isStart, rtl) {
        const lr = ["left", "right"];
        const rl = ["right", "left"];
        const tb = ["top", "bottom"];
        const bt = ["bottom", "top"];
        switch (side) {
          case "top":
          case "bottom":
            if (rtl)
              return isStart ? rl : lr;
            return isStart ? lr : rl;
          case "left":
          case "right":
            return isStart ? tb : bt;
          default:
            return [];
        }
      }
      __name(getSideList, "getSideList");
      function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
        const alignment = getAlignment(placement);
        let list = getSideList(getSide(placement), direction === "start", rtl);
        if (alignment) {
          list = list.map((side) => side + "-" + alignment);
          if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
          }
        }
        return list;
      }
      __name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
      const flip = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "flip",
          options,
          async fn(middlewareArguments) {
            var _middlewareData$flip;
            const {
              placement,
              middlewareData,
              rects,
              initialPlacement,
              platform,
              elements
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true,
              fallbackPlacements: specifiedFallbackPlacements,
              fallbackStrategy = "bestFit",
              fallbackAxisSideDirection = "none",
              flipAlignment = true,
              ...detectOverflowOptions
            } = options;
            const side = getSide(placement);
            const isBasePlacement = getSide(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
            if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
              fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [initialPlacement, ...fallbackPlacements];
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
              overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
              const {
                main,
                cross
              } = getAlignmentSides(placement, rects, rtl);
              overflows.push(overflow[main], overflow[cross]);
            }
            overflowsData = [...overflowsData, {
              placement,
              overflows
            }];
            if (!overflows.every((side2) => side2 <= 0)) {
              var _middlewareData$flip2;
              const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
              const nextPlacement = placements[nextIndex];
              if (nextPlacement) {
                return {
                  data: {
                    index: nextIndex,
                    overflows: overflowsData
                  },
                  reset: {
                    placement: nextPlacement
                  }
                };
              }
              let resetPlacement = "bottom";
              switch (fallbackStrategy) {
                case "bestFit": {
                  var _overflowsData$map$so;
                  const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;
                  if (placement2) {
                    resetPlacement = placement2;
                  }
                  break;
                }
                case "initialPlacement":
                  resetPlacement = initialPlacement;
                  break;
              }
              if (placement !== resetPlacement) {
                return {
                  reset: {
                    placement: resetPlacement
                  }
                };
              }
            }
            return {};
          }
        };
      }, "flip");
      function getSideOffsets(overflow, rect) {
        return {
          top: overflow.top - rect.height,
          right: overflow.right - rect.width,
          bottom: overflow.bottom - rect.height,
          left: overflow.left - rect.width
        };
      }
      __name(getSideOffsets, "getSideOffsets");
      function isAnySideFullyClipped(overflow) {
        return sides.some((side) => overflow[side] >= 0);
      }
      __name(isAnySideFullyClipped, "isAnySideFullyClipped");
      const hide = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "hide",
          options,
          async fn(middlewareArguments) {
            const {
              strategy = "referenceHidden",
              ...detectOverflowOptions
            } = options;
            const {
              rects
            } = middlewareArguments;
            switch (strategy) {
              case "referenceHidden": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  elementContext: "reference"
                });
                const offsets = getSideOffsets(overflow, rects.reference);
                return {
                  data: {
                    referenceHiddenOffsets: offsets,
                    referenceHidden: isAnySideFullyClipped(offsets)
                  }
                };
              }
              case "escaped": {
                const overflow = await detectOverflow(middlewareArguments, {
                  ...detectOverflowOptions,
                  altBoundary: true
                });
                const offsets = getSideOffsets(overflow, rects.floating);
                return {
                  data: {
                    escapedOffsets: offsets,
                    escaped: isAnySideFullyClipped(offsets)
                  }
                };
              }
              default: {
                return {};
              }
            }
          }
        };
      }, "hide");
      const inline = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "inline",
          options,
          async fn(middlewareArguments) {
            const {
              placement,
              elements,
              rects,
              platform,
              strategy
            } = middlewareArguments;
            const {
              padding = 2,
              x,
              y
            } = options;
            const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
              rect: rects.reference,
              offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
              strategy
            }) : rects.reference);
            const clientRects = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || [];
            const paddingObject = getSideObjectFromPadding(padding);
            function getBoundingClientRect() {
              if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                return clientRects.find((rect) => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
              }
              if (clientRects.length >= 2) {
                if (getMainAxisFromPlacement(placement) === "x") {
                  const firstRect = clientRects[0];
                  const lastRect = clientRects[clientRects.length - 1];
                  const isTop = getSide(placement) === "top";
                  const top2 = firstRect.top;
                  const bottom2 = lastRect.bottom;
                  const left2 = isTop ? firstRect.left : lastRect.left;
                  const right2 = isTop ? firstRect.right : lastRect.right;
                  const width2 = right2 - left2;
                  const height2 = bottom2 - top2;
                  return {
                    top: top2,
                    bottom: bottom2,
                    left: left2,
                    right: right2,
                    width: width2,
                    height: height2,
                    x: left2,
                    y: top2
                  };
                }
                const isLeftSide = getSide(placement) === "left";
                const maxRight = max(...clientRects.map((rect) => rect.right));
                const minLeft = min(...clientRects.map((rect) => rect.left));
                const measureRects = clientRects.filter((rect) => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                const top = measureRects[0].top;
                const bottom = measureRects[measureRects.length - 1].bottom;
                const left = minLeft;
                const right = maxRight;
                const width = right - left;
                const height = bottom - top;
                return {
                  top,
                  bottom,
                  left,
                  right,
                  width,
                  height,
                  x: left,
                  y: top
                };
              }
              return fallback;
            }
            __name(getBoundingClientRect, "getBoundingClientRect");
            const resetRects = await platform.getElementRects({
              reference: {
                getBoundingClientRect
              },
              floating: elements.floating,
              strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
              return {
                reset: {
                  rects: resetRects
                }
              };
            }
            return {};
          }
        };
      }, "inline");
      async function convertValueToCoords(middlewareArguments, value) {
        const {
          placement,
          platform,
          elements
        } = middlewareArguments;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const isVertical = getMainAxisFromPlacement(placement) === "x";
        const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
        const crossAxisMulti = rtl && isVertical ? -1 : 1;
        const rawValue = typeof value === "function" ? value(middlewareArguments) : value;
        let {
          mainAxis,
          crossAxis,
          alignmentAxis
        } = typeof rawValue === "number" ? {
          mainAxis: rawValue,
          crossAxis: 0,
          alignmentAxis: null
        } : {
          mainAxis: 0,
          crossAxis: 0,
          alignmentAxis: null,
          ...rawValue
        };
        if (alignment && typeof alignmentAxis === "number") {
          crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
        }
        return isVertical ? {
          x: crossAxis * crossAxisMulti,
          y: mainAxis * mainAxisMulti
        } : {
          x: mainAxis * mainAxisMulti,
          y: crossAxis * crossAxisMulti
        };
      }
      __name(convertValueToCoords, "convertValueToCoords");
      const offset = /* @__PURE__ */ __name(function(value) {
        if (value === void 0) {
          value = 0;
        }
        return {
          name: "offset",
          options: value,
          async fn(middlewareArguments) {
            const {
              x,
              y
            } = middlewareArguments;
            const diffCoords = await convertValueToCoords(middlewareArguments, value);
            return {
              x: x + diffCoords.x,
              y: y + diffCoords.y,
              data: diffCoords
            };
          }
        };
      }, "offset");
      function getCrossAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      __name(getCrossAxis, "getCrossAxis");
      const shift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "shift",
          options,
          async fn(middlewareArguments) {
            const {
              x,
              y,
              placement
            } = middlewareArguments;
            const {
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = false,
              limiter = {
                fn: (_ref) => {
                  let {
                    x: x2,
                    y: y2
                  } = _ref;
                  return {
                    x: x2,
                    y: y2
                  };
                }
              },
              ...detectOverflowOptions
            } = options;
            const coords = {
              x,
              y
            };
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const mainAxis = getMainAxisFromPlacement(getSide(placement));
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
              const minSide = mainAxis === "y" ? "top" : "left";
              const maxSide = mainAxis === "y" ? "bottom" : "right";
              const min2 = mainAxisCoord + overflow[minSide];
              const max2 = mainAxisCoord - overflow[maxSide];
              mainAxisCoord = within(min2, mainAxisCoord, max2);
            }
            if (checkCrossAxis) {
              const minSide = crossAxis === "y" ? "top" : "left";
              const maxSide = crossAxis === "y" ? "bottom" : "right";
              const min2 = crossAxisCoord + overflow[minSide];
              const max2 = crossAxisCoord - overflow[maxSide];
              crossAxisCoord = within(min2, crossAxisCoord, max2);
            }
            const limitedCoords = limiter.fn({
              ...middlewareArguments,
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            });
            return {
              ...limitedCoords,
              data: {
                x: limitedCoords.x - x,
                y: limitedCoords.y - y
              }
            };
          }
        };
      }, "shift");
      const limitShift = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          options,
          fn(middlewareArguments) {
            const {
              x,
              y,
              placement,
              rects,
              middlewareData
            } = middlewareArguments;
            const {
              offset: offset2 = 0,
              mainAxis: checkMainAxis = true,
              crossAxis: checkCrossAxis = true
            } = options;
            const coords = {
              x,
              y
            };
            const mainAxis = getMainAxisFromPlacement(placement);
            const crossAxis = getCrossAxis(mainAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = typeof offset2 === "function" ? offset2(middlewareArguments) : offset2;
            const computedOffset = typeof rawOffset === "number" ? {
              mainAxis: rawOffset,
              crossAxis: 0
            } : {
              mainAxis: 0,
              crossAxis: 0,
              ...rawOffset
            };
            if (checkMainAxis) {
              const len = mainAxis === "y" ? "height" : "width";
              const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
              const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
              if (mainAxisCoord < limitMin) {
                mainAxisCoord = limitMin;
              } else if (mainAxisCoord > limitMax) {
                mainAxisCoord = limitMax;
              }
            }
            if (checkCrossAxis) {
              var _middlewareData$offse, _middlewareData$offse2;
              const len = mainAxis === "y" ? "width" : "height";
              const isOriginSide = ["top", "left"].includes(getSide(placement));
              const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
              const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
              if (crossAxisCoord < limitMin) {
                crossAxisCoord = limitMin;
              } else if (crossAxisCoord > limitMax) {
                crossAxisCoord = limitMax;
              }
            }
            return {
              [mainAxis]: mainAxisCoord,
              [crossAxis]: crossAxisCoord
            };
          }
        };
      }, "limitShift");
      const size = /* @__PURE__ */ __name(function(options) {
        if (options === void 0) {
          options = {};
        }
        return {
          name: "size",
          options,
          async fn(middlewareArguments) {
            const {
              placement,
              rects,
              platform,
              elements
            } = middlewareArguments;
            const {
              apply = /* @__PURE__ */ __name(() => {
              }, "apply"),
              ...detectOverflowOptions
            } = options;
            const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            let heightSide;
            let widthSide;
            if (side === "top" || side === "bottom") {
              heightSide = side;
              widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
            } else {
              widthSide = side;
              heightSide = alignment === "end" ? "top" : "bottom";
            }
            const xMin = max(overflow.left, 0);
            const xMax = max(overflow.right, 0);
            const yMin = max(overflow.top, 0);
            const yMax = max(overflow.bottom, 0);
            const dimensions = {
              availableHeight: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
              availableWidth: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
            };
            await apply({
              ...middlewareArguments,
              ...dimensions
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) {
              return {
                reset: {
                  rects: true
                }
              };
            }
            return {};
          }
        };
      }, "size");
      exports2.arrow = arrow;
      exports2.autoPlacement = autoPlacement;
      exports2.computePosition = computePosition;
      exports2.detectOverflow = detectOverflow;
      exports2.flip = flip;
      exports2.hide = hide;
      exports2.inline = inline;
      exports2.limitShift = limitShift;
      exports2.offset = offset;
      exports2.rectToClientRect = rectToClientRect;
      exports2.shift = shift;
      exports2.size = size;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js
var require_floating_ui_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/dom/dist/floating-ui.dom.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_core_umd()) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/core"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIDOM = {}, global2.FloatingUICore));
    })(exports, function(exports2, core) {
      "use strict";
      function getWindow(node) {
        var _node$ownerDocument;
        return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
      }
      __name(getWindow, "getWindow");
      function getComputedStyle$1(element) {
        return getWindow(element).getComputedStyle(element);
      }
      __name(getComputedStyle$1, "getComputedStyle$1");
      function getNodeName(node) {
        return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
      }
      __name(getNodeName, "getNodeName");
      let uaString;
      function getUAString() {
        if (uaString) {
          return uaString;
        }
        const uaData = navigator.userAgentData;
        if (uaData && Array.isArray(uaData.brands)) {
          uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
          return uaString;
        }
        return navigator.userAgent;
      }
      __name(getUAString, "getUAString");
      function isHTMLElement(value) {
        return value instanceof getWindow(value).HTMLElement;
      }
      __name(isHTMLElement, "isHTMLElement");
      function isElement(value) {
        return value instanceof getWindow(value).Element;
      }
      __name(isElement, "isElement");
      function isNode(value) {
        return value instanceof getWindow(value).Node;
      }
      __name(isNode, "isNode");
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        const OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      __name(isShadowRoot, "isShadowRoot");
      function isOverflowElement(element) {
        const {
          overflow,
          overflowX,
          overflowY,
          display
        } = getComputedStyle$1(element);
        return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
      }
      __name(isOverflowElement, "isOverflowElement");
      function isTableElement(element) {
        return ["table", "td", "th"].includes(getNodeName(element));
      }
      __name(isTableElement, "isTableElement");
      function isContainingBlock(element) {
        const isFirefox = /firefox/i.test(getUAString());
        const css = getComputedStyle$1(element);
        const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
        return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some(
          (value) => {
            const contain = css.contain;
            return contain != null ? contain.includes(value) : false;
          }
        );
      }
      __name(isContainingBlock, "isContainingBlock");
      function isLayoutViewport() {
        return !/^((?!chrome|android).)*safari/i.test(getUAString());
      }
      __name(isLayoutViewport, "isLayoutViewport");
      function isLastTraversableNode(node) {
        return ["html", "body", "#document"].includes(getNodeName(node));
      }
      __name(isLastTraversableNode, "isLastTraversableNode");
      const min = Math.min;
      const max = Math.max;
      const round = Math.round;
      function getCssDimensions(element) {
        const css = getComputedStyle$1(element);
        let width = parseFloat(css.width);
        let height = parseFloat(css.height);
        const offsetWidth = element.offsetWidth;
        const offsetHeight = element.offsetHeight;
        const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
        if (shouldFallback) {
          width = offsetWidth;
          height = offsetHeight;
        }
        return {
          width,
          height,
          fallback: shouldFallback
        };
      }
      __name(getCssDimensions, "getCssDimensions");
      function unwrapElement(element) {
        return !isElement(element) ? element.contextElement : element;
      }
      __name(unwrapElement, "unwrapElement");
      const FALLBACK_SCALE = {
        x: 1,
        y: 1
      };
      function getScale(element) {
        const domElement = unwrapElement(element);
        if (!isHTMLElement(domElement)) {
          return FALLBACK_SCALE;
        }
        const rect = domElement.getBoundingClientRect();
        const {
          width,
          height,
          fallback
        } = getCssDimensions(domElement);
        let x = (fallback ? round(rect.width) : rect.width) / width;
        let y = (fallback ? round(rect.height) : rect.height) / height;
        if (!x || !Number.isFinite(x)) {
          x = 1;
        }
        if (!y || !Number.isFinite(y)) {
          y = 1;
        }
        return {
          x,
          y
        };
      }
      __name(getScale, "getScale");
      function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
        var _win$visualViewport, _win$visualViewport2;
        if (includeScale === void 0) {
          includeScale = false;
        }
        if (isFixedStrategy === void 0) {
          isFixedStrategy = false;
        }
        const clientRect = element.getBoundingClientRect();
        const domElement = unwrapElement(element);
        let scale = FALLBACK_SCALE;
        if (includeScale) {
          if (offsetParent) {
            if (isElement(offsetParent)) {
              scale = getScale(offsetParent);
            }
          } else {
            scale = getScale(element);
          }
        }
        const win = domElement ? getWindow(domElement) : window;
        const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
        let x = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
        let y = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
        let width = clientRect.width / scale.x;
        let height = clientRect.height / scale.y;
        if (domElement) {
          const win2 = getWindow(domElement);
          const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
          let currentIFrame = win2.frameElement;
          while (currentIFrame && offsetParent && offsetWin !== win2) {
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = getComputedStyle(currentIFrame);
            iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += iframeRect.x;
            y += iframeRect.y;
            currentIFrame = getWindow(currentIFrame).frameElement;
          }
        }
        return {
          width,
          height,
          top: y,
          right: x + width,
          bottom: y + height,
          left: x,
          x,
          y
        };
      }
      __name(getBoundingClientRect, "getBoundingClientRect");
      function getDocumentElement(node) {
        return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
      }
      __name(getDocumentElement, "getDocumentElement");
      function getNodeScroll(element) {
        if (isElement(element)) {
          return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
          };
        }
        return {
          scrollLeft: element.pageXOffset,
          scrollTop: element.pageYOffset
        };
      }
      __name(getNodeScroll, "getNodeScroll");
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
      }
      __name(getWindowScrollBarX, "getWindowScrollBarX");
      function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent, true);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      __name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
      function getParentNode(node) {
        if (getNodeName(node) === "html") {
          return node;
        }
        const result = node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
        return isShadowRoot(result) ? result.host : result;
      }
      __name(getParentNode, "getParentNode");
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      __name(getTrueOffsetParent, "getTrueOffsetParent");
      function getContainingBlock(element) {
        let currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
          if (isContainingBlock(currentNode)) {
            return currentNode;
          } else {
            currentNode = getParentNode(currentNode);
          }
        }
        return null;
      }
      __name(getContainingBlock, "getContainingBlock");
      function getOffsetParent(element) {
        const window2 = getWindow(element);
        let offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      __name(getOffsetParent, "getOffsetParent");
      function getDimensions(element) {
        return getCssDimensions(element);
      }
      __name(getDimensions, "getDimensions");
      function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
        let {
          rect,
          offsetParent,
          strategy
        } = _ref;
        const isOffsetParentAnElement = isHTMLElement(offsetParent);
        const documentElement = getDocumentElement(offsetParent);
        if (offsetParent === documentElement) {
          return rect;
        }
        let scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        let scale = {
          x: 1,
          y: 1
        };
        const offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
          if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
          }
        }
        return {
          width: rect.width * scale.x,
          height: rect.height * scale.y,
          x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
          y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
        };
      }
      __name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
      function getViewportRect(element, strategy) {
        const win = getWindow(element);
        const html = getDocumentElement(element);
        const visualViewport = win.visualViewport;
        let width = html.clientWidth;
        let height = html.clientHeight;
        let x = 0;
        let y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          const layoutViewport = isLayoutViewport();
          if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getViewportRect, "getViewportRect");
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        const html = getDocumentElement(element);
        const scroll = getNodeScroll(element);
        const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        let x = -scroll.scrollLeft + getWindowScrollBarX(element);
        const y = -scroll.scrollTop;
        if (getComputedStyle$1(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      __name(getDocumentRect, "getDocumentRect");
      function getNearestOverflowAncestor(node) {
        const parentNode = getParentNode(node);
        if (isLastTraversableNode(parentNode)) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
          return parentNode;
        }
        return getNearestOverflowAncestor(parentNode);
      }
      __name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
      function getOverflowAncestors(node, list) {
        var _node$ownerDocument;
        if (list === void 0) {
          list = [];
        }
        const scrollableAncestor = getNearestOverflowAncestor(node);
        const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
        const win = getWindow(scrollableAncestor);
        if (isBody) {
          return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
        }
        return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
      }
      __name(getOverflowAncestors, "getOverflowAncestors");
      function getInnerBoundingClientRect(element, strategy) {
        const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
        const top = clientRect.top + element.clientTop;
        const left = clientRect.left + element.clientLeft;
        const scale = isHTMLElement(element) ? getScale(element) : {
          x: 1,
          y: 1
        };
        const width = element.clientWidth * scale.x;
        const height = element.clientHeight * scale.y;
        const x = left * scale.x;
        const y = top * scale.y;
        return {
          top: y,
          left: x,
          right: x + width,
          bottom: y + height,
          x,
          y,
          width,
          height
        };
      }
      __name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
      function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
        if (clippingAncestor === "viewport") {
          return core.rectToClientRect(getViewportRect(element, strategy));
        }
        if (isElement(clippingAncestor)) {
          return getInnerBoundingClientRect(clippingAncestor, strategy);
        }
        return core.rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      __name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
      function getClippingElementAncestors(element, cache) {
        const cachedResult = cache.get(element);
        if (cachedResult) {
          return cachedResult;
        }
        let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
        let currentContainingBlockComputedStyle = null;
        const elementIsFixed = getComputedStyle$1(element).position === "fixed";
        let currentNode = elementIsFixed ? getParentNode(element) : element;
        while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
          const computedStyle = getComputedStyle$1(currentNode);
          const containingBlock = isContainingBlock(currentNode);
          const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
          if (shouldDropCurrentNode) {
            result = result.filter((ancestor) => ancestor !== currentNode);
          } else {
            currentContainingBlockComputedStyle = computedStyle;
          }
          currentNode = getParentNode(currentNode);
        }
        cache.set(element, result);
        return result;
      }
      __name(getClippingElementAncestors, "getClippingElementAncestors");
      function getClippingRect(_ref) {
        let {
          element,
          boundary,
          rootBoundary,
          strategy
        } = _ref;
        const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
        const clippingAncestors = [...elementClippingAncestors, rootBoundary];
        const firstClippingAncestor = clippingAncestors[0];
        const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
          const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
        return {
          width: clippingRect.right - clippingRect.left,
          height: clippingRect.bottom - clippingRect.top,
          x: clippingRect.left,
          y: clippingRect.top
        };
      }
      __name(getClippingRect, "getClippingRect");
      const platform = {
        getClippingRect,
        convertOffsetParentRelativeRectToViewportRelativeRect,
        isElement,
        getDimensions,
        getOffsetParent,
        getDocumentElement,
        getScale,
        async getElementRects(_ref) {
          let {
            reference,
            floating,
            strategy
          } = _ref;
          const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
          const getDimensionsFn = this.getDimensions;
          return {
            reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
            floating: {
              x: 0,
              y: 0,
              ...await getDimensionsFn(floating)
            }
          };
        },
        getClientRects: (element) => Array.from(element.getClientRects()),
        isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
      };
      function autoUpdate(reference, floating, update, options) {
        if (options === void 0) {
          options = {};
        }
        const {
          ancestorScroll: _ancestorScroll = true,
          ancestorResize = true,
          elementResize = true,
          animationFrame = false
        } = options;
        const ancestorScroll = _ancestorScroll && !animationFrame;
        const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
        ancestors.forEach((ancestor) => {
          ancestorScroll && ancestor.addEventListener("scroll", update, {
            passive: true
          });
          ancestorResize && ancestor.addEventListener("resize", update);
        });
        let observer = null;
        if (elementResize) {
          let initialUpdate = true;
          observer = new ResizeObserver(() => {
            if (!initialUpdate) {
              update();
            }
            initialUpdate = false;
          });
          isElement(reference) && !animationFrame && observer.observe(reference);
          if (!isElement(reference) && reference.contextElement && !animationFrame) {
            observer.observe(reference.contextElement);
          }
          observer.observe(floating);
        }
        let frameId;
        let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
        if (animationFrame) {
          frameLoop();
        }
        function frameLoop() {
          const nextRefRect = getBoundingClientRect(reference);
          if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
            update();
          }
          prevRefRect = nextRefRect;
          frameId = requestAnimationFrame(frameLoop);
        }
        __name(frameLoop, "frameLoop");
        update();
        return () => {
          var _observer;
          ancestors.forEach((ancestor) => {
            ancestorScroll && ancestor.removeEventListener("scroll", update);
            ancestorResize && ancestor.removeEventListener("resize", update);
          });
          (_observer = observer) == null ? void 0 : _observer.disconnect();
          observer = null;
          if (animationFrame) {
            cancelAnimationFrame(frameId);
          }
        };
      }
      __name(autoUpdate, "autoUpdate");
      const computePosition = /* @__PURE__ */ __name((reference, floating, options) => {
        const cache = /* @__PURE__ */ new Map();
        const mergedOptions = {
          platform,
          ...options
        };
        const platformWithCache = {
          ...mergedOptions.platform,
          _c: cache
        };
        return core.computePosition(reference, floating, {
          ...mergedOptions,
          platform: platformWithCache
        });
      }, "computePosition");
      Object.defineProperty(exports2, "arrow", {
        enumerable: true,
        get: function() {
          return core.arrow;
        }
      });
      Object.defineProperty(exports2, "autoPlacement", {
        enumerable: true,
        get: function() {
          return core.autoPlacement;
        }
      });
      Object.defineProperty(exports2, "detectOverflow", {
        enumerable: true,
        get: function() {
          return core.detectOverflow;
        }
      });
      Object.defineProperty(exports2, "flip", {
        enumerable: true,
        get: function() {
          return core.flip;
        }
      });
      Object.defineProperty(exports2, "hide", {
        enumerable: true,
        get: function() {
          return core.hide;
        }
      });
      Object.defineProperty(exports2, "inline", {
        enumerable: true,
        get: function() {
          return core.inline;
        }
      });
      Object.defineProperty(exports2, "limitShift", {
        enumerable: true,
        get: function() {
          return core.limitShift;
        }
      });
      Object.defineProperty(exports2, "offset", {
        enumerable: true,
        get: function() {
          return core.offset;
        }
      });
      Object.defineProperty(exports2, "shift", {
        enumerable: true,
        get: function() {
          return core.shift;
        }
      });
      Object.defineProperty(exports2, "size", {
        enumerable: true,
        get: function() {
          return core.size;
        }
      });
      exports2.autoUpdate = autoUpdate;
      exports2.computePosition = computePosition;
      exports2.getOverflowAncestors = getOverflowAncestors;
      exports2.platform = platform;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js
var require_floating_ui_react_dom_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIDOM, global2.React, global2.ReactDOM));
    })(exports, function(exports2, dom, React13, ReactDOM) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React13);
      var ReactDOM__namespace = /* @__PURE__ */ _interopNamespace(ReactDOM);
      const arrow = /* @__PURE__ */ __name((options) => {
        const {
          element,
          padding
        } = options;
        function isRef(value) {
          return Object.prototype.hasOwnProperty.call(value, "current");
        }
        __name(isRef, "isRef");
        return {
          name: "arrow",
          options,
          fn(args) {
            if (isRef(element)) {
              if (element.current != null) {
                return dom.arrow({
                  element: element.current,
                  padding
                }).fn(args);
              }
              return {};
            } else if (element) {
              return dom.arrow({
                element,
                padding
              }).fn(args);
            }
            return {};
          }
        };
      }, "arrow");
      var index = typeof document !== "undefined" ? React13.useLayoutEffect : React13.useEffect;
      function deepEqual(a, b) {
        if (a === b) {
          return true;
        }
        if (typeof a !== typeof b) {
          return false;
        }
        if (typeof a === "function" && a.toString() === b.toString()) {
          return true;
        }
        let length, i, keys;
        if (a && b && typeof a == "object") {
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length)
              return false;
            for (i = length; i-- !== 0; ) {
              if (!deepEqual(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) {
            return false;
          }
          for (i = length; i-- !== 0; ) {
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
              return false;
            }
          }
          for (i = length; i-- !== 0; ) {
            const key = keys[i];
            if (key === "_owner" && a.$$typeof) {
              continue;
            }
            if (!deepEqual(a[key], b[key])) {
              return false;
            }
          }
          return true;
        }
        return a !== a && b !== b;
      }
      __name(deepEqual, "deepEqual");
      function useLatestRef(value) {
        const ref = React__namespace.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function useFloating2(options) {
        if (options === void 0) {
          options = {};
        }
        const {
          placement = "bottom",
          strategy = "absolute",
          middleware = [],
          whileElementsMounted,
          open
        } = options;
        const [data, setData] = React__namespace.useState({
          x: null,
          y: null,
          strategy,
          placement,
          middlewareData: {},
          isPositioned: false
        });
        const [latestMiddleware, setLatestMiddleware] = React__namespace.useState(middleware);
        if (!deepEqual(latestMiddleware, middleware)) {
          setLatestMiddleware(middleware);
        }
        const referenceRef = React__namespace.useRef(null);
        const floatingRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef(data);
        const whileElementsMountedRef = useLatestRef(whileElementsMounted);
        const [reference, _setReference] = React__namespace.useState(null);
        const [floating, _setFloating] = React__namespace.useState(null);
        const setReference = React__namespace.useCallback((node) => {
          if (referenceRef.current !== node) {
            referenceRef.current = node;
            _setReference(node);
          }
        }, []);
        const setFloating = React__namespace.useCallback((node) => {
          if (floatingRef.current !== node) {
            floatingRef.current = node;
            _setFloating(node);
          }
        }, []);
        const update = React__namespace.useCallback(() => {
          if (!referenceRef.current || !floatingRef.current) {
            return;
          }
          dom.computePosition(referenceRef.current, floatingRef.current, {
            middleware: latestMiddleware,
            placement,
            strategy
          }).then((data2) => {
            const fullData = {
              ...data2,
              isPositioned: true
            };
            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
              dataRef.current = fullData;
              ReactDOM__namespace.flushSync(() => {
                setData(fullData);
              });
            }
          });
        }, [latestMiddleware, placement, strategy]);
        index(() => {
          if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data2) => ({
              ...data2,
              isPositioned: false
            }));
          }
        }, [open]);
        const isMountedRef = React__namespace.useRef(false);
        index(() => {
          isMountedRef.current = true;
          return () => {
            isMountedRef.current = false;
          };
        }, []);
        index(() => {
          if (reference && floating) {
            if (whileElementsMountedRef.current) {
              return whileElementsMountedRef.current(reference, floating, update);
            } else {
              update();
            }
          }
        }, [reference, floating, update, whileElementsMountedRef]);
        const refs = React__namespace.useMemo(() => ({
          reference: referenceRef,
          floating: floatingRef,
          setReference,
          setFloating
        }), [setReference, setFloating]);
        const elements = React__namespace.useMemo(() => ({
          reference,
          floating
        }), [reference, floating]);
        return React__namespace.useMemo(() => ({
          ...data,
          update,
          refs,
          elements,
          reference: setReference,
          floating: setFloating
        }), [data, update, refs, elements, setReference, setFloating]);
      }
      __name(useFloating2, "useFloating");
      Object.defineProperty(exports2, "autoPlacement", {
        enumerable: true,
        get: function() {
          return dom.autoPlacement;
        }
      });
      Object.defineProperty(exports2, "autoUpdate", {
        enumerable: true,
        get: function() {
          return dom.autoUpdate;
        }
      });
      Object.defineProperty(exports2, "computePosition", {
        enumerable: true,
        get: function() {
          return dom.computePosition;
        }
      });
      Object.defineProperty(exports2, "detectOverflow", {
        enumerable: true,
        get: function() {
          return dom.detectOverflow;
        }
      });
      Object.defineProperty(exports2, "flip", {
        enumerable: true,
        get: function() {
          return dom.flip;
        }
      });
      Object.defineProperty(exports2, "getOverflowAncestors", {
        enumerable: true,
        get: function() {
          return dom.getOverflowAncestors;
        }
      });
      Object.defineProperty(exports2, "hide", {
        enumerable: true,
        get: function() {
          return dom.hide;
        }
      });
      Object.defineProperty(exports2, "inline", {
        enumerable: true,
        get: function() {
          return dom.inline;
        }
      });
      Object.defineProperty(exports2, "limitShift", {
        enumerable: true,
        get: function() {
          return dom.limitShift;
        }
      });
      Object.defineProperty(exports2, "offset", {
        enumerable: true,
        get: function() {
          return dom.offset;
        }
      });
      Object.defineProperty(exports2, "platform", {
        enumerable: true,
        get: function() {
          return dom.platform;
        }
      });
      Object.defineProperty(exports2, "shift", {
        enumerable: true,
        get: function() {
          return dom.shift;
        }
      });
      Object.defineProperty(exports2, "size", {
        enumerable: true,
        get: function() {
          return dom.size;
        }
      });
      exports2.arrow = arrow;
      exports2.useFloating = useFloating2;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/floating.js
var require_floating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/floating.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    module2.exports = __toCommonJS2(floating_exports);
    __reExport2(floating_exports, require_floating_ui_react_dom_umd(), module2.exports);
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/useFloating.js
var require_useFloating = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/useFloating.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useFloating_exports = {};
    __export2(useFloating_exports, {
      FloatingOverrideContext: () => FloatingOverrideContext2,
      useFloating: () => useFloating2
    });
    module2.exports = __toCommonJS2(useFloating_exports);
    var import_react10 = require("react");
    var Floating = __toESM2(require_floating());
    var FloatingOverrideContext2 = (0, import_react10.createContext)(null);
    var useFloating2 = /* @__PURE__ */ __name((props) => {
      var _a;
      const context = (0, import_react10.useContext)(FloatingOverrideContext2);
      return (_a = context || Floating.useFloating) == null ? void 0 : _a(props);
    }, "useFloating");
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/Popper.js
var require_Popper = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/Popper.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popper_exports = {};
    __export2(Popper_exports, {
      Popper: () => Popper,
      PopperAnchor: () => PopperAnchor,
      PopperArrow: () => PopperArrow,
      PopperContent: () => PopperContent,
      PopperProvider: () => PopperProvider,
      createPopperScope: () => createPopperScope,
      usePopperContext: () => usePopperContext
    });
    module2.exports = __toCommonJS2(Popper_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_floating = require_floating();
    var import_useFloating = require_useFloating();
    var POPPER_NAME = "Popper";
    var [createPopperContext, createScope] = (0, import_create_context4.createContextScope)(POPPER_NAME);
    var createPopperScope = createScope;
    var [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME);
    var Popper = /* @__PURE__ */ __name((props) => {
      const {
        __scopePopper,
        children,
        size,
        strategy = "absolute",
        placement = "bottom",
        stayInFrame,
        allowFlip
      } = props;
      const [isMounted, setIsMounted] = React13.useState(false);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        setIsMounted(true);
      }, []);
      const anchorRef = React13.useRef();
      const [arrowEl, setArrow] = React13.useState(null);
      const [arrowSize, setArrowSize] = React13.useState(0);
      const arrowRef = React13.useRef();
      const floating = (0, import_useFloating.useFloating)({
        strategy,
        placement,
        middleware: [
          stayInFrame ? (0, import_floating.shift)(typeof stayInFrame === "boolean" ? {} : stayInFrame) : null,
          allowFlip ? (0, import_floating.flip)(typeof allowFlip === "boolean" ? {} : allowFlip) : null,
          arrowEl ? (0, import_floating.arrow)({ element: arrowEl }) : null,
          arrowSize ? (0, import_floating.offset)(arrowSize) : null
        ].filter(Boolean)
      });
      const { refs, middlewareData } = floating;
      const composedArrowRefs = (0, import_compose_refs3.useComposedRefs)(arrowRef, setArrow);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        floating.reference(anchorRef.current);
      }, [anchorRef]);
      React13.useEffect(() => {
        if (!(refs.reference.current && refs.floating.current)) {
          return;
        }
        return (0, import_floating.autoUpdate)(refs.reference.current, refs.floating.current, floating.update);
      }, [floating.update, refs.floating, refs.reference]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopperProvider, {
        scope: __scopePopper,
        anchorRef,
        size,
        arrowRef: composedArrowRefs,
        arrowStyle: middlewareData.arrow,
        onArrowSize: setArrowSize,
        isMounted,
        ...floating,
        children
      });
    }, "Popper");
    Popper.displayName = POPPER_NAME;
    var ANCHOR_NAME = "PopperAnchor";
    var PopperAnchor = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopper, virtualRef, ...anchorProps } = props;
        const { anchorRef, getReferenceProps } = usePopperContext(ANCHOR_NAME, __scopePopper);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref, anchorRef);
        if (virtualRef) {
          return null;
        }
        const stackProps = {
          ref: composedRefs,
          ...anchorProps
        };
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
          ...getReferenceProps ? getReferenceProps(stackProps) : stackProps
        });
      }
    );
    PopperAnchor.displayName = ANCHOR_NAME;
    var CONTENT_NAME2 = "PopperContent";
    var PopperContentFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: "PopperContent",
      backgroundColor: "$background",
      alignItems: "center",
      radiused: true,
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              padding: tokens.space[val],
              borderRadius: tokens.radius[val]
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var PopperContent = PopperContentFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopePopper, ...contentProps } = props;
          const { strategy, placement, floating, x, y, getFloatingProps, size, isMounted } = usePopperContext(CONTENT_NAME2, __scopePopper);
          const contentRefs = (0, import_compose_refs3.useComposedRefs)(floating, forwardedRef);
          const contents = React13.useMemo(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopperContentFrame, {
              "data-placement": placement,
              "data-strategy": strategy,
              size: contentProps.size || size,
              ...contentProps
            }, "popper-content-frame");
          }, [placement, strategy, props]);
          if (!isMounted) {
            return null;
          }
          const frameProps = {
            ref: contentRefs,
            x: x || 0,
            y: y || 0,
            position: strategy
          };
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
            ...getFloatingProps ? getFloatingProps(frameProps) : frameProps,
            children: contents
          });
        }
      )
    );
    PopperContent.displayName = CONTENT_NAME2;
    var ARROW_NAME = "PopperArrow";
    var PopperArrowFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: "PopperArrow",
      borderColor: "$borderColor",
      backgroundColor: "$background",
      position: "relative"
    });
    var PopperArrowOuterFrame = (0, import_core27.styled)(import_stacks9.YStack, {
      name: "PopperArrowOuter",
      position: "absolute",
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center"
    });
    var opposites = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right"
    };
    var PopperArrow = PopperArrowFrame.extractable(
      React13.forwardRef(/* @__PURE__ */ __name(function PopperArrow2(props, forwardedRef) {
        const {
          __scopePopper,
          offset: offset2,
          size: sizeProp,
          borderWidth = 0,
          ...arrowProps
        } = props;
        const context = usePopperContext(ARROW_NAME, __scopePopper);
        const sizeVal = sizeProp ?? context.size;
        const sizeValResolved = (0, import_core27.getVariableValue)((0, import_get_size2.stepTokenUpOrDown)("space", sizeVal, -2, [2]));
        const size = +sizeValResolved;
        const { placement } = context;
        const { x, y } = context.arrowStyle || { x: 0, y: 0 };
        const refs = (0, import_compose_refs3.useComposedRefs)(context.arrowRef, forwardedRef);
        const primaryPlacement = placement ? placement.split("-")[0] : "top";
        const arrowStyle = { x, y, width: size, height: size };
        const innerArrowStyle = {};
        const isVertical = primaryPlacement === "bottom" || primaryPlacement === "top";
        if (primaryPlacement) {
          arrowStyle[isVertical ? "width" : "height"] = size * 2;
          const oppSide = opposites[primaryPlacement];
          if (oppSide) {
            arrowStyle[oppSide] = -size;
            innerArrowStyle[oppSide] = size / 2;
          }
          if (oppSide === "top" || oppSide === "bottom") {
            arrowStyle.left = 0;
          }
          if (oppSide === "left" || oppSide === "right") {
            arrowStyle.top = 0;
          }
        }
        (0, import_core27.useIsomorphicLayoutEffect)(() => {
          var _a;
          (_a = context.onArrowSize) == null ? void 0 : _a.call(context, size);
        }, [size, context.onArrowSize]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopperArrowOuterFrame, {
          ref: refs,
          ...arrowStyle,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopperArrowFrame, {
            width: size,
            height: size,
            ...arrowProps,
            ...innerArrowStyle,
            rotate: "45deg",
            ...primaryPlacement === "bottom" && {
              borderBottomWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "top" && {
              borderTopWidth: borderWidth,
              borderLeftWidth: borderWidth
            },
            ...primaryPlacement === "right" && {
              borderTopWidth: borderWidth,
              borderRightWidth: borderWidth
            },
            ...primaryPlacement === "left" && {
              borderBottomWidth: borderWidth,
              borderLeftWidth: borderWidth
            }
          })
        });
      }, "PopperArrow2"))
    );
    PopperArrow.displayName = ARROW_NAME;
  }
});

// ../../node_modules/@tamagui/popper/dist/cjs/index.js
var require_cjs32 = __commonJS({
  "../../node_modules/@tamagui/popper/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      FloatingOverrideContext: () => import_useFloating.FloatingOverrideContext
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_useFloating = require_useFloating();
    __reExport2(src_exports, require_Popper(), module2.exports);
  }
});

// ../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js
var require_floating_ui_react_dom_interactions_umd = __commonJS({
  "../../node_modules/@floating-ui/react-dom-interactions/dist/floating-ui.react-dom-interactions.umd.js"(exports, module2) {
    (function(global2, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports, require_floating_ui_react_dom_umd(), require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["exports", "@floating-ui/react-dom", "react", "react-dom"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.FloatingUIReactDOM = {}, global2.FloatingUIReactDOM, global2.React, global2.ReactDOM));
    })(exports, function(exports2, reactDom, React13, reactDom$1) {
      "use strict";
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      __name(_interopNamespace, "_interopNamespace");
      var React__namespace = /* @__PURE__ */ _interopNamespace(React13);
      var index = typeof document !== "undefined" ? React13.useLayoutEffect : React13.useEffect;
      function createPubSub() {
        const map = /* @__PURE__ */ new Map();
        return {
          emit(event, data) {
            var _map$get;
            (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
          },
          on(event, listener) {
            map.set(event, [...map.get(event) || [], listener]);
          },
          off(event, listener) {
            map.set(event, (map.get(event) || []).filter((l) => l !== listener));
          }
        };
      }
      __name(createPubSub, "createPubSub");
      let serverHandoffComplete = false;
      let count = 0;
      const genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
      function useFloatingId() {
        const [id, setId] = React__namespace.useState(() => serverHandoffComplete ? genId() : void 0);
        index(() => {
          if (id == null) {
            setId(genId());
          }
        }, []);
        React__namespace.useEffect(() => {
          if (!serverHandoffComplete) {
            serverHandoffComplete = true;
          }
        }, []);
        return id;
      }
      __name(useFloatingId, "useFloatingId");
      const useReactId = React__namespace[/* @__PURE__ */ "useId".toString()];
      const useId3 = useReactId != null ? useReactId : useFloatingId;
      const FloatingNodeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const FloatingTreeContext = /* @__PURE__ */ React__namespace.createContext(null);
      const useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
        var _React$useContext$id, _React$useContext;
        return (_React$useContext$id = (_React$useContext = React__namespace.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) != null ? _React$useContext$id : null;
      }, "useFloatingParentNodeId");
      const useFloatingTree = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingTreeContext), "useFloatingTree");
      const useFloatingNodeId = /* @__PURE__ */ __name((customParentId) => {
        const id = useId3();
        const tree = useFloatingTree();
        const reactParentId = useFloatingParentNodeId();
        const parentId = customParentId || reactParentId;
        index(() => {
          const node = {
            id,
            parentId
          };
          tree == null ? void 0 : tree.addNode(node);
          return () => {
            tree == null ? void 0 : tree.removeNode(node);
          };
        }, [tree, id, parentId]);
        return id;
      }, "useFloatingNodeId");
      const FloatingNode = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id
        } = _ref;
        const parentId = useFloatingParentNodeId();
        return /* @__PURE__ */ React__namespace.createElement(FloatingNodeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            id,
            parentId
          }), [id, parentId])
        }, children);
      }, "FloatingNode");
      const FloatingTree = /* @__PURE__ */ __name((_ref2) => {
        let {
          children
        } = _ref2;
        const nodesRef = React__namespace.useRef([]);
        const addNode = React__namespace.useCallback((node) => {
          nodesRef.current = [...nodesRef.current, node];
        }, []);
        const removeNode = React__namespace.useCallback((node) => {
          nodesRef.current = nodesRef.current.filter((n) => n !== node);
        }, []);
        const events = React__namespace.useState(() => createPubSub())[0];
        return /* @__PURE__ */ React__namespace.createElement(FloatingTreeContext.Provider, {
          value: React__namespace.useMemo(() => ({
            nodesRef,
            addNode,
            removeNode,
            events
          }), [nodesRef, addNode, removeNode, events])
        }, children);
      }, "FloatingTree");
      function getDocument(floating) {
        var _floating$ownerDocume;
        return (_floating$ownerDocume = floating == null ? void 0 : floating.ownerDocument) != null ? _floating$ownerDocume : document;
      }
      __name(getDocument, "getDocument");
      function getPlatform() {
        const uaData = navigator.userAgentData;
        if (uaData != null && uaData.platform) {
          return uaData.platform;
        }
        return navigator.platform;
      }
      __name(getPlatform, "getPlatform");
      function getUserAgent() {
        const uaData = navigator.userAgentData;
        if (uaData && Array.isArray(uaData.brands)) {
          return uaData.brands.map((_ref) => {
            let {
              brand,
              version
            } = _ref;
            return brand + "/" + version;
          }).join(" ");
        }
        return navigator.userAgent;
      }
      __name(getUserAgent, "getUserAgent");
      function getWindow(value) {
        var _getDocument$defaultV;
        return (_getDocument$defaultV = getDocument(value).defaultView) != null ? _getDocument$defaultV : window;
      }
      __name(getWindow, "getWindow");
      function isElement(value) {
        return value ? value instanceof getWindow(value).Element : false;
      }
      __name(isElement, "isElement");
      function isHTMLElement(value) {
        return value ? value instanceof getWindow(value).HTMLElement : false;
      }
      __name(isHTMLElement, "isHTMLElement");
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        const OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      __name(isShadowRoot, "isShadowRoot");
      function isVirtualClick(event) {
        if (event.mozInputSource === 0 && event.isTrusted) {
          return true;
        }
        const androidRe = /Android/i;
        if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
          return event.type === "click" && event.buttons === 1;
        }
        return event.detail === 0 && !event.pointerType;
      }
      __name(isVirtualClick, "isVirtualClick");
      function isVirtualPointerEvent(event) {
        return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
      }
      __name(isVirtualPointerEvent, "isVirtualPointerEvent");
      function isSafari() {
        return /apple/i.test(navigator.vendor);
      }
      __name(isSafari, "isSafari");
      function isMac() {
        return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
      }
      __name(isMac, "isMac");
      const useInsertionEffect = React__namespace[/* @__PURE__ */ "useInsertionEffect".toString()];
      const useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
      function useEvent3(callback) {
        const ref = React__namespace.useRef(() => {
          if (process.env.NODE_ENV !== "production") {
            throw new Error("Cannot call an event handler while rendering.");
          }
        });
        useSafeInsertionEffect(() => {
          ref.current = callback;
        });
        return React__namespace.useCallback(function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return ref.current == null ? void 0 : ref.current(...args);
        }, []);
      }
      __name(useEvent3, "useEvent");
      function useFloating2(_temp) {
        let {
          open = false,
          onOpenChange: unstable_onOpenChange,
          whileElementsMounted,
          placement,
          middleware,
          strategy,
          nodeId
        } = _temp === void 0 ? {} : _temp;
        const [domReference, setDomReference] = React__namespace.useState(null);
        const tree = useFloatingTree();
        const domReferenceRef = React__namespace.useRef(null);
        const dataRef = React__namespace.useRef({});
        const events = React__namespace.useState(() => createPubSub())[0];
        const position = reactDom.useFloating({
          placement,
          middleware,
          strategy,
          whileElementsMounted
        });
        const onOpenChange = useEvent3(unstable_onOpenChange);
        const refs = React__namespace.useMemo(() => ({
          ...position.refs,
          domReference: domReferenceRef
        }), [position.refs]);
        const context = React__namespace.useMemo(() => ({
          ...position,
          refs,
          dataRef,
          nodeId,
          events,
          open,
          onOpenChange,
          _: {
            domReference
          }
        }), [position, nodeId, events, open, onOpenChange, refs, domReference]);
        index(() => {
          const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
          if (node) {
            node.context = context;
          }
        });
        const {
          reference
        } = position;
        const setReference = React__namespace.useCallback((node) => {
          if (isElement(node) || node === null) {
            context.refs.domReference.current = node;
            setDomReference(node);
          }
          reference(node);
        }, [reference, context.refs]);
        return React__namespace.useMemo(() => ({
          ...position,
          context,
          refs,
          reference: setReference
        }), [position, refs, context, setReference]);
      }
      __name(useFloating2, "useFloating");
      function mergeProps2(userProps, propsList, elementKey) {
        const map = /* @__PURE__ */ new Map();
        return {
          ...elementKey === "floating" && {
            tabIndex: -1
          },
          ...userProps,
          ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
            if (!props) {
              return acc;
            }
            Object.entries(props).forEach((_ref) => {
              let [key, value] = _ref;
              if (key.indexOf("on") === 0) {
                if (!map.has(key)) {
                  map.set(key, []);
                }
                if (typeof value === "function") {
                  var _map$get;
                  (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
                  acc[key] = function() {
                    var _map$get2;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                      args[_key] = arguments[_key];
                    }
                    (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
                  };
                }
              } else {
                acc[key] = value;
              }
            });
            return acc;
          }, {})
        };
      }
      __name(mergeProps2, "mergeProps");
      const useInteractions2 = /* @__PURE__ */ __name(function(propsList) {
        if (propsList === void 0) {
          propsList = [];
        }
        const deps = propsList;
        const getReferenceProps = React__namespace.useCallback(
          (userProps) => mergeProps2(userProps, propsList, "reference"),
          deps
        );
        const getFloatingProps = React__namespace.useCallback(
          (userProps) => mergeProps2(userProps, propsList, "floating"),
          deps
        );
        const getItemProps = React__namespace.useCallback(
          (userProps) => mergeProps2(userProps, propsList, "item"),
          deps
        );
        return React__namespace.useMemo(() => ({
          getReferenceProps,
          getFloatingProps,
          getItemProps
        }), [getReferenceProps, getFloatingProps, getItemProps]);
      }, "useInteractions");
      function contains(parent, child) {
        if (!parent || !child) {
          return false;
        }
        const rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          let next = child;
          do {
            if (next && parent === next) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      __name(contains, "contains");
      function getChildren(nodes, id) {
        var _nodes$filter;
        let allChildren = (_nodes$filter = nodes.filter((node) => {
          var _node$context;
          return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
        })) != null ? _nodes$filter : [];
        let currentChildren = allChildren;
        while (currentChildren.length) {
          var _nodes$filter2;
          currentChildren = (_nodes$filter2 = nodes.filter((node) => {
            var _currentChildren;
            return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n) => {
              var _node$context2;
              return node.parentId === n.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
            });
          })) != null ? _nodes$filter2 : [];
          allChildren = allChildren.concat(currentChildren);
        }
        return allChildren;
      }
      __name(getChildren, "getChildren");
      function getTarget(event) {
        if ("composedPath" in event) {
          return event.composedPath()[0];
        }
        return event.target;
      }
      __name(getTarget, "getTarget");
      function isPointInPolygon(point, polygon) {
        const [x, y] = point;
        let isInside = false;
        const length = polygon.length;
        for (let i = 0, j = length - 1; i < length; j = i++) {
          const [xi, yi] = polygon[i] || [0, 0];
          const [xj, yj] = polygon[j] || [0, 0];
          const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
          if (intersect) {
            isInside = !isInside;
          }
        }
        return isInside;
      }
      __name(isPointInPolygon, "isPointInPolygon");
      function safePolygon(_temp) {
        let {
          restMs = 0,
          buffer = 0.5,
          blockPointerEvents = true,
          debug = null
        } = _temp === void 0 ? {} : _temp;
        let timeoutId2;
        let polygonIsDestroyed = false;
        const fn = /* @__PURE__ */ __name((_ref) => {
          let {
            x,
            y,
            placement,
            refs,
            onClose,
            nodeId,
            tree,
            leave = false
          } = _ref;
          return /* @__PURE__ */ __name(function onMouseMove(event) {
            clearTimeout(timeoutId2);
            function close() {
              clearTimeout(timeoutId2);
              onClose();
            }
            __name(close, "close");
            const {
              clientX,
              clientY
            } = event;
            const target = getTarget(event);
            if (event.type === "mousemove" && contains(refs.domReference.current, target)) {
              return;
            }
            if (event.type === "mouseleave" && isElement(event.relatedTarget) && contains(refs.floating.current, event.relatedTarget)) {
              return;
            }
            if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
              let {
                context
              } = _ref2;
              return context == null ? void 0 : context.open;
            })) {
              return;
            }
            if (contains(refs.floating.current, target) && !leave) {
              polygonIsDestroyed = true;
              return;
            }
            if (!refs.domReference.current || !refs.floating.current || placement == null || x == null || y == null) {
              return;
            }
            const refRect = refs.domReference.current.getBoundingClientRect();
            const rect = refs.floating.current.getBoundingClientRect();
            const side = placement.split("-")[0];
            const cursorLeaveFromRight = x > rect.right - rect.width / 2;
            const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
            if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
              return close();
            }
            switch (side) {
              case "top":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= refRect.top + 1) {
                  return;
                }
                break;
              case "bottom":
                if (clientX >= rect.left && clientX <= rect.right && clientY >= refRect.bottom - 1 && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "left":
                if (clientX >= rect.left && clientX <= refRect.left + 1 && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
              case "right":
                if (clientX >= refRect.right - 1 && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
                  return;
                }
                break;
            }
            if (polygonIsDestroyed) {
              return close();
            }
            function getPolygon(_ref3) {
              let [x2, y2] = _ref3;
              const isFloatingWider = rect.width > refRect.width;
              const isFloatingTaller = rect.height > refRect.height;
              switch (side) {
                case "top": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "bottom": {
                  const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
                  const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
                case "left": {
                  const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
                  return [...commonPoints, cursorPointOne, cursorPointTwo];
                }
                case "right": {
                  const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
                  const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
                  return [cursorPointOne, cursorPointTwo, ...commonPoints];
                }
              }
            }
            __name(getPolygon, "getPolygon");
            const poly = getPolygon([x, y]);
            if (process.env.NODE_ENV !== "production") {
              debug == null ? void 0 : debug(poly.slice(0, 4).join(", "));
            }
            if (!isPointInPolygon([clientX, clientY], poly)) {
              close();
            } else if (restMs) {
              timeoutId2 = setTimeout(onClose, restMs);
            }
          }, "onMouseMove");
        }, "fn");
        fn.__options = {
          blockPointerEvents
        };
        return fn;
      }
      __name(safePolygon, "safePolygon");
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      __name(_extends, "_extends");
      const HIDDEN_STYLES = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0
      };
      let activeElement$1;
      let timeoutId;
      function setActiveElementOnTab(event) {
        if (event.key === "Tab") {
          activeElement$1 = event.target;
          clearTimeout(timeoutId);
        }
      }
      __name(setActiveElementOnTab, "setActiveElementOnTab");
      function isTabFocus(event) {
        const result = activeElement$1 === event.relatedTarget;
        activeElement$1 = event.relatedTarget;
        clearTimeout(timeoutId);
        return result;
      }
      __name(isTabFocus, "isTabFocus");
      const FocusGuard = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
        const onFocus = useEvent3(props.onFocus);
        const [role, setRole] = React__namespace.useState();
        index(() => {
          if (isSafari()) {
            setRole("button");
          }
          document.addEventListener("keydown", setActiveElementOnTab);
          return () => {
            document.removeEventListener("keydown", setActiveElementOnTab);
          };
        }, []);
        return /* @__PURE__ */ React__namespace.createElement("span", _extends({}, props, {
          ref,
          tabIndex: 0,
          role,
          "aria-hidden": role ? void 0 : true,
          "data-floating-ui-focus-guard": "",
          style: HIDDEN_STYLES,
          onFocus: (event) => {
            if (isSafari() && isMac() && !isTabFocus(event)) {
              event.persist();
              timeoutId = window.setTimeout(() => {
                onFocus(event);
              }, 50);
            } else {
              onFocus(event);
            }
          }
        }));
      }, "FocusGuard"));
      var candidateSelectors = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"];
      var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
      var NoElement = typeof Element === "undefined";
      var matches = NoElement ? function() {
      } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
        return element.getRootNode();
      } : function(element) {
        return element.ownerDocument;
      };
      var getCandidates = /* @__PURE__ */ __name(function getCandidates2(el, includeContainer, filter) {
        var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
        if (includeContainer && matches.call(el, candidateSelector)) {
          candidates.unshift(el);
        }
        candidates = candidates.filter(filter);
        return candidates;
      }, "getCandidates");
      var getCandidatesIteratively = /* @__PURE__ */ __name(function getCandidatesIteratively2(elements, includeContainer, options) {
        var candidates = [];
        var elementsToCheck = Array.from(elements);
        while (elementsToCheck.length) {
          var element = elementsToCheck.shift();
          if (element.tagName === "SLOT") {
            var assigned = element.assignedElements();
            var content = assigned.length ? assigned : element.children;
            var nestedCandidates = getCandidatesIteratively2(content, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: nestedCandidates
              });
            }
          } else {
            var validCandidate = matches.call(element, candidateSelector);
            if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
              candidates.push(element);
            }
            var shadowRoot = element.shadowRoot || typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
            var validShadowRoot = !options.shadowRootFilter || options.shadowRootFilter(element);
            if (shadowRoot && validShadowRoot) {
              var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
              if (options.flatten) {
                candidates.push.apply(candidates, _nestedCandidates);
              } else {
                candidates.push({
                  scopeParent: element,
                  candidates: _nestedCandidates
                });
              }
            } else {
              elementsToCheck.unshift.apply(elementsToCheck, element.children);
            }
          }
        }
        return candidates;
      }, "getCandidatesIteratively");
      var getTabindex = /* @__PURE__ */ __name(function getTabindex2(node, isScope) {
        if (node.tabIndex < 0) {
          if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
            return 0;
          }
        }
        return node.tabIndex;
      }, "getTabindex");
      var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a, b) {
        return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
      }, "sortOrderedTabbables");
      var isInput = /* @__PURE__ */ __name(function isInput2(node) {
        return node.tagName === "INPUT";
      }, "isInput");
      var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
        return isInput(node) && node.type === "hidden";
      }, "isHiddenInput");
      var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
        var r = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
          return child.tagName === "SUMMARY";
        });
        return r;
      }, "isDetailsWithSummary");
      var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].checked && nodes[i].form === form) {
            return nodes[i];
          }
        }
      }, "getCheckedRadio");
      var isTabbableRadio = /* @__PURE__ */ __name(function isTabbableRadio2(node) {
        if (!node.name) {
          return true;
        }
        var radioScope = node.form || getRootNode(node);
        var queryRadios = /* @__PURE__ */ __name(function queryRadios2(name) {
          return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
        }, "queryRadios");
        var radioSet;
        if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
          radioSet = queryRadios(window.CSS.escape(node.name));
        } else {
          try {
            radioSet = queryRadios(node.name);
          } catch (err) {
            console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
            return false;
          }
        }
        var checked = getCheckedRadio(radioSet, node.form);
        return !checked || checked === node;
      }, "isTabbableRadio");
      var isRadio = /* @__PURE__ */ __name(function isRadio2(node) {
        return isInput(node) && node.type === "radio";
      }, "isRadio");
      var isNonTabbableRadio = /* @__PURE__ */ __name(function isNonTabbableRadio2(node) {
        return isRadio(node) && !isTabbableRadio(node);
      }, "isNonTabbableRadio");
      var isNodeAttached = /* @__PURE__ */ __name(function isNodeAttached2(node) {
        var _nodeRootHost;
        var nodeRootHost = getRootNode(node).host;
        var attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && _nodeRootHost.ownerDocument.contains(nodeRootHost) || node.ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRootHost2;
          nodeRootHost = getRootNode(nodeRootHost).host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && _nodeRootHost2.ownerDocument.contains(nodeRootHost));
        }
        return attached;
      }, "isNodeAttached");
      var isZeroArea = /* @__PURE__ */ __name(function isZeroArea2(node) {
        var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
        return width === 0 && height === 0;
      }, "isZeroArea");
      var isHidden = /* @__PURE__ */ __name(function isHidden2(node, _ref) {
        var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
        if (getComputedStyle(node).visibility === "hidden") {
          return true;
        }
        var isDirectSummary = matches.call(node, "details>summary:first-of-type");
        var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
        if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
          return true;
        }
        if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
          if (typeof getShadowRoot === "function") {
            var originalNode = node;
            while (node) {
              var parentElement = node.parentElement;
              var rootNode = getRootNode(node);
              if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
                return isZeroArea(node);
              } else if (node.assignedSlot) {
                node = node.assignedSlot;
              } else if (!parentElement && rootNode !== node.ownerDocument) {
                node = rootNode.host;
              } else {
                node = parentElement;
              }
            }
            node = originalNode;
          }
          if (isNodeAttached(node)) {
            return !node.getClientRects().length;
          }
          if (displayCheck !== "legacy-full") {
            return true;
          }
        } else if (displayCheck === "non-zero-area") {
          return isZeroArea(node);
        }
        return false;
      }, "isHidden");
      var isDisabledFromFieldset = /* @__PURE__ */ __name(function isDisabledFromFieldset2(node) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
          var parentNode = node.parentElement;
          while (parentNode) {
            if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
              for (var i = 0; i < parentNode.children.length; i++) {
                var child = parentNode.children.item(i);
                if (child.tagName === "LEGEND") {
                  return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
                }
              }
              return true;
            }
            parentNode = parentNode.parentElement;
          }
        }
        return false;
      }, "isDisabledFromFieldset");
      var isNodeMatchingSelectorFocusable = /* @__PURE__ */ __name(function isNodeMatchingSelectorFocusable2(options, node) {
        if (node.disabled || isHiddenInput(node) || isHidden(node, options) || isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
          return false;
        }
        return true;
      }, "isNodeMatchingSelectorFocusable");
      var isNodeMatchingSelectorTabbable = /* @__PURE__ */ __name(function isNodeMatchingSelectorTabbable2(options, node) {
        if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
          return false;
        }
        return true;
      }, "isNodeMatchingSelectorTabbable");
      var isValidShadowRootTabbable = /* @__PURE__ */ __name(function isValidShadowRootTabbable2(shadowHostNode) {
        var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
        if (isNaN(tabIndex) || tabIndex >= 0) {
          return true;
        }
        return false;
      }, "isValidShadowRootTabbable");
      var sortByOrder = /* @__PURE__ */ __name(function sortByOrder2(candidates) {
        var regularTabbables = [];
        var orderedTabbables = [];
        candidates.forEach(function(item, i) {
          var isScope = !!item.scopeParent;
          var element = isScope ? item.scopeParent : item;
          var candidateTabindex = getTabindex(element, isScope);
          var elements = isScope ? sortByOrder2(item.candidates) : element;
          if (candidateTabindex === 0) {
            isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
          } else {
            orderedTabbables.push({
              documentOrder: i,
              tabIndex: candidateTabindex,
              item,
              isScope,
              content: elements
            });
          }
        });
        return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
          sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
          return acc;
        }, []).concat(regularTabbables);
      }, "sortByOrder");
      var tabbable = /* @__PURE__ */ __name(function tabbable2(el, options) {
        options = options || {};
        var candidates;
        if (options.getShadowRoot) {
          candidates = getCandidatesIteratively([el], options.includeContainer, {
            filter: isNodeMatchingSelectorTabbable.bind(null, options),
            flatten: false,
            getShadowRoot: options.getShadowRoot,
            shadowRootFilter: isValidShadowRootTabbable
          });
        } else {
          candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
        }
        return sortByOrder(candidates);
      }, "tabbable");
      function activeElement(doc) {
        let activeElement2 = doc.activeElement;
        while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
          var _activeElement, _activeElement$shadow;
          activeElement2 = activeElement2.shadowRoot.activeElement;
        }
        return activeElement2;
      }
      __name(activeElement, "activeElement");
      const getTabbableOptions = /* @__PURE__ */ __name(() => ({
        getShadowRoot: true,
        displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      }), "getTabbableOptions");
      function getTabbableIn(container, direction) {
        const allTabbable = tabbable(container, getTabbableOptions());
        if (direction === "prev") {
          allTabbable.reverse();
        }
        const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
        const nextTabbableElements = allTabbable.slice(activeIndex + 1);
        return nextTabbableElements[0];
      }
      __name(getTabbableIn, "getTabbableIn");
      function getNextTabbable() {
        return getTabbableIn(document.body, "next");
      }
      __name(getNextTabbable, "getNextTabbable");
      function getPreviousTabbable() {
        return getTabbableIn(document.body, "prev");
      }
      __name(getPreviousTabbable, "getPreviousTabbable");
      function isOutsideEvent(event, container) {
        const containerElement = container || event.currentTarget;
        const relatedTarget = event.relatedTarget;
        return !relatedTarget || !contains(containerElement, relatedTarget);
      }
      __name(isOutsideEvent, "isOutsideEvent");
      function disableFocusInside(container) {
        const tabbableElements = tabbable(container, getTabbableOptions());
        tabbableElements.forEach((element) => {
          var _element$getAttribute;
          element.dataset.tabindex = (_element$getAttribute = element.getAttribute("tabindex")) != null ? _element$getAttribute : "";
          element.setAttribute("tabindex", "-1");
        });
      }
      __name(disableFocusInside, "disableFocusInside");
      function enableFocusInside(container) {
        const elements = container.querySelectorAll("[data-tabindex]");
        elements.forEach((element) => {
          const tabindex = element.dataset.tabindex;
          delete element.dataset.tabindex;
          if (tabindex) {
            element.setAttribute("tabindex", tabindex);
          } else {
            element.removeAttribute("tabindex");
          }
        });
      }
      __name(enableFocusInside, "enableFocusInside");
      const PortalContext = /* @__PURE__ */ React__namespace.createContext(null);
      const useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
        let {
          id,
          enabled = true
        } = _temp === void 0 ? {} : _temp;
        const [portalEl, setPortalEl] = React__namespace.useState(null);
        const uniqueId = useId3();
        const portalContext = usePortalContext2();
        index(() => {
          if (!enabled) {
            return;
          }
          const rootNode = id ? document.getElementById(id) : null;
          if (rootNode) {
            rootNode.setAttribute("data-floating-ui-portal", "");
            setPortalEl(rootNode);
          } else {
            const newPortalEl = document.createElement("div");
            newPortalEl.id = id || uniqueId;
            newPortalEl.setAttribute("data-floating-ui-portal", "");
            setPortalEl(newPortalEl);
            const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
            container.appendChild(newPortalEl);
            return () => {
              container.removeChild(newPortalEl);
            };
          }
        }, [id, portalContext, uniqueId, enabled]);
        return portalEl;
      }, "useFloatingPortalNode");
      const FloatingPortal = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          id,
          root = null,
          preserveTabOrder = true
        } = _ref;
        const portalNode = useFloatingPortalNode({
          id,
          enabled: !root
        });
        const [focusManagerState, setFocusManagerState] = React__namespace.useState(null);
        const beforeOutsideRef = React__namespace.useRef(null);
        const afterOutsideRef = React__namespace.useRef(null);
        const beforeInsideRef = React__namespace.useRef(null);
        const afterInsideRef = React__namespace.useRef(null);
        const shouldRenderGuards = !!focusManagerState && !focusManagerState.modal && !!(root || portalNode) && preserveTabOrder;
        React__namespace.useEffect(() => {
          if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
            return;
          }
          function onFocus(event) {
            if (portalNode && isOutsideEvent(event)) {
              const focusing = event.type === "focusin";
              const manageFocus = focusing ? enableFocusInside : disableFocusInside;
              manageFocus(portalNode);
            }
          }
          __name(onFocus, "onFocus");
          portalNode.addEventListener("focusin", onFocus, true);
          portalNode.addEventListener("focusout", onFocus, true);
          return () => {
            portalNode.removeEventListener("focusin", onFocus, true);
            portalNode.removeEventListener("focusout", onFocus, true);
          };
        }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
        return /* @__PURE__ */ React__namespace.createElement(PortalContext.Provider, {
          value: React__namespace.useMemo(() => ({
            preserveTabOrder,
            beforeOutsideRef,
            afterOutsideRef,
            beforeInsideRef,
            afterInsideRef,
            portalNode,
            setFocusManagerState
          }), [preserveTabOrder, portalNode])
        }, shouldRenderGuards && portalNode && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          ref: beforeOutsideRef,
          onFocus: (event) => {
            if (isOutsideEvent(event, portalNode)) {
              var _beforeInsideRef$curr;
              (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
            } else {
              const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
              prevTabbable == null ? void 0 : prevTabbable.focus();
            }
          }
        }), shouldRenderGuards && portalNode && /* @__PURE__ */ React__namespace.createElement("span", {
          "aria-owns": portalNode.id,
          style: HIDDEN_STYLES
        }), root ? /* @__PURE__ */ reactDom$1.createPortal(children, root) : portalNode ? /* @__PURE__ */ reactDom$1.createPortal(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          ref: afterOutsideRef,
          onFocus: (event) => {
            if (isOutsideEvent(event, portalNode)) {
              var _afterInsideRef$curre;
              (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
            } else {
              const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
              nextTabbable == null ? void 0 : nextTabbable.focus();
              focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false);
            }
          }
        }));
      }, "FloatingPortal");
      const usePortalContext2 = /* @__PURE__ */ __name(() => React__namespace.useContext(PortalContext), "usePortalContext");
      const identifier = "data-floating-ui-scroll-lock";
      const FloatingOverlay = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
        let {
          lockScroll = false,
          ...rest
        } = _ref;
        index(() => {
          var _window$visualViewpor, _window$visualViewpor2, _window$visualViewpor3, _window$visualViewpor4;
          if (!lockScroll) {
            return;
          }
          const alreadyLocked = document.body.hasAttribute(identifier);
          if (alreadyLocked) {
            return;
          }
          document.body.setAttribute(identifier, "");
          const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
          const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
          const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
          if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
            Object.assign(document.body.style, {
              overflow: "hidden",
              [paddingProp]: scrollbarWidth + "px"
            });
            return () => {
              document.body.removeAttribute(identifier);
              Object.assign(document.body.style, {
                overflow: "",
                [paddingProp]: ""
              });
            };
          }
          const offsetLeft = (_window$visualViewpor = (_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetLeft) != null ? _window$visualViewpor : 0;
          const offsetTop = (_window$visualViewpor3 = (_window$visualViewpor4 = window.visualViewport) == null ? void 0 : _window$visualViewpor4.offsetTop) != null ? _window$visualViewpor3 : 0;
          const scrollX = window.pageXOffset;
          const scrollY = window.pageYOffset;
          Object.assign(document.body.style, {
            position: "fixed",
            overflow: "hidden",
            top: -(scrollY - Math.floor(offsetTop)) + "px",
            left: -(scrollX - Math.floor(offsetLeft)) + "px",
            right: "0",
            [paddingProp]: scrollbarWidth + "px"
          });
          return () => {
            Object.assign(document.body.style, {
              position: "",
              overflow: "",
              top: "",
              left: "",
              right: "",
              [paddingProp]: ""
            });
            document.body.removeAttribute(identifier);
            window.scrollTo(scrollX, scrollY);
          };
        }, [lockScroll]);
        return /* @__PURE__ */ React__namespace.createElement("div", _extends({
          ref
        }, rest, {
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...rest.style
          }
        }));
      }, "FloatingOverlay"));
      var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
        if (typeof document === "undefined") {
          return null;
        }
        var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
        return sampleTarget.ownerDocument.body;
      }, "getDefaultParent");
      var counterMap = /* @__PURE__ */ new WeakMap();
      var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
      var markerMap = {};
      var lockCount = 0;
      var hideOthers3 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
        if (parentNode === void 0) {
          parentNode = getDefaultParent(originalTarget);
        }
        if (markerName === void 0) {
          markerName = "data-aria-hidden";
        }
        var targets = Array.isArray(originalTarget) ? originalTarget : [originalTarget];
        if (!markerMap[markerName]) {
          markerMap[markerName] = /* @__PURE__ */ new WeakMap();
        }
        var markerCounter = markerMap[markerName];
        var hiddenNodes = [];
        var elementsToKeep = /* @__PURE__ */ new Set();
        var keep = /* @__PURE__ */ __name(function(el) {
          if (!el || elementsToKeep.has(el)) {
            return;
          }
          elementsToKeep.add(el);
          keep(el.parentNode);
        }, "keep");
        targets.forEach(keep);
        var deep = /* @__PURE__ */ __name(function(parent) {
          if (!parent || targets.indexOf(parent) >= 0) {
            return;
          }
          Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
              deep(node);
            } else {
              var attr = node.getAttribute("aria-hidden");
              var alreadyHidden = attr !== null && attr !== "false";
              var counterValue = (counterMap.get(node) || 0) + 1;
              var markerValue = (markerCounter.get(node) || 0) + 1;
              counterMap.set(node, counterValue);
              markerCounter.set(node, markerValue);
              hiddenNodes.push(node);
              if (counterValue === 1 && alreadyHidden) {
                uncontrolledNodes.set(node, true);
              }
              if (markerValue === 1) {
                node.setAttribute(markerName, "true");
              }
              if (!alreadyHidden) {
                node.setAttribute("aria-hidden", "true");
              }
            }
          });
        }, "deep");
        deep(parentNode);
        elementsToKeep.clear();
        lockCount++;
        return function() {
          hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
              if (!uncontrolledNodes.has(node)) {
                node.removeAttribute("aria-hidden");
              }
              uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
              node.removeAttribute(markerName);
            }
          });
          lockCount--;
          if (!lockCount) {
            counterMap = /* @__PURE__ */ new WeakMap();
            counterMap = /* @__PURE__ */ new WeakMap();
            uncontrolledNodes = /* @__PURE__ */ new WeakMap();
            markerMap = {};
          }
        };
      }, "hideOthers");
      const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function isTypeableElement(element) {
        return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
      }
      __name(isTypeableElement, "isTypeableElement");
      function stopEvent(event) {
        event.preventDefault();
        event.stopPropagation();
      }
      __name(stopEvent, "stopEvent");
      function useLatestRef(value) {
        const ref = React13.useRef(value);
        index(() => {
          ref.current = value;
        });
        return ref;
      }
      __name(useLatestRef, "useLatestRef");
      function getAncestors(nodes, id) {
        var _nodes$find;
        let allAncestors = [];
        let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
        while (currentParentId) {
          const currentNode = nodes.find((node) => node.id === currentParentId);
          currentParentId = currentNode == null ? void 0 : currentNode.parentId;
          if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
          }
        }
        return allAncestors;
      }
      __name(getAncestors, "getAncestors");
      let rafId = 0;
      function enqueueFocus(el, options) {
        if (options === void 0) {
          options = {};
        }
        const {
          preventScroll = false,
          cancelPrevious = true,
          sync = false
        } = options;
        cancelPrevious && cancelAnimationFrame(rafId);
        const exec = /* @__PURE__ */ __name(() => el == null ? void 0 : el.focus({
          preventScroll
        }), "exec");
        if (sync) {
          exec();
        } else {
          rafId = requestAnimationFrame(exec);
        }
      }
      __name(enqueueFocus, "enqueueFocus");
      const VisuallyHiddenDismiss = /* @__PURE__ */ React__namespace.forwardRef(/* @__PURE__ */ __name(function VisuallyHiddenDismiss2(props, ref) {
        return /* @__PURE__ */ React__namespace.createElement("button", _extends({}, props, {
          ref,
          tabIndex: -1,
          style: HIDDEN_STYLES
        }));
      }, "VisuallyHiddenDismiss"));
      function FloatingFocusManager(_ref) {
        let {
          context,
          children,
          order = ["content"],
          guards = true,
          initialFocus = 0,
          returnFocus = true,
          modal = true,
          visuallyHiddenDismiss = false
        } = _ref;
        const {
          refs,
          nodeId,
          onOpenChange,
          events,
          _: {
            domReference
          }
        } = context;
        const orderRef = useLatestRef(order);
        const tree = useFloatingTree();
        const portalContext = usePortalContext2();
        const [tabbableContentLength, setTabbableContentLength] = React__namespace.useState(null);
        const initialFocusControlled = typeof initialFocus === "number" && initialFocus < 0;
        const startDismissButtonRef = React__namespace.useRef(null);
        const endDismissButtonRef = React__namespace.useRef(null);
        const preventReturnFocusRef = React__namespace.useRef(false);
        const previouslyFocusedElementRef = React__namespace.useRef(null);
        const insidePortal = portalContext != null;
        const typeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
        const getTabbableContent = React__namespace.useCallback(function(container) {
          if (container === void 0) {
            container = refs.floating.current;
          }
          return container ? tabbable(container, getTabbableOptions()) : [];
        }, [refs]);
        const getTabbableElements = React__namespace.useCallback((container) => {
          const content = getTabbableContent(container);
          return orderRef.current.map((type) => {
            if (refs.domReference.current && type === "reference") {
              return refs.domReference.current;
            }
            if (refs.floating.current && type === "floating") {
              return refs.floating.current;
            }
            return content;
          }).filter(Boolean).flat();
        }, [orderRef, refs, getTabbableContent]);
        React__namespace.useEffect(() => {
          if (!modal) {
            return;
          }
          function onKeyDown(event) {
            if (event.key === "Tab") {
              if (getTabbableContent().length === 0 && !typeableCombobox) {
                stopEvent(event);
              }
              const els = getTabbableElements();
              const target = getTarget(event);
              if (orderRef.current[0] === "reference" && target === refs.domReference.current) {
                stopEvent(event);
                if (event.shiftKey) {
                  enqueueFocus(els[els.length - 1]);
                } else {
                  enqueueFocus(els[1]);
                }
              }
              if (orderRef.current[1] === "floating" && target === refs.floating.current && event.shiftKey) {
                stopEvent(event);
                enqueueFocus(els[0]);
              }
            }
          }
          __name(onKeyDown, "onKeyDown");
          const doc = getDocument(refs.floating.current);
          doc.addEventListener("keydown", onKeyDown);
          return () => {
            doc.removeEventListener("keydown", onKeyDown);
          };
        }, [modal, orderRef, refs, typeableCombobox, getTabbableContent, getTabbableElements]);
        React__namespace.useEffect(() => {
          var _portalContext$portal, _portalContext$portal2;
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          const portalNodes = Array.from((_portalContext$portal = portalContext == null ? void 0 : (_portalContext$portal2 = portalContext.portalNode) == null ? void 0 : _portalContext$portal2.querySelectorAll("[data-floating-ui-portal]")) != null ? _portalContext$portal : []);
          function getDismissButtons() {
            return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
          }
          __name(getDismissButtons, "getDismissButtons");
          let isPointerDown = false;
          function handlePointerDown() {
            isPointerDown = true;
            setTimeout(() => {
              isPointerDown = false;
            });
          }
          __name(handlePointerDown, "handlePointerDown");
          function handleFocusOutside(event) {
            const relatedTarget = event.relatedTarget;
            const movedToUnrelatedNode = !(contains(reference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || [portalContext == null ? void 0 : portalContext.beforeOutsideRef.current, portalContext == null ? void 0 : portalContext.afterOutsideRef.current].filter(Boolean).includes(relatedTarget) || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
              var _node$context, _node$context2;
              return contains((_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.refs.domReference.current, relatedTarget);
            }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
              var _node$context3, _node$context4;
              return ((_node$context3 = node.context) == null ? void 0 : _node$context3.refs.floating.current) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.refs.domReference.current) === relatedTarget;
            })));
            if (relatedTarget && movedToUnrelatedNode && !isPointerDown && relatedTarget !== previouslyFocusedElementRef.current) {
              preventReturnFocusRef.current = true;
              setTimeout(() => onOpenChange(false));
            }
          }
          __name(handleFocusOutside, "handleFocusOutside");
          if (floating && isHTMLElement(reference)) {
            let cleanup;
            if (modal) {
              const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
              cleanup = hideOthers3(orderRef.current.includes("reference") || typeableCombobox ? insideNodes.concat(reference) : insideNodes);
            }
            reference.addEventListener("focusout", handleFocusOutside);
            reference.addEventListener("pointerdown", handlePointerDown);
            !modal && floating.addEventListener("focusout", handleFocusOutside);
            return () => {
              reference.removeEventListener("focusout", handleFocusOutside);
              reference.removeEventListener("pointerdown", handlePointerDown);
              !modal && floating.removeEventListener("focusout", handleFocusOutside);
              cleanup == null ? void 0 : cleanup();
            };
          }
        }, [modal, initialFocus, nodeId, tree, orderRef, refs, portalContext, typeableCombobox, initialFocusControlled, onOpenChange]);
        React__namespace.useEffect(() => {
          const floating = refs.floating.current;
          if (modal && !guards && floating) {
            const tabIndexValues = [];
            const options = getTabbableOptions();
            const allTabbable = tabbable(getDocument(floating).body, options);
            const floatingTabbable = getTabbableElements();
            const elements = allTabbable.filter((el) => !floatingTabbable.includes(el));
            elements.forEach((el, i) => {
              tabIndexValues[i] = el.getAttribute("tabindex");
              el.setAttribute("tabindex", "-1");
            });
            return () => {
              elements.forEach((el, i) => {
                const value = tabIndexValues[i];
                if (value == null) {
                  el.removeAttribute("tabindex");
                } else {
                  el.setAttribute("tabindex", value);
                }
              });
            };
          }
        }, [modal, guards, refs, getTabbableElements]);
        index(() => {
          const floating = refs.floating.current;
          if (!floating) {
            return;
          }
          const doc = getDocument(floating);
          let returnFocusValue = returnFocus;
          let preventReturnFocusScroll = false;
          const previouslyFocusedElement = activeElement(doc);
          previouslyFocusedElementRef.current = previouslyFocusedElement;
          const focusableElements = getTabbableElements(floating);
          const elToFocus = (typeof initialFocus === "number" ? focusableElements[initialFocus] : initialFocus.current) || floating;
          !initialFocusControlled && enqueueFocus(elToFocus, {
            preventScroll: elToFocus === floating
          });
          function onDismiss(payload) {
            if (payload.type === "escapeKey" && refs.domReference.current) {
              previouslyFocusedElementRef.current = refs.domReference.current;
            }
            if (payload.type !== "outsidePress") {
              return;
            }
            const returnFocus2 = payload.data.returnFocus;
            if (typeof returnFocus2 === "object") {
              returnFocusValue = true;
              preventReturnFocusScroll = returnFocus2.preventScroll;
            } else {
              returnFocusValue = returnFocus2;
            }
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
            if (contains(floating, activeElement(doc)) && refs.domReference.current) {
              previouslyFocusedElementRef.current = refs.domReference.current;
            }
            if (returnFocusValue && isHTMLElement(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
              enqueueFocus(previouslyFocusedElementRef.current, {
                preventScroll: preventReturnFocusScroll,
                cancelPrevious: false
              });
            }
          };
        }, [getTabbableElements, initialFocus, returnFocus, refs, events, initialFocusControlled]);
        index(() => {
          if (!portalContext)
            return;
          portalContext.setFocusManagerState({
            ...context,
            modal
          });
          return () => {
            portalContext.setFocusManagerState(null);
          };
        }, [portalContext, modal, context]);
        index(() => {
          if (getTabbableContent().length === 0 && !initialFocusControlled) {
            setTabbableContentLength(0);
          }
        }, [getTabbableContent, refs, initialFocusControlled]);
        const shouldRenderGuards = guards && (insidePortal || modal) && !typeableCombobox;
        function renderDismissButton(location) {
          return visuallyHiddenDismiss && modal ? /* @__PURE__ */ React__namespace.createElement(VisuallyHiddenDismiss, {
            ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
            onClick: () => onOpenChange(false)
          }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss") : null;
        }
        __name(renderDismissButton, "renderDismissButton");
        return /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, shouldRenderGuards && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
          onFocus: (event) => {
            if (modal) {
              const els = getTabbableElements();
              enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
            } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
              preventReturnFocusRef.current = false;
              if (isOutsideEvent(event, portalContext.portalNode)) {
                const nextTabbable = getNextTabbable() || domReference;
                nextTabbable == null ? void 0 : nextTabbable.focus();
              } else {
                var _portalContext$before;
                (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
              }
            }
          }
        }), typeableCombobox ? null : renderDismissButton("start"), /* @__PURE__ */ React__namespace.cloneElement(children, tabbableContentLength === 0 || order.includes("floating") ? {
          tabIndex: 0
        } : {}), renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ React__namespace.createElement(FocusGuard, {
          ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
          onFocus: (event) => {
            if (modal) {
              enqueueFocus(getTabbableElements()[0]);
            } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
              preventReturnFocusRef.current = true;
              if (isOutsideEvent(event, portalContext.portalNode)) {
                const prevTabbable = getPreviousTabbable() || domReference;
                prevTabbable == null ? void 0 : prevTabbable.focus();
              } else {
                var _portalContext$afterO;
                (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
              }
            }
          }
        }));
      }
      __name(FloatingFocusManager, "FloatingFocusManager");
      const mouseLikePointerTypes = ["mouse", "pen", "", void 0];
      function getDelay(value, prop, pointerType) {
        if (pointerType && !mouseLikePointerTypes.includes(pointerType)) {
          return 0;
        }
        if (typeof value === "number") {
          return value;
        }
        return value == null ? void 0 : value[prop];
      }
      __name(getDelay, "getDelay");
      const useHover = /* @__PURE__ */ __name(function(context, _temp) {
        let {
          enabled = true,
          delay = 0,
          handleClose = null,
          mouseOnly = false,
          restMs = 0,
          move = true
        } = _temp === void 0 ? {} : _temp;
        const {
          open,
          onOpenChange,
          dataRef,
          events,
          refs,
          _
        } = context;
        const tree = useFloatingTree();
        const parentId = useFloatingParentNodeId();
        const handleCloseRef = useLatestRef(handleClose);
        const delayRef = useLatestRef(delay);
        const pointerTypeRef = React__namespace.useRef();
        const timeoutRef = React__namespace.useRef();
        const handlerRef = React__namespace.useRef();
        const restTimeoutRef = React__namespace.useRef();
        const blockMouseMoveRef = React__namespace.useRef(true);
        const performedPointerEventsMutationRef = React__namespace.useRef(false);
        const isHoverOpen = React__namespace.useCallback(() => {
          var _dataRef$current$open;
          const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
          return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
        }, [dataRef]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss() {
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            blockMouseMoveRef.current = true;
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [enabled, events, refs]);
        React__namespace.useEffect(() => {
          if (!enabled || !handleCloseRef.current || !open) {
            return;
          }
          function onLeave() {
            if (isHoverOpen()) {
              onOpenChange(false);
            }
          }
          __name(onLeave, "onLeave");
          const html = getDocument(refs.floating.current).documentElement;
          html.addEventListener("mouseleave", onLeave);
          return () => {
            html.removeEventListener("mouseleave", onLeave);
          };
        }, [refs, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
        const closeWithDelay = React__namespace.useCallback(function(runElseBranch) {
          if (runElseBranch === void 0) {
            runElseBranch = true;
          }
          const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
          if (closeDelay && !handlerRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
          } else if (runElseBranch) {
            clearTimeout(timeoutRef.current);
            onOpenChange(false);
          }
        }, [delayRef, onOpenChange]);
        const cleanupMouseMoveHandler = React__namespace.useCallback(() => {
          if (handlerRef.current) {
            getDocument(refs.floating.current).removeEventListener("mousemove", handlerRef.current);
            handlerRef.current = void 0;
          }
        }, [refs]);
        const clearPointerEvents = React__namespace.useCallback(() => {
          getDocument(refs.floating.current).body.style.pointerEvents = "";
          performedPointerEventsMutationRef.current = false;
        }, [refs]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function isClickLikeOpenEvent() {
            return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
          }
          __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
          function onMouseEnter(event) {
            clearTimeout(timeoutRef.current);
            blockMouseMoveRef.current = false;
            if (mouseOnly && !mouseLikePointerTypes.includes(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
              return;
            }
            dataRef.current.openEvent = event;
            const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
            if (openDelay) {
              timeoutRef.current = setTimeout(() => {
                onOpenChange(true);
              }, openDelay);
            } else {
              onOpenChange(true);
            }
          }
          __name(onMouseEnter, "onMouseEnter");
          function onMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            const doc = getDocument(refs.floating.current);
            clearTimeout(restTimeoutRef.current);
            if (handleCloseRef.current) {
              clearTimeout(timeoutRef.current);
              handlerRef.current && doc.removeEventListener("mousemove", handlerRef.current);
              handlerRef.current = handleCloseRef.current({
                ...context,
                tree,
                x: event.clientX,
                y: event.clientY,
                onClose() {
                  clearPointerEvents();
                  cleanupMouseMoveHandler();
                  closeWithDelay();
                }
              });
              doc.addEventListener("mousemove", handlerRef.current);
              return;
            }
            closeWithDelay();
          }
          __name(onMouseLeave, "onMouseLeave");
          function onScrollMouseLeave(event) {
            if (isClickLikeOpenEvent()) {
              return;
            }
            handleCloseRef.current == null ? void 0 : handleCloseRef.current({
              ...context,
              tree,
              x: event.clientX,
              y: event.clientY,
              leave: true,
              onClose() {
                clearPointerEvents();
                cleanupMouseMoveHandler();
                closeWithDelay();
              }
            })(event);
          }
          __name(onScrollMouseLeave, "onScrollMouseLeave");
          const floating = refs.floating.current;
          const reference = refs.domReference.current;
          if (isElement(reference)) {
            open && reference.addEventListener("mouseleave", onScrollMouseLeave);
            floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
            move && reference.addEventListener("mousemove", onMouseEnter, {
              once: true
            });
            reference.addEventListener("mouseenter", onMouseEnter);
            reference.addEventListener("mouseleave", onMouseLeave);
            return () => {
              open && reference.removeEventListener("mouseleave", onScrollMouseLeave);
              floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
              move && reference.removeEventListener("mousemove", onMouseEnter);
              reference.removeEventListener("mouseenter", onMouseEnter);
              reference.removeEventListener("mouseleave", onMouseLeave);
            };
          }
        }, [
          _.domReference,
          enabled,
          context,
          mouseOnly,
          restMs,
          move,
          closeWithDelay,
          cleanupMouseMoveHandler,
          clearPointerEvents,
          onOpenChange,
          open,
          tree,
          refs,
          delayRef,
          handleCloseRef,
          dataRef
        ]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open && handleCloseRef.current && handleCloseRef.current.__options.blockPointerEvents && isHoverOpen()) {
            getDocument(refs.floating.current).body.style.pointerEvents = "none";
            performedPointerEventsMutationRef.current = true;
            const reference = refs.domReference.current;
            const floating = refs.floating.current;
            if (isElement(reference) && floating) {
              var _tree$nodesRef$curren, _tree$nodesRef$curren2;
              const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
              if (parentFloating) {
                parentFloating.style.pointerEvents = "";
              }
              reference.style.pointerEvents = "auto";
              floating.style.pointerEvents = "auto";
              return () => {
                reference.style.pointerEvents = "";
                floating.style.pointerEvents = "";
              };
            }
          }
        }, [enabled, open, parentId, refs, tree, handleCloseRef, dataRef, isHoverOpen]);
        index(() => {
          if (!open) {
            pointerTypeRef.current = void 0;
            cleanupMouseMoveHandler();
            if (performedPointerEventsMutationRef.current) {
              clearPointerEvents();
            }
          }
        }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
        React__namespace.useEffect(() => {
          return () => {
            cleanupMouseMoveHandler();
            clearTimeout(timeoutRef.current);
            clearTimeout(restTimeoutRef.current);
            if (performedPointerEventsMutationRef.current) {
              clearPointerEvents();
            }
          };
        }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          function setPointerRef(event) {
            pointerTypeRef.current = event.pointerType;
          }
          __name(setPointerRef, "setPointerRef");
          return {
            reference: {
              onPointerDown: setPointerRef,
              onPointerEnter: setPointerRef,
              onMouseMove() {
                if (open || restMs === 0) {
                  return;
                }
                clearTimeout(restTimeoutRef.current);
                restTimeoutRef.current = setTimeout(() => {
                  if (!blockMouseMoveRef.current) {
                    onOpenChange(true);
                  }
                }, restMs);
              }
            },
            floating: {
              onMouseEnter() {
                clearTimeout(timeoutRef.current);
              },
              onMouseLeave() {
                closeWithDelay(false);
              }
            }
          };
        }, [enabled, restMs, open, onOpenChange, closeWithDelay]);
      }, "useHover");
      const FloatingDelayGroupContext = /* @__PURE__ */ React__namespace.createContext({
        delay: 1e3,
        initialDelay: 1e3,
        currentId: null,
        setCurrentId: () => {
        },
        setState: () => {
        }
      });
      const useDelayGroupContext = /* @__PURE__ */ __name(() => React__namespace.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
      const FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
        let {
          children,
          delay
        } = _ref;
        const [state, setState] = React__namespace.useState({
          delay,
          initialDelay: delay,
          currentId: null
        });
        const setCurrentId = React__namespace.useCallback((currentId) => {
          setState((state2) => ({
            ...state2,
            currentId
          }));
        }, []);
        return /* @__PURE__ */ React__namespace.createElement(FloatingDelayGroupContext.Provider, {
          value: React__namespace.useMemo(() => ({
            ...state,
            setState,
            setCurrentId
          }), [state, setState, setCurrentId])
        }, children);
      }, "FloatingDelayGroup");
      const useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
        let {
          open,
          onOpenChange
        } = _ref2;
        let {
          id
        } = _ref3;
        const {
          currentId,
          initialDelay,
          setState
        } = useDelayGroupContext();
        React__namespace.useEffect(() => {
          if (currentId) {
            setState((state) => ({
              ...state,
              delay: {
                open: 1,
                close: getDelay(initialDelay, "close")
              }
            }));
            if (currentId !== id) {
              onOpenChange(false);
            }
          }
        }, [id, onOpenChange, setState, currentId, initialDelay]);
        React__namespace.useEffect(() => {
          if (!open && currentId === id) {
            onOpenChange(false);
            setState((state) => ({
              ...state,
              delay: initialDelay,
              currentId: null
            }));
          }
        }, [open, setState, currentId, id, onOpenChange, initialDelay]);
      }, "useDelayGroup");
      function getArgsWithCustomFloatingHeight(args, height) {
        return {
          ...args,
          rects: {
            ...args.rects,
            floating: {
              ...args.rects.floating,
              height
            }
          }
        };
      }
      __name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
      const inner = /* @__PURE__ */ __name((options) => ({
        name: "inner",
        options,
        async fn(middlewareArguments) {
          var _scrollRef$current;
          const {
            listRef,
            overflowRef,
            onFallbackChange,
            offset: innerOffset = 0,
            index: index2 = 0,
            minItemsVisible = 4,
            referenceOverflowThreshold = 0,
            scrollRef,
            ...detectOverflowOptions
          } = options;
          const {
            rects,
            elements: {
              floating
            }
          } = middlewareArguments;
          const item = listRef.current[index2];
          if (process.env.NODE_ENV !== "production") {
            if (!middlewareArguments.placement.startsWith("bottom")) {
              console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
            }
          }
          if (!item) {
            return {};
          }
          const nextArgs = {
            ...middlewareArguments,
            ...await reactDom.offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(middlewareArguments)
          };
          const el = (_scrollRef$current = scrollRef == null ? void 0 : scrollRef.current) != null ? _scrollRef$current : floating;
          const overflow = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
          const refOverflow = await reactDom.detectOverflow(nextArgs, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const diffY = Math.max(0, overflow.top);
          const nextY = nextArgs.y + diffY;
          const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
          el.style.maxHeight = maxHeight + "px";
          el.scrollTop = diffY;
          if (onFallbackChange) {
            if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
              reactDom$1.flushSync(() => onFallbackChange(true));
            } else {
              reactDom$1.flushSync(() => onFallbackChange(false));
            }
          }
          if (overflowRef) {
            overflowRef.current = await reactDom.detectOverflow(getArgsWithCustomFloatingHeight({
              ...nextArgs,
              y: nextY
            }, el.offsetHeight), detectOverflowOptions);
          }
          return {
            y: nextY
          };
        }
      }), "inner");
      const useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
        let {
          open,
          refs
        } = _ref;
        let {
          enabled = true,
          overflowRef,
          scrollRef,
          onChange: unstable_onChange
        } = _ref2;
        const onChange = useEvent3(unstable_onChange);
        const controlledScrollingRef = React__namespace.useRef(false);
        const prevScrollTopRef = React__namespace.useRef(null);
        const initialOverflowRef = React__namespace.useRef(null);
        React__namespace.useEffect(() => {
          var _scrollRef$current2;
          if (!enabled) {
            return;
          }
          function onWheel(e) {
            if (e.ctrlKey || !el || overflowRef.current == null) {
              return;
            }
            const dY = e.deltaY;
            const isAtTop = overflowRef.current.top >= -0.5;
            const isAtBottom = overflowRef.current.bottom >= -0.5;
            const remainingScroll = el.scrollHeight - el.clientHeight;
            const sign = dY < 0 ? -1 : 1;
            const method = dY < 0 ? "max" : "min";
            if (el.scrollHeight <= el.clientHeight) {
              return;
            }
            if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
              e.preventDefault();
              reactDom$1.flushSync(() => {
                onChange((d) => d + Math[method](dY, remainingScroll * sign));
              });
            } else if (/firefox/i.test(getUserAgent())) {
              el.scrollTop += dY;
            }
          }
          __name(onWheel, "onWheel");
          const el = (_scrollRef$current2 = scrollRef == null ? void 0 : scrollRef.current) != null ? _scrollRef$current2 : refs.floating.current;
          if (open && el) {
            el.addEventListener("wheel", onWheel);
            requestAnimationFrame(() => {
              prevScrollTopRef.current = el.scrollTop;
              if (overflowRef.current != null) {
                initialOverflowRef.current = {
                  ...overflowRef.current
                };
              }
            });
            return () => {
              prevScrollTopRef.current = null;
              initialOverflowRef.current = null;
              el.removeEventListener("wheel", onWheel);
            };
          }
        }, [enabled, open, refs, overflowRef, scrollRef, onChange]);
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          return {
            floating: {
              onKeyDown() {
                controlledScrollingRef.current = true;
              },
              onWheel() {
                controlledScrollingRef.current = false;
              },
              onPointerMove() {
                controlledScrollingRef.current = false;
              },
              onScroll() {
                const el = (scrollRef == null ? void 0 : scrollRef.current) || refs.floating.current;
                if (!overflowRef.current || !el || !controlledScrollingRef.current) {
                  return;
                }
                if (prevScrollTopRef.current !== null) {
                  const scrollDiff = el.scrollTop - prevScrollTopRef.current;
                  if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
                    reactDom$1.flushSync(() => onChange((d) => d + scrollDiff));
                  }
                }
                requestAnimationFrame(() => {
                  prevScrollTopRef.current = el.scrollTop;
                });
              }
            }
          };
        }, [enabled, overflowRef, refs, scrollRef, onChange]);
      }, "useInnerOffset");
      const useRole2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open
        } = _ref;
        let {
          enabled = true,
          role = "dialog"
        } = _temp === void 0 ? {} : _temp;
        const rootId = useId3();
        const referenceId = useId3();
        return React__namespace.useMemo(() => {
          const floatingProps = {
            id: rootId,
            role
          };
          if (!enabled) {
            return {};
          }
          if (role === "tooltip") {
            return {
              reference: {
                "aria-describedby": open ? rootId : void 0
              },
              floating: floatingProps
            };
          }
          return {
            reference: {
              "aria-expanded": open ? "true" : "false",
              "aria-haspopup": role === "alertdialog" ? "dialog" : role,
              "aria-controls": open ? rootId : void 0,
              ...role === "listbox" && {
                role: "combobox"
              },
              ...role === "menu" && {
                id: referenceId
              }
            },
            floating: {
              ...floatingProps,
              ...role === "menu" && {
                "aria-labelledby": referenceId
              }
            }
          };
        }, [enabled, role, open, rootId, referenceId]);
      }, "useRole");
      function isButtonTarget(event) {
        return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
      }
      __name(isButtonTarget, "isButtonTarget");
      function isSpaceIgnored(element) {
        return isTypeableElement(element);
      }
      __name(isSpaceIgnored, "isSpaceIgnored");
      const useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs
        } = _ref;
        let {
          enabled = true,
          event: eventOption = "click",
          toggle = true,
          ignoreMouse = false,
          keyboardHandlers = true
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef();
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          return {
            reference: {
              onPointerDown(event) {
                pointerTypeRef.current = event.pointerType;
              },
              onMouseDown(event) {
                if (event.button !== 0) {
                  return;
                }
                if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                  return;
                }
                if (eventOption === "click") {
                  return;
                }
                if (open) {
                  if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
                    onOpenChange(false);
                  }
                } else {
                  event.preventDefault();
                  onOpenChange(true);
                }
                dataRef.current.openEvent = event.nativeEvent;
              },
              onClick(event) {
                if (eventOption === "mousedown" && pointerTypeRef.current) {
                  pointerTypeRef.current = void 0;
                  return;
                }
                if (pointerTypeRef.current === "mouse" && ignoreMouse) {
                  return;
                }
                if (open) {
                  if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
                    onOpenChange(false);
                  }
                } else {
                  onOpenChange(true);
                }
                dataRef.current.openEvent = event.nativeEvent;
              },
              onKeyDown(event) {
                pointerTypeRef.current = void 0;
                if (!keyboardHandlers) {
                  return;
                }
                if (isButtonTarget(event)) {
                  return;
                }
                if (event.key === " " && !isSpaceIgnored(refs.domReference.current)) {
                  event.preventDefault();
                }
                if (event.key === "Enter") {
                  if (open) {
                    if (toggle) {
                      onOpenChange(false);
                    }
                  } else {
                    onOpenChange(true);
                  }
                }
              },
              onKeyUp(event) {
                if (!keyboardHandlers) {
                  return;
                }
                if (isButtonTarget(event) || isSpaceIgnored(refs.domReference.current)) {
                  return;
                }
                if (event.key === " ") {
                  if (open) {
                    if (toggle) {
                      onOpenChange(false);
                    }
                  } else {
                    onOpenChange(true);
                  }
                }
              }
            }
          };
        }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, refs, toggle, open, onOpenChange]);
      }, "useClick");
      function isEventTargetWithin(event, node) {
        if (node == null) {
          return false;
        }
        if ("composedPath" in event) {
          return event.composedPath().includes(node);
        }
        const e = event;
        return e.target != null && node.contains(e.target);
      }
      __name(isEventTargetWithin, "isEventTargetWithin");
      const bubbleHandlerKeys = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
      };
      const captureHandlerKeys = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
      };
      const useDismiss2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          refs,
          events,
          nodeId
        } = _ref;
        let {
          enabled = true,
          escapeKey = true,
          outsidePress = true,
          outsidePressEvent = "pointerdown",
          referencePress = false,
          referencePressEvent = "pointerdown",
          ancestorScroll = false,
          bubbles = true
        } = _temp === void 0 ? {} : _temp;
        const tree = useFloatingTree();
        const nested = useFloatingParentNodeId() != null;
        const outsidePressRef = useLatestRef(outsidePress);
        const insideReactTreeRef = React__namespace.useRef(false);
        React__namespace.useEffect(() => {
          if (!open || !enabled) {
            return;
          }
          const outsidePress2 = outsidePressRef.current;
          function onKeyDown(event) {
            if (event.key === "Escape") {
              if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
                return;
              }
              events.emit("dismiss", {
                type: "escapeKey",
                data: {
                  returnFocus: {
                    preventScroll: false
                  }
                }
              });
              onOpenChange(false);
            }
          }
          __name(onKeyDown, "onKeyDown");
          function onOutsidePress(event) {
            const insideReactTree = insideReactTreeRef.current;
            insideReactTreeRef.current = false;
            if (insideReactTree) {
              return;
            }
            if (typeof outsidePress2 === "function" && !outsidePress2(event)) {
              return;
            }
            const target = getTarget(event);
            if (isElement(target) && refs.floating.current) {
              var _refs$floating$curren;
              const win = (_refs$floating$curren = refs.floating.current.ownerDocument.defaultView) != null ? _refs$floating$curren : window;
              const canScrollX = target.scrollWidth > target.clientWidth;
              const canScrollY = target.scrollHeight > target.clientHeight;
              let xCond = canScrollY && event.offsetX > target.clientWidth;
              if (canScrollY) {
                const isRTL = win.getComputedStyle(target).direction === "rtl";
                if (isRTL) {
                  xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
                }
              }
              if (xCond || canScrollX && event.offsetY > target.clientHeight) {
                return;
              }
            }
            const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
              var _node$context;
              return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.refs.floating.current);
            });
            if (isEventTargetWithin(event, refs.floating.current) || isEventTargetWithin(event, refs.domReference.current) || targetIsInsideChildren) {
              return;
            }
            if (!bubbles && tree && getChildren(tree.nodesRef.current, nodeId).length > 0) {
              return;
            }
            events.emit("dismiss", {
              type: "outsidePress",
              data: {
                returnFocus: nested ? {
                  preventScroll: true
                } : isVirtualClick(event) || isVirtualPointerEvent(event)
              }
            });
            onOpenChange(false);
          }
          __name(onOutsidePress, "onOutsidePress");
          function onScroll() {
            onOpenChange(false);
          }
          __name(onScroll, "onScroll");
          const doc = getDocument(refs.floating.current);
          escapeKey && doc.addEventListener("keydown", onKeyDown);
          outsidePress2 && doc.addEventListener(outsidePressEvent, onOutsidePress);
          let ancestors = [];
          if (ancestorScroll) {
            if (isElement(refs.domReference.current)) {
              ancestors = reactDom.getOverflowAncestors(refs.domReference.current);
            }
            if (isElement(refs.floating.current)) {
              ancestors = ancestors.concat(reactDom.getOverflowAncestors(refs.floating.current));
            }
            if (!isElement(refs.reference.current) && refs.reference.current && refs.reference.current.contextElement) {
              ancestors = ancestors.concat(
                reactDom.getOverflowAncestors(refs.reference.current.contextElement)
              );
            }
          }
          ancestors = ancestors.filter((ancestor) => {
            var _doc$defaultView;
            return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
          });
          ancestors.forEach((ancestor) => {
            ancestor.addEventListener("scroll", onScroll, {
              passive: true
            });
          });
          return () => {
            escapeKey && doc.removeEventListener("keydown", onKeyDown);
            outsidePress2 && doc.removeEventListener(outsidePressEvent, onOutsidePress);
            ancestors.forEach((ancestor) => {
              ancestor.removeEventListener("scroll", onScroll);
            });
          };
        }, [escapeKey, outsidePressRef, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, bubbles, refs, nested]);
        React__namespace.useEffect(() => {
          insideReactTreeRef.current = false;
        }, [outsidePress, outsidePressEvent]);
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          return {
            reference: {
              [bubbleHandlerKeys[referencePressEvent]]: () => {
                if (referencePress) {
                  events.emit("dismiss", {
                    type: "referencePress",
                    data: {
                      returnFocus: false
                    }
                  });
                  onOpenChange(false);
                }
              }
            },
            floating: {
              [captureHandlerKeys[outsidePressEvent]]: () => {
                insideReactTreeRef.current = true;
              }
            }
          };
        }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
      }, "useDismiss");
      const useFocus2 = /* @__PURE__ */ __name(function(_ref, _temp) {
        let {
          open,
          onOpenChange,
          dataRef,
          refs,
          events
        } = _ref;
        let {
          enabled = true,
          keyboardOnly = true
        } = _temp === void 0 ? {} : _temp;
        const pointerTypeRef = React__namespace.useRef("");
        const blockFocusRef = React__namespace.useRef(false);
        const timeoutRef = React__namespace.useRef();
        React__namespace.useEffect(() => {
          var _doc$defaultView;
          if (!enabled) {
            return;
          }
          const doc = getDocument(refs.floating.current);
          const win = (_doc$defaultView = doc.defaultView) != null ? _doc$defaultView : window;
          function onBlur() {
            if (!open && isHTMLElement(refs.domReference.current) && refs.domReference.current === activeElement(getDocument(refs.domReference.current))) {
              blockFocusRef.current = true;
            }
          }
          __name(onBlur, "onBlur");
          win.addEventListener("blur", onBlur);
          return () => {
            win.removeEventListener("blur", onBlur);
          };
        }, [refs, open, enabled]);
        React__namespace.useEffect(() => {
          if (!enabled) {
            return;
          }
          function onDismiss(payload) {
            if (payload.type === "referencePress" || payload.type === "escapeKey") {
              blockFocusRef.current = true;
            }
          }
          __name(onDismiss, "onDismiss");
          events.on("dismiss", onDismiss);
          return () => {
            events.off("dismiss", onDismiss);
          };
        }, [events, enabled]);
        React__namespace.useEffect(() => {
          return () => {
            clearTimeout(timeoutRef.current);
          };
        }, []);
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          return {
            reference: {
              onPointerDown(_ref2) {
                let {
                  pointerType
                } = _ref2;
                pointerTypeRef.current = pointerType;
                blockFocusRef.current = !!(pointerType && keyboardOnly);
              },
              onMouseLeave() {
                blockFocusRef.current = false;
              },
              onFocus(event) {
                var _dataRef$current$open;
                if (blockFocusRef.current) {
                  return;
                }
                if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, refs.domReference.current)) {
                  return;
                }
                dataRef.current.openEvent = event.nativeEvent;
                onOpenChange(true);
              },
              onBlur(event) {
                blockFocusRef.current = false;
                const relatedTarget = event.relatedTarget;
                const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard");
                timeoutRef.current = setTimeout(() => {
                  if (contains(refs.floating.current, relatedTarget) || contains(refs.domReference.current, relatedTarget) || movedToFocusGuard) {
                    return;
                  }
                  onOpenChange(false);
                });
              }
            }
          };
        }, [enabled, keyboardOnly, refs, dataRef, onOpenChange]);
      }, "useFocus");
      let isPreventScrollSupported = false;
      const ARROW_UP = "ArrowUp";
      const ARROW_DOWN = "ArrowDown";
      const ARROW_LEFT = "ArrowLeft";
      const ARROW_RIGHT = "ArrowRight";
      function isDifferentRow(index2, cols, prevRow) {
        return Math.floor(index2 / cols) !== prevRow;
      }
      __name(isDifferentRow, "isDifferentRow");
      function isIndexOutOfBounds(listRef, index2) {
        return index2 < 0 || index2 >= listRef.current.length;
      }
      __name(isIndexOutOfBounds, "isIndexOutOfBounds");
      function findNonDisabledIndex(listRef, _temp) {
        let {
          startingIndex = -1,
          decrement = false,
          disabledIndices,
          amount = 1
        } = _temp === void 0 ? {} : _temp;
        const list = listRef.current;
        let index2 = startingIndex;
        do {
          var _list$index, _list$index2;
          index2 = index2 + (decrement ? -amount : amount);
        } while (index2 >= 0 && index2 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index2) : list[index2] == null || ((_list$index = list[index2]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index2]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
        return index2;
      }
      __name(findNonDisabledIndex, "findNonDisabledIndex");
      function doSwitch(orientation, vertical, horizontal) {
        switch (orientation) {
          case "vertical":
            return vertical;
          case "horizontal":
            return horizontal;
          default:
            return vertical || horizontal;
        }
      }
      __name(doSwitch, "doSwitch");
      function isMainOrientationKey(key, orientation) {
        const vertical = key === ARROW_UP || key === ARROW_DOWN;
        const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isMainOrientationKey, "isMainOrientationKey");
      function isMainOrientationToEndKey(key, orientation, rtl) {
        const vertical = key === ARROW_DOWN;
        const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
      }
      __name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
      function isCrossOrientationOpenKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
        const horizontal = key === ARROW_DOWN;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
      function isCrossOrientationCloseKey(key, orientation, rtl) {
        const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
        const horizontal = key === ARROW_UP;
        return doSwitch(orientation, vertical, horizontal);
      }
      __name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
      function getMinIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          disabledIndices
        });
      }
      __name(getMinIndex, "getMinIndex");
      function getMaxIndex(listRef, disabledIndices) {
        return findNonDisabledIndex(listRef, {
          decrement: true,
          startingIndex: listRef.current.length,
          disabledIndices
        });
      }
      __name(getMaxIndex, "getMaxIndex");
      const useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
        let {
          open,
          onOpenChange,
          refs
        } = _ref;
        let {
          listRef,
          activeIndex,
          onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
          }, "unstable_onNavigate"),
          enabled = true,
          selectedIndex = null,
          allowEscape = false,
          loop = false,
          nested = false,
          rtl = false,
          virtual = false,
          focusItemOnOpen = "auto",
          focusItemOnHover = true,
          openOnArrowKeyDown = true,
          disabledIndices = void 0,
          orientation = "vertical",
          cols = 1
        } = _temp2 === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null,
          onNavigate: () => {
          }
        } : _temp2;
        if (process.env.NODE_ENV !== "production") {
          if (allowEscape) {
            if (!loop) {
              console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
            }
            if (!virtual) {
              console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
            }
          }
          if (orientation === "vertical" && cols > 1) {
            console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
          }
        }
        const parentId = useFloatingParentNodeId();
        const tree = useFloatingTree();
        const onNavigate = useEvent3(unstable_onNavigate);
        const focusItemOnOpenRef = React__namespace.useRef(focusItemOnOpen);
        const indexRef = React__namespace.useRef(selectedIndex != null ? selectedIndex : -1);
        const keyRef = React__namespace.useRef(null);
        const blockPointerLeaveRef = React__namespace.useRef(false);
        const previousOnNavigateRef = React__namespace.useRef(onNavigate);
        const previousOpenRef = React__namespace.useRef(open);
        const forceSyncFocus = React__namespace.useRef(false);
        const disabledIndicesRef = useLatestRef(disabledIndices);
        const latestOpenRef = useLatestRef(open);
        const [activeId, setActiveId] = React__namespace.useState();
        const focusItem = React__namespace.useCallback((listRef2, indexRef2) => {
          if (virtual) {
            var _listRef$current$inde;
            setActiveId((_listRef$current$inde = listRef2.current[indexRef2.current]) == null ? void 0 : _listRef$current$inde.id);
          } else {
            const item = listRef2.current[indexRef2.current];
            enqueueFocus(item, {
              preventScroll: true,
              sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
            });
          }
        }, [virtual]);
        index(() => {
          document.createElement("div").focus({
            get preventScroll() {
              isPreventScrollSupported = true;
              return false;
            }
          });
        }, []);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open) {
            if (focusItemOnOpenRef.current && selectedIndex != null) {
              onNavigate(selectedIndex);
            }
          } else if (previousOpenRef.current) {
            indexRef.current = -1;
            previousOnNavigateRef.current(null);
          }
        }, [enabled, open, selectedIndex, onNavigate]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (open) {
            if (activeIndex == null) {
              forceSyncFocus.current = false;
              if (selectedIndex != null) {
                return;
              }
              if (previousOpenRef.current) {
                indexRef.current = -1;
                focusItem(listRef, indexRef);
              }
              if (!previousOpenRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
                onNavigate(indexRef.current);
              }
            } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
              indexRef.current = activeIndex;
              focusItem(listRef, indexRef);
            }
          }
        }, [enabled, open, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
        index(() => {
          if (!enabled) {
            return;
          }
          if (previousOpenRef.current && !open) {
            var _tree$nodesRef$curren, _tree$nodesRef$curren2;
            const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.refs.floating.current;
            if (parentFloating && !contains(parentFloating, activeElement(getDocument(parentFloating)))) {
              parentFloating.focus({
                preventScroll: true
              });
            }
          }
        }, [enabled, open, tree, parentId]);
        index(() => {
          keyRef.current = null;
          previousOnNavigateRef.current = onNavigate;
          previousOpenRef.current = open;
        });
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          const disabledIndices2 = disabledIndicesRef.current;
          function onKeyDown(event) {
            blockPointerLeaveRef.current = true;
            forceSyncFocus.current = true;
            if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
              return;
            }
            if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
              stopEvent(event);
              onOpenChange(false);
              if (isHTMLElement(refs.domReference.current)) {
                refs.domReference.current.focus();
              }
              return;
            }
            const currentIndex = indexRef.current;
            const minIndex = getMinIndex(listRef, disabledIndices2);
            const maxIndex = getMaxIndex(listRef, disabledIndices2);
            if (event.key === "Home") {
              indexRef.current = minIndex;
              onNavigate(indexRef.current);
            }
            if (event.key === "End") {
              indexRef.current = maxIndex;
              onNavigate(indexRef.current);
            }
            if (cols > 1) {
              const prevIndex = indexRef.current;
              if (event.key === ARROW_UP) {
                stopEvent(event);
                if (prevIndex === -1) {
                  indexRef.current = maxIndex;
                } else {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex,
                    amount: cols,
                    decrement: true,
                    disabledIndices: disabledIndices2
                  });
                  if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
                    const col = prevIndex % cols;
                    const maxCol = maxIndex % cols;
                    const offset = maxIndex - (maxCol - col);
                    if (maxCol === col) {
                      indexRef.current = maxIndex;
                    } else {
                      indexRef.current = maxCol > col ? offset : offset - cols;
                    }
                  }
                }
                if (isIndexOutOfBounds(listRef, indexRef.current)) {
                  indexRef.current = prevIndex;
                }
                onNavigate(indexRef.current);
              }
              if (event.key === ARROW_DOWN) {
                stopEvent(event);
                if (prevIndex === -1) {
                  indexRef.current = minIndex;
                } else {
                  indexRef.current = findNonDisabledIndex(listRef, {
                    startingIndex: prevIndex,
                    amount: cols,
                    disabledIndices: disabledIndices2
                  });
                  if (loop && prevIndex + cols > maxIndex) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex % cols - cols,
                      amount: cols,
                      disabledIndices: disabledIndices2
                    });
                  }
                }
                if (isIndexOutOfBounds(listRef, indexRef.current)) {
                  indexRef.current = prevIndex;
                }
                onNavigate(indexRef.current);
              }
              if (orientation === "both") {
                const prevRow = Math.floor(prevIndex / cols);
                if (event.key === ARROW_RIGHT) {
                  stopEvent(event);
                  if (prevIndex % cols !== cols - 1) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex,
                      disabledIndices: disabledIndices2
                    });
                    if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                      indexRef.current = findNonDisabledIndex(listRef, {
                        startingIndex: prevIndex - prevIndex % cols - 1,
                        disabledIndices: disabledIndices2
                      });
                    }
                  } else if (loop) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex - prevIndex % cols - 1,
                      disabledIndices: disabledIndices2
                    });
                  }
                  if (isDifferentRow(indexRef.current, cols, prevRow)) {
                    indexRef.current = prevIndex;
                  }
                }
                if (event.key === ARROW_LEFT) {
                  stopEvent(event);
                  if (prevIndex % cols !== 0) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex,
                      disabledIndices: disabledIndices2,
                      decrement: true
                    });
                    if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                      indexRef.current = findNonDisabledIndex(listRef, {
                        startingIndex: prevIndex + (cols - prevIndex % cols),
                        decrement: true,
                        disabledIndices: disabledIndices2
                      });
                    }
                  } else if (loop) {
                    indexRef.current = findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex + (cols - prevIndex % cols),
                      decrement: true,
                      disabledIndices: disabledIndices2
                    });
                  }
                  if (isDifferentRow(indexRef.current, cols, prevRow)) {
                    indexRef.current = prevIndex;
                  }
                }
                const lastRow = Math.floor(maxIndex / cols) === prevRow;
                if (isIndexOutOfBounds(listRef, indexRef.current)) {
                  if (loop && lastRow) {
                    indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                      startingIndex: prevIndex - prevIndex % cols - 1,
                      disabledIndices: disabledIndices2
                    });
                  } else {
                    indexRef.current = prevIndex;
                  }
                }
                onNavigate(indexRef.current);
                return;
              }
            }
            if (isMainOrientationKey(event.key, orientation)) {
              stopEvent(event);
              if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
                indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
                onNavigate(indexRef.current);
                return;
              }
              if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
                if (loop) {
                  indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
                    startingIndex: currentIndex,
                    disabledIndices: disabledIndices2
                  });
                } else {
                  indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
                    startingIndex: currentIndex,
                    disabledIndices: disabledIndices2
                  }));
                }
              } else {
                if (loop) {
                  indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
                    startingIndex: currentIndex,
                    decrement: true,
                    disabledIndices: disabledIndices2
                  });
                } else {
                  indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
                    startingIndex: currentIndex,
                    decrement: true,
                    disabledIndices: disabledIndices2
                  }));
                }
              }
              if (isIndexOutOfBounds(listRef, indexRef.current)) {
                onNavigate(null);
              } else {
                onNavigate(indexRef.current);
              }
            }
          }
          __name(onKeyDown, "onKeyDown");
          function checkVirtualMouse(event) {
            if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
              focusItemOnOpenRef.current = true;
            }
          }
          __name(checkVirtualMouse, "checkVirtualMouse");
          function checkVirtualPointer(event) {
            focusItemOnOpenRef.current = focusItemOnOpen;
            if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
              focusItemOnOpenRef.current = true;
            }
          }
          __name(checkVirtualPointer, "checkVirtualPointer");
          return {
            reference: {
              ...virtual && open && activeIndex != null && {
                "aria-activedescendant": activeId
              },
              onKeyDown(event) {
                blockPointerLeaveRef.current = true;
                const isArrowKey = event.key.indexOf("Arrow") === 0;
                if (virtual && open) {
                  return onKeyDown(event);
                }
                if (!open && !openOnArrowKeyDown && isArrowKey) {
                  return;
                }
                const isNavigationKey = isArrowKey || event.key === "Enter" || event.key === " " || event.key === "";
                if (isNavigationKey) {
                  keyRef.current = event.key;
                }
                if (nested) {
                  if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
                    stopEvent(event);
                    if (open) {
                      indexRef.current = getMinIndex(listRef, disabledIndices2);
                      onNavigate(indexRef.current);
                    } else {
                      onOpenChange(true);
                    }
                  }
                  return;
                }
                if (isMainOrientationKey(event.key, orientation)) {
                  if (selectedIndex != null) {
                    indexRef.current = selectedIndex;
                  }
                  stopEvent(event);
                  if (!open && openOnArrowKeyDown) {
                    onOpenChange(true);
                  } else {
                    onKeyDown(event);
                  }
                  if (open) {
                    onNavigate(indexRef.current);
                  }
                }
              },
              onFocus() {
                if (open) {
                  onNavigate(null);
                }
              },
              onPointerDown: checkVirtualPointer,
              onMouseDown: checkVirtualMouse,
              onClick: checkVirtualMouse
            },
            floating: {
              "aria-orientation": orientation === "both" ? void 0 : orientation,
              ...virtual && activeIndex != null && {
                "aria-activedescendant": activeId
              },
              onKeyDown,
              onPointerMove() {
                blockPointerLeaveRef.current = false;
              }
            },
            item: {
              onFocus(_ref2) {
                let {
                  currentTarget
                } = _ref2;
                const index2 = listRef.current.indexOf(currentTarget);
                if (index2 !== -1 && activeIndex !== index2) {
                  onNavigate(index2);
                }
              },
              onClick: (_ref3) => {
                let {
                  currentTarget
                } = _ref3;
                return currentTarget.focus({
                  preventScroll: true
                });
              },
              ...focusItemOnHover && {
                onMouseMove(_ref4) {
                  let {
                    currentTarget
                  } = _ref4;
                  const target = currentTarget;
                  if (target) {
                    const index2 = listRef.current.indexOf(target);
                    if (index2 !== -1 && activeIndex !== index2) {
                      onNavigate(index2);
                    }
                  }
                },
                onPointerLeave() {
                  if (!blockPointerLeaveRef.current) {
                    indexRef.current = -1;
                    focusItem(listRef, indexRef);
                    reactDom$1.flushSync(() => onNavigate(null));
                    if (!virtual) {
                      var _refs$floating$curren;
                      (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
                        preventScroll: true
                      });
                    }
                  }
                }
              }
            }
          };
        }, [activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, activeIndex, nested, selectedIndex, openOnArrowKeyDown, focusItemOnHover, allowEscape, cols, loop, refs, focusItemOnOpen, focusItem, onNavigate, onOpenChange]);
      }, "useListNavigation");
      const useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
        var _ref2;
        let {
          open,
          dataRef
        } = _ref;
        let {
          listRef,
          activeIndex,
          onMatch: unstable_onMatch = /* @__PURE__ */ __name(() => {
          }, "unstable_onMatch"),
          enabled = true,
          findMatch = null,
          resetMs = 1e3,
          ignoreKeys = [],
          selectedIndex = null
        } = _temp === void 0 ? {
          listRef: {
            current: []
          },
          activeIndex: null
        } : _temp;
        const timeoutIdRef = React__namespace.useRef();
        const stringRef = React__namespace.useRef("");
        const prevIndexRef = React__namespace.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
        const matchIndexRef = React__namespace.useRef(null);
        const onMatch = useEvent3(unstable_onMatch);
        const findMatchRef = useLatestRef(findMatch);
        const ignoreKeysRef = useLatestRef(ignoreKeys);
        index(() => {
          if (open) {
            clearTimeout(timeoutIdRef.current);
            matchIndexRef.current = null;
            stringRef.current = "";
          }
        }, [open]);
        index(() => {
          if (open && stringRef.current === "") {
            var _ref3;
            prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
          }
        }, [open, selectedIndex, activeIndex]);
        return React__namespace.useMemo(() => {
          if (!enabled) {
            return {};
          }
          function onKeyDown(event) {
            const target = getTarget(event.nativeEvent);
            if (isElement(target) && (activeElement(getDocument(target)) !== event.currentTarget ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false)) {
              return;
            }
            if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
              dataRef.current.typing = true;
              if (event.key === " ") {
                stopEvent(event);
              }
            }
            const listContent = listRef.current;
            if (listContent == null || ignoreKeysRef.current.includes(event.key) || event.key.length !== 1 || event.ctrlKey || event.metaKey || event.altKey) {
              return;
            }
            const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
              var _text$, _text$2;
              return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
            });
            if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
              stringRef.current = "";
              prevIndexRef.current = matchIndexRef.current;
            }
            stringRef.current += event.key;
            clearTimeout(timeoutIdRef.current);
            timeoutIdRef.current = setTimeout(() => {
              stringRef.current = "";
              prevIndexRef.current = matchIndexRef.current;
              dataRef.current.typing = false;
            }, resetMs);
            const prevIndex = prevIndexRef.current;
            const orderedList = [...listContent.slice((prevIndex != null ? prevIndex : 0) + 1), ...listContent.slice(0, (prevIndex != null ? prevIndex : 0) + 1)];
            const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
            const index2 = str ? listContent.indexOf(str) : -1;
            if (index2 !== -1) {
              onMatch(index2);
              matchIndexRef.current = index2;
            }
          }
          __name(onKeyDown, "onKeyDown");
          return {
            reference: {
              onKeyDown
            },
            floating: {
              onKeyDown
            }
          };
        }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch]);
      }, "useTypeahead");
      exports2.FloatingDelayGroup = FloatingDelayGroup;
      exports2.FloatingFocusManager = FloatingFocusManager;
      exports2.FloatingNode = FloatingNode;
      exports2.FloatingOverlay = FloatingOverlay;
      exports2.FloatingPortal = FloatingPortal;
      exports2.FloatingTree = FloatingTree;
      exports2.inner = inner;
      exports2.safePolygon = safePolygon;
      exports2.useClick = useClick;
      exports2.useDelayGroup = useDelayGroup;
      exports2.useDelayGroupContext = useDelayGroupContext;
      exports2.useDismiss = useDismiss2;
      exports2.useFloating = useFloating2;
      exports2.useFloatingNodeId = useFloatingNodeId;
      exports2.useFloatingParentNodeId = useFloatingParentNodeId;
      exports2.useFloatingPortalNode = useFloatingPortalNode;
      exports2.useFloatingTree = useFloatingTree;
      exports2.useFocus = useFocus2;
      exports2.useHover = useHover;
      exports2.useId = useId3;
      exports2.useInnerOffset = useInnerOffset;
      exports2.useInteractions = useInteractions2;
      exports2.useListNavigation = useListNavigation;
      exports2.useRole = useRole2;
      exports2.useTypeahead = useTypeahead;
      Object.keys(reactDom).forEach(function(k) {
        if (k !== "default" && !exports2.hasOwnProperty(k))
          Object.defineProperty(exports2, k, {
            enumerable: true,
            get: function() {
              return reactDom[k];
            }
          });
      });
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/floating.js
var require_floating2 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/floating.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var floating_exports = {};
    __export2(floating_exports, {
      useDismiss: () => import_react_dom_interactions.useDismiss,
      useFloating: () => import_react_dom_interactions.useFloating,
      useFocus: () => import_react_dom_interactions.useFocus,
      useInteractions: () => import_react_dom_interactions.useInteractions,
      useRole: () => import_react_dom_interactions.useRole
    });
    module2.exports = __toCommonJS2(floating_exports);
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/Popover.js
var require_Popover = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/Popover.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Popover_exports = {};
    __export2(Popover_exports, {
      Popover: () => Popover,
      PopoverAnchor: () => PopoverAnchor,
      PopoverArrow: () => PopoverArrow,
      PopoverClose: () => PopoverClose,
      PopoverContent: () => PopoverContent,
      PopoverTrigger: () => PopoverTrigger,
      __PopoverProviderInternal: () => __PopoverProviderInternal,
      createPopoverScope: () => createPopoverScope,
      usePopoverScope: () => usePopoverScope
    });
    module2.exports = __toCommonJS2(Popover_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_adapt2 = require_cjs();
    var import_animate_presence2 = require_cjs5();
    var import_aria_hidden2 = require_cjs6();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_focus_scope2 = require_cjs9();
    var import_popper = require_cjs32();
    var import_portal3 = require_cjs13();
    var import_remove_scroll2 = require_cjs14();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_react_native8 = require("react-native-web-lite");
    var import_floating = require_floating2();
    var POPOVER_NAME = "Popover";
    var [createPopoverContext, createPopoverScopeInternal] = (0, import_create_context4.createContextScope)(
      POPOVER_NAME,
      [import_popper.createPopperScope]
    );
    var usePopoverScope = (0, import_popper.createPopperScope)();
    var createPopoverScope = createPopoverScopeInternal;
    var [PopoverProviderInternal, usePopoverInternalContext] = createPopoverContext(POPOVER_NAME);
    var __PopoverProviderInternal = PopoverProviderInternal;
    var ANCHOR_NAME = "PopoverAnchor";
    var PopoverAnchor = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...anchorProps } = props;
        const context = usePopoverInternalContext(ANCHOR_NAME, __scopePopover);
        const popperScope = usePopoverScope(__scopePopover);
        const { onCustomAnchorAdd, onCustomAnchorRemove } = context;
        React13.useEffect(() => {
          onCustomAnchorAdd();
          return () => onCustomAnchorRemove();
        }, [onCustomAnchorAdd, onCustomAnchorRemove]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.PopperAnchor, {
          ...popperScope,
          ...anchorProps,
          ref: forwardedRef
        });
      }
    );
    PopoverAnchor.displayName = ANCHOR_NAME;
    var TRIGGER_NAME2 = "PopoverTrigger";
    var PopoverTrigger = React13.forwardRef((props, forwardedRef) => {
      const { __scopePopover, ...triggerProps } = props;
      const context = usePopoverInternalContext(TRIGGER_NAME2, __scopePopover);
      const popperScope = usePopoverScope(__scopePopover);
      const composedTriggerRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.triggerRef);
      const trigger = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "data-state": getState2(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onPress: (0, import_core27.composeEventHandlers)(props.onPress, context.onOpenToggle)
      });
      return context.hasCustomAnchor ? trigger : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.PopperAnchor, {
        asChild: true,
        ...popperScope,
        children: trigger
      });
    });
    PopoverTrigger.displayName = TRIGGER_NAME2;
    var CONTENT_NAME2 = "PopoverContent";
    var PopoverContent = React13.forwardRef((props, forwardedRef) => {
      const {
        allowPinchZoom,
        trapFocus,
        disableRemoveScroll = true,
        zIndex,
        ...contentModalProps
      } = props;
      const context = usePopoverInternalContext(CONTENT_NAME2, props.__scopePopover);
      const contentRef = React13.useRef(null);
      const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, contentRef);
      const isRightClickOutsideRef = React13.useRef(false);
      React13.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden2.hideOthers)(content);
      }, [context.open]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverContentPortal, {
        zIndex,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverContentImpl, {
          ...contentModalProps,
          disableRemoveScroll,
          ref: composedRefs,
          trapFocus: trapFocus ?? context.open,
          disableOutsidePointerEvents: true,
          onCloseAutoFocus: (0, import_core27.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
            var _a;
            event.preventDefault();
            if (!isRightClickOutsideRef.current)
              (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
          }),
          onPointerDownOutside: (0, import_core27.composeEventHandlers)(
            props.onPointerDownOutside,
            (event) => {
              const originalEvent = event.detail.originalEvent;
              const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
              const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
              isRightClickOutsideRef.current = isRightClick;
            },
            { checkDefaultPrevented: false }
          ),
          onFocusOutside: (0, import_core27.composeEventHandlers)(
            props.onFocusOutside,
            (event) => event.preventDefault(),
            { checkDefaultPrevented: false }
          )
        })
      });
    });
    function PopoverContentPortal(props) {
      const themeName = (0, import_core27.useThemeName)();
      let contents = props.children;
      if (import_react_native8.Platform.OS === "android") {
        const context = usePopoverInternalContext(CONTENT_NAME2, props.__scopePopover);
        const popperContext = (0, import_popper.usePopperContext)(CONTENT_NAME2, context.popperScope);
        contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.PopperProvider, {
          ...popperContext,
          scope: context.popperScope,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverProviderInternal, {
            scope: props.__scopePopover,
            ...context,
            children: props.children
          })
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.Portal, {
        zIndex: props.zIndex ?? 1e3,
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Theme, {
          forceClassName: true,
          name: themeName,
          children: contents
        })
      });
    }
    __name(PopoverContentPortal, "PopoverContentPortal");
    var PopoverContentImpl = React13.forwardRef((props, forwardedRef) => {
      const {
        __scopePopover,
        trapFocus,
        onOpenAutoFocus,
        onCloseAutoFocus,
        disableOutsidePointerEvents,
        onEscapeKeyDown,
        onPointerDownOutside,
        onFocusOutside,
        onInteractOutside,
        children,
        disableRemoveScroll,
        ...contentProps
      } = props;
      const popperScope = usePopoverScope(__scopePopover);
      const context = usePopoverInternalContext(CONTENT_NAME2, popperScope.__scopePopover);
      const showSheet = useShowPopoverSheet(context);
      if (showSheet) {
        const childrenWithoutScrollView = React13.Children.toArray(children).map((child) => {
          if (React13.isValidElement(child)) {
            if (child.type === PopoverScrollView) {
              return child.props.children;
            }
          }
          return child;
        });
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalItem, {
          hostName: `${context.scopeKey}SheetContents`,
          children: childrenWithoutScrollView
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_animate_presence2.AnimatePresence, {
        children: !!context.open && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.PopperContent, {
          "data-state": getState2(context.open),
          id: context.contentId,
          pointerEvents: "auto",
          ...popperScope,
          ...contentProps,
          ref: forwardedRef,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_remove_scroll2.RemoveScroll, {
            enabled: disableRemoveScroll ? false : context.open,
            allowPinchZoom: true,
            removeScrollBar: false,
            style: {
              display: "contents"
            },
            children: trapFocus === false ? children : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_focus_scope2.FocusScope, {
              loop: true,
              trapped: trapFocus ?? context.open,
              onMountAutoFocus: onOpenAutoFocus,
              onUnmountAutoFocus: onCloseAutoFocus,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
                style: { display: "contents" },
                children
              })
            })
          })
        }, "popper-content")
      });
    });
    var CLOSE_NAME2 = "PopoverClose";
    var PopoverClose = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopePopover, ...closeProps } = props;
        const context = usePopoverInternalContext(CLOSE_NAME2, __scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
          ...closeProps,
          ref: forwardedRef,
          onPress: (0, import_core27.composeEventHandlers)(
            props.onPress,
            () => context.onOpenChange(false)
          )
        });
      }
    );
    PopoverClose.displayName = CLOSE_NAME2;
    var ARROW_NAME = "PopoverArrow";
    var PopoverArrow = React13.forwardRef(
      (props, forwardedRef) => {
        if (!import_core27.isWeb) {
          return null;
        }
        const { __scopePopover, ...arrowProps } = props;
        const popperScope = usePopoverScope(__scopePopover);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.PopperArrow, {
          ...popperScope,
          ...arrowProps,
          ref: forwardedRef
        });
      }
    );
    PopoverArrow.displayName = ARROW_NAME;
    var PopoverScrollView = React13.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native8.ScrollView, {
        ref,
        ...props
      });
    });
    var Popover = (0, import_core27.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          ...restProps
        } = props;
        const internalId = (0, import_core27.useId)();
        const id = __scopePopover ? Object.keys(__scopePopover)[0] : internalId;
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(() => {
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalHost, {
              name: `${id}SheetContents`
            });
          }, [])
        });
        const sheetBreakpoint = when;
        const popperScope = usePopoverScope(__scopePopover);
        const triggerRef = React13.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React13.useState(false);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          transition: true
        });
        const breakpointActive = useSheetBreakpointActive2(sheetBreakpoint);
        const useFloatingContext = React13.useCallback(
          (props2) => {
            const floating = (0, import_floating.useFloating)({
              ...props2,
              open,
              onOpenChange: setOpen
            });
            const { getReferenceProps, getFloatingProps } = (0, import_floating.useInteractions)([
              (0, import_floating.useRole)(floating.context, { role: "dialog" }),
              (0, import_floating.useDismiss)(floating.context, {
                enabled: !breakpointActive
              })
            ]);
            return {
              ...floating,
              getReferenceProps,
              getFloatingProps
            };
          },
          [breakpointActive, open, setOpen]
        );
        const popoverContext = {
          scope: __scopePopover,
          scopeKey: id,
          popperScope: popperScope.__scopePopper,
          sheetBreakpoint,
          contentId: (0, import_core27.useId)(),
          triggerRef,
          open,
          onOpenChange: setOpen,
          onOpenToggle: (0, import_core27.useEvent)(() => {
            if (open && breakpointActive) {
              return;
            }
            setOpen(!open);
          }),
          hasCustomAnchor,
          onCustomAnchorAdd: React13.useCallback(() => setHasCustomAnchor(true), []),
          onCustomAnchorRemove: React13.useCallback(() => setHasCustomAnchor(false), [])
        };
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AdaptProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.FloatingOverrideContext.Provider, {
            value: useFloatingContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.Popper, {
              ...popperScope,
              stayInFrame: true,
              ...restProps,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverProviderInternal, {
                ...popoverContext,
                children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PopoverSheetController, {
                  onOpenChange: setOpen,
                  __scopePopover,
                  children
                })
              })
            })
          })
        });
      },
      {
        Anchor: PopoverAnchor,
        Arrow: PopoverArrow,
        Trigger: PopoverTrigger,
        Content: PopoverContent,
        Close: PopoverClose,
        Adapt: import_adapt2.Adapt,
        ScrollView: PopoverScrollView,
        Sheet: import_sheet2.ControlledSheet
      }
    );
    Popover.displayName = POPOVER_NAME;
    function getState2(open) {
      return open ? "open" : "closed";
    }
    __name(getState2, "getState");
    var PopoverSheetController = /* @__PURE__ */ __name((props) => {
      const context = usePopoverInternalContext(
        "PopoverSheetController",
        props.__scopePopover
      );
      const showSheet = useShowPopoverSheet(context);
      const breakpointActive = useSheetBreakpointActive2(context.sheetBreakpoint);
      const getShowSheet = (0, import_core27.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_sheet2.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "PopoverSheetController");
    var useSheetBreakpointActive2 = /* @__PURE__ */ __name((breakpoint) => {
      const media = (0, import_core27.useMedia)();
      return breakpoint ? media[breakpoint] : false;
    }, "useSheetBreakpointActive");
    var useShowPopoverSheet = /* @__PURE__ */ __name((context) => {
      if (!import_core27.isWeb)
        return true;
      const breakpointActive = useSheetBreakpointActive2(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowPopoverSheet");
  }
});

// ../../node_modules/@tamagui/popover/dist/cjs/index.js
var require_cjs33 = __commonJS({
  "../../node_modules/@tamagui/popover/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Popover(), module2.exports);
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/Progress.js
var require_Progress = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/Progress.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Progress_exports = {};
    __export2(Progress_exports, {
      Progress: () => Progress,
      ProgressFrame: () => ProgressFrame,
      ProgressIndicator: () => ProgressIndicator,
      ProgressIndicatorFrame: () => ProgressIndicatorFrame,
      createProgressScope: () => createProgressScope
    });
    module2.exports = __toCommonJS2(Progress_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var PROGRESS_NAME = "Progress";
    var [createProgressContext, createProgressScope] = (0, import_create_context4.createContextScope)(PROGRESS_NAME);
    var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
    var INDICATOR_NAME = "ProgressIndicator";
    var ProgressIndicatorFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: INDICATOR_NAME,
      height: "100%",
      width: "100%",
      backgrounded: true
    });
    var ProgressIndicator = ProgressIndicatorFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopeProgress, ...indicatorProps } = props;
          const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
          const pct = context.max - (context.value ?? 0);
          const x = -context.width * (pct / 100);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProgressIndicatorFrame, {
            "data-state": getProgressState(context.value, context.max),
            "data-value": context.value ?? void 0,
            "data-max": context.max,
            x,
            width: context.width,
            ...indicatorProps,
            ref: forwardedRef
          });
        }
      )
    );
    ProgressIndicator.displayName = INDICATOR_NAME;
    function defaultGetValueLabel(value, max) {
      return `${Math.round(value / max * 100)}%`;
    }
    __name(defaultGetValueLabel, "defaultGetValueLabel");
    function getProgressState(value, maxValue) {
      return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
    }
    __name(getProgressState, "getProgressState");
    function isNumber(value) {
      return typeof value === "number";
    }
    __name(isNumber, "isNumber");
    function isValidMaxNumber(max) {
      return isNumber(max) && !isNaN(max) && max > 0;
    }
    __name(isValidMaxNumber, "isValidMaxNumber");
    function isValidValueNumber(value, max) {
      return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
    }
    __name(isValidValueNumber, "isValidValueNumber");
    function getInvalidMaxError(propValue, componentName) {
      return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
    }
    __name(getInvalidMaxError, "getInvalidMaxError");
    function getInvalidValueError(propValue, componentName) {
      return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
    }
    __name(getInvalidValueError, "getInvalidValueError");
    var DEFAULT_MAX = 100;
    var ProgressFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: PROGRESS_NAME,
      borderRadius: 1e5,
      overflow: "hidden",
      backgrounded: true,
      variants: {
        size: {
          "...size": (val) => {
            const size = Math.round((0, import_core27.getVariableValue)((0, import_get_size2.getSize)(val)) * 0.25);
            return {
              height: size,
              minWidth: (0, import_core27.getVariableValue)(size) * 20,
              width: "100%"
            };
          }
        }
      }
    });
    var Progress = (0, import_core27.withStaticProperties)(
      ProgressFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeProgress,
              value: valueProp,
              max: maxProp,
              getValueLabel = defaultGetValueLabel,
              size = "$true",
              ...progressProps
            } = props;
            const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
            const value = isValidValueNumber(valueProp, max) ? valueProp : null;
            const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
            const [width, setWidth] = React13.useState(0);
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProgressProvider, {
              scope: __scopeProgress,
              value,
              max,
              width,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ProgressFrame, {
                size,
                "aria-valuemax": max,
                "aria-valuemin": 0,
                "aria-valuenow": isNumber(value) ? value : void 0,
                "aria-valuetext": valueLabel,
                role: "progressbar",
                "data-state": getProgressState(value, max),
                "data-value": value ?? void 0,
                "data-max": max,
                ...progressProps,
                onLayout: (e) => {
                  var _a;
                  setWidth(e.nativeEvent.layout.width);
                  (_a = progressProps.onLayout) == null ? void 0 : _a.call(progressProps, e);
                },
                ref: forwardedRef
              })
            });
          }
        )
      ),
      {
        Indicator: ProgressIndicator
      }
    );
    Progress.displayName = PROGRESS_NAME;
    Progress.propTypes = {
      max(props, propName, componentName) {
        const propValue = props[propName];
        const strVal = String(propValue);
        if (propValue && !isValidMaxNumber(propValue)) {
          return new Error(getInvalidMaxError(strVal, componentName));
        }
        return null;
      },
      value(props, propName, componentName) {
        const valueProp = props[propName];
        const strVal = String(valueProp);
        const max = isValidMaxNumber(props.max) ? props.max : DEFAULT_MAX;
        if (valueProp != null && !isValidValueNumber(valueProp, max)) {
          return new Error(getInvalidValueError(strVal, componentName));
        }
        return null;
      }
    };
  }
});

// ../../node_modules/@tamagui/progress/dist/cjs/index.js
var require_cjs34 = __commonJS({
  "../../node_modules/@tamagui/progress/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Progress(), module2.exports);
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/Separator.js
var require_Separator = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/Separator.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Separator_exports = {};
    __export2(Separator_exports, {
      Separator: () => Separator
    });
    module2.exports = __toCommonJS2(Separator_exports);
    var import_core27 = require("@tamagui/core-node");
    var Separator = (0, import_core27.styled)(import_core27.Stack, {
      name: "Separator",
      borderColor: "$borderColor",
      flexShrink: 0,
      borderWidth: 0,
      flex: 1,
      height: 0,
      maxHeight: 0,
      borderBottomWidth: 1,
      y: -0.5,
      variants: {
        vertical: {
          true: {
            y: 0,
            x: -0.5,
            height: import_core27.isWeb ? "initial" : "auto",
            maxHeight: import_core27.isWeb ? "initial" : "auto",
            width: 0,
            maxWidth: 0,
            borderBottomWidth: 0,
            borderRightWidth: 1
          }
        }
      }
    });
  }
});

// ../../node_modules/@tamagui/separator/dist/cjs/index.js
var require_cjs35 = __commonJS({
  "../../node_modules/@tamagui/separator/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Separator(), module2.exports);
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/constants.js
var require_constants3 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      FALLBACK_THRESHOLD: () => FALLBACK_THRESHOLD,
      MIN_HEIGHT: () => MIN_HEIGHT,
      SCROLL_ARROW_THRESHOLD: () => SCROLL_ARROW_THRESHOLD,
      SCROLL_ARROW_VELOCITY: () => SCROLL_ARROW_VELOCITY,
      SELECT_NAME: () => SELECT_NAME,
      VIEWPORT_NAME: () => VIEWPORT_NAME,
      WINDOW_PADDING: () => WINDOW_PADDING
    });
    module2.exports = __toCommonJS2(constants_exports);
    var SELECT_NAME = "Select";
    var WINDOW_PADDING = 8;
    var SCROLL_ARROW_VELOCITY = 8;
    var SCROLL_ARROW_THRESHOLD = 8;
    var MIN_HEIGHT = 80;
    var FALLBACK_THRESHOLD = 16;
    var VIEWPORT_NAME = "SelectViewport";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/context.js
var require_context = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/context.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var context_exports = {};
    __export2(context_exports, {
      ForwardSelectContext: () => ForwardSelectContext,
      SelectProvider: () => SelectProvider,
      createSelectContext: () => createSelectContext,
      createSelectScope: () => createSelectScope,
      useSelectContext: () => useSelectContext
    });
    module2.exports = __toCommonJS2(context_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_create_context4 = require_cjs3();
    var import_constants = require_constants3();
    var [createSelectContext, createSelectScope] = (0, import_create_context4.createContextScope)(import_constants.SELECT_NAME);
    var [SelectProvider, useSelectContext] = createSelectContext(import_constants.SELECT_NAME);
    var ForwardSelectContext = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectProvider, {
        isInSheet: true,
        scope: props.__scopeSelect,
        ...props.context,
        children: props.children
      });
    }, "ForwardSelectContext");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js
var require_useSelectBreakpointActive = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/useSelectBreakpointActive.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useSelectBreakpointActive_exports = {};
    __export2(useSelectBreakpointActive_exports, {
      useSelectBreakpointActive: () => useSelectBreakpointActive,
      useShowSelectSheet: () => useShowSelectSheet
    });
    module2.exports = __toCommonJS2(useSelectBreakpointActive_exports);
    var import_core27 = require("@tamagui/core-node");
    var useSelectBreakpointActive = /* @__PURE__ */ __name((sheetBreakpoint) => {
      const media = (0, import_core27.useMedia)();
      return sheetBreakpoint ? media[sheetBreakpoint] : false;
    }, "useSelectBreakpointActive");
    var useShowSelectSheet = /* @__PURE__ */ __name((context) => {
      const breakpointActive = useSelectBreakpointActive(context.sheetBreakpoint);
      return context.open === false ? false : breakpointActive;
    }, "useShowSelectSheet");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectContent.js
var require_SelectContent = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectContent.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectContent_exports = {};
    __export2(SelectContent_exports, {
      SelectContent: () => SelectContent
    });
    module2.exports = __toCommonJS2(SelectContent_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core27 = require("@tamagui/core-node");
    var import_dismissable2 = require_cjs8();
    var import_focus_scope2 = require_cjs9();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var CONTENT_NAME2 = "SelectContent";
    var SelectContent = /* @__PURE__ */ __name(({
      children,
      __scopeSelect,
      zIndex = 1e3,
      ...focusScopeProps
    }) => {
      const context = (0, import_context.useSelectContext)(CONTENT_NAME2, __scopeSelect);
      const themeName = (0, import_core27.useThemeName)();
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Theme, {
        forceClassName: true,
        name: themeName,
        children
      });
      const touch = (0, import_core27.useIsTouchDevice)();
      if (showSheet) {
        if (!context.open) {
          return null;
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
          children: contents
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_dom_interactions.FloatingPortal, {
        children: context.open ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_dom_interactions.FloatingOverlay, {
          style: { zIndex },
          lockScroll: !touch,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_focus_scope2.FocusScope, {
            loop: true,
            trapped: true,
            ...focusScopeProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_dismissable2.Dismissable, {
              children: contents
            })
          })
        }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", {
          style: { display: "none" },
          children: contents
        })
      });
    }, "SelectContent");
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js
var require_SelectImpl = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectImpl_exports = {};
    __export2(SelectImpl_exports, {
      SelectInlineImpl: () => SelectInlineImpl
    });
    module2.exports = __toCommonJS2(SelectImpl_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core27 = require("@tamagui/core-node");
    var React13 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_constants = require_constants3();
    var import_context = require_context();
    var SelectInlineImpl = /* @__PURE__ */ __name((props) => {
      const {
        __scopeSelect,
        children,
        open = false,
        selectedIndexRef,
        listContentRef
      } = props;
      const selectContext = (0, import_context.useSelectContext)("SelectSheetImpl", __scopeSelect);
      const {
        setActiveIndex,
        setOpen,
        setSelectedIndex,
        selectedIndex,
        activeIndex,
        forceUpdate
      } = selectContext;
      const [scrollTop, setScrollTop] = React13.useState(0);
      const touch = (0, import_core27.useIsTouchDevice)();
      const listItemsRef = React13.useRef([]);
      const overflowRef = React13.useRef(null);
      const upArrowRef = React13.useRef(null);
      const downArrowRef = React13.useRef(null);
      const allowSelectRef = React13.useRef(false);
      const allowMouseUpRef = React13.useRef(true);
      const selectTimeoutRef = React13.useRef();
      const state = React13.useRef({
        isMouseOutside: false
      });
      const [controlledScrolling, setControlledScrolling] = React13.useState(false);
      const [fallback, setFallback] = React13.useState(false);
      const [innerOffset, setInnerOffset] = React13.useState(0);
      const [blockSelection, setBlockSelection] = React13.useState(false);
      const floatingStyle = React13.useRef({});
      React13.useEffect(() => {
        const frame = requestAnimationFrame(() => {
          if (!open) {
            setScrollTop(0);
            setFallback(false);
            setActiveIndex(null);
            setControlledScrolling(false);
          }
        });
        return () => {
          cancelAnimationFrame(frame);
        };
      }, [open, setActiveIndex]);
      if (import_core27.isWeb) {
        React13.useEffect(() => {
          if (!open)
            return;
          const mouseUp = /* @__PURE__ */ __name((e) => {
            if (state.current.isMouseOutside) {
              setOpen(false);
            }
          }, "mouseUp");
          document.addEventListener("mouseup", mouseUp);
          return () => {
            document.removeEventListener("mouseup", mouseUp);
          };
        }, [open]);
      }
      const updateFloatingSize = (0, import_react_dom_interactions.size)({
        apply({
          availableHeight,
          rects: {
            reference: { width }
          }
        }) {
          floatingStyle.current = {
            width,
            maxHeight: availableHeight
          };
        },
        padding: import_constants.WINDOW_PADDING
      });
      const { x, y, reference, floating, strategy, context, refs } = (0, import_react_dom_interactions.useFloating)({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: import_react_dom_interactions.autoUpdate,
        placement: "bottom-start",
        middleware: fallback ? [
          (0, import_react_dom_interactions.offset)(5),
          ...[
            touch ? (0, import_react_dom_interactions.shift)({ crossAxis: true, padding: import_constants.WINDOW_PADDING }) : (0, import_react_dom_interactions.flip)({ padding: import_constants.WINDOW_PADDING })
          ],
          updateFloatingSize
        ] : [
          (0, import_react_dom_interactions.inner)({
            listRef: listItemsRef,
            overflowRef,
            index: selectedIndex,
            offset: innerOffset,
            onFallbackChange: setFallback,
            padding: 10,
            minItemsVisible: touch ? 10 : 4,
            referenceOverflowThreshold: 20
          }),
          updateFloatingSize
        ]
      });
      const floatingRef = refs.floating;
      const showUpArrow = open && scrollTop > import_constants.SCROLL_ARROW_THRESHOLD;
      const showDownArrow = open && floatingRef.current && scrollTop < floatingRef.current.scrollHeight - floatingRef.current.clientHeight - import_constants.SCROLL_ARROW_THRESHOLD;
      const interactions = (0, import_react_dom_interactions.useInteractions)([
        (0, import_react_dom_interactions.useClick)(context, { event: "mousedown" }),
        (0, import_react_dom_interactions.useDismiss)(context, { outsidePress: false }),
        (0, import_react_dom_interactions.useRole)(context, { role: "listbox" }),
        (0, import_react_dom_interactions.useInnerOffset)(context, {
          enabled: !fallback,
          onChange: setInnerOffset,
          overflowRef
        }),
        (0, import_react_dom_interactions.useListNavigation)(context, {
          listRef: listItemsRef,
          activeIndex,
          selectedIndex,
          onNavigate: setActiveIndex
        }),
        (0, import_react_dom_interactions.useTypeahead)(context, {
          listRef: listContentRef,
          onMatch: open ? setActiveIndex : setSelectedIndex,
          selectedIndex,
          activeIndex
        })
      ]);
      const interactionsContext = {
        ...interactions,
        getReferenceProps() {
          return interactions.getReferenceProps({
            ref: reference,
            className: "SelectTrigger",
            onKeyDown(event) {
              if (event.key === "Enter" || event.key === " " && !context.dataRef.current.typing) {
                event.preventDefault();
                setOpen(true);
              }
            }
          });
        },
        getFloatingProps(props2) {
          return interactions.getFloatingProps({
            ref: floating,
            className: "Select",
            ...props2,
            style: {
              position: strategy,
              top: y ?? "",
              left: x ?? "",
              outline: 0,
              listStyleType: "none",
              scrollbarWidth: "none",
              ...floatingStyle.current,
              ...props2 == null ? void 0 : props2.style
            },
            onPointerEnter() {
              setControlledScrolling(false);
              state.current.isMouseOutside = false;
            },
            onPointerLeave() {
              state.current.isMouseOutside = true;
            },
            onPointerMove() {
              state.current.isMouseOutside = false;
              setControlledScrolling(false);
            },
            onKeyDown() {
              setControlledScrolling(true);
            },
            onContextMenu(e) {
              e.preventDefault();
            },
            onScroll(event) {
              (0, import_react_dom.flushSync)(() => setScrollTop(event.currentTarget.scrollTop));
            }
          });
        }
      };
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        if (open) {
          selectTimeoutRef.current = setTimeout(() => {
            allowSelectRef.current = true;
          }, 300);
          return () => {
            clearTimeout(selectTimeoutRef.current);
          };
        } else {
          allowSelectRef.current = false;
          allowMouseUpRef.current = true;
          setInnerOffset(0);
          setFallback(false);
          setBlockSelection(false);
        }
      }, [open]);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        function onPointerDown(e) {
          var _a, _b, _c;
          const target = e.target;
          if (!(((_a = refs.floating.current) == null ? void 0 : _a.contains(target)) || ((_b = upArrowRef.current) == null ? void 0 : _b.contains(target)) || ((_c = downArrowRef.current) == null ? void 0 : _c.contains(target)))) {
            setOpen(false);
            setControlledScrolling(false);
          }
        }
        __name(onPointerDown, "onPointerDown");
        if (open) {
          document.addEventListener("pointerdown", onPointerDown);
          return () => {
            document.removeEventListener("pointerdown", onPointerDown);
          };
        }
      }, [open, refs, setOpen]);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        var _a, _b;
        if (open && controlledScrolling) {
          if (activeIndex != null) {
            (_a = listItemsRef.current[activeIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
        setScrollTop(((_b = refs.floating.current) == null ? void 0 : _b.scrollTop) ?? 0);
      }, [open, refs, controlledScrolling, activeIndex]);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        var _a;
        if (open && fallback) {
          if (selectedIndex != null) {
            (_a = listItemsRef.current[selectedIndex]) == null ? void 0 : _a.scrollIntoView({ block: "nearest" });
          }
        }
      }, [open, fallback, selectedIndex]);
      (0, import_core27.useIsomorphicLayoutEffect)(() => {
        if (refs.floating.current && fallback) {
          refs.floating.current.style.maxHeight = "";
        }
      }, [refs, fallback]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_context.SelectProvider, {
        scope: __scopeSelect,
        ...selectContext,
        setScrollTop,
        setInnerOffset,
        floatingRef,
        setValueAtIndex: (index, value) => {
          listContentRef.current[index] = value;
        },
        fallback,
        interactions: interactionsContext,
        floatingContext: context,
        activeIndex,
        canScrollDown: !!showDownArrow,
        canScrollUp: !!showUpArrow,
        controlledScrolling: true,
        dataRef: context.dataRef,
        listRef: listItemsRef,
        blockSelection,
        allowMouseUpRef,
        upArrowRef,
        downArrowRef,
        selectTimeoutRef,
        allowSelectRef,
        children
      });
    }, "SelectInlineImpl");
    var userAgent = typeof navigator !== "undefined" && navigator.userAgent || "";
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js
var require_SelectScrollButton = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectScrollButton.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectScrollButton_exports = {};
    __export2(SelectScrollButton_exports, {
      SelectScrollDownButton: () => SelectScrollDownButton,
      SelectScrollUpButton: () => SelectScrollUpButton
    });
    module2.exports = __toCommonJS2(SelectScrollButton_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_react_dom = require("react-dom");
    var import_context = require_context();
    var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton";
    var SelectScrollUpButton = React13.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectScrollButtonImpl, {
        componentName: SCROLL_UP_BUTTON_NAME,
        ...props,
        dir: "up",
        ref: forwardedRef
      });
    });
    SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
    var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton";
    var SelectScrollDownButton = React13.forwardRef((props, forwardedRef) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectScrollButtonImpl, {
        componentName: SCROLL_DOWN_BUTTON_NAME,
        ...props,
        dir: "down",
        ref: forwardedRef
      });
    });
    SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
    var SelectScrollButtonImpl = React13.memo(
      React13.forwardRef(
        (props, forwardedRef) => {
          var _a;
          const { __scopeSelect, dir, componentName, ...scrollIndicatorProps } = props;
          const {
            floatingRef,
            forceUpdate,
            open,
            fallback,
            setScrollTop,
            setInnerOffset,
            ...context
          } = (0, import_context.useSelectContext)(componentName, __scopeSelect);
          const [element, setElement] = React13.useState(null);
          const statusRef = React13.useRef("idle");
          const isVisible = context[dir === "down" ? "canScrollDown" : "canScrollUp"];
          const frameRef = React13.useRef();
          const { x, y, reference, floating, strategy, update, refs } = (0, import_react_dom_interactions.useFloating)({
            open: open && isVisible,
            strategy: "fixed",
            placement: dir === "up" ? "top" : "bottom",
            middleware: [(0, import_react_dom_interactions.offset)(({ rects }) => -rects.floating.height)],
            whileElementsMounted: (...args) => (0, import_react_dom_interactions.autoUpdate)(...args, { animationFrame: true })
          });
          const composedRef = (0, import_compose_refs3.useComposedRefs)(forwardedRef, floating);
          if (floatingRef) {
            if (open) {
              if (element !== floatingRef.current) {
                setElement(floatingRef.current);
                reference(floatingRef.current);
                requestAnimationFrame(update);
              }
            } else {
              cancelAnimationFrame(frameRef.current);
            }
          }
          (0, import_core27.useIsomorphicLayoutEffect)(() => {
            return () => {
              cancelAnimationFrame(frameRef.current);
            };
          }, []);
          if (!(isVisible && floatingRef)) {
            return null;
          }
          const onScroll = /* @__PURE__ */ __name((amount) => {
            if (fallback) {
              if (refs.floating.current) {
                refs.floating.current.scrollTop -= amount;
                (0, import_react_dom.flushSync)(() => {
                  var _a2;
                  return setScrollTop(((_a2 = refs.floating.current) == null ? void 0 : _a2.scrollTop) ?? 0);
                });
              }
            } else {
              (0, import_react_dom.flushSync)(() => setInnerOffset((value) => value - amount));
            }
          }, "onScroll");
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_stacks9.YStack, {
            ref: composedRef,
            componentName,
            "aria-hidden": true,
            ...scrollIndicatorProps,
            zIndex: 1e3,
            position: strategy,
            left: x || 0,
            top: y || 0,
            width: `calc(${(((_a = floatingRef == null ? void 0 : floatingRef.current) == null ? void 0 : _a.offsetWidth) ?? 0) - 2}px)`,
            onPointerEnter: () => {
              statusRef.current = "active";
              let prevNow = Date.now();
              function frame() {
                if (element) {
                  const currentNow = Date.now();
                  const msElapsed = currentNow - prevNow;
                  prevNow = currentNow;
                  const pixelsToScroll = msElapsed / 2;
                  const remainingPixels = dir === "up" ? element.scrollTop : element.scrollHeight - element.clientHeight - element.scrollTop;
                  const scrollRemaining = dir === "up" ? element.scrollTop - pixelsToScroll > 0 : element.scrollTop + pixelsToScroll < element.scrollHeight - element.clientHeight;
                  onScroll(
                    dir === "up" ? Math.min(pixelsToScroll, remainingPixels) : Math.max(-pixelsToScroll, -remainingPixels)
                  );
                  if (scrollRemaining) {
                    frameRef.current = requestAnimationFrame(frame);
                  }
                }
              }
              __name(frame, "frame");
              cancelAnimationFrame(frameRef.current);
              frameRef.current = requestAnimationFrame(frame);
            },
            onPointerLeave: () => {
              statusRef.current = "idle";
              cancelAnimationFrame(frameRef.current);
            }
          });
        }
      )
    );
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js
var require_SelectViewport = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/SelectViewport.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SelectViewport_exports = {};
    __export2(SelectViewport_exports, {
      SelectViewport: () => SelectViewport,
      SelectViewportFrame: () => SelectViewportFrame
    });
    module2.exports = __toCommonJS2(SelectViewport_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core27 = require("@tamagui/core-node");
    var import_core28 = require("@tamagui/core-node");
    var import_portal3 = require_cjs13();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_context = require_context();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var SelectViewportFrame = (0, import_core28.styled)(import_stacks9.ThemeableStack, {
      name: import_constants.VIEWPORT_NAME,
      backgroundColor: "$background",
      elevate: true,
      bordered: true,
      overflow: "scroll",
      userSelect: "none",
      outlineWidth: 0,
      variants: {
        size: {
          "...size": (val, { tokens }) => {
            return {
              borderRadius: tokens.radius[val] ?? val
            };
          }
        }
      },
      defaultVariants: {
        size: "$2"
      }
    });
    var SelectViewport = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, children, ...viewportProps } = props;
        const context = (0, import_context.useSelectContext)(import_constants.VIEWPORT_NAME, __scopeSelect);
        const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
        if (breakpointActive || !import_core27.isWeb) {
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalItem, {
            hostName: `${context.scopeKey}SheetContents`,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_context.ForwardSelectContext, {
              context,
              children
            })
          });
        }
        if (!context.floatingContext) {
          return null;
        }
        if (!context.open) {
          return children;
        }
        const {
          style: { scrollbarWidth, listStyleType, ...restStyle },
          ...floatingProps
        } = context.interactions.getFloatingProps();
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: selectViewportCSS
              }
            }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_dom_interactions.FloatingFocusManager, {
              context: context.floatingContext,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectViewportFrame, {
                size: context.size,
                role: "presentation",
                ...viewportProps,
                ref: forwardedRef,
                ...floatingProps,
                ...restStyle,
                children
              })
            })
          ]
        });
      }
    );
    SelectViewport.displayName = import_constants.VIEWPORT_NAME;
    var selectViewportCSS = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/Select.js
var require_Select = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/Select.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Select_exports = {};
    __export2(Select_exports, {
      Select: () => Select,
      SelectGroupFrame: () => SelectGroupFrame,
      SelectIcon: () => SelectIcon,
      SelectItem: () => SelectItem,
      SelectItemTextFrame: () => SelectItemTextFrame,
      SelectSeparator: () => SelectSeparator,
      SelectTrigger: () => SelectTrigger
    });
    module2.exports = __toCommonJS2(Select_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_adapt2 = require_cjs();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_core28 = require("@tamagui/core-node");
    var import_core32 = require("@tamagui/core-node");
    var import_list_item = require_cjs31();
    var import_portal3 = require_cjs13();
    var import_separator = require_cjs35();
    var import_sheet2 = require_cjs18();
    var import_stacks9 = require_cjs12();
    var import_text5 = require_cjs20();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants3();
    var import_context = require_context();
    var import_SelectContent = require_SelectContent();
    var import_SelectImpl = require_SelectImpl();
    var import_SelectScrollButton = require_SelectScrollButton();
    var import_SelectViewport = require_SelectViewport();
    var import_useSelectBreakpointActive = require_useSelectBreakpointActive();
    var TRIGGER_NAME2 = "SelectTrigger";
    var SelectTrigger = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          disabled = false,
          "aria-labelledby": ariaLabelledby,
          ...triggerProps
        } = props;
        const context = (0, import_context.useSelectContext)(TRIGGER_NAME2, __scopeSelect);
        const labelledBy = ariaLabelledby;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_list_item.ListItem, {
          componentName: TRIGGER_NAME2,
          backgrounded: true,
          radiused: true,
          hoverTheme: true,
          pressTheme: true,
          focusTheme: true,
          focusable: true,
          borderWidth: 1,
          size: context.size,
          "aria-expanded": context.open,
          "aria-autocomplete": "none",
          "aria-labelledby": labelledBy,
          dir: context.dir,
          disabled,
          "data-disabled": disabled ? "" : void 0,
          ...triggerProps,
          ref: forwardedRef,
          ...process.env.TAMAGUI_TARGET === "web" && context.interactions ? context.interactions.getReferenceProps() : {
            onPress() {
              context.setOpen(!context.open);
            }
          }
        });
      }
    );
    SelectTrigger.displayName = TRIGGER_NAME2;
    var VALUE_NAME = "SelectValue";
    var SelectValueFrame = (0, import_core28.styled)(import_text5.Paragraph, {
      name: VALUE_NAME,
      selectable: false
    });
    var SelectValue = SelectValueFrame.extractable(
      React13.forwardRef(
        ({
          __scopeSelect,
          children: childrenProp,
          placeholder
        }, forwardedRef) => {
          const context = (0, import_context.useSelectContext)(VALUE_NAME, __scopeSelect);
          const { onValueNodeHasChildrenChange } = context;
          const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, context.onValueNodeChange);
          const children = childrenProp ?? context.selectedItem;
          const hasChildren = !!children;
          const selectValueChildren = context.value === void 0 && placeholder !== void 0 ? placeholder : children;
          (0, import_core28.useIsomorphicLayoutEffect)(() => {
            onValueNodeHasChildrenChange(hasChildren);
          }, [onValueNodeHasChildrenChange, hasChildren]);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectValueFrame, {
            size: context.size,
            ref: composedRefs,
            pointerEvents: "none",
            children: selectValueChildren
          });
        }
      )
    );
    SelectValue.displayName = VALUE_NAME;
    var SelectIcon = (0, import_core28.styled)(import_stacks9.XStack, {
      name: "SelectIcon",
      "aria-hidden": true,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_text5.Paragraph, {
        children: "\u25BC"
      })
    });
    var ITEM_NAME = "SelectItem";
    var [SelectItemContextProvider, useSelectItemContext] = (0, import_context.createSelectContext)(ITEM_NAME);
    var SelectItem = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSelect,
          value,
          disabled = false,
          textValue: textValueProp,
          index,
          ...itemProps
        } = props;
        const context = (0, import_context.useSelectContext)(ITEM_NAME, __scopeSelect);
        const isSelected = context.value === value;
        const textId = (0, import_core32.useId)();
        const {
          selectedIndex,
          setSelectedIndex,
          listRef,
          open,
          setOpen,
          onChange,
          setActiveIndex,
          allowMouseUpRef,
          allowSelectRef,
          setValueAtIndex,
          selectTimeoutRef,
          dataRef
        } = context;
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => {
          if (!import_core27.isWeb)
            return;
          if (node instanceof HTMLElement) {
            if (listRef) {
              listRef.current[index] = node;
            }
          }
        });
        React13.useEffect(() => {
          setValueAtIndex(index, value);
        }, [index, setValueAtIndex, value]);
        function handleSelect() {
          setSelectedIndex(index);
          onChange(value);
          setOpen(false);
        }
        __name(handleSelect, "handleSelect");
        const selectItemProps = context.interactions ? context.interactions.getItemProps({
          onTouchStart() {
            allowSelectRef.current = true;
            allowMouseUpRef.current = false;
          },
          onKeyDown(event) {
            if (event.key === "Enter" || event.key === " " && !(dataRef == null ? void 0 : dataRef.current.typing)) {
              event.preventDefault();
              handleSelect();
            } else {
              allowSelectRef.current = true;
            }
          },
          onClick() {
            if (allowSelectRef.current) {
              setSelectedIndex(index);
              setOpen(false);
            }
          },
          onMouseUp() {
            if (!allowMouseUpRef.current) {
              return;
            }
            if (allowSelectRef.current) {
              handleSelect();
            }
            clearTimeout(selectTimeoutRef.current);
            selectTimeoutRef.current = setTimeout(() => {
              allowSelectRef.current = true;
            });
          }
        }) : {
          onPress: handleSelect
        };
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectItemContextProvider, {
          scope: __scopeSelect,
          value,
          textId: textId || "",
          isSelected,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_list_item.ListItem, {
            backgrounded: true,
            pressTheme: true,
            cursor: "",
            focusTheme: true,
            outlineWidth: 0,
            componentName: ITEM_NAME,
            ref: composedRefs,
            "aria-labelledby": textId,
            "aria-selected": isSelected,
            "data-state": isSelected ? "active" : "inactive",
            "aria-disabled": disabled || void 0,
            "data-disabled": disabled ? "" : void 0,
            tabIndex: disabled ? void 0 : -1,
            size: context.size,
            ...itemProps,
            ...selectItemProps
          })
        });
      }
    );
    SelectItem.displayName = ITEM_NAME;
    var ITEM_TEXT_NAME = "SelectItemText";
    var SelectItemTextFrame = (0, import_core28.styled)(import_text5.SizableText, {
      name: ITEM_TEXT_NAME,
      selectable: false
    });
    var SelectItemText = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, className, ...itemTextProps } = props;
        const context = (0, import_context.useSelectContext)(ITEM_TEXT_NAME, __scopeSelect);
        const itemContext = useSelectItemContext(ITEM_TEXT_NAME, __scopeSelect);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const isSelected = Boolean(itemContext.isSelected && context.valueNode);
        const contents = React13.useMemo(
          () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectItemTextFrame, {
            className,
            size: context.size,
            id: itemContext.textId,
            ...itemTextProps,
            ref: composedRefs
          }),
          [props, context.size, className, itemContext.textId]
        );
        React13.useEffect(() => {
          if (isSelected) {
            context.setSelectedItem(contents);
          }
        }, [isSelected, contents]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
          children: contents
        });
      }
    );
    SelectItemText.displayName = ITEM_TEXT_NAME;
    var ITEM_INDICATOR_NAME = "SelectItemIndicator";
    var SelectItemIndicatorFrame = (0, import_core28.styled)(import_stacks9.XStack, {
      name: ITEM_TEXT_NAME
    });
    var SelectItemIndicator = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...itemIndicatorProps } = props;
        const itemContext = useSelectItemContext(ITEM_INDICATOR_NAME, __scopeSelect);
        return itemContext.isSelected ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectItemIndicatorFrame, {
          "aria-hidden": true,
          ...itemIndicatorProps,
          ref: forwardedRef
        }) : null;
      }
    );
    SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
    var GROUP_NAME = "SelectGroup";
    var [SelectGroupContextProvider, useSelectGroupContext] = (0, import_context.createSelectContext)(GROUP_NAME);
    var SelectGroupFrame = (0, import_core28.styled)(import_stacks9.YStack, {
      name: GROUP_NAME,
      width: "100%"
    });
    var SelectGroup = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...groupProps } = props;
        const groupId = (0, import_core32.useId)();
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectGroupContextProvider, {
          scope: __scopeSelect,
          id: groupId || "",
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectGroupFrame, {
            role: "group",
            "aria-labelledby": groupId,
            ...groupProps,
            ref: forwardedRef
          })
        });
      }
    );
    SelectGroup.displayName = GROUP_NAME;
    var LABEL_NAME = "SelectLabel";
    var SelectLabel = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSelect, ...labelProps } = props;
        const context = (0, import_context.useSelectContext)(LABEL_NAME, __scopeSelect);
        const groupContext = useSelectGroupContext(LABEL_NAME, __scopeSelect);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_list_item.ListItem, {
          componentName: LABEL_NAME,
          fontWeight: "800",
          id: groupContext.id,
          size: context.size,
          ...labelProps,
          ref: forwardedRef
        });
      }
    );
    SelectLabel.displayName = LABEL_NAME;
    var SelectSeparator = (0, import_core28.styled)(import_separator.Separator, {
      name: "SelectSeparator"
    });
    var SelectSheetController = /* @__PURE__ */ __name((props) => {
      const context = (0, import_context.useSelectContext)("SelectSheetController", props.__scopeSelect);
      const showSheet = (0, import_useSelectBreakpointActive.useShowSelectSheet)(context);
      const breakpointActive = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(context.sheetBreakpoint);
      const getShowSheet = (0, import_core28.useGet)(showSheet);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_sheet2.SheetController, {
        onOpenChange: (val) => {
          if (getShowSheet()) {
            props.onOpenChange(val);
          }
        },
        open: context.open,
        hidden: breakpointActive === false,
        children: props.children
      });
    }, "SelectSheetController");
    var SelectSheetImpl = /* @__PURE__ */ __name((props) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_jsx_runtime12.Fragment, {
        children: props.children
      });
    }, "SelectSheetImpl");
    var Select = (0, import_core28.withStaticProperties)(
      (props) => {
        const {
          __scopeSelect,
          children,
          open: openProp,
          defaultOpen,
          onOpenChange,
          value: valueProp,
          defaultValue: defaultValue2,
          onValueChange,
          size: sizeProp = "$true",
          dir
        } = props;
        const id = (0, import_core32.useId)();
        const scopeKey = __scopeSelect ? Object.keys(__scopeSelect)[0] ?? id : id;
        const { when, AdaptProvider } = (0, import_adapt2.useAdaptParent)({
          Contents: React13.useCallback(
            () => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_portal3.PortalHost, {
              name: `${scopeKey}SheetContents`
            }),
            [scopeKey]
          )
        });
        const sheetBreakpoint = when;
        const isSheet = (0, import_useSelectBreakpointActive.useSelectBreakpointActive)(sheetBreakpoint);
        const SelectImpl = isSheet || !import_core27.isWeb ? SelectSheetImpl : import_SelectImpl.SelectInlineImpl;
        const forceUpdate = React13.useReducer(() => ({}), {})[1];
        const [selectedItem, setSelectedItem] = React13.useState(null);
        const [open, setOpen] = (0, import_use_controllable_state2.useControllableState)({
          prop: openProp,
          defaultProp: defaultOpen || false,
          onChange: onOpenChange,
          strategy: "most-recent-wins"
        });
        const [value, setValue] = (0, import_use_controllable_state2.useControllableState)({
          prop: valueProp,
          defaultProp: defaultValue2 || "",
          onChange: onValueChange,
          strategy: "most-recent-wins",
          transition: true
        });
        const [activeIndex, setActiveIndex] = React13.useState(null);
        const selectedIndexRef = React13.useRef(null);
        const activeIndexRef = React13.useRef(null);
        const listContentRef = React13.useRef([]);
        const [selectedIndex, setSelectedIndex] = React13.useState(
          Math.max(0, listContentRef.current.indexOf(value))
        );
        const [valueNode, setValueNode] = React13.useState(null);
        const [valueNodeHasChildren, setValueNodeHasChildren] = React13.useState(false);
        (0, import_core28.useIsomorphicLayoutEffect)(() => {
          selectedIndexRef.current = selectedIndex;
          activeIndexRef.current = activeIndex;
        });
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AdaptProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_context.SelectProvider, {
            dir,
            blockSelection: false,
            size: sizeProp,
            fallback: false,
            selectedItem,
            setSelectedItem,
            forceUpdate,
            valueNode,
            onValueNodeChange: setValueNode,
            onValueNodeHasChildrenChange: setValueNodeHasChildren,
            valueNodeHasChildren,
            scopeKey,
            sheetBreakpoint,
            scope: __scopeSelect,
            setValueAtIndex: (index, value2) => {
              listContentRef.current[index] = value2;
            },
            activeIndex,
            onChange: setValue,
            selectedIndex,
            setActiveIndex,
            setOpen,
            setSelectedIndex,
            value,
            open,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectSheetController, {
              onOpenChange: setOpen,
              __scopeSelect,
              children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SelectImpl, {
                activeIndexRef,
                listContentRef,
                selectedIndexRef,
                ...props,
                open,
                value,
                children
              })
            })
          })
        });
      },
      {
        Adapt: import_adapt2.Adapt,
        Content: import_SelectContent.SelectContent,
        Group: SelectGroup,
        Icon: SelectIcon,
        Item: SelectItem,
        ItemIndicator: SelectItemIndicator,
        ItemText: SelectItemText,
        Label: SelectLabel,
        ScrollDownButton: import_SelectScrollButton.SelectScrollDownButton,
        ScrollUpButton: import_SelectScrollButton.SelectScrollUpButton,
        Trigger: SelectTrigger,
        Value: SelectValue,
        Viewport: import_SelectViewport.SelectViewport,
        Sheet: import_sheet2.ControlledSheet
      }
    );
    Select.displayName = import_constants.SELECT_NAME;
  }
});

// ../../node_modules/@tamagui/select/dist/cjs/index.js
var require_cjs36 = __commonJS({
  "../../node_modules/@tamagui/select/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Select(), module2.exports);
    __reExport2(src_exports, require_context(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js
var require_useDirection = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/useDirection.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var useDirection_exports = {};
    __export2(useDirection_exports, {
      DirectionProvider: () => DirectionProvider,
      Provider: () => Provider,
      useDirection: () => useDirection
    });
    module2.exports = __toCommonJS2(useDirection_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var React13 = __toESM2(require("react"));
    var DirectionContext = React13.createContext(void 0);
    var DirectionProvider = /* @__PURE__ */ __name((props) => {
      const { dir, children } = props;
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DirectionContext.Provider, {
        value: dir,
        children
      });
    }, "DirectionProvider");
    function useDirection(localDir) {
      const globalDir = React13.useContext(DirectionContext);
      return localDir || globalDir || "ltr";
    }
    __name(useDirection, "useDirection");
    var Provider = DirectionProvider;
  }
});

// ../../node_modules/@tamagui/use-direction/dist/cjs/index.js
var require_cjs37 = __commonJS({
  "../../node_modules/@tamagui/use-direction/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_useDirection(), module2.exports);
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/constants.js
var require_constants4 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      ARROW_KEYS: () => ARROW_KEYS,
      BACK_KEYS: () => BACK_KEYS,
      PAGE_KEYS: () => PAGE_KEYS,
      SLIDER_NAME: () => SLIDER_NAME,
      SliderOrientationProvider: () => SliderOrientationProvider,
      SliderProvider: () => SliderProvider,
      createSliderContext: () => createSliderContext,
      createSliderScope: () => createSliderScope,
      useSliderContext: () => useSliderContext,
      useSliderOrientationContext: () => useSliderOrientationContext
    });
    module2.exports = __toCommonJS2(constants_exports);
    var import_create_context4 = require_cjs3();
    var SLIDER_NAME = "Slider";
    var [createSliderContext, createSliderScope] = (0, import_create_context4.createContextScope)(SLIDER_NAME);
    var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
    var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
      startEdge: "left",
      endEdge: "right",
      sizeProp: "width",
      size: 0,
      direction: 1
    });
    var PAGE_KEYS = ["PageUp", "PageDown"];
    var ARROW_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    var BACK_KEYS = {
      ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
      rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
    };
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/helpers.js
var require_helpers = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/helpers.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var helpers_exports = {};
    __export2(helpers_exports, {
      convertValueToPercentage: () => convertValueToPercentage,
      getClosestValueIndex: () => getClosestValueIndex,
      getDecimalCount: () => getDecimalCount,
      getLabel: () => getLabel,
      getNextSortedValues: () => getNextSortedValues,
      getThumbInBoundsOffset: () => getThumbInBoundsOffset,
      hasMinStepsBetweenValues: () => hasMinStepsBetweenValues,
      linearScale: () => linearScale,
      roundValue: () => roundValue
    });
    module2.exports = __toCommonJS2(helpers_exports);
    function getNextSortedValues(prevValues = [], nextValue, atIndex) {
      const nextValues = [...prevValues];
      nextValues[atIndex] = nextValue;
      return nextValues.sort((a, b) => a - b);
    }
    __name(getNextSortedValues, "getNextSortedValues");
    function convertValueToPercentage(value, min, max) {
      const maxSteps = max - min;
      const percentPerStep = 100 / maxSteps;
      return percentPerStep * (value - min);
    }
    __name(convertValueToPercentage, "convertValueToPercentage");
    function getLabel(index, totalValues) {
      if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
      } else if (totalValues === 2) {
        return ["Minimum", "Maximum"][index];
      } else {
        return void 0;
      }
    }
    __name(getLabel, "getLabel");
    function getClosestValueIndex(values, nextValue) {
      if (values.length === 1)
        return 0;
      const distances = values.map((value) => Math.abs(value - nextValue));
      const closestDistance = Math.min(...distances);
      return distances.indexOf(closestDistance);
    }
    __name(getClosestValueIndex, "getClosestValueIndex");
    function getThumbInBoundsOffset(width, left, direction) {
      const halfWidth = width / 2;
      const halfPercent = 50;
      const offset = linearScale([0, halfPercent], [0, halfWidth]);
      return (halfWidth - offset(left) * direction) * direction;
    }
    __name(getThumbInBoundsOffset, "getThumbInBoundsOffset");
    function getStepsBetweenValues(values) {
      return values.slice(0, -1).map((value, index) => values[index + 1] - value);
    }
    __name(getStepsBetweenValues, "getStepsBetweenValues");
    function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
      if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
      }
      return true;
    }
    __name(hasMinStepsBetweenValues, "hasMinStepsBetweenValues");
    function linearScale(input, output) {
      return (value) => {
        if (input[0] === input[1] || output[0] === output[1])
          return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
      };
    }
    __name(linearScale, "linearScale");
    function getDecimalCount(value) {
      return (String(value).split(".")[1] || "").length;
    }
    __name(getDecimalCount, "getDecimalCount");
    function roundValue(value, decimalCount) {
      const rounder = Math.pow(10, decimalCount);
      return Math.round(value * rounder) / rounder;
    }
    __name(roundValue, "roundValue");
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js
var require_SliderImpl = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/SliderImpl.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var SliderImpl_exports = {};
    __export2(SliderImpl_exports, {
      DirectionalYStack: () => DirectionalYStack2,
      SliderFrame: () => SliderFrame2,
      SliderImpl: () => SliderImpl
    });
    module2.exports = __toCommonJS2(SliderImpl_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_core27 = require("@tamagui/core-node");
    var import_get_size2 = require_cjs10();
    var import_stacks9 = require_cjs12();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants4();
    var DirectionalYStack2 = (0, import_core27.styled)(import_stacks9.YStack, {
      variants: {
        orientation: {
          horizontal: {},
          vertical: {}
        }
      }
    });
    var SliderFrame2 = (0, import_core27.styled)(DirectionalYStack2, {
      position: "relative",
      variants: {
        size: (val, extras) => {
          const orientation = extras.props.orientation;
          const size = Math.round((0, import_core27.getVariableValue)((0, import_get_size2.getSize)(val)) / 6);
          if (orientation === "horizontal") {
            return {
              height: size,
              borderRadius: size,
              justifyContent: "center"
            };
          }
          return {
            width: size,
            borderRadius: size,
            alignItems: "center"
          };
        }
      }
    });
    var SliderImpl = React13.forwardRef(
      (props, forwardedRef) => {
        const {
          __scopeSlider,
          onSlideStart,
          onSlideMove,
          onSlideEnd,
          onHomeKeyDown,
          onEndKeyDown,
          onStepKeyDown,
          ...sliderProps
        } = props;
        const context = (0, import_constants.useSliderContext)(import_constants.SLIDER_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SliderFrame2, {
          size: "$4",
          ...sliderProps,
          "data-orientation": sliderProps.orientation,
          ref: forwardedRef,
          ...import_core27.isWeb && {
            onKeyDown: (event) => {
              if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
              } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
              } else if (import_constants.PAGE_KEYS.concat(import_constants.ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
              }
            }
          },
          onMoveShouldSetResponderCapture: () => true,
          onScrollShouldSetResponder: () => true,
          onScrollShouldSetResponderCapture: () => true,
          onMoveShouldSetResponder: () => true,
          onStartShouldSetResponder: () => true,
          onResponderTerminationRequest: () => {
            return false;
          },
          onResponderGrant: (0, import_core27.composeEventHandlers)(props.onResponderGrant, (event) => {
            const target = event.target;
            const isStartingOnThumb = context.thumbs.has(target);
            if (import_core27.isWeb && target instanceof HTMLElement) {
              if (context.thumbs.has(target)) {
                target.focus();
              }
            }
            onSlideStart(event, isStartingOnThumb ? "thumb" : "track");
          }),
          onResponderMove: (0, import_core27.composeEventHandlers)(props.onResponderMove, (event) => {
            event.preventDefault();
            event.stopPropagation();
            onSlideMove(event);
          }),
          onResponderRelease: (0, import_core27.composeEventHandlers)(props.onResponderRelease, (event) => {
            onSlideEnd(event);
          })
        });
      }
    );
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/Slider.js
var require_Slider = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/Slider.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Slider_exports = {};
    __export2(Slider_exports, {
      Range: () => Range,
      Slider: () => Slider,
      SliderThumb: () => SliderThumb,
      SliderThumbFrame: () => SliderThumbFrame,
      SliderTrack: () => SliderTrack,
      SliderTrackActive: () => SliderTrackActive,
      SliderTrackActiveFrame: () => SliderTrackActiveFrame,
      SliderTrackFrame: () => SliderTrackFrame,
      Thumb: () => Thumb,
      Track: () => Track
    });
    module2.exports = __toCommonJS2(Slider_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_get_size2 = require_cjs10();
    var import_helpers = require_cjs27();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var import_use_direction = require_cjs37();
    var React13 = __toESM2(require("react"));
    var import_constants = require_constants4();
    var import_helpers2 = require_helpers();
    var import_SliderImpl = require_SliderImpl();
    var SliderHorizontal = React13.forwardRef(
      (props, forwardedRef) => {
        const { min, max, dir, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const direction = (0, import_use_direction.useDirection)(dir);
        const isDirectionLTR = direction === "ltr";
        const sliderRef = React13.useRef(null);
        const [state, setState] = React13.useState(() => ({ size: 0, offset: 0 }));
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = isDirectionLTR ? [min, max] : [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: isDirectionLTR ? "left" : "right",
          endEdge: isDirectionLTR ? "right" : "left",
          direction: isDirectionLTR ? 1 : -1,
          sizeProp: "width",
          size: state.size,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs3.composeRefs)(forwardedRef, sliderRef),
            dir: direction,
            ...sliderProps,
            orientation: "horizontal",
            onLayout: () => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, width, _height, pageX, _pageY) => {
                setState({
                  size: width,
                  offset: pageX
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationX);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS[direction].includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var SliderVertical = React13.forwardRef(
      (props, forwardedRef) => {
        const { min, max, onSlideStart, onSlideMove, onStepKeyDown, ...sliderProps } = props;
        const [state, setState] = React13.useState(() => ({ size: 0, offset: 0 }));
        const sliderRef = React13.useRef(null);
        function getValueFromPointer(pointerPosition) {
          const input = [0, state.size];
          const output = [max, min];
          const value = (0, import_helpers2.linearScale)(input, output);
          return value(pointerPosition);
        }
        __name(getValueFromPointer, "getValueFromPointer");
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_constants.SliderOrientationProvider, {
          scope: props.__scopeSlider,
          startEdge: "bottom",
          endEdge: "top",
          sizeProp: "height",
          size: state.size,
          direction: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_SliderImpl.SliderImpl, {
            ref: (0, import_compose_refs3.composeRefs)(forwardedRef, sliderRef),
            ...sliderProps,
            orientation: "vertical",
            onLayout: ({ nativeEvent: { layout } }) => {
              var _a;
              (_a = sliderRef.current) == null ? void 0 : _a.measure((_x, _y, _width, height, _pageX, pageY) => {
                setState({
                  size: height,
                  offset: pageY
                });
              });
            },
            onSlideStart: (event, target) => {
              const value = getValueFromPointer(event.nativeEvent.locationY);
              if (value) {
                onSlideStart == null ? void 0 : onSlideStart(value, target);
              }
            },
            onSlideMove: (event) => {
              const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
              if (value) {
                onSlideMove == null ? void 0 : onSlideMove(value);
              }
            },
            onSlideEnd: () => {
            },
            onStepKeyDown: (event) => {
              const isBackKey = import_constants.BACK_KEYS.ltr.includes(event.key);
              onStepKeyDown == null ? void 0 : onStepKeyDown({ event, direction: isBackKey ? -1 : 1 });
            }
          })
        });
      }
    );
    var TRACK_NAME = "SliderTrack";
    var SliderTrackFrame = (0, import_core27.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrack",
      height: "100%",
      width: "100%",
      backgroundColor: "$background",
      position: "relative",
      borderRadius: 1e5,
      overflow: "hidden"
    });
    var SliderTrack = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...trackProps } = props;
        const context = (0, import_constants.useSliderContext)(TRACK_NAME, __scopeSlider);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SliderTrackFrame, {
          "data-disabled": context.disabled ? "" : void 0,
          "data-orientation": context.orientation,
          orientation: context.orientation,
          size: context.size,
          ...trackProps,
          ref: forwardedRef
        });
      }
    );
    SliderTrack.displayName = TRACK_NAME;
    var RANGE_NAME = "SliderTrackActive";
    var SliderTrackActiveFrame = (0, import_core27.styled)(import_SliderImpl.SliderFrame, {
      name: "SliderTrackActive",
      backgroundColor: "$background",
      position: "absolute"
    });
    var SliderTrackActive = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, ...rangeProps } = props;
        const context = (0, import_constants.useSliderContext)(RANGE_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(RANGE_NAME, __scopeSlider);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const valuesCount = context.values.length;
        const percentages = context.values.map(
          (value) => (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max)
        );
        const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
        const offsetEnd = 100 - Math.max(...percentages);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SliderTrackActiveFrame, {
          orientation: context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          size: context.size,
          ...rangeProps,
          ref: composedRefs,
          ...{
            [orientation.startEdge]: `${offsetStart}%`,
            [orientation.endEdge]: `${offsetEnd}%`
          },
          ...orientation.sizeProp === "width" ? {
            height: "100%"
          } : {
            left: 0,
            right: 0
          }
        });
      }
    );
    SliderTrackActive.displayName = RANGE_NAME;
    var THUMB_NAME = "SliderThumb";
    var getThumbSize = /* @__PURE__ */ __name((val) => {
      const size = typeof val === "number" ? val : (0, import_get_size2.getSize)(val, -1);
      return {
        width: size,
        height: size,
        minWidth: size,
        minHeight: size
      };
    }, "getThumbSize");
    var SliderThumbFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: "SliderThumb",
      position: "absolute",
      bordered: 2,
      borderWidth: 2,
      backgrounded: true,
      pressTheme: import_core27.isWeb,
      focusTheme: import_core27.isWeb,
      hoverTheme: import_core27.isWeb,
      variants: {
        size: {
          "...size": getThumbSize
        }
      }
    });
    var SliderThumb = React13.forwardRef(
      (props, forwardedRef) => {
        const { __scopeSlider, index, size: sizeProp, ...thumbProps } = props;
        const context = (0, import_constants.useSliderContext)(THUMB_NAME, __scopeSlider);
        const orientation = (0, import_constants.useSliderOrientationContext)(THUMB_NAME, __scopeSlider);
        const [thumb, setThumb] = React13.useState(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, (node) => setThumb(node));
        const value = context.values[index];
        const percent = value === void 0 ? 0 : (0, import_helpers2.convertValueToPercentage)(value, context.min, context.max);
        const label = (0, import_helpers2.getLabel)(index, context.values.length);
        const sizeIn = sizeProp ?? context.size ?? "$4";
        const [size, setSize] = React13.useState(() => {
          const estimatedSize = (0, import_core27.getVariableValue)(getThumbSize(sizeIn).width);
          return estimatedSize;
        });
        const thumbInBoundsOffset = size ? (0, import_helpers2.getThumbInBoundsOffset)(size, percent, orientation.direction) : 0;
        React13.useEffect(() => {
          if (thumb) {
            context.thumbs.add(thumb);
            return () => {
              context.thumbs.delete(thumb);
            };
          }
        }, [thumb, context.thumbs]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SliderThumbFrame, {
          ref: composedRefs,
          role: "slider",
          "aria-label": props["aria-label"] || label,
          "aria-valuemin": context.min,
          "aria-valuenow": value,
          "aria-valuemax": context.max,
          "aria-orientation": context.orientation,
          "data-orientation": context.orientation,
          "data-disabled": context.disabled ? "" : void 0,
          tabIndex: context.disabled ? void 0 : 0,
          ...thumbProps,
          ...context.orientation === "horizontal" ? {
            x: thumbInBoundsOffset - size / 2,
            y: -size / 2,
            top: "50%",
            ...size === 0 && {
              top: "auto",
              bottom: "auto"
            }
          } : {
            x: -size / 2,
            y: size / 2,
            left: "50%",
            ...size === 0 && {
              left: "auto",
              right: "auto"
            }
          },
          size: sizeIn,
          onLayout: (e) => {
            setSize(e.nativeEvent.layout[orientation.sizeProp]);
          },
          ...{
            [orientation.startEdge]: `${percent}%`
          },
          onFocus: (0, import_helpers.composeEventHandlers)(props.onFocus, () => {
            context.valueIndexToChangeRef.current = index;
          })
        });
      }
    );
    SliderThumb.displayName = THUMB_NAME;
    var Slider = (0, import_core27.withStaticProperties)(
      React13.forwardRef((props, forwardedRef) => {
        const {
          name,
          min = 0,
          max = 100,
          step = 1,
          orientation = "horizontal",
          disabled = false,
          minStepsBetweenThumbs = 0,
          defaultValue: defaultValue2 = [min],
          value,
          onValueChange = /* @__PURE__ */ __name(() => {
          }, "onValueChange"),
          size: sizeProp,
          ...sliderProps
        } = props;
        const sliderRef = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(sliderRef, forwardedRef);
        const thumbRefs = React13.useRef(/* @__PURE__ */ new Set());
        const valueIndexToChangeRef = React13.useRef(0);
        const isHorizontal = orientation === "horizontal";
        const [values = [], setValues] = (0, import_use_controllable_state2.useControllableState)({
          prop: value,
          defaultProp: defaultValue2,
          transition: true,
          onChange: (value2) => {
            var _a;
            if (import_core27.isWeb) {
              const thumbs = [...thumbRefs.current];
              (_a = thumbs[valueIndexToChangeRef.current]) == null ? void 0 : _a.focus();
            }
            onValueChange(value2);
          }
        });
        if (import_core27.isWeb) {
          React13.useEffect(() => {
            const node = sliderRef.current;
            if (!node)
              return;
            const preventDefault = /* @__PURE__ */ __name((e) => {
              e.preventDefault();
            }, "preventDefault");
            node.addEventListener("touchstart", preventDefault);
            return () => {
              node.removeEventListener("touchstart", preventDefault);
            };
          }, []);
        }
        function handleSlideMove(value2) {
          updateValues(value2, valueIndexToChangeRef.current);
        }
        __name(handleSlideMove, "handleSlideMove");
        function updateValues(value2, atIndex) {
          const decimalCount = (0, import_helpers2.getDecimalCount)(step);
          const snapToStep = (0, import_helpers2.roundValue)(
            Math.round((value2 - min) / step) * step + min,
            decimalCount
          );
          const nextValue = (0, import_helpers.clamp)(snapToStep, [min, max]);
          setValues((prevValues = []) => {
            const nextValues = (0, import_helpers2.getNextSortedValues)(prevValues, nextValue, atIndex);
            if ((0, import_helpers2.hasMinStepsBetweenValues)(nextValues, minStepsBetweenThumbs * step)) {
              valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
              return String(nextValues) === String(prevValues) ? prevValues : nextValues;
            } else {
              return prevValues;
            }
          });
        }
        __name(updateValues, "updateValues");
        const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_constants.SliderProvider, {
          scope: props.__scopeSlider,
          disabled,
          min,
          max,
          valueIndexToChangeRef,
          thumbs: thumbRefs.current,
          values,
          orientation,
          size: sizeProp,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SliderOriented, {
            "aria-disabled": disabled,
            "data-disabled": disabled ? "" : void 0,
            ...sliderProps,
            ref: composedRefs,
            min,
            max,
            onSlideStart: disabled ? void 0 : (value2, target) => {
              if (target !== "thumb") {
                const closestIndex = (0, import_helpers2.getClosestValueIndex)(values, value2);
                updateValues(value2, closestIndex);
              }
            },
            onSlideMove: disabled ? void 0 : handleSlideMove,
            onHomeKeyDown: () => !disabled && updateValues(min, 0),
            onEndKeyDown: () => !disabled && updateValues(max, values.length - 1),
            onStepKeyDown: ({ event, direction: stepDirection }) => {
              if (!disabled) {
                const isPageKey = import_constants.PAGE_KEYS.includes(event.key);
                const isSkipKey = isPageKey || event.shiftKey && import_constants.ARROW_KEYS.includes(event.key);
                const multiplier = isSkipKey ? 10 : 1;
                const atIndex = valueIndexToChangeRef.current;
                const value2 = values[atIndex];
                const stepInDirection = step * multiplier * stepDirection;
                updateValues(value2 + stepInDirection, atIndex);
              }
            }
          })
        });
      }),
      {
        Track: SliderTrack,
        TrackActive: SliderTrackActive,
        Thumb: SliderThumb
      }
    );
    Slider.displayName = import_constants.SLIDER_NAME;
    var Track = SliderTrack;
    var Range = SliderTrackActive;
    var Thumb = SliderThumb;
  }
});

// ../../node_modules/@tamagui/slider/dist/cjs/index.js
var require_cjs38 = __commonJS({
  "../../node_modules/@tamagui/slider/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      DirectionalYStack: () => import_SliderImpl.DirectionalYStack,
      SliderFrame: () => import_SliderImpl.SliderFrame
    });
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Slider(), module2.exports);
    var import_SliderImpl = require_SliderImpl();
  }
});

// ../../node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist3 = __commonJS({
  "../../node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e;
    var r;
    var u = (e = {}, r = require("react"), Object.keys(r).forEach(function(u2) {
      "default" !== u2 && "__esModule" !== u2 && Object.defineProperty(e, u2, { enumerable: true, get: function() {
        return r[u2];
      } });
    }), e);
    exports.usePrevious = function(e2) {
      const r2 = u.useRef({ value: e2, previous: e2 });
      return u.useMemo(() => (r2.current.value !== e2 && (r2.current.previous = r2.current.value, r2.current.value = e2), r2.current.previous), [e2]);
    };
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/Label.js
var require_Label = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/Label.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Label_exports = {};
    __export2(Label_exports, {
      Label: () => Label2,
      LabelFrame: () => LabelFrame2,
      useLabelContext: () => useLabelContext2
    });
    module2.exports = __toCommonJS2(Label_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_get_button_sized5 = require_cjs11();
    var import_get_font_sized4 = require_cjs19();
    var import_text5 = require_cjs20();
    var React13 = __toESM2(require("react"));
    var NAME3 = "Label";
    var [LabelProvider2, useLabelContextImpl2] = (0, import_create_context4.createContext)(NAME3, {
      id: void 0,
      controlRef: { current: null }
    });
    var LabelFrame2 = (0, import_core27.styled)(import_text5.SizableText, {
      name: "Label",
      tag: "label",
      size: "$true",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      selectable: false,
      cursor: "default",
      pressStyle: {
        color: "$colorPress"
      },
      variants: {
        size: {
          "...size": (val, extras) => {
            const buttonStyle = (0, import_get_button_sized5.getButtonSized)(val, extras);
            return {
              ...(0, import_get_font_sized4.getFontSized)(val, extras),
              height: buttonStyle.height,
              lineHeight: buttonStyle.height
            };
          }
        }
      }
    });
    var LabelComponent2 = React13.forwardRef(
      (props, forwardedRef) => {
        const { htmlFor, id: idProp, ...labelProps } = props;
        const controlRef = React13.useRef(null);
        const ref = React13.useRef(null);
        const composedRefs = (0, import_compose_refs3.useComposedRefs)(forwardedRef, ref);
        const backupId = (0, import_core27.useId)();
        const id = idProp ?? backupId;
        if (import_core27.isWeb) {
          React13.useEffect(() => {
            if (htmlFor) {
              const element = document.getElementById(htmlFor);
              const label = ref.current;
              if (label && element) {
                const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
                const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
                element.setAttribute("aria-labelledby", ariaLabelledBy);
                controlRef.current = element;
                return () => {
                  var _a;
                  if (!id)
                    return;
                  const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
                  if (ariaLabelledBy2 === "") {
                    element.removeAttribute("aria-labelledby");
                  } else if (ariaLabelledBy2) {
                    element.setAttribute("aria-labelledby", ariaLabelledBy2);
                  }
                };
              }
            }
          }, [id, htmlFor]);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LabelProvider2, {
          id,
          controlRef,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(LabelFrame2, {
            role: "label",
            id,
            ...labelProps,
            ref: composedRefs,
            onMouseDown: (event) => {
              var _a;
              (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
              if (!event.defaultPrevented && event.detail > 1) {
                event.preventDefault();
              }
            },
            onPress: (event) => {
              var _a;
              (_a = props.onPress) == null ? void 0 : _a.call(props, event);
              if (import_core27.isWeb) {
                if (!controlRef.current || event.defaultPrevented)
                  return;
                const isClickingControl = controlRef.current.contains(
                  event.target
                );
                const isUserClick = event.isTrusted === true;
                if (!isClickingControl && isUserClick) {
                  controlRef.current.click();
                  controlRef.current.focus();
                }
              } else {
                if (props.htmlFor) {
                  (0, import_focusable4.focusFocusable)(props.htmlFor);
                }
              }
            }
          })
        });
      }
    );
    LabelComponent2.displayName = NAME3;
    var Label2 = LabelFrame2.extractable((0, import_core27.themeable)(LabelComponent2), {
      neverFlatten: true
    });
    var useLabelContext2 = /* @__PURE__ */ __name((element) => {
      const context = useLabelContextImpl2("LabelConsumer");
      const { controlRef } = context;
      React13.useEffect(() => {
        if (element)
          controlRef.current = element;
      }, [element, controlRef]);
      return context.id;
    }, "useLabelContext");
  }
});

// ../../node_modules/@tamagui/label/dist/cjs/index.js
var require_cjs39 = __commonJS({
  "../../node_modules/@tamagui/label/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Label(), module2.exports);
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/Switch.js
var require_Switch = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/Switch.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Switch_exports = {};
    __export2(Switch_exports, {
      Switch: () => Switch,
      SwitchFrame: () => SwitchFrame,
      SwitchThumb: () => SwitchThumb,
      SwitchThumbFrame: () => SwitchThumbFrame,
      createSwitchScope: () => createSwitchScope
    });
    module2.exports = __toCommonJS2(Switch_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_use_previous = require_dist3();
    var import_compose_refs3 = require_cjs2();
    var import_core27 = require("@tamagui/core-node");
    var import_create_context4 = require_cjs3();
    var import_focusable4 = require_cjs29();
    var import_get_size2 = require_cjs10();
    var import_label = require_cjs39();
    var import_stacks9 = require_cjs12();
    var import_use_controllable_state2 = require_cjs16();
    var React13 = __toESM2(require("react"));
    var SWITCH_NAME = "Switch";
    var getSwitchHeight = /* @__PURE__ */ __name((val) => Math.round((0, import_core27.getVariableValue)((0, import_get_size2.getSize)(val)) * 0.65), "getSwitchHeight");
    var getSwitchWidth = /* @__PURE__ */ __name((val) => getSwitchHeight(val) * 2, "getSwitchWidth");
    var scopeContexts = (0, import_create_context4.createContextScope)(SWITCH_NAME);
    var [createSwitchContext] = scopeContexts;
    var createSwitchScope = scopeContexts[1];
    var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
    var THUMB_NAME = "SwitchThumb";
    var SwitchThumbFrame = (0, import_core27.styled)(import_stacks9.ThemeableStack, {
      name: "SwitchThumb",
      backgroundColor: "$background",
      borderRadius: 1e3,
      variants: {
        size: {
          "...size": (val) => {
            const size = getSwitchHeight(val);
            return {
              height: size,
              width: size
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var SwitchThumb = SwitchThumbFrame.extractable(
      React13.forwardRef(
        (props, forwardedRef) => {
          const { __scopeSwitch, ...thumbProps } = props;
          const { size, disabled, checked } = useSwitchContext(THUMB_NAME, __scopeSwitch);
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SwitchThumbFrame, {
            size,
            "data-state": getState2(checked),
            "data-disabled": disabled ? "" : void 0,
            ...thumbProps,
            x: checked ? (0, import_core27.getVariableValue)(getSwitchWidth(size)) - (0, import_core27.getVariableValue)(getSwitchHeight(size)) : 0,
            ref: forwardedRef
          });
        }
      )
    );
    SwitchThumb.displayName = THUMB_NAME;
    var SwitchFrame = (0, import_core27.styled)(import_stacks9.XStack, {
      name: "Switch",
      tag: "button",
      borderRadius: 1e3,
      borderWidth: 2,
      borderColor: "transparent",
      backgroundColor: "$background",
      focusStyle: {
        borderColor: "$borderColorFocus"
      },
      variants: {
        size: {
          "...size": (val) => {
            const height = getSwitchHeight(val) + 4;
            const width = getSwitchWidth(val) + 4;
            return {
              height,
              minHeight: height,
              width
            };
          }
        }
      },
      defaultVariants: {
        size: "$true"
      }
    });
    var Switch = (0, import_core27.withStaticProperties)(
      SwitchFrame.extractable(
        React13.forwardRef(
          (props, forwardedRef) => {
            const {
              __scopeSwitch,
              labeledBy: ariaLabelledby,
              name,
              checked: checkedProp,
              defaultChecked,
              required,
              disabled,
              value = "on",
              onCheckedChange,
              size = "$true",
              ...switchProps
            } = props;
            const [button, setButton] = React13.useState(null);
            const composedRefs = (0, import_compose_refs3.useComposedRefs)(
              forwardedRef,
              (node) => setButton(node)
            );
            const labelId = (0, import_label.useLabelContext)(button);
            const labelledBy = ariaLabelledby || labelId;
            const hasConsumerStoppedPropagationRef = React13.useRef(false);
            const isFormControl = import_core27.isWeb ? button ? Boolean(button.closest("form")) : true : false;
            const [checked = false, setChecked] = (0, import_use_controllable_state2.useControllableState)({
              prop: checkedProp,
              defaultProp: defaultChecked || false,
              onChange: onCheckedChange,
              transition: true
            });
            if (!import_core27.isWeb) {
              React13.useEffect(() => {
                if (!props.id)
                  return;
                return (0, import_focusable4.registerFocusable)(props.id, {
                  focus: () => {
                    setChecked((x) => !x);
                  }
                });
              }, [props.id, setChecked]);
            }
            return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(SwitchProvider, {
              scope: __scopeSwitch,
              checked,
              disabled,
              size,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SwitchFrame, {
                  size,
                  role: "switch",
                  "aria-checked": checked,
                  "aria-labelledby": labelledBy,
                  "aria-required": required,
                  "data-state": getState2(checked),
                  "data-disabled": disabled ? "" : void 0,
                  disabled,
                  theme: checked ? "active" : null,
                  themeShallow: true,
                  tabIndex: disabled ? void 0 : 0,
                  value,
                  ...switchProps,
                  ref: composedRefs,
                  onPress: (event) => {
                    var _a;
                    (_a = props.onPress) == null ? void 0 : _a.call(props, event);
                    setChecked((prevChecked) => !prevChecked);
                    if (import_core27.isWeb && isFormControl) {
                      hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                      if (!hasConsumerStoppedPropagationRef.current)
                        event.stopPropagation();
                    }
                  }
                }),
                import_core27.isWeb && isFormControl && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(BubbleInput, {
                  control: button,
                  bubbles: !hasConsumerStoppedPropagationRef.current,
                  name,
                  value,
                  checked,
                  required,
                  disabled,
                  style: { transform: "translateX(-100%)" }
                })
              ]
            });
          }
        )
      ),
      {
        Thumb: SwitchThumb
      }
    );
    var BubbleInput = /* @__PURE__ */ __name((props) => {
      const { control, checked, bubbles = true, ...inputProps } = props;
      const ref = React13.useRef(null);
      const prevChecked = (0, import_react_use_previous.usePrevious)(checked);
      React13.useEffect(() => {
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(
          inputProto,
          "checked"
        );
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
          const event = new Event("click", { bubbles });
          setChecked.call(input, checked);
          input.dispatchEvent(event);
        }
      }, [prevChecked, checked, bubbles]);
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
          ...props.style,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      });
    }, "BubbleInput");
    function getState2(checked) {
      return checked ? "checked" : "unchecked";
    }
    __name(getState2, "getState");
  }
});

// ../../node_modules/@tamagui/switch/dist/cjs/index.js
var require_cjs40 = __commonJS({
  "../../node_modules/@tamagui/switch/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Switch(), module2.exports);
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js
var require_Tooltip = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/Tooltip.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var Tooltip_exports = {};
    __export2(Tooltip_exports, {
      Tooltip: () => Tooltip,
      TooltipGroup: () => TooltipGroup
    });
    module2.exports = __toCommonJS2(Tooltip_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_polyfill_dev = require_polyfill_dev();
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core27 = require("@tamagui/core-node");
    var import_get_size2 = require_cjs10();
    var import_popover = require_cjs33();
    var import_popper = require_cjs32();
    var React13 = __toESM2(require("react"));
    var TooltipContent = React13.forwardRef(
      ({ __scopePopover, ...props }, ref) => {
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const popper = (0, import_popper.usePopperContext)("PopperContent", popperScope["__scopePopper"]);
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popover.PopoverContent, {
          componentName: "TooltipContent",
          disableRemoveScroll: true,
          trapFocus: false,
          padding: props.size || popper.size || "$2",
          pointerEvents: "none",
          ref,
          ...props
        });
      }
    );
    var TooltipArrow = React13.forwardRef((props, ref) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popover.PopoverArrow, {
        componentName: "TooltipArrow",
        ref,
        ...props
      });
    });
    var TooltipGroup = /* @__PURE__ */ __name(({ children, delay }) => {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_dom_interactions.FloatingDelayGroup, {
        delay: React13.useMemo(() => delay, [JSON.stringify(delay)]),
        children
      });
    }, "TooltipGroup");
    var Tooltip = (0, import_core27.withStaticProperties)(
      (props) => {
        const {
          __scopePopover,
          children,
          restMs = 500,
          delay: delayProp,
          onOpenChange: onOpenChangeProp,
          ...restProps
        } = props;
        const popperScope = (0, import_popover.usePopoverScope)(__scopePopover);
        const triggerRef = React13.useRef(null);
        const [hasCustomAnchor, setHasCustomAnchor] = React13.useState(false);
        const { delay: delayGroup, setCurrentId } = (0, import_react_dom_interactions.useDelayGroupContext)();
        const delay = delayProp ?? delayGroup;
        const [open, setOpen] = React13.useState(false);
        const id = props.groupId;
        const onOpenChange = (0, import_core27.useEvent)((open2) => {
          setOpen(open2);
          if (open2) {
            setCurrentId(id);
          }
          onOpenChangeProp == null ? void 0 : onOpenChangeProp(open2);
        });
        const useFloatingFn = /* @__PURE__ */ __name((props2) => {
          const floating = (0, import_react_dom_interactions.useFloating)({
            ...props2,
            open,
            onOpenChange
          });
          const { getReferenceProps, getFloatingProps } = (0, import_react_dom_interactions.useInteractions)([
            (0, import_react_dom_interactions.useHover)(floating.context, { delay, restMs }),
            (0, import_react_dom_interactions.useFocus)(floating.context),
            (0, import_react_dom_interactions.useRole)(floating.context, { role: "tooltip" }),
            (0, import_react_dom_interactions.useDismiss)(floating.context),
            (0, import_react_dom_interactions.useDelayGroup)(floating.context, { id })
          ]);
          return {
            ...floating,
            getReferenceProps,
            getFloatingProps
          };
        }, "useFloatingFn");
        const useFloatingContext = React13.useCallback(useFloatingFn, [id, delay, open]);
        const onCustomAnchorAdd = React13.useCallback(() => setHasCustomAnchor(true), []);
        const onCustomAnchorRemove = React13.useCallback(() => setHasCustomAnchor(false), []);
        const contentId = (0, import_core27.useId)();
        const size = `$${(0, import_get_size2.stepTokenUpOrDown)("size", "$true", -2).key}`;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.FloatingOverrideContext.Provider, {
          value: useFloatingContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popper.Popper, {
            size,
            ...popperScope,
            ...restProps,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_popover.__PopoverProviderInternal, {
              scope: __scopePopover,
              popperScope: popperScope.__scopePopper,
              contentId,
              triggerRef,
              sheetBreakpoint: false,
              scopeKey: "",
              open,
              onOpenChange: setOpen,
              onOpenToggle: voidFn,
              hasCustomAnchor,
              onCustomAnchorAdd,
              onCustomAnchorRemove,
              children
            })
          })
        });
      },
      {
        Anchor: import_popover.PopoverAnchor,
        Arrow: TooltipArrow,
        Content: TooltipContent,
        Trigger: import_popover.PopoverTrigger
      }
    );
    Tooltip.displayName = "Tooltip";
    var voidFn = /* @__PURE__ */ __name(() => {
    }, "voidFn");
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js
var require_TooltipSimple = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/TooltipSimple.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var TooltipSimple_exports = {};
    __export2(TooltipSimple_exports, {
      TooltipSimple: () => TooltipSimple
    });
    module2.exports = __toCommonJS2(TooltipSimple_exports);
    var import_jsx_runtime12 = require("react/jsx-runtime");
    var import_react_dom_interactions = require_floating_ui_react_dom_interactions_umd();
    var import_core27 = require("@tamagui/core-node");
    var import_text5 = require_cjs20();
    var import_Tooltip = require_Tooltip();
    var TooltipSimple = /* @__PURE__ */ __name(({
      label,
      children,
      contentProps,
      ...tooltipProps
    }) => {
      let context;
      try {
        context = (0, import_react_dom_interactions.useDelayGroupContext)();
      } catch {
      }
      const contents = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_Tooltip.Tooltip, {
        ...tooltipProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_Tooltip.Tooltip.Trigger, {
            asChild: true,
            children
          }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_core27.Theme, {
            inverse: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_Tooltip.Tooltip.Content, {
              zIndex: 1e6,
              enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 },
              x: 0,
              scale: 1,
              y: 0,
              elevation: "$0.5",
              opacity: 1,
              animation: [
                "quick",
                {
                  opacity: {
                    overshootClamping: true
                  }
                }
              ],
              ...contentProps,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_Tooltip.Tooltip.Arrow, {}),
                /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_text5.Paragraph, {
                  size: "$2",
                  lineHeight: "$0",
                  children: label
                })
              ]
            })
          })
        ]
      });
      if (!context) {
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_Tooltip.TooltipGroup, {
          delay: defaultTooltipDelay,
          children: contents
        });
      }
      return contents;
    }, "TooltipSimple");
    var defaultTooltipDelay = { open: 3e3, close: 100 };
  }
});

// ../../node_modules/@tamagui/tooltip/dist/cjs/index.js
var require_cjs41 = __commonJS({
  "../../node_modules/@tamagui/tooltip/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_Tooltip(), module2.exports);
    __reExport2(src_exports, require_TooltipSimple(), module2.exports);
  }
});

// ../../node_modules/@tamagui/use-debounce/dist/cjs/index.js
var require_cjs42 = __commonJS({
  "../../node_modules/@tamagui/use-debounce/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      debounce: () => debounce,
      useDebounce: () => useDebounce,
      useDebounceValue: () => useDebounceValue
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_react10 = require("react");
    function debounce(func, wait, leading) {
      let timeout;
      let isCancelled = false;
      function debounced() {
        isCancelled = false;
        const context = this;
        const args = arguments;
        if (leading && !timeout) {
          func.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          timeout = null;
          if (!(leading || isCancelled)) {
            func.apply(context, args);
          }
          isCancelled = false;
        }, wait);
      }
      __name(debounced, "debounced");
      debounced.cancel = () => {
        isCancelled = true;
      };
      return debounced;
    }
    __name(debounce, "debounce");
    var defaultOpts = { leading: false };
    function useDebounce(fn, wait, options = defaultOpts, mountArgs = []) {
      const dbEffect = (0, import_react10.useRef)(null);
      (0, import_react10.useEffect)(() => {
        return () => {
          var _a;
          (_a = dbEffect.current) == null ? void 0 : _a.cancel();
        };
      }, []);
      return (0, import_react10.useMemo)(() => {
        dbEffect.current = debounce(fn, wait, options.leading);
        return dbEffect.current;
      }, [options.leading, ...mountArgs]);
    }
    __name(useDebounce, "useDebounce");
    function useDebounceValue(val, amt = 0) {
      const [state, setState] = (0, import_react10.useState)(val);
      (0, import_react10.useEffect)(() => {
        const tm = setTimeout(() => {
          setState((prev) => {
            if (prev === val)
              return prev;
            return val;
          });
        }, amt);
        return () => {
          clearTimeout(tm);
        };
      }, [val]);
      return state;
    }
    __name(useDebounceValue, "useDebounceValue");
  }
});

// ../../node_modules/@tamagui/constants/dist/cjs/constants.js
var require_constants5 = __commonJS({
  "../../node_modules/@tamagui/constants/dist/cjs/constants.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var constants_exports = {};
    __export2(constants_exports, {
      isChrome: () => isChrome2,
      isClient: () => isClient3,
      isRSC: () => isRSC3,
      isServer: () => isServer2,
      isTouchable: () => isTouchable2,
      isWeb: () => isWeb8,
      isWebTouchable: () => isWebTouchable2,
      isWindowDefined: () => isWindowDefined,
      useIsomorphicLayoutEffect: () => useIsomorphicLayoutEffect3
    });
    module2.exports = __toCommonJS2(constants_exports);
    var import_react10 = require("react");
    var import_meta = {};
    var isWeb8 = process.env.TAMAGUI_TARGET === "web";
    var isWindowDefined = typeof window !== "undefined";
    var isServer2 = isWeb8 && !isWindowDefined;
    var isClient3 = isWeb8 && isWindowDefined;
    var isRSC3 = process.env.ENABLE_RSC ? import_meta.env ? import_meta.env.SSR : false : false;
    var idFn4 = /* @__PURE__ */ __name(() => {
    }, "idFn");
    var useIsomorphicLayoutEffect3 = isRSC3 ? idFn4 : isServer2 ? import_react10.useEffect : import_react10.useLayoutEffect;
    var isChrome2 = typeof navigator !== "undefined" && /Chrome/.test(navigator.userAgent || "");
    var isWebTouchable2 = isClient3 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    var isTouchable2 = !isWeb8 || isWebTouchable2;
    if (process.env.NODE_ENV === "development") {
      if (!process.env.TAMAGUI_TARGET) {
        console.warn(`Must set TAMAGUI_TARGET to "web" or "native"`);
      } else if (isClient3 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1") {
        console.warn(
          `Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this`
        );
      }
    }
  }
});

// ../../node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js
var require_cjs43 = __commonJS({
  "../../node_modules/@tamagui/use-window-dimensions/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      useWindowDimensions: () => useWindowDimensions
    });
    module2.exports = __toCommonJS2(src_exports);
    var import_constants = require_constants5();
    var import_react10 = require("react");
    var import_react_native8 = require("react-native-web-lite");
    var initialValue = {
      fontScale: 1,
      height: 800,
      width: 600,
      scale: 1
    };
    function useWindowDimensions() {
      const [state, setState] = (0, import_react10.useState)(initialValue);
      const current = (0, import_react_native8.useWindowDimensions)();
      (0, import_constants.useIsomorphicLayoutEffect)(() => {
        setState(current);
      }, [current.height, current.width, current.fontScale, current.scale]);
      return state;
    }
    __name(useWindowDimensions, "useWindowDimensions");
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js
var require_VisuallyHidden = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/VisuallyHidden.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var VisuallyHidden_exports = {};
    __export2(VisuallyHidden_exports, {
      VisuallyHidden: () => VisuallyHidden
    });
    module2.exports = __toCommonJS2(VisuallyHidden_exports);
    var import_core27 = require("@tamagui/core-node");
    var VisuallyHidden = (0, import_core27.styled)(import_core27.Stack, {
      position: "absolute",
      width: 1,
      height: 1,
      margin: -1,
      zIndex: -1e4,
      overflow: "hidden",
      opacity: 1e-8,
      pointerEvents: "none",
      variants: {
        preserveDimensions: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto"
          }
        },
        visible: {
          true: {
            position: "relative",
            width: "auto",
            height: "auto",
            margin: 0,
            zIndex: 1,
            overflow: "visible",
            opacity: 1,
            pointerEvents: "auto"
          }
        }
      }
    });
    VisuallyHidden["isVisuallyHidden"] = true;
  }
});

// ../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js
var require_cjs44 = __commonJS({
  "../../node_modules/@tamagui/visually-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __reExport2 = /* @__PURE__ */ __name((target, mod, secondTarget) => (__copyProps2(target, mod, "default"), secondTarget && __copyProps2(secondTarget, mod, "default")), "__reExport");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    module2.exports = __toCommonJS2(src_exports);
    __reExport2(src_exports, require_VisuallyHidden(), module2.exports);
  }
});

// ../../node_modules/tamagui/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  Anchor: () => Anchor,
  Article: () => Article,
  Aside: () => Aside,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarFallbackFrame: () => AvatarFallbackFrame,
  AvatarFrame: () => AvatarFrame,
  AvatarImage: () => AvatarImage,
  Button: () => Button2,
  ButtonFrame: () => ButtonFrame,
  ButtonText: () => ButtonText,
  Card: () => Card,
  CardBackground: () => CardBackground,
  CardFooter: () => CardFooter,
  CardFrame: () => CardFrame,
  CardHeader: () => CardHeader,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogPortalFrame: () => DialogPortalFrame,
  DialogSheetContents: () => DialogSheetContents,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DialogWarningProvider: () => DialogWarningProvider,
  EnsureFlexed: () => EnsureFlexed,
  Fieldset: () => Fieldset,
  FontLanguage: () => import_core26.FontLanguage,
  Footer: () => Footer,
  Form: () => Form,
  Grid: () => Grid,
  GroupFrame: () => GroupFrame,
  H1: () => H1,
  H2: () => H2,
  H3: () => H3,
  H4: () => H4,
  H5: () => H5,
  H6: () => H6,
  Header: () => Header,
  Heading: () => Heading,
  Input: () => Input,
  InputFrame: () => InputFrame,
  Label: () => Label,
  LabelFrame: () => LabelFrame,
  Main: () => Main,
  Nav: () => Nav,
  Paragraph: () => Paragraph,
  Section: () => Section,
  SizableStack: () => SizableStack,
  SizableText: () => SizableText,
  Spacer: () => import_core26.Spacer,
  Spinner: () => Spinner,
  Stack: () => import_core26.Stack,
  TamaguiProvider: () => TamaguiProvider,
  Text: () => import_core26.Text,
  TextAncestorContext: () => import_core26.TextAncestorContext,
  TextArea: () => TextArea,
  TextAreaFrame: () => TextAreaFrame,
  Theme: () => import_core26.Theme,
  ThemeableStack: () => ThemeableStack,
  Unspaced: () => import_core26.Unspaced,
  XGroup: () => XGroup,
  XStack: () => XStack,
  YGroup: () => YGroup,
  YStack: () => YStack,
  ZStack: () => ZStack,
  addTheme: () => import_core26.addTheme,
  buttonStaticConfig: () => buttonStaticConfig,
  composeRefs: () => composeRefs,
  createAvatarScope: () => createAvatarScope,
  createComponent: () => import_core26.createComponent,
  createDialogScope: () => createDialogScope,
  createFont: () => import_core26.createFont,
  createShorthands: () => import_core26.createShorthands,
  createTamagui: () => createTamagui,
  createTheme: () => import_core26.createTheme,
  createTokens: () => import_core26.createTokens,
  createVariable: () => import_core26.createVariable,
  getAnimationDriver: () => import_core26.getAnimationDriver,
  getConfig: () => import_core26.getConfig,
  getElevation: () => getElevation,
  getMedia: () => import_core26.getMedia,
  getSizedElevation: () => getSizedElevation,
  getStylesAtomic: () => import_core26.getStylesAtomic,
  getThemes: () => import_core26.getThemes,
  getTokens: () => import_core26.getTokens,
  getVariable: () => import_core26.getVariable,
  getVariableName: () => import_core26.getVariableName,
  getVariableValue: () => import_core26.getVariableValue,
  idFn: () => idFn,
  insertFont: () => import_core26.insertFont,
  isChrome: () => import_core26.isChrome,
  isClient: () => import_core26.isClient,
  isServer: () => import_core26.isServer,
  isServerSide: () => isServerSide,
  isTamaguiComponent: () => import_core26.isTamaguiComponent,
  isTamaguiElement: () => import_core26.isTamaguiElement,
  isTouchable: () => import_core26.isTouchable,
  isVariable: () => import_core26.isVariable,
  isWeb: () => import_core26.isWeb,
  isWebTouchable: () => import_core26.isWebTouchable,
  matchMedia: () => import_core26.matchMedia,
  mediaObjectToString: () => import_core26.mediaObjectToString,
  mediaQueryConfig: () => import_core26.mediaQueryConfig,
  mediaState: () => import_core26.mediaState,
  spacedChildren: () => import_core26.spacedChildren,
  styled: () => import_core26.styled,
  themeable: () => import_core26.themeable,
  updateTheme: () => import_core26.updateTheme,
  useButton: () => useButton,
  useComposedRefs: () => useComposedRefs,
  useControllableState: () => useControllableState,
  useDidFinishSSR: () => import_core26.useDidFinishSSR,
  useEvent: () => import_core26.useEvent,
  useForceUpdate: () => useForceUpdate,
  useGet: () => import_core26.useGet,
  useIsTouchDevice: () => import_core26.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core26.useIsomorphicLayoutEffect,
  useLabelContext: () => useLabelContext,
  useMedia: () => import_core26.useMedia,
  useSafeRef: () => import_core26.useSafeRef,
  useTheme: () => import_core26.useTheme,
  useThemeName: () => import_core26.useThemeName,
  variableToString: () => import_core26.variableToString,
  withStaticProperties: () => import_core26.withStaticProperties,
  wrapChildrenInText: () => wrapChildrenInText
});
module.exports = __toCommonJS(esm_exports);

// ../../node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var React = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = React;
(0, import_core.setupReactNative)({
  View: import_react_native.View,
  Text: import_react_native.Text
});
if (typeof requestAnimationFrame === "undefined") {
  globalThis["requestAnimationFrame"] = setImmediate;
}
var cancelAnimationFrame2 = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (x) => {
  try {
    cancelAnimationFrame2(x);
  } catch {
  }
};
var idFn = /* @__PURE__ */ __name(() => {
}, "idFn");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs()), module.exports);
__reExport(esm_exports, __toESM(require_cjs22()), module.exports);
__reExport(esm_exports, __toESM(require_cjs5()), module.exports);

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core5 = require("@tamagui/core-node");
var import_create_context = __toESM(require_cjs3());
var import_image = __toESM(require_cjs23());
var import_shapes = __toESM(require_cjs24());

// ../../node_modules/@tamagui/stacks/dist/esm/Stacks.js
var import_core2 = require("@tamagui/core-node");
var getElevation = /* @__PURE__ */ __name((size, extras) => {
  if (!size)
    return;
  const { tokens } = extras;
  const token = tokens.size[size];
  const sizeNum = (0, import_core2.isVariable)(token) ? +token.val : size;
  return getSizedElevation(sizeNum, extras);
}, "getElevation");
var fullscreenStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};
var variants = {
  fullscreen: {
    true: fullscreenStyle
  },
  elevation: {
    "...size": getElevation
  }
};
var YStack = (0, import_core2.styled)(import_core2.Stack, {
  flexDirection: "column",
  name: "YStack",
  variants
});
var XStack = (0, import_core2.styled)(import_core2.Stack, {
  flexDirection: "row",
  name: "XStack",
  variants
});
var ZStack = (0, import_core2.styled)(
  YStack,
  {
    name: "ZStack",
    position: "relative"
  },
  {
    neverFlatten: true,
    isZStack: true
  }
);
var getSizedElevation = /* @__PURE__ */ __name((val, { theme, tokens }) => {
  let num = 0;
  if (val === true) {
    const val2 = (0, import_core2.getVariableValue)(tokens.size["true"]);
    if (typeof val2 === "number") {
      num = val2;
    } else {
      num = 10;
    }
  } else {
    num = +val;
  }
  if (process.env.NODE_ENV === "development") {
    if (num !== null && isNaN(num)) {
      console.warn("NaN shadow", num, val);
    }
  }
  const [height, shadowRadius] = [Math.round(num / 4 + 1), Math.round(num / 2 + 2)];
  const shadow = {
    shadowColor: theme.shadowColor,
    shadowRadius,
    shadowOffset: { height, width: 0 }
  };
  return shadow;
}, "getSizedElevation");

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core3 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs11());

// ../../node_modules/@tamagui/stacks/dist/esm/variants.js
var elevate = {
  true: (_, extras) => {
    return getElevation(extras.props["size"], extras);
  }
};
var bordered = /* @__PURE__ */ __name((val, { props }) => {
  return {
    borderWidth: typeof val === "number" ? val : 1,
    borderColor: "$borderColor",
    ...props.hoverTheme && {
      hoverStyle: {
        borderColor: "$borderColorHover"
      }
    },
    ...props.pressTheme && {
      pressStyle: {
        borderColor: "$borderColorPress"
      }
    },
    ...props.focusTheme && {
      focusStyle: {
        borderColor: "$borderColorFocus"
      }
    }
  };
}, "bordered");
var padded = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      padding: tokens.space[props.size] || tokens.space["$4"]
    };
  }
};
var radiused = {
  true: (_, extras) => {
    const { tokens, props } = extras;
    return {
      borderRadius: tokens.radius[props.size] || tokens.radius["$4"]
    };
  }
};
var circular = {
  true: (_, { props, tokens }) => {
    const size = tokens.size[props.size];
    return {
      width: size,
      height: size,
      maxWidth: size,
      maxHeight: size,
      minWidth: size,
      minHeight: size,
      borderRadius: 1e5,
      padding: 0
    };
  }
};
var hoverTheme = {
  true: {
    hoverStyle: {
      backgroundColor: "$backgroundHover",
      borderColor: "$borderColorHover"
    }
  },
  false: {}
};
var pressTheme = {
  true: {
    pressStyle: {
      backgroundColor: "$backgroundPress",
      borderColor: "$borderColorPress"
    }
  },
  false: {}
};
var focusTheme = {
  true: {
    focusStyle: {
      backgroundColor: "$backgroundFocus",
      borderColor: "$borderColorFocus"
    }
  },
  false: {}
};

// ../../node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var SizableStack = (0, import_core3.styled)(YStack, {
  name: "SizableStack",
  backgroundColor: "$background",
  flexDirection: "row",
  flexShrink: 1,
  variants: {
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    elevate,
    bordered,
    size: {
      "...size": import_get_button_sized.getButtonSized
    }
  }
});

// ../../node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core4 = require("@tamagui/core-node");
var chromelessStyle = {
  backgroundColor: "transparent",
  borderColor: "transparent",
  shadowColor: "transparent"
};
var ThemeableStack = (0, import_core4.styled)(YStack, {
  name: "SizableStack",
  variants: {
    backgrounded: {
      true: {
        backgroundColor: "$background"
      }
    },
    radiused,
    hoverTheme,
    pressTheme,
    focusTheme,
    circular,
    padded,
    elevate,
    bordered,
    transparent: {
      true: {
        backgroundColor: "transparent"
      }
    },
    chromeless: {
      true: chromelessStyle,
      all: {
        ...chromelessStyle,
        hoverStyle: chromelessStyle,
        pressStyle: chromelessStyle,
        focusStyle: chromelessStyle
      }
    }
  }
});

// ../../node_modules/@tamagui/avatar/dist/esm/Avatar.js
var React2 = __toESM(require("react"));
var AVATAR_NAME = "Avatar";
var [createAvatarContext, createAvatarScope] = (0, import_create_context.createContextScope)(AVATAR_NAME);
var [AvatarProvider, useAvatarContext] = createAvatarContext(AVATAR_NAME);
var IMAGE_NAME = "AvatarImage";
var AvatarImage = React2.forwardRef(
  (props, forwardedRef) => {
    var _a;
    const { __scopeAvatar, src, onLoadingStatusChange = /* @__PURE__ */ __name(() => {
    }, "onLoadingStatusChange"), ...imageProps } = props;
    const context = useAvatarContext(IMAGE_NAME, __scopeAvatar);
    const [status, setStatus] = React2.useState("idle");
    const extras = (0, import_core5.getVariantExtras)(props);
    const shapeSize = (0, import_core5.getVariableValue)(
      (_a = (0, import_shapes.getShapeSize)(context.size, extras)) == null ? void 0 : _a.width
    );
    React2.useEffect(() => {
      setStatus("idle");
    }, [JSON.stringify(src)]);
    React2.useEffect(() => {
      onLoadingStatusChange(status);
      context.onImageLoadingStatusChange(status);
    }, [status]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YStack, {
      fullscreen: true,
      zIndex: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.Image, {
        fullscreen: true,
        ...typeof shapeSize === "number" && !isNaN(shapeSize) && {
          width: shapeSize,
          height: shapeSize
        },
        ...imageProps,
        ref: forwardedRef,
        src,
        onError: () => {
          setStatus("error");
        },
        onLoad: () => {
          setStatus("loaded");
        }
      })
    });
  }
);
AvatarImage.displayName = IMAGE_NAME;
var FALLBACK_NAME = "AvatarFallback";
var AvatarFallbackFrame = (0, import_core5.styled)(YStack, {
  name: FALLBACK_NAME,
  position: "absolute",
  fullscreen: true,
  zIndex: 0
});
var AvatarFallback = AvatarFallbackFrame.extractable(
  React2.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, delayMs, ...fallbackProps } = props;
      const context = useAvatarContext(FALLBACK_NAME, __scopeAvatar);
      const [canRender, setCanRender] = React2.useState(delayMs === void 0);
      React2.useEffect(() => {
        if (delayMs !== void 0) {
          const timerId = setTimeout(() => setCanRender(true), delayMs);
          return () => clearTimeout(timerId);
        }
      }, [delayMs]);
      return canRender && context.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallbackFrame, {
        ...fallbackProps,
        ref: forwardedRef
      }) : null;
    }
  )
);
AvatarFallback.displayName = FALLBACK_NAME;
var AvatarFrame = (0, import_core5.styled)(import_shapes.Square, {
  name: AVATAR_NAME,
  position: "relative",
  overflow: "hidden"
});
var Avatar = (0, import_core5.withStaticProperties)(
  React2.forwardRef(
    (props, forwardedRef) => {
      const { __scopeAvatar, size = "$true", ...avatarProps } = props;
      const [imageLoadingStatus, setImageLoadingStatus] = React2.useState("idle");
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarProvider, {
        size,
        scope: __scopeAvatar,
        imageLoadingStatus,
        onImageLoadingStatusChange: setImageLoadingStatus,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFrame, {
          size,
          ...avatarProps,
          ref: forwardedRef
        })
      });
    }
  ),
  {
    Image: AvatarImage,
    Fallback: AvatarFallback
  }
);
Avatar.displayName = AVATAR_NAME;

// ../../node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime3 = require("react/jsx-runtime");
var import_core9 = require("@tamagui/core-node");
var import_font_size = __toESM(require_cjs25());
var import_get_button_sized2 = __toESM(require_cjs11());
var import_helpers_tamagui = __toESM(require_cjs28());

// ../../node_modules/@tamagui/text/dist/esm/SizableText.js
var import_core6 = require("@tamagui/core-node");
var import_get_font_sized = __toESM(require_cjs19());
var SizableText = (0, import_core6.styled)(import_core6.Text, {
  name: "SizableText",
  fontFamily: "$body",
  variants: {
    size: import_get_font_sized.getFontSized
  },
  defaultVariants: {
    size: "$true"
  }
});

// ../../node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_core7 = require("@tamagui/core-node");
var Paragraph = (0, import_core7.styled)(SizableText, {
  name: "Paragraph",
  tag: "p",
  selectable: true
});

// ../../node_modules/@tamagui/text/dist/esm/Headings.js
var import_core8 = require("@tamagui/core-node");
var Heading = (0, import_core8.styled)(Paragraph, {
  tag: "span",
  name: "Heading",
  accessibilityRole: "header",
  fontFamily: "$heading",
  size: "$8",
  margin: 0
});
var H1 = (0, import_core8.styled)(Heading, {
  name: "H1",
  tag: "h1",
  size: "$10"
});
var H2 = (0, import_core8.styled)(Heading, {
  name: "H2",
  tag: "h2",
  size: "$9"
});
var H3 = (0, import_core8.styled)(Heading, {
  name: "H3",
  tag: "h3",
  size: "$8"
});
var H4 = (0, import_core8.styled)(Heading, {
  name: "H4",
  tag: "h4",
  size: "$7"
});
var H5 = (0, import_core8.styled)(Heading, {
  name: "H5",
  tag: "h5",
  size: "$6"
});
var H6 = (0, import_core8.styled)(Heading, {
  name: "H6",
  tag: "h6",
  size: "$5"
});

// ../../node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var import_react = __toESM(require("react"));
function wrapChildrenInText(TextComponent, propsIn) {
  const {
    children,
    textProps,
    size,
    noTextWrap,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    letterSpacing,
    textAlign
  } = propsIn;
  if (noTextWrap || !children) {
    return children;
  }
  const allChildren = import_react.default.Children.toArray(children);
  const nextChildren = [];
  let lastIsString = false;
  const props = {};
  if (color)
    props.color = color;
  if (fontFamily)
    props.fontFamily = fontFamily;
  if (fontSize)
    props.fontSize = fontSize;
  if (fontWeight)
    props.fontWeight = fontWeight;
  if (letterSpacing)
    props.letterSpacing = letterSpacing;
  if (textAlign)
    props.textAlign = textAlign;
  if (size)
    props.size = size;
  function concatStringChildren() {
    if (!lastIsString)
      return;
    const index = nextChildren.length - 1;
    const childrenStrings = nextChildren[index];
    nextChildren[index] = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TextComponent, {
      ...props,
      ...textProps,
      children: childrenStrings
    }, index);
  }
  __name(concatStringChildren, "concatStringChildren");
  for (const child of allChildren) {
    const last = nextChildren[nextChildren.length - 1];
    const isString = typeof child === "string";
    if (isString) {
      if (lastIsString) {
        last.push(child);
      } else {
        nextChildren.push([child]);
      }
    } else {
      concatStringChildren();
      nextChildren.push(child);
    }
    lastIsString = isString;
  }
  concatStringChildren();
  return nextChildren;
}
__name(wrapChildrenInText, "wrapChildrenInText");

// ../../node_modules/@tamagui/button/dist/esm/Button.js
var import_react2 = require("react");
var NAME = "Button";
var ButtonFrame = (0, import_core9.styled)(ThemeableStack, {
  name: NAME,
  tag: "button",
  focusable: true,
  hoverTheme: true,
  pressTheme: true,
  backgrounded: true,
  borderWidth: 1,
  borderColor: "transparent",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  flexDirection: "row",
  cursor: "pointer",
  pressStyle: {
    borderColor: "transparent"
  },
  hoverStyle: {
    borderColor: "transparent"
  },
  focusStyle: {
    borderColor: "$borderColorFocus"
  },
  variants: {
    size: {
      "...size": import_get_button_sized2.getButtonSized
    },
    active: {
      true: {
        hoverStyle: {
          backgroundColor: "$background"
        }
      }
    },
    disabled: {
      true: {
        pointerEvents: "none"
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var ButtonText = (0, import_core9.styled)(SizableText, {
  color: "$color",
  userSelect: "none",
  cursor: "pointer",
  flexGrow: 0,
  flexShrink: 1,
  ellipse: true
});
function useButton(propsIn, { Text: Text5 = ButtonText } = { Text: ButtonText }) {
  const {
    children,
    icon,
    iconAfter,
    noTextWrap,
    theme: themeName,
    space,
    spaceFlex,
    scaleIcon = 1,
    scaleSpace = 0.66,
    separator,
    color,
    fontWeight,
    letterSpacing,
    fontSize,
    fontFamily,
    textAlign,
    textProps,
    ...rest
  } = propsIn;
  const isNested = import_core9.isRSC ? false : (0, import_react2.useContext)(import_core9.ButtonNestingContext);
  const propsActive = (0, import_core9.useMediaPropsActive)(propsIn);
  const size = propsActive.size || "$4";
  const iconSize = (typeof size === "number" ? size * 0.5 : (0, import_font_size.getFontSize)(size)) * scaleIcon;
  const getThemedIcon = (0, import_helpers_tamagui.useGetThemedIcon)({ size: iconSize, color });
  const [themedIcon, themedIconAfter] = [icon, iconAfter].map(getThemedIcon);
  const spaceSize = (0, import_core9.getVariableValue)(iconSize) * scaleSpace;
  const contents = wrapChildrenInText(Text5, propsActive);
  const inner = themedIcon || themedIconAfter ? (0, import_core9.spacedChildren)({
    space: spaceSize,
    spaceFlex,
    separator,
    direction: propsActive.flexDirection === "column" || propsActive.flexDirection === "column-reverse" ? "vertical" : "horizontal",
    children: [themedIcon, contents, themedIconAfter]
  }) : contents;
  const tag = isNested ? "span" : propsIn.accessibilityRole === "link" ? "a" : void 0;
  const props = {
    ...propsActive.disabled && {
      focusable: void 0,
      focusStyle: {
        borderColor: "$background"
      }
    },
    tag,
    ...rest,
    children: import_core9.isRSC ? inner : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core9.ButtonNestingContext.Provider, {
      value: true,
      children: inner
    })
  };
  return {
    spaceSize,
    isNested,
    props
  };
}
__name(useButton, "useButton");
var ButtonComponent = (0, import_react2.forwardRef)(/* @__PURE__ */ __name(function Button(props, ref) {
  const { props: buttonProps } = useButton(props);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ButtonFrame, {
    ...buttonProps,
    ref
  });
}, "Button"));
var buttonStaticConfig = {
  inlineProps: /* @__PURE__ */ new Set([
    "color",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "letterSpacing",
    "textAlign"
  ])
};
var Button2 = ButtonFrame.extractable(
  (0, import_core9.themeable)(ButtonComponent, ButtonFrame.staticConfig),
  buttonStaticConfig
);

// ../../node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_core10 = require("@tamagui/core-node");
var import_react3 = __toESM(require("react"));
var CardFrame = (0, import_core10.styled)(ThemeableStack, {
  name: "Card",
  backgroundColor: "$background",
  position: "relative",
  overflow: "hidden",
  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          borderRadius: tokens.radius[val] ?? val
        };
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var CardHeader = (0, import_core10.styled)(ThemeableStack, {
  name: "CardHeader",
  zIndex: 10,
  backgroundColor: "transparent",
  marginBottom: "auto",
  variants: {
    size: {
      "...size": (val, { tokens }) => {
        return {
          padding: tokens.space[val] ?? val
        };
      }
    }
  }
});
var CardFooter = (0, import_core10.styled)(CardHeader, {
  name: "CardFooter",
  zIndex: 5,
  flexDirection: "row",
  marginTop: "auto",
  marginBottom: 0
});
var CardBackground = (0, import_core10.styled)(ThemeableStack, {
  name: "CardBackground",
  zIndex: 0,
  fullscreen: true,
  overflow: "hidden",
  pointerEvents: "none",
  padding: 0
});
var Card = (0, import_core10.withStaticProperties)(
  CardFrame.extractable(
    (0, import_react3.forwardRef)(
      ({ size, __scopeCard, children, ...props }, ref) => {
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardFrame, {
          ref,
          ...props,
          children: import_react3.default.Children.map(children, (child) => {
            if ((0, import_core10.isTamaguiElement)(child) && !child.props.size) {
              return (0, import_react3.cloneElement)(child, {
                size
              });
            }
            return child;
          })
        });
      }
    )
  ),
  {
    Header: CardHeader,
    Footer: CardFooter,
    Background: CardBackground
  }
);

// ../../node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var React5 = __toESM(require("react"));
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ;
    ref.current = value;
  }
}
__name(setRef, "setRef");
function composeRefs(...refs) {
  return (node) => refs.forEach((ref) => setRef(ref, node));
}
__name(composeRefs, "composeRefs");
function useComposedRefs(...refs) {
  return React5.useCallback(composeRefs(...refs), refs);
}
__name(useComposedRefs, "useComposedRefs");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs3()), module.exports);

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_adapt = __toESM(require_cjs());
var import_animate_presence = __toESM(require_cjs5());
var import_aria_hidden = __toESM(require_cjs6());
var import_core11 = require("@tamagui/core-node");
var import_create_context2 = __toESM(require_cjs3());
var import_dismissable = __toESM(require_cjs8());
var import_focus_scope = __toESM(require_cjs9());
var import_portal = __toESM(require_cjs13());
var import_remove_scroll = __toESM(require_cjs14());
var import_sheet = __toESM(require_cjs18());

// ../../node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react4 = require("react");
var isWeb = process.env.TAMAGUI_TARGET === "web";
var isClient = typeof window !== "undefined";
var useIsomorphicLayoutEffect = !isWeb || isClient ? import_react4.useLayoutEffect : import_react4.useEffect;
function useGet(currentValue, initialValue, forwardToFunction) {
  const curRef = (0, import_react4.useRef)(initialValue ?? currentValue);
  useIsomorphicLayoutEffect(() => {
    curRef.current = currentValue;
  });
  return (0, import_react4.useCallback)(
    forwardToFunction ? (...args) => {
      var _a;
      return (_a = curRef.current) == null ? void 0 : _a.apply(null, args);
    } : () => curRef.current,
    []
  );
}
__name(useGet, "useGet");

// ../../node_modules/@tamagui/use-event/dist/esm/useEvent.js
function useEvent(callback) {
  return useGet(callback, defaultValue, true);
}
__name(useEvent, "useEvent");
var defaultValue = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "defaultValue");

// ../../node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react5 = require("react");
var emptyCallbackFn = /* @__PURE__ */ __name((_) => _(), "emptyCallbackFn");
function useControllableState({
  prop,
  defaultProp,
  onChange,
  strategy = "prop-wins",
  preventUpdate,
  transition
}) {
  const [state, setState] = (0, import_react5.useState)(prop ?? defaultProp);
  const previous = (0, import_react5.useRef)(state);
  const propWins = strategy === "prop-wins" && prop !== void 0;
  const value = propWins ? prop : state;
  const onChangeCb = useEvent(onChange || idFn2);
  const transitionFn = transition ? import_react5.startTransition : emptyCallbackFn;
  (0, import_react5.useEffect)(() => {
    if (prop === void 0)
      return;
    previous.current = prop;
    transitionFn(() => {
      setState(prop);
    });
  }, [prop]);
  (0, import_react5.useEffect)(() => {
    if (propWins)
      return;
    if (state !== previous.current) {
      previous.current = state;
      onChangeCb(state);
    }
  }, [onChangeCb, state, propWins]);
  const setter = useEvent((next) => {
    if (preventUpdate)
      return;
    if (propWins) {
      const nextValue = typeof next === "function" ? next(previous.current) : next;
      onChangeCb(nextValue);
    } else {
      transitionFn(() => {
        setState(next);
      });
    }
  });
  return [value, setter];
}
__name(useControllableState, "useControllableState");
var idFn2 = /* @__PURE__ */ __name(() => {
}, "idFn");

// ../../node_modules/@tamagui/dialog/dist/esm/Dialog.js
var React6 = __toESM(require("react"));
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = (0, import_create_context2.createContextScope)(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var TRIGGER_NAME = "DialogTrigger";
var DialogTriggerFrame = (0, import_core11.styled)(YStack, {
  name: TRIGGER_NAME
});
var DialogTrigger = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogTriggerFrame, {
      tag: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": context.open,
      "aria-controls": context.contentId,
      "data-state": getState(context.open),
      ...triggerProps,
      ref: composedTriggerRef,
      onPress: (0, import_core11.composeEventHandlers)(props.onPress, context.onOpenToggle)
    });
  }
);
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(
  PORTAL_NAME,
  {
    forceMount: void 0
  }
);
var DialogPortalFrame = (0, import_core11.styled)(YStack, {
  alignItems: "center",
  justifyContent: "center",
  fullscreen: true,
  zIndex: 100,
  ...import_core11.isWeb && {
    maxHeight: "100vh",
    position: "fixed"
  }
});
var DialogPortalItem = /* @__PURE__ */ __name((props) => {
  const themeName = (0, import_core11.useThemeName)();
  const context = useDialogContext(PORTAL_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalItem, {
    hostName: props.hostName,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItemContent, {
      ...props,
      themeName,
      context
    })
  });
}, "DialogPortalItem");
function DialogPortalItemContent(props) {
  const {
    __scopeDialog,
    children,
    context,
    themeName,
    space,
    spaceDirection,
    separator
  } = props;
  let childrenSpaced = children;
  if (space || separator) {
    childrenSpaced = (0, import_core11.spacedChildren)({
      children,
      separator,
      space,
      direction: spaceDirection
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogProvider, {
    scope: __scopeDialog,
    ...context,
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_core11.Theme, {
      name: themeName,
      children: childrenSpaced
    })
  });
}
__name(DialogPortalItemContent, "DialogPortalItemContent");
var DialogPortal = /* @__PURE__ */ __name((props) => {
  const { __scopeDialog, forceMount, children, ...frameProps } = props;
  const context = useDialogContext(PORTAL_NAME, __scopeDialog);
  const isShowing = forceMount || context.open;
  const [isFullyHidden, setIsFullyHidden] = React6.useState(!isShowing);
  if (isShowing && isFullyHidden) {
    setIsFullyHidden(false);
  }
  const contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_animate_presence.AnimatePresence, {
    onExitComplete: () => {
      setIsFullyHidden(true);
    },
    children: isShowing ? children : null
  });
  const isSheet = useShowDialogSheet(context);
  if (isSheet) {
    return children;
  }
  if (context.modal) {
    if (isFullyHidden) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItem, {
      __scopeDialog,
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalFrame, {
          pointerEvents: isShowing ? "auto" : "none",
          ...frameProps,
          children: contents
        })
      })
    });
  }
  return contents;
}, "DialogPortal");
DialogPortal.displayName = PORTAL_NAME;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlayFrame = (0, import_core11.styled)(ThemeableStack, {
  name: OVERLAY_NAME,
  backgrounded: true,
  fullscreen: true
});
var DialogOverlay = React6.forwardRef(
  ({ __scopeDialog, ...props }, forwardedRef) => {
    const portalContext = usePortalContext(OVERLAY_NAME, __scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    const showSheet = useShowDialogSheet(context);
    if (!forceMount) {
      if (!context.modal || showSheet) {
        return null;
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogOverlayImpl, {
      context,
      ...overlayProps,
      ref: forwardedRef
    });
  }
);
DialogOverlay.displayName = OVERLAY_NAME;
var DialogOverlayImpl = React6.forwardRef(
  (props, forwardedRef) => {
    const { context, ...overlayProps } = props;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogOverlayFrame, {
      "data-state": getState(context.open),
      pointerEvents: context.open ? "auto" : "none",
      ...overlayProps,
      ref: forwardedRef
    });
  }
);
var CONTENT_NAME = "DialogContent";
var DialogContentFrame = (0, import_core11.styled)(ThemeableStack, {
  name: CONTENT_NAME,
  tag: "dialog",
  position: "relative",
  backgrounded: true,
  padded: true,
  radiused: true,
  elevate: true,
  variants: {
    size: {
      "...size": (val, extras) => {
        return {};
      }
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var DialogContent = DialogContentFrame.extractable(
  React6.forwardRef(
    ({ __scopeDialog, ...props }, forwardedRef) => {
      const portalContext = usePortalContext(CONTENT_NAME, __scopeDialog);
      const { forceMount = portalContext.forceMount, ...contentProps } = props;
      const context = useDialogContext(CONTENT_NAME, __scopeDialog);
      const contents = context.modal ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentModal, {
        context,
        ...contentProps,
        ref: forwardedRef
      }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentNonModal, {
        context,
        ...contentProps,
        ref: forwardedRef
      });
      if (!import_core11.isWeb) {
        return contents;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_remove_scroll.RemoveScroll, {
        forwardProps: true,
        enabled: context.open,
        allowPinchZoom: context.allowPinchZoom,
        shards: [context.contentRef],
        removeScrollBar: false,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", {
          className: "_dsp_contents",
          children: contents
        })
      });
    }
  )
);
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = React6.forwardRef(
  ({ children, context, ...props }, forwardedRef) => {
    const contentRef = React6.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    if (import_core11.isWeb) {
      React6.useEffect(() => {
        if (!context.open)
          return;
        const content = contentRef.current;
        if (content)
          return (0, import_aria_hidden.hideOthers)(content);
      }, [context.open]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentImpl, {
      ...props,
      context,
      ref: composedRefs,
      disableOutsidePointerEvents: true,
      onCloseAutoFocus: (0, import_core11.composeEventHandlers)(props.onCloseAutoFocus, (event) => {
        var _a;
        event.preventDefault();
        (_a = context.triggerRef.current) == null ? void 0 : _a.focus();
      }),
      onPointerDownOutside: (0, import_core11.composeEventHandlers)(
        props.onPointerDownOutside,
        (event) => {
          const originalEvent = event["detail"].originalEvent;
          const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
          const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
          if (isRightClick)
            event.preventDefault();
        }
      ),
      onFocusOutside: (0, import_core11.composeEventHandlers)(
        props.onFocusOutside,
        (event) => event.preventDefault()
      ),
      children
    });
  }
);
var DialogContentNonModal = React6.forwardRef(
  (props, forwardedRef) => {
    const hasInteractedOutsideRef = React6.useRef(false);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentImpl, {
      ...props,
      ref: forwardedRef,
      trapFocus: false,
      disableOutsidePointerEvents: false,
      onCloseAutoFocus: (event) => {
        var _a, _b;
        (_a = props.onCloseAutoFocus) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented) {
          if (!hasInteractedOutsideRef.current) {
            (_b = props.context.triggerRef.current) == null ? void 0 : _b.focus();
          }
          event.preventDefault();
        }
        hasInteractedOutsideRef.current = false;
      },
      onInteractOutside: (event) => {
        var _a;
        (_a = props.onInteractOutside) == null ? void 0 : _a.call(props, event);
        if (!event.defaultPrevented)
          hasInteractedOutsideRef.current = true;
        const target = event.target;
        const trigger = props.context.triggerRef.current;
        if (!(trigger instanceof HTMLElement))
          return;
        const targetIsTrigger = trigger.contains(target);
        if (targetIsTrigger)
          event.preventDefault();
      }
    });
  }
);
var DialogContentImpl = React6.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeDialog,
      trapFocus,
      onOpenAutoFocus,
      onCloseAutoFocus,
      disableOutsidePointerEvents,
      onEscapeKeyDown,
      onPointerDownOutside,
      onFocusOutside,
      onInteractOutside,
      context,
      ...contentProps
    } = props;
    const contentRef = React6.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    const showSheet = useShowDialogSheet(context);
    const contents = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogContentFrame, {
      id: context.contentId,
      "aria-describedby": context.descriptionId,
      "aria-labelledby": context.titleId,
      "data-state": getState(context.open),
      ...contentProps
    });
    if (showSheet) {
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogPortalItem, {
        hostName: getSheetContentsName(context),
        children: contentProps.children
      });
    }
    if (!import_core11.isWeb) {
      return contents;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_focus_scope.FocusScope, {
          loop: true,
          trapped: trapFocus,
          onMountAutoFocus: onOpenAutoFocus,
          forceUnmount: !context.open,
          onUnmountAutoFocus: onCloseAutoFocus,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dismissable.Dismissable, {
            disableOutsidePointerEvents: context.open && disableOutsidePointerEvents,
            forceUnmount: !context.open,
            onEscapeKeyDown,
            onPointerDownOutside,
            onFocusOutside,
            onInteractOutside,
            ref: composedRefs,
            onDismiss: () => context.onOpenChange(false),
            children: contents
          })
        }),
        process.env.NODE_ENV === "development" && /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TitleWarning, {
              titleId: context.titleId
            }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DescriptionWarning, {
              contentRef,
              descriptionId: context.descriptionId
            })
          ]
        })
      ]
    });
  }
);
var TITLE_NAME = "DialogTitle";
var DialogTitleFrame = (0, import_core11.styled)(H2, {
  name: TITLE_NAME
});
var DialogTitle = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogTitleFrame, {
      id: context.titleId,
      ...titleProps,
      ref: forwardedRef
    });
  }
);
DialogTitle.displayName = TITLE_NAME;
var DialogDescriptionFrame = (0, import_core11.styled)(Paragraph, {
  name: "DialogDescription"
});
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogDescriptionFrame, {
      id: context.descriptionId,
      ...descriptionProps,
      ref: forwardedRef
    });
  }
);
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = React6.forwardRef(
  (props, forwardedRef) => {
    const { __scopeDialog, displayWhenAdapted, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    const isSheet = useShowDialogSheet(context);
    if (isSheet && !displayWhenAdapted) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(YStack, {
      tag: "button",
      ...closeProps,
      ref: forwardedRef,
      onPress: (0, import_core11.composeEventHandlers)(
        props.onPress,
        () => context.onOpenChange(false)
      )
    });
  }
);
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
__name(getState, "getState");
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [DialogWarningProvider, useWarningContext] = (0, import_create_context2.createContext)(TITLE_WARNING_NAME, {
  contentName: CONTENT_NAME,
  titleName: TITLE_NAME,
  docsSlug: "dialog"
});
var TitleWarning = /* @__PURE__ */ __name(({ titleId }) => {
  if (process.env.NODE_ENV === "development") {
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    React6.useEffect(() => {
      if (!import_core11.isWeb)
        return;
      if (titleId) {
        const hasTitle = document.getElementById(titleId);
        if (!hasTitle) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, titleId]);
  }
  return null;
}, "TitleWarning");
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = /* @__PURE__ */ __name(({
  contentRef,
  descriptionId
}) => {
  if (process.env.NODE_ENV === "development") {
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    React6.useEffect(() => {
      if (!import_core11.isWeb)
        return;
      const contentNode = contentRef.current;
      if (!(contentNode instanceof HTMLElement)) {
        return;
      }
      const describedById = contentNode.getAttribute("aria-describedby");
      if (descriptionId && describedById) {
        const hasDescription = document.getElementById(descriptionId);
        if (!hasDescription) {
          console.warn(MESSAGE);
        }
      }
    }, [MESSAGE, contentRef, descriptionId]);
  }
  return null;
}, "DescriptionWarning");
var Dialog = (0, import_core11.withStaticProperties)(
  React6.forwardRef(/* @__PURE__ */ __name(function Dialog2(props, ref) {
    const {
      __scopeDialog,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      modal = true,
      allowPinchZoom = false
    } = props;
    const scopeId = (0, import_core11.useId)();
    const contentId = (0, import_core11.useId)();
    const titleId = (0, import_core11.useId)();
    const descriptionId = (0, import_core11.useId)();
    const scopeKey = __scopeDialog ? Object.keys(__scopeDialog)[0] : scopeId;
    const sheetContentsName = getSheetContentsName({ scopeKey, contentId });
    const triggerRef = React6.useRef(null);
    const contentRef = React6.useRef(null);
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChange
    });
    const onOpenToggle = React6.useCallback(
      () => setOpen((prevOpen) => !prevOpen),
      [setOpen]
    );
    const context = {
      scope: __scopeDialog,
      scopeKey,
      triggerRef,
      contentRef,
      contentId,
      titleId,
      descriptionId,
      open,
      onOpenChange: setOpen,
      onOpenToggle,
      modal,
      allowPinchZoom
    };
    const { when, AdaptProvider } = (0, import_adapt.useAdaptParent)({
      Contents: React6.useCallback(
        (props2) => {
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalHost, {
            forwardProps: props2,
            name: sheetContentsName
          });
        },
        [sheetContentsName]
      )
    });
    React6.useImperativeHandle(
      ref,
      () => ({
        open: setOpen
      }),
      [setOpen]
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AdaptProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogProvider, {
        ...context,
        sheetBreakpoint: when,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DialogSheetController, {
          onOpenChange: setOpen,
          __scopeDialog,
          children
        })
      })
    });
  }, "Dialog2")),
  {
    Trigger: DialogTrigger,
    Portal: DialogPortal,
    Overlay: DialogOverlay,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Close: DialogClose,
    Sheet: import_sheet.ControlledSheet,
    Adapt: import_adapt.Adapt
  }
);
var SHEET_CONTENTS_NAME = "DialogSheetContents";
var DialogSheetContents = /* @__PURE__ */ __name(({
  name,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_portal.PortalHost, {
    forwardProps: props,
    name
  });
}, "DialogSheetContents");
DialogSheetContents.displayName = SHEET_CONTENTS_NAME;
var getSheetContentsName = /* @__PURE__ */ __name(({
  scopeKey,
  contentId
}) => `${scopeKey || contentId}SheetContents`, "getSheetContentsName");
var DialogSheetController = /* @__PURE__ */ __name((props) => {
  const context = useDialogContext("DialogSheetController", props.__scopeDialog);
  const showSheet = useShowDialogSheet(context);
  const breakpointActive = useSheetBreakpointActive(context);
  const getShowSheet = (0, import_core11.useGet)(showSheet);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_sheet.SheetController, {
    onOpenChange: (val) => {
      if (getShowSheet()) {
        props.onOpenChange(val);
      }
    },
    open: context.open,
    hidden: breakpointActive === false,
    children: props.children
  });
}, "DialogSheetController");
var useSheetBreakpointActive = /* @__PURE__ */ __name((context) => {
  const media = (0, import_core11.useMedia)();
  return context.sheetBreakpoint ? media[context.sheetBreakpoint] : false;
}, "useSheetBreakpointActive");
var useShowDialogSheet = /* @__PURE__ */ __name((context) => {
  const breakpointActive = useSheetBreakpointActive(context);
  return context.open === false ? false : breakpointActive;
}, "useShowDialogSheet");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs25()), module.exports);
__reExport(esm_exports, __toESM(require_cjs28()), module.exports);
__reExport(esm_exports, __toESM(require_cjs23()), module.exports);

// ../../node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime6 = require("react/jsx-runtime");
var import_core12 = require("@tamagui/core-node");
var import_create_context3 = __toESM(require_cjs3());
var import_focusable = __toESM(require_cjs29());
var import_get_button_sized3 = __toESM(require_cjs11());
var import_get_font_sized2 = __toESM(require_cjs19());
var React7 = __toESM(require("react"));
var NAME2 = "Label";
var [LabelProvider, useLabelContextImpl] = (0, import_create_context3.createContext)(NAME2, {
  id: void 0,
  controlRef: { current: null }
});
var LabelFrame = (0, import_core12.styled)(SizableText, {
  name: "Label",
  tag: "label",
  size: "$true",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  selectable: false,
  cursor: "default",
  pressStyle: {
    color: "$colorPress"
  },
  variants: {
    size: {
      "...size": (val, extras) => {
        const buttonStyle = (0, import_get_button_sized3.getButtonSized)(val, extras);
        return {
          ...(0, import_get_font_sized2.getFontSized)(val, extras),
          height: buttonStyle.height,
          lineHeight: buttonStyle.height
        };
      }
    }
  }
});
var LabelComponent = React7.forwardRef(
  (props, forwardedRef) => {
    const { htmlFor, id: idProp, ...labelProps } = props;
    const controlRef = React7.useRef(null);
    const ref = React7.useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const backupId = (0, import_core12.useId)();
    const id = idProp ?? backupId;
    if (import_core12.isWeb) {
      React7.useEffect(() => {
        if (htmlFor) {
          const element = document.getElementById(htmlFor);
          const label = ref.current;
          if (label && element) {
            const getAriaLabel = /* @__PURE__ */ __name(() => element.getAttribute("aria-labelledby"), "getAriaLabel");
            const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(" ");
            element.setAttribute("aria-labelledby", ariaLabelledBy);
            controlRef.current = element;
            return () => {
              var _a;
              if (!id)
                return;
              const ariaLabelledBy2 = (_a = getAriaLabel()) == null ? void 0 : _a.replace(id, "");
              if (ariaLabelledBy2 === "") {
                element.removeAttribute("aria-labelledby");
              } else if (ariaLabelledBy2) {
                element.setAttribute("aria-labelledby", ariaLabelledBy2);
              }
            };
          }
        }
      }, [id, htmlFor]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LabelProvider, {
      id,
      controlRef,
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LabelFrame, {
        role: "label",
        id,
        ...labelProps,
        ref: composedRefs,
        onMouseDown: (event) => {
          var _a;
          (_a = props.onMouseDown) == null ? void 0 : _a.call(props, event);
          if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
          }
        },
        onPress: (event) => {
          var _a;
          (_a = props.onPress) == null ? void 0 : _a.call(props, event);
          if (import_core12.isWeb) {
            if (!controlRef.current || event.defaultPrevented)
              return;
            const isClickingControl = controlRef.current.contains(
              event.target
            );
            const isUserClick = event.isTrusted === true;
            if (!isClickingControl && isUserClick) {
              controlRef.current.click();
              controlRef.current.focus();
            }
          } else {
            if (props.htmlFor) {
              (0, import_focusable.focusFocusable)(props.htmlFor);
            }
          }
        }
      })
    });
  }
);
LabelComponent.displayName = NAME2;
var Label = LabelFrame.extractable((0, import_core12.themeable)(LabelComponent), {
  neverFlatten: true
});
var useLabelContext = /* @__PURE__ */ __name((element) => {
  const context = useLabelContextImpl("LabelConsumer");
  const { controlRef } = context;
  React7.useEffect(() => {
    if (element)
      controlRef.current = element;
  }, [element, controlRef]);
  return context.id;
}, "useLabelContext");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs30()), module.exports);
__reExport(esm_exports, __toESM(require_cjs31()), module.exports);
__reExport(esm_exports, __toESM(require_cjs33()), module.exports);
__reExport(esm_exports, __toESM(require_cjs32()), module.exports);
__reExport(esm_exports, __toESM(require_cjs13()), module.exports);
__reExport(esm_exports, __toESM(require_cjs34()), module.exports);
__reExport(esm_exports, __toESM(require_cjs17()), module.exports);
__reExport(esm_exports, __toESM(require_cjs36()), module.exports);
__reExport(esm_exports, __toESM(require_cjs35()), module.exports);
__reExport(esm_exports, __toESM(require_cjs24()), module.exports);
__reExport(esm_exports, __toESM(require_cjs18()), module.exports);
__reExport(esm_exports, __toESM(require_cjs38()), module.exports);
__reExport(esm_exports, __toESM(require_cjs40()), module.exports);
__reExport(esm_exports, __toESM(require_cjs41()), module.exports);
__reExport(esm_exports, __toESM(require_cjs42()), module.exports);

// ../../node_modules/@tamagui/use-force-update/dist/esm/index.js
var import_react6 = require("react");
var isServerSide = process.env.TAMAGUI_TARGET === "web" && typeof window === "undefined";
var idFn3 = /* @__PURE__ */ __name(() => {
}, "idFn");
function useForceUpdate() {
  return isServerSide ? idFn3 : (0, import_react6.useReducer)((x) => x + 1, 0)[1];
}
__name(useForceUpdate, "useForceUpdate");

// ../../node_modules/tamagui/dist/esm/index.js
__reExport(esm_exports, __toESM(require_cjs43()), module.exports);
__reExport(esm_exports, __toESM(require_cjs44()), module.exports);

// ../../node_modules/tamagui/dist/esm/createTamagui.js
var import_core13 = require("@tamagui/core-node");
var createTamagui = process.env.NODE_ENV !== "development" ? import_core13.createTamagui : (conf) => {
  const sizeTokenKeys = [
    "$0",
    "$1",
    "$2",
    "$3",
    "$4",
    "$5",
    "$6",
    "$7",
    "$8",
    "$9",
    "$10",
    "$true"
  ];
  const hasKeys = /* @__PURE__ */ __name((expectedKeys, obj) => {
    return expectedKeys.every((k) => typeof obj[k] !== "undefined");
  }, "hasKeys");
  const tamaguiConfig = (0, import_core13.createTamagui)(conf);
  for (const name of ["size", "space"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    if (!tokenSet) {
      throw new Error(
        `Expected tokens for "${name}" in ${Object.keys(
          tamaguiConfig.tokensParsed
        ).join(", ")}`
      );
    }
    if (!hasKeys(sizeTokenKeys, tokenSet)) {
      throw new Error(`
createTamagui() missing definition for expected tokens.${name}:

Received: ${Object.keys(tokenSet).join(", ")}

Expected: ${sizeTokenKeys.join(", ")}

`);
    }
  }
  const expected = Object.keys(tamaguiConfig.tokensParsed.size);
  for (const name of ["radius", "zIndex"]) {
    const tokenSet = tamaguiConfig.tokensParsed[name];
    const received = Object.keys(tokenSet);
    const hasSomeOverlap = received.some((rk) => expected.includes(rk));
    if (!hasSomeOverlap) {
      throw new Error(`
createTamagui() invalid tokens.${name}:

Received: ${received.join(", ")}

Expected a subset of: ${expected.join(", ")}

`);
    }
  }
  return tamaguiConfig;
};

// ../../node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_portal2 = __toESM(require_cjs13());
var TamaguiProvider = import_core14.isRSC ? import_core14.TamaguiProvider : ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_core14.TamaguiProvider, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_portal2.PortalProvider, {
      shouldAddRootHost: true,
      children
    })
  });
};

// ../../node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_core15 = require("@tamagui/core-node");
var import_react7 = require("react");
var import_react_native4 = require("react-native-web-lite");
var AnchorFrame = (0, import_core15.styled)(SizableText, {
  name: "Anchor",
  tag: "a",
  accessibilityRole: "link"
});
var Anchor = AnchorFrame.extractable(
  (0, import_react7.forwardRef)(({ href, target, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AnchorFrame, {
      ...props,
      ...import_core15.isWeb ? {
        href,
        target
      } : {
        onPress: (event) => {
          var _a;
          (_a = props.onPress) == null ? void 0 : _a.call(props, event);
          if (href !== void 0) {
            import_react_native4.Linking.openURL(href);
          }
        }
      },
      ref
    });
  })
);

// ../../node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core16 = require("@tamagui/core-node");
var EnsureFlexed = (0, import_core16.styled)(import_core16.Text, {
  opacity: 0,
  lineHeight: 0,
  height: 0,
  display: "flex",
  fontSize: 200,
  children: "wwwwwwwwwwwwwwwwwww",
  hoverStyle: {
    backgroundColor: "red"
  },
  pointerEvents: "none"
});
EnsureFlexed["isVisuallyHidden"] = true;

// ../../node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core17 = require("@tamagui/core-node");
var Fieldset = (0, import_core17.styled)(YStack, {
  name: "Fieldset",
  tag: "fieldset",
  variants: {
    horizontal: {
      true: {
        flexDirection: "row",
        alignItems: "center"
      }
    }
  }
});

// ../../node_modules/tamagui/dist/esm/views/Form.js
var import_core18 = require("@tamagui/core-node");
var Form = (0, import_core18.styled)(import_core18.Stack, {
  name: "Form",
  tag: "form"
});

// ../../node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_core19 = require("@tamagui/core-node");
var import_react8 = __toESM(require("react"));
function Grid({ children, columns, itemMinWidth = 200, gap }) {
  if (import_core19.isWeb) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
      style: {
        gap,
        display: "grid",
        justifyContent: "stretch",
        gridTemplateColumns: `repeat( auto-fit, minmax(${itemMinWidth}px, 1fr) )`
      },
      children
    });
  }
  const childrenList = import_react8.default.Children.toArray(children);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(XStack, {
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    children: childrenList.map((child, i) => {
      if (!child) {
        return null;
      }
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(XStack, {
        flex: 1,
        minWidth: itemMinWidth,
        marginRight: gap,
        marginBottom: gap,
        children: child
      }, i);
    })
  });
}
__name(Grid, "Grid");

// ../../node_modules/tamagui/dist/esm/views/Input.js
var import_core21 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs29());
var import_react_native5 = require("react-native-web-lite");

// ../../node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core20 = require("@tamagui/core-node");
var import_get_button_sized4 = __toESM(require_cjs11());
var import_get_font_sized3 = __toESM(require_cjs19());
var import_get_size = __toESM(require_cjs10());
var inputSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  if (extras.props.multiline || extras.props.numberOfLines > 1) {
    return textAreaSizeVariant(val, extras);
  }
  const buttonStyles = (0, import_get_button_sized4.getButtonSized)(val, extras);
  const paddingHorizontal = (0, import_get_size.stepTokenUpOrDown)("space", val, -1, [2]);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  if (!import_core20.isWeb && fontStyle) {
    delete fontStyle["lineHeight"];
  }
  return {
    ...fontStyle,
    ...buttonStyles,
    paddingHorizontal
  };
}, "inputSizeVariant");
var textAreaSizeVariant = /* @__PURE__ */ __name((val = "$true", extras) => {
  const { props } = extras;
  const buttonStyles = (0, import_get_button_sized4.getButtonSized)(val, extras);
  const fontStyle = (0, import_get_font_sized3.getFontSized)(val, extras);
  const height = props.numberOfLines ? (props.numberOfLines || 1) * (0, import_core20.getVariableValue)(fontStyle.lineHeight) : "auto";
  const paddingVertical = (0, import_get_size.stepTokenUpOrDown)("space", val, -2, [2]);
  const paddingHorizontal = (0, import_get_size.stepTokenUpOrDown)("space", val, -1, [2]);
  return {
    ...buttonStyles,
    ...fontStyle,
    paddingVertical,
    paddingHorizontal,
    height
  };
}, "textAreaSizeVariant");

// ../../node_modules/tamagui/dist/esm/views/Input.js
(0, import_core21.setupReactNative)({
  TextInput: import_react_native5.TextInput
});
var InputFrame = (0, import_core21.styled)(
  import_react_native5.TextInput,
  {
    name: "Input",
    fontFamily: "$body",
    borderWidth: 1,
    outlineWidth: 0,
    color: "$color",
    focusable: true,
    borderColor: "$borderColor",
    backgroundColor: "$background",
    placeholderTextColor: "$placeholderColor",
    minWidth: 0,
    hoverStyle: {
      borderColor: "$borderColorHover"
    },
    focusStyle: {
      borderColor: "$borderColorFocus",
      borderWidth: 2,
      marginHorizontal: -1
    },
    variants: {
      size: {
        "...size": inputSizeVariant
      }
    },
    defaultVariants: {
      size: "$true"
    }
  },
  {
    isInput: true
  }
);
var Input = (0, import_focusable2.focusableInputHOC)(InputFrame);

// ../../node_modules/tamagui/dist/esm/views/Group.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_core22 = require("@tamagui/core-node");
var import_react9 = __toESM(require("react"));
var import_react_native6 = require("react-native-web-lite");
var GroupFrame = (0, import_core22.styled)(ThemeableStack, {
  name: "GroupFrame",
  backgroundColor: "$background",
  y: 0,
  variants: {
    size: (val, { tokens }) => {
      const borderRadius = tokens.radius[val] ?? val ?? tokens.radius["$true"];
      return {
        borderRadius
      };
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
function createGroup(verticalDefault) {
  return (0, import_react9.forwardRef)((props, ref) => {
    const activeProps = (0, import_core22.useMediaPropsActive)(props);
    const {
      children: childrenProp,
      space,
      size = "$true",
      spaceDirection,
      separator,
      scrollable,
      vertical = verticalDefault,
      disabled: disabledProp,
      disablePassBorderRadius: disablePassBorderRadiusProp,
      borderRadius,
      ...restProps
    } = (0, import_core22.getExpandedShorthands)(activeProps);
    const radius = borderRadius ?? (size ? (0, import_core22.getVariableValue)((0, import_core22.getTokens)(true).radius[size]) - 1 : void 0);
    const hasRadius = radius !== void 0;
    const disablePassBorderRadius = disablePassBorderRadiusProp ?? !hasRadius;
    const childrens = import_react9.Children.toArray(childrenProp);
    const children = childrens.map((child, i) => {
      if (!(0, import_react9.isValidElement)(child))
        return child;
      const disabled = child.props.disabled ?? disabledProp;
      const isFirst = i === 0;
      const isLast = i === childrens.length - 1;
      const radiusStyles = disablePassBorderRadius ? null : {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        ...hasRadius && {
          ...isFirst && !vertical && {
            borderTopLeftRadius: radius,
            borderBottomLeftRadius: radius
          },
          ...isFirst && vertical && {
            borderTopLeftRadius: radius,
            borderTopRightRadius: radius
          },
          ...isLast && !vertical && {
            borderTopRightRadius: radius,
            borderBottomRightRadius: radius
          },
          ...isLast && vertical && {
            borderBottomLeftRadius: radius,
            borderBottomRightRadius: radius
          }
        }
      };
      const props2 = {
        disabled,
        ...(0, import_core22.isTamaguiElement)(child) ? radiusStyles : { style: radiusStyles }
      };
      return cloneElementWithPropOrder(child, props2);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(GroupFrame, {
      ref,
      size,
      flexDirection: !vertical ? "row" : "column",
      borderRadius,
      ...restProps,
      children: wrapScroll(
        activeProps,
        (0, import_core22.spacedChildren)({
          direction: spaceDirection,
          separator,
          space,
          children
        })
      )
    });
  });
}
__name(createGroup, "createGroup");
var YGroup = createGroup(true);
var XGroup = createGroup(false);
var wrapScroll = /* @__PURE__ */ __name(({ scrollable, vertical, showScrollIndicator = false }, children) => {
  if (scrollable)
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_native6.ScrollView, {
      ...vertical && {
        showsVerticalScrollIndicator: showScrollIndicator
      },
      ...!vertical && {
        horizontal: true,
        showsHorizontalScrollIndicator: showScrollIndicator
      },
      children
    });
  return children;
}, "wrapScroll");
var cloneElementWithPropOrder = /* @__PURE__ */ __name((child, props) => {
  const next = (0, import_core22.mergeProps)(child.props, props, false, (0, import_core22.getConfig)().shorthands)[0];
  return import_react9.default.cloneElement({ ...child, props: null }, next);
}, "cloneElementWithPropOrder");

// ../../node_modules/tamagui/dist/esm/views/Layouts.js
var import_core23 = require("@tamagui/core-node");
var Section = (0, import_core23.styled)(import_core23.Stack, {
  name: "Section",
  tag: "section",
  flexDirection: "column",
  accessibilityRole: "summary"
});
var Article = (0, import_core23.styled)(import_core23.Stack, {
  name: "Article",
  tag: "article",
  flexDirection: "column"
});
var Main = (0, import_core23.styled)(import_core23.Stack, {
  name: "Main",
  tag: "main",
  flexDirection: "column"
});
var Header = (0, import_core23.styled)(import_core23.Stack, {
  name: "Header",
  tag: "header",
  accessibilityRole: "header",
  flexDirection: "column"
});
var Aside = (0, import_core23.styled)(import_core23.Stack, {
  name: "Aside",
  tag: "aside",
  flexDirection: "column"
});
var Footer = (0, import_core23.styled)(import_core23.Stack, {
  name: "Footer",
  tag: "footer",
  flexDirection: "column"
});
var Nav = (0, import_core23.styled)(import_core23.Stack, {
  name: "Nav",
  tag: "nav",
  flexDirection: "column"
});

// ../../node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_core24 = require("@tamagui/core-node");
var React12 = __toESM(require("react"));
var import_react_native7 = require("react-native-web-lite");
var Spinner = YStack.extractable(
  (0, import_core24.themeable)(
    React12.forwardRef((props, ref) => {
      const { size, color: colorProp, ...stackProps } = props;
      const theme = (0, import_core24.useTheme)();
      let color = colorProp;
      if (color && color[0] === "$") {
        color = (0, import_core24.variableToString)(theme[color]);
      }
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(YStack, {
        ref,
        ...stackProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native7.ActivityIndicator, {
          size,
          color
        })
      });
    }),
    {
      componentName: "Spinner"
    }
  )
);

// ../../node_modules/tamagui/dist/esm/views/TextArea.js
var import_core25 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs29());
var TextAreaFrame = (0, import_core25.styled)(InputFrame, {
  name: "TextArea",
  multiline: true,
  numberOfLines: 4,
  height: "auto",
  variants: {
    size: {
      "...size": textAreaSizeVariant
    }
  },
  defaultVariants: {
    size: "$true"
  }
});
var TextArea = (0, import_focusable3.focusableInputHOC)(TextAreaFrame);

// ../../node_modules/tamagui/dist/esm/index.js
var import_core26 = require("@tamagui/core-node");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Anchor,
  Article,
  Aside,
  Avatar,
  AvatarFallback,
  AvatarFallbackFrame,
  AvatarFrame,
  AvatarImage,
  Button,
  ButtonFrame,
  ButtonText,
  Card,
  CardBackground,
  CardFooter,
  CardFrame,
  CardHeader,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogPortalFrame,
  DialogSheetContents,
  DialogTitle,
  DialogTrigger,
  DialogWarningProvider,
  EnsureFlexed,
  Fieldset,
  FontLanguage,
  Footer,
  Form,
  Grid,
  GroupFrame,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Heading,
  Input,
  InputFrame,
  Label,
  LabelFrame,
  Main,
  Nav,
  Paragraph,
  Section,
  SizableStack,
  SizableText,
  Spacer,
  Spinner,
  Stack,
  TamaguiProvider,
  Text,
  TextAncestorContext,
  TextArea,
  TextAreaFrame,
  Theme,
  ThemeableStack,
  Unspaced,
  XGroup,
  XStack,
  YGroup,
  YStack,
  ZStack,
  addTheme,
  buttonStaticConfig,
  composeRefs,
  createAvatarScope,
  createComponent,
  createDialogScope,
  createFont,
  createShorthands,
  createTamagui,
  createTheme,
  createTokens,
  createVariable,
  getAnimationDriver,
  getConfig,
  getElevation,
  getMedia,
  getSizedElevation,
  getStylesAtomic,
  getThemes,
  getTokens,
  getVariable,
  getVariableName,
  getVariableValue,
  idFn,
  insertFont,
  isChrome,
  isClient,
  isServer,
  isServerSide,
  isTamaguiComponent,
  isTamaguiElement,
  isTouchable,
  isVariable,
  isWeb,
  isWebTouchable,
  matchMedia,
  mediaObjectToString,
  mediaQueryConfig,
  mediaState,
  spacedChildren,
  styled,
  themeable,
  updateTheme,
  useButton,
  useComposedRefs,
  useControllableState,
  useDidFinishSSR,
  useEvent,
  useForceUpdate,
  useGet,
  useIsTouchDevice,
  useIsomorphicLayoutEffect,
  useLabelContext,
  useMedia,
  useSafeRef,
  useTheme,
  useThemeName,
  variableToString,
  withStaticProperties,
  wrapChildrenInText
});
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
