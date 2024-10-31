(self.webpackChunkangular_components=self.webpackChunkangular_components||[]).push([[161],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/foundations/icons/svgIconStore.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>svgIconStore});const svgIconStore={"alert-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V8a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"alert-triangle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1.496c-.277 0-.554.057-.812.172-.797.354-.983.937-1.438 1.723L1.525 17.598c-.456.788-.871 1.24-.78 2.109.058.564.355 1.077.814 1.41.707.514 1.306.383 2.216.383h16.45c.91 0 1.51.131 2.216-.383.458-.333.754-.846.813-1.41.09-.87-.323-1.321-.78-2.11L14.25 3.392c-.455-.786-.641-1.369-1.437-1.723A2 2 0 0 0 12 1.496m-.055 1.98q.018.003.055.02c.093-.041.077-.011 0 .098.092.129.273.373.52.799L20.744 18.6c.246.424.367.706.434.851.137-.012.171-.012.088.049-.011.103-.03.075-.088-.049-.16.015-.463.049-.953.049H3.775c-.49 0-.793-.034-.953-.049-.057.124-.077.152-.088.049-.083-.06-.049-.061.088-.049.067-.145.188-.427.434-.851L11.48 4.393c.247-.426.429-.67.52-.8-.056-.079-.085-.12-.055-.116M12 8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9a1 1 0 0 0-1-1m0 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"arrow-down":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-1 1v11.586l-5.293-5.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L13 16.586V5a1 1 0 0 0-1-1"/>\n</svg>\n',"arrow-left":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7A1 1 0 0 0 4 12a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L7.414 13H19a1 1 0 0 0 1-1 1 1 0 0 0-1-1H7.414l5.293-5.293a1 1 0 0 0 0-1.414A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-right":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L16.586 11H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1h11.586l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .26-.447 1 1 0 0 0 0-.18L20 12a1 1 0 0 0-.033-.166 1 1 0 0 0-.028-.143 1 1 0 0 0-.232-.398l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',"arrow-up":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 4a1 1 0 0 0-.707.293l-7 7a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L11 7.414V19a1 1 0 0 0 1 1 1 1 0 0 0 1-1V7.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 12 4"/>\n</svg>\n',award:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C7.317 1 3.5 4.817 3.5 9.5A8.47 8.47 0 0 0 6 15.51V22a1 1 0 0 0 1.371.928L12 21.076l4.629 1.852A1 1 0 0 0 18 22v-6.49a8.47 8.47 0 0 0 2.5-6.01C20.5 4.817 16.683 1 12 1m0 2c3.602 0 6.5 2.898 6.5 6.5S15.602 16 12 16a6.485 6.485 0 0 1-6.5-6.5C5.5 5.898 8.398 3 12 3M8 16.86c1.21.663 2.527 1.14 4 1.14s2.79-.477 4-1.14v3.663l-3.332-1.334c-.11-.044-.232-.1-.441-.132a1.5 1.5 0 0 0-.454 0c-.21.032-.33.088-.441.132L8 20.523Z"/>\n</svg>\n',bell:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1a7 7 0 0 0-7 7c0 2.922-.727 4.833-1.5 6.076a54 54 0 0 0-.842 1.38 5 5 0 0 0-.246.466c-.068.15-.184.244-.146.701.012.15.042.379.172.611.129.233.306.381.427.471.322.239.482.219.639.242a4 4 0 0 0 .484.04c.353.013.803.013 1.4.013h13.223c.598 0 1.048 0 1.4-.014.177-.007.328-.015.485-.039.157-.023.317-.003.639-.242.121-.09.298-.238.427-.47.13-.233.162-.461.174-.612.038-.458-.08-.55-.148-.701a5 5 0 0 0-.246-.467 54 54 0 0 0-.842-1.379C19.727 12.833 19 10.922 19 8a7 7 0 0 0-7-7m0 2a5 5 0 0 1 5 5c0 3.258.832 5.577 1.8 7.133.24.385.372.604.528.861-.232.002-.393.006-.717.006H5.39c-.324 0-.485-.004-.717-.006.156-.257.288-.476.527-.861C6.167 13.577 7 11.258 7 8a5 5 0 0 1 5-5M9.293 20.002a1 1 0 0 0-.69.336 1 1 0 0 0 .09 1.412A5 5 0 0 0 12 23a5 5 0 0 0 3.307-1.25 1 1 0 0 0 .088-1.412 1 1 0 0 0-1.41-.088c-.53.468-1.219.75-1.985.75a2.98 2.98 0 0 1-1.984-.75 1 1 0 0 0-.723-.248"/>\n</svg>\n',calendar:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8 1a1 1 0 0 0-1 1v1.014c-1.16.001-2.044.028-2.816.422a4 4 0 0 0-1.748 1.748C1.948 6.14 2 7.12 2 8.8v8.4c0 1.68-.052 2.66.436 3.616a4 4 0 0 0 1.748 1.748C5.14 23.052 6.12 23 7.8 23h8.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V8.8c0-1.68.052-2.66-.436-3.616a4 4 0 0 0-1.748-1.748c-.772-.394-1.657-.42-2.816-.422V2a1 1 0 0 0-1-1 1 1 0 0 0-1 1v1H9V2a1 1 0 0 0-1-1m1 4h6v1a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-.936c.813.026 1.678.037 1.908.155.377.192.681.496.873.873.167.327.219 1.029.219 2.709V9H4v-.2c0-1.68.052-2.381.219-2.708.192-.377.496-.681.873-.873.23-.118 1.095-.13 1.908-.155V6a1 1 0 0 0 1 1 1 1 0 0 0 1-1Zm-5 6h16v6.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H7.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C4.052 19.581 4 18.88 4 17.2Z"/>\n</svg>\n',"check-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m4.344 5.012a1 1 0 0 0-.551.281L10.5 13.586l-2.293-2.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l6-6a1 1 0 0 0 0-1.414 1 1 0 0 0-.863-.281"/>\n</svg>\n',clipboard:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M9.201.996c-.379-.001-.713.02-1.11.223a2 2 0 0 0-.872.873c-.174.34-.134.654-.14.97-.361.013-.798-.01-1.114.075a4 4 0 0 0-2.828 2.828C2.982 6.543 3 7.07 3 8v9.2c0 1.68-.052 2.66.436 3.616a4 4 0 0 0 1.748 1.748C6.14 23.052 7.12 23 8.8 23h6.398c1.68 0 2.661.052 3.617-.436a4 4 0 0 0 1.748-1.748c.488-.956.436-1.937.436-3.617V8c0-.93.018-1.457-.137-2.035a4 4 0 0 0-2.828-2.828c-.316-.085-.753-.062-1.113-.075-.007-.316.033-.63-.14-.97a2 2 0 0 0-.874-.873C15.38.949 14.96 1 14.4 1H9.6Q9.39.999 9.2.996m-.18 1.977a.2.2 0 0 1 0 .048C9.101 3.017 9.28 3 9.6 3h4.8c.32 0 .5.017.579.021-.004-.059-.001-.064.021-.021.043.022.038.025-.021.021.004.08.021.259.021.579v.8c0 .32-.017.5-.021.579.059-.004.064-.001.021.021-.022.043-.025.038-.021-.021-.08.004-.259.021-.579.021H9.6c-.32 0-.5-.017-.579-.021.004.059.001.064-.021.021-.043-.022-.038-.025.021-.021C9.017 4.899 9 4.72 9 4.4v-.8c0-.32.017-.5.021-.579-.059.004-.064.001-.021-.021q.02-.038.021-.027M7.094 5.04c.013.28-.03.563.125.867.191.376.497.682.873.873.528.271.948.22 1.508.22h4.8c.56 0 .98.05 1.508-.219.377-.191.682-.497.873-.873.155-.304.112-.588.125-.867.166.01.537.007.612.027a2 2 0 0 1 1.414 1.414c.05.186.068.588.068 1.518v9.2c0 1.68-.052 2.38-.219 2.708a2 2 0 0 1-.873.873c-.327.167-1.029.219-2.709.219H8.801c-1.68 0-2.382-.052-2.71-.219a2 2 0 0 1-.872-.873C5.052 19.581 5 18.88 5 17.2V8c0-.93.019-1.332.068-1.518a2 2 0 0 1 1.414-1.414c.075-.02.446-.016.612-.027"/>\n</svg>\n',clock:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 2a1 1 0 0 0-1 1v6a1 1 0 0 0 .553.895l4 2a1 1 0 0 0 1.342-.448 1 1 0 0 0-.448-1.342L13 11.383V6a1 1 0 0 0-1-1"/>\n</svg>\n',"dots-vertical":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 3c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2m0 7c-1.093 0-2 .907-2 2s.907 2 2 2 2-.907 2-2-.907-2-2-2"/>\n</svg>\n',download:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 2a1 1 0 0 0-1 1v11.586l-4.293-4.293a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l6 6A1 1 0 0 0 12 18a1 1 0 0 0 .707-.293l6-6a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L13 14.586V3a1 1 0 0 0-1-1M3 20a1 1 0 0 0-1 1 1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',grid:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4.201 1.996c-.379-.001-.713.02-1.11.223a2 2 0 0 0-.872.873C1.949 3.62 2 4.04 2 4.6v3.8c0 .56-.05.98.219 1.508.191.376.497.682.873.873.528.27.948.219 1.508.219h3.8c.56 0 .98.05 1.508-.219.376-.191.682-.497.873-.873.27-.528.219-.948.219-1.508V4.6c0-.56.05-.98-.219-1.508a2 2 0 0 0-.873-.873C9.38 1.949 8.96 2 8.4 2H4.6q-.21-.001-.399-.004m11 0c-.379-.001-.713.02-1.11.223a2 2 0 0 0-.872.873C12.949 3.62 13 4.04 13 4.6v3.8c0 .56-.05.98.219 1.508.191.376.496.682.873.873.528.27.948.219 1.508.219h3.8c.56 0 .98.05 1.508-.219.377-.191.682-.497.873-.873.27-.528.219-.948.219-1.508V4.6c0-.56.05-.98-.219-1.508a2 2 0 0 0-.873-.873C20.38 1.949 19.96 2 19.4 2h-3.8q-.21-.001-.399-.004M4.021 3.973a.2.2 0 0 1 0 .048C4.101 4.017 4.28 4 4.6 4h3.8c.32 0 .5.017.579.021C8.975 3.962 8.978 3.957 9 4c.043.022.038.025-.021.021.004.08.021.259.021.579v3.8c0 .32-.017.5-.021.579.059-.004.064-.001.021.021-.022.043-.025.038-.021-.021C8.899 8.983 8.72 9 8.4 9H4.6c-.32 0-.5-.017-.579-.021.004.059.001.064-.021.021-.043-.022-.038-.025.021-.021C4.017 8.899 4 8.72 4 8.4V4.6c0-.32.017-.5.021-.579-.059.004-.064.001-.021-.021q.02-.038.021-.027m11 0a.2.2 0 0 1 0 .048c.08-.004.259-.021.579-.021h3.8c.32 0 .5.017.579.021-.004-.059-.001-.064.021-.021.043.022.038.025-.021.021.004.08.021.259.021.579v3.8c0 .32-.017.5-.021.579.059-.004.064-.001.021.021-.022.043-.025.038-.021-.021-.08.004-.259.021-.579.021h-3.8c-.32 0-.5-.017-.579-.021.004.059.001.064-.021.021-.043-.022-.038-.025.021-.021C15.017 8.899 15 8.72 15 8.4V4.6c0-.32.017-.5.021-.579-.059.004-.064.001-.021-.021q.02-.038.021-.027m-10.82 9.023c-.379-.001-.713.02-1.11.223a2 2 0 0 0-.872.873C1.949 14.62 2 15.04 2 15.6v3.8c0 .56-.05.98.219 1.508.191.377.497.682.873.873.528.27.948.219 1.508.219h3.8c.56 0 .98.05 1.508-.219.376-.191.682-.496.873-.873.27-.528.219-.948.219-1.508v-3.8c0-.56.05-.98-.219-1.508a2 2 0 0 0-.873-.873C9.38 12.949 8.96 13 8.4 13H4.6q-.21-.001-.399-.004m11 0c-.379-.002-.713.02-1.11.223a2 2 0 0 0-.872.873c-.27.528-.219.948-.219 1.508v3.8c0 .56-.05.98.219 1.508.191.376.497.682.873.873.528.27.948.219 1.508.219h3.8c.56 0 .98.05 1.508-.219.376-.191.682-.497.873-.873.27-.528.219-.948.219-1.508v-3.8c0-.56.05-.98-.219-1.508a2 2 0 0 0-.873-.873C20.38 12.949 19.96 13 19.4 13h-3.8q-.21-.001-.399-.004m-11.18 1.977a.2.2 0 0 1 0 .048c.08-.004.259-.021.579-.021h3.8c.32 0 .5.017.579.021-.004-.059-.001-.064.021-.021.043.022.038.025-.021.021.004.08.021.259.021.579v3.8c0 .32-.017.5-.021.579.059-.004.064-.001.021.021-.022.043-.025.038-.021-.021-.08.004-.259.021-.579.021H4.6c-.32 0-.5-.017-.579-.021.004.059.001.064-.021.021-.043-.022-.038-.025.021-.021C4.017 19.899 4 19.72 4 19.4v-3.8c0-.32.017-.5.021-.579-.059.004-.064.001-.021-.021q.02-.038.021-.027m11 0a.2.2 0 0 1 0 .048c.08-.004.259-.021.579-.021h3.8c.32 0 .5.017.579.021-.004-.059-.001-.064.021-.021.043.022.038.025-.021.021.004.08.021.259.021.579v3.8c0 .32-.017.5-.021.579.059-.004.064-.001.021.021-.022.043-.025.038-.021-.021-.08.004-.259.021-.579.021h-3.8c-.32 0-.5-.017-.579-.021.004.059.001.064-.021.021-.043-.022-.038-.025.021-.021-.004-.08-.021-.259-.021-.579v-3.8c0-.32.017-.5.021-.579-.059.004-.064.001-.021-.021q.02-.038.021-.027"/>\n</svg>\n',"help-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m-.105 2.996a4 4 0 0 0-3.749 2.672 1 1 0 0 0 .612 1.275 1 1 0 0 0 1.275-.611 1.998 1.998 0 0 1 3.416-.625 2 2 0 0 1 .47 1.291V10c0 .5-.432 1.003-1.054 1.418s-1.261.633-1.261.633a1 1 0 0 0-.633 1.265 1 1 0 0 0 1.265.633s.86-.282 1.739-.867c.877-.585 1.944-1.581 1.945-3.08a4 4 0 0 0-4.025-4.006M12 16a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"info-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1 1 1 0 0 0-1-1zm0 4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"/>\n</svg>\n',key:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M15 2c-3.854 0-7 3.146-7 7q0 .477.063.94c.037.276.045.454.052.519-.035.038-.109.119-.244.254l-5.11 5.111c-.172.173-.32.307-.466.545q-.166.27-.24.578c-.065.272-.055.47-.055.715V19.4c0 .56-.05.98.219 1.508.191.377.497.682.873.873.528.27.948.219 1.508.219H7a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 .707-.293l1.58-1.578c.14-.14.22-.213.256-.246.067.007.243.018.518.055Q14.522 16 15 16c3.854 0 7-3.146 7-7s-3.146-7-7-7m0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5q-.344 0-.674-.045c-.433-.058-.642-.126-1.062-.066h-.002c-.212.03-.507.13-.692.234-.313.175-.46.351-.699.59L10.586 16H9a1 1 0 0 0-1 1v1H7a1 1 0 0 0-1 1v1H4.6c-.338 0-.509-.016-.58-.02.002.047 0 .06-.02.02-.04-.02-.027-.022.02-.02-.004-.071-.02-.242-.02-.58v-1.738c0-.153.003-.221.004-.246q-.015.016-.004-.002.005-.022.004.002c.016-.017.062-.068.172-.178l5.111-5.11c.239-.238.415-.385.59-.698.104-.186.204-.483.234-.694.06-.42-.008-.628-.066-1.062A5 5 0 0 1 10 9c0-2.773 2.227-5 5-5m0 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1c.257 0 .508.094.707.293.2.2.293.45.293.707a1 1 0 0 0 1 1 1 1 0 0 0 1-1 3.004 3.004 0 0 0-3-3"/>\n</svg>\n',"minus-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m-4 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"/>\n</svg>\n',"plus-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9m0 4a1 1 0 0 0-1 1v3H8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1 1 1 0 0 0-1-1h-3V8a1 1 0 0 0-1-1"/>\n</svg>\n',repeat:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M11 1a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L11.586 4H9c-4.406 0-8 3.594-8 8a8.01 8.01 0 0 0 4.57 7.23 1 1 0 0 0 1.332-.474 1 1 0 0 0-.472-1.332A6 6 0 0 1 3 12c0-3.326 2.674-6 6-6h2.586l-1.293 1.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 .26-.447 1 1 0 0 0 0-.18L15 5a1 1 0 0 0-.033-.166 1 1 0 0 0 0-.094l-.028-.049a1 1 0 0 0-.232-.398l-3-3A1 1 0 0 0 11 1m7.05 3.674a1 1 0 0 0-.952.57 1 1 0 0 0 .472 1.332A6 6 0 0 1 21 12c0 3.326-2.674 6-6 6h-2.586l1.293-1.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 9 19a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L12.414 20H15c4.406 0 8-3.594 8-8a8.01 8.01 0 0 0-4.57-7.23 1 1 0 0 0-.38-.096"/>\n</svg>\n',upload:'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M3 2a1 1 0 0 0-1 1 1 1 0 0 0 1 1h18a1 1 0 0 0 1-1 1 1 0 0 0-1-1Zm9 4a1 1 0 0 0-.707.293l-6 6a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L11 9.414V21a1 1 0 0 0 1 1 1 1 0 0 0 1-1V9.414l4.293 4.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-6-6A1 1 0 0 0 12 6"/>\n</svg>\n',"user-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12c0 3.308 1.544 6.185 3.863 8.203a1 1 0 0 0 .063.156 1 1 0 0 0 .17.002C6.999 21.934 9.346 23 12 23s5.001-1.066 6.904-2.639a1 1 0 0 0 .17-.002 1 1 0 0 0 .447-.416C21.641 17.937 23 15.141 23 12c0-6.063-4.937-11-11-11m0 2c4.982 0 9 4.018 9 9 0 2.296-.921 4.333-2.328 5.92C17.752 16.828 16.532 16 15 16H9c-1.531 0-2.753.828-3.672 1.92C3.921 16.333 3 14.296 3 12c0-4.982 4.018-9 9-9m0 1.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5m0 2c1.669 0 3 1.331 3 3s-1.331 3-3 3-3-1.331-3-3 1.331-3 3-3M9 18h6c.93 0 1.659.497 2.207 1.152C15.721 20.235 13.985 21 12 21s-3.721-.765-5.207-1.848C7.341 18.498 8.071 18 9 18"/>\n</svg>\n',"x-circle":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M12 1C5.937 1 1 5.937 1 12s4.937 11 11 11 11-4.937 11-11S18.063 1 12 1m0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9M9 8a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L10.586 12l-2.293 2.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l2.293 2.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12l2.293-2.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 10.586 9.707 8.293A1 1 0 0 0 9 8"/>\n</svg>\n',"x-close":'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 5a1 1 0 0 0-.707.293 1 1 0 0 0 0 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0L12 13.414l5.293 5.293a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L13.414 12l5.293-5.293a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L12 10.586 6.707 5.293A1 1 0 0 0 6 5"/>\n</svg>\n'}},"./src/foundations/icons/Icons.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_joecocco_Documents_GitHub_angular_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_svgIconStore__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/svgIconStore.ts");function _createMdxContent(props){const _components={a:"a",div:"div",h1:"h1",p:"p",...(0,_Users_joecocco_Documents_GitHub_angular_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{title:"foundations/Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"icons",children:"Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Icons sourced from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://www.untitledui.com/free-icons",rel:"nofollow",children:"Untitled UI"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{class:"sb-iconGrid",children:Object.entries(_svgIconStore__WEBPACK_IMPORTED_MODULE_2__.J).map((([key,value])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.div,{class:"item",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.div,{class:"icon",dangerouslySetInnerHTML:{__html:value}}),key]})))})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_Users_joecocco_Documents_GitHub_angular_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);