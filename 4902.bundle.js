"use strict";(self.webpackChunkhk_split_maker=self.webpackChunkhk_split_maker||[]).push([[4902],{4902:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conf\": () => (/* binding */ conf),\n/* harmony export */   \"language\": () => (/* binding */ language)\n/* harmony export */ });\n/* harmony import */ var _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89587);\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        blockComment: ['\x3c!--', '--\x3e']\n    },\n    brackets: [['<', '>']],\n    autoClosingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    surroundingPairs: [\n        { open: '<', close: '>' },\n        { open: \"'\", close: \"'\" },\n        { open: '\"', close: '\"' }\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"<([_:\\\\w][_:\\\\w-.\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            afterText: /^<\\/([_:\\w][_:\\w-.\\d]*)\\s*>$/i,\n            action: {\n                indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.IndentOutdent */ .Mj.IndentAction.IndentOutdent\n            }\n        },\n        {\n            beforeText: new RegExp(\"<(\\\\w[\\\\w\\\\d]*)([^/>]*(?!/)>)[^<]*$\", 'i'),\n            action: { indentAction: _fillers_monaco_editor_core_js__WEBPACK_IMPORTED_MODULE_0__/* .languages.IndentAction.Indent */ .Mj.IndentAction.Indent }\n        }\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.xml',\n    ignoreCase: true,\n    // Useful regular expressions\n    qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\n    tokenizer: {\n        root: [\n            [/[^<&]+/, ''],\n            { include: '@whitespace' },\n            // Standard opening tag\n            [/(<)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'tag', next: '@tag' }]],\n            // Standard closing tag\n            [\n                /(<\\/)(@qualifiedName)(\\s*)(>)/,\n                [{ token: 'delimiter' }, { token: 'tag' }, '', { token: 'delimiter' }]\n            ],\n            // Meta tags - instruction\n            [/(<\\?)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // Meta tags - declaration\n            [/(<\\!)(@qualifiedName)/, [{ token: 'delimiter' }, { token: 'metatag', next: '@tag' }]],\n            // CDATA\n            [/<\\!\\[CDATA\\[/, { token: 'delimiter.cdata', next: '@cdata' }],\n            [/&\\w+;/, 'string.escape']\n        ],\n        cdata: [\n            [/[^\\]]+/, ''],\n            [/\\]\\]>/, { token: 'delimiter.cdata', next: '@pop' }],\n            [/\\]/, '']\n        ],\n        tag: [\n            [/[ \\t\\r\\n]+/, ''],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [\n                /(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/,\n                ['attribute.name', '', 'attribute.value']\n            ],\n            [/@qualifiedName/, 'attribute.name'],\n            [/\\?>/, { token: 'delimiter', next: '@pop' }],\n            [/(\\/)(>)/, [{ token: 'tag' }, { token: 'delimiter', next: '@pop' }]],\n            [/>/, { token: 'delimiter', next: '@pop' }]\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\x3c!--/, { token: 'comment', next: '@comment' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/--\x3e/, { token: 'comment', next: '@pop' }],\n            [/\x3c!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkwMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUM2RDtBQUN0RDtBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVUsdUJBQXVCO0FBQ2pDLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVSx1QkFBdUI7QUFDakMsVUFBVSx1QkFBdUI7QUFDakMsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxSUFBb0M7QUFDbEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHNCQUFzQixjQUFjLHVIQUE2QjtBQUNqRTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdCQUF3QjtBQUN0QztBQUNBLHVDQUF1QyxvQkFBb0IsSUFBSSw0QkFBNEI7QUFDM0Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQixJQUFJLGNBQWMsUUFBUSxvQkFBb0I7QUFDckY7QUFDQTtBQUNBLHlDQUF5QyxvQkFBb0IsSUFBSSxnQ0FBZ0M7QUFDakc7QUFDQSx5Q0FBeUMsb0JBQW9CLElBQUksZ0NBQWdDO0FBQ2pHO0FBQ0EsK0JBQStCLDBDQUEwQztBQUN6RSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtDQUFrQztBQUN4RCwyQkFBMkIsY0FBYyxJQUFJLGtDQUFrQztBQUMvRSxvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGstc3BsaXQtbWFrZXIvLi9ub2RlX21vZHVsZXMvbW9uYWNvLWVkaXRvci9lc20vdnMvYmFzaWMtbGFuZ3VhZ2VzL3htbC94bWwuanM/Njg3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbmltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJy4uL2ZpbGxlcnMvbW9uYWNvLWVkaXRvci1jb3JlLmpzJztcbmV4cG9ydCB2YXIgY29uZiA9IHtcbiAgICBjb21tZW50czoge1xuICAgICAgICBibG9ja0NvbW1lbnQ6IFsnPCEtLScsICctLT4nXVxuICAgIH0sXG4gICAgYnJhY2tldHM6IFtbJzwnLCAnPiddXSxcbiAgICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgICAgIHsgb3BlbjogJzwnLCBjbG9zZTogJz4nIH0sXG4gICAgICAgIHsgb3BlbjogXCInXCIsIGNsb3NlOiBcIidcIiB9LFxuICAgICAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInIH1cbiAgICBdLFxuICAgIHN1cnJvdW5kaW5nUGFpcnM6IFtcbiAgICAgICAgeyBvcGVuOiAnPCcsIGNsb3NlOiAnPicgfSxcbiAgICAgICAgeyBvcGVuOiBcIidcIiwgY2xvc2U6IFwiJ1wiIH0sXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICAgIF0sXG4gICAgb25FbnRlclJ1bGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KFtfOlxcXFx3XVtfOlxcXFx3LS5cXFxcZF0qKShbXi8+XSooPyEvKT4pW148XSokXCIsICdpJyksXG4gICAgICAgICAgICBhZnRlclRleHQ6IC9ePFxcLyhbXzpcXHddW186XFx3LS5cXGRdKilcXHMqPiQvaSxcbiAgICAgICAgICAgIGFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnRPdXRkZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZm9yZVRleHQ6IG5ldyBSZWdFeHAoXCI8KFxcXFx3W1xcXFx3XFxcXGRdKikoW14vPl0qKD8hLyk+KVtePF0qJFwiLCAnaScpLFxuICAgICAgICAgICAgYWN0aW9uOiB7IGluZGVudEFjdGlvbjogbGFuZ3VhZ2VzLkluZGVudEFjdGlvbi5JbmRlbnQgfVxuICAgICAgICB9XG4gICAgXVxufTtcbmV4cG9ydCB2YXIgbGFuZ3VhZ2UgPSB7XG4gICAgZGVmYXVsdFRva2VuOiAnJyxcbiAgICB0b2tlblBvc3RmaXg6ICcueG1sJyxcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxuICAgIC8vIFVzZWZ1bCByZWd1bGFyIGV4cHJlc3Npb25zXG4gICAgcXVhbGlmaWVkTmFtZTogLyg/OltcXHdcXC5cXC1dKzopP1tcXHdcXC5cXC1dKy8sXG4gICAgdG9rZW5pemVyOiB7XG4gICAgICAgIHJvb3Q6IFtcbiAgICAgICAgICAgIFsvW148Jl0rLywgJyddLFxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQHdoaXRlc3BhY2UnIH0sXG4gICAgICAgICAgICAvLyBTdGFuZGFyZCBvcGVuaW5nIHRhZ1xuICAgICAgICAgICAgWy8oPCkoQHF1YWxpZmllZE5hbWUpLywgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICd0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gU3RhbmRhcmQgY2xvc2luZyB0YWdcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKDxcXC8pKEBxdWFsaWZpZWROYW1lKShcXHMqKSg+KS8sXG4gICAgICAgICAgICAgICAgW3sgdG9rZW46ICdkZWxpbWl0ZXInIH0sIHsgdG9rZW46ICd0YWcnIH0sICcnLCB7IHRva2VuOiAnZGVsaW1pdGVyJyB9XVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIC8vIE1ldGEgdGFncyAtIGluc3RydWN0aW9uXG4gICAgICAgICAgICBbLyg8XFw/KShAcXVhbGlmaWVkTmFtZSkvLCBbeyB0b2tlbjogJ2RlbGltaXRlcicgfSwgeyB0b2tlbjogJ21ldGF0YWcnLCBuZXh0OiAnQHRhZycgfV1dLFxuICAgICAgICAgICAgLy8gTWV0YSB0YWdzIC0gZGVjbGFyYXRpb25cbiAgICAgICAgICAgIFsvKDxcXCEpKEBxdWFsaWZpZWROYW1lKS8sIFt7IHRva2VuOiAnZGVsaW1pdGVyJyB9LCB7IHRva2VuOiAnbWV0YXRhZycsIG5leHQ6ICdAdGFnJyB9XV0sXG4gICAgICAgICAgICAvLyBDREFUQVxuICAgICAgICAgICAgWy88XFwhXFxbQ0RBVEFcXFsvLCB7IHRva2VuOiAnZGVsaW1pdGVyLmNkYXRhJywgbmV4dDogJ0BjZGF0YScgfV0sXG4gICAgICAgICAgICBbLyZcXHcrOy8sICdzdHJpbmcuZXNjYXBlJ11cbiAgICAgICAgXSxcbiAgICAgICAgY2RhdGE6IFtcbiAgICAgICAgICAgIFsvW15cXF1dKy8sICcnXSxcbiAgICAgICAgICAgIFsvXFxdXFxdPi8sIHsgdG9rZW46ICdkZWxpbWl0ZXIuY2RhdGEnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbL1xcXS8sICcnXVxuICAgICAgICBdLFxuICAgICAgICB0YWc6IFtcbiAgICAgICAgICAgIFsvWyBcXHRcXHJcXG5dKy8sICcnXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAvKEBxdWFsaWZpZWROYW1lKShcXHMqPVxccyopKFwiW15cIl0qXCJ8J1teJ10qJykvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiPj9cXC9dKnwnW14nPj9cXC9dKikoPz1bXFw/XFwvXVxcPikvLFxuICAgICAgICAgICAgICAgIFsnYXR0cmlidXRlLm5hbWUnLCAnJywgJ2F0dHJpYnV0ZS52YWx1ZSddXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC8oQHF1YWxpZmllZE5hbWUpKFxccyo9XFxzKikoXCJbXlwiPl0qfCdbXic+XSopLyxcbiAgICAgICAgICAgICAgICBbJ2F0dHJpYnV0ZS5uYW1lJywgJycsICdhdHRyaWJ1dGUudmFsdWUnXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFsvQHF1YWxpZmllZE5hbWUvLCAnYXR0cmlidXRlLm5hbWUnXSxcbiAgICAgICAgICAgIFsvXFw/Pi8sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLyhcXC8pKD4pLywgW3sgdG9rZW46ICd0YWcnIH0sIHsgdG9rZW46ICdkZWxpbWl0ZXInLCBuZXh0OiAnQHBvcCcgfV1dLFxuICAgICAgICAgICAgWy8+LywgeyB0b2tlbjogJ2RlbGltaXRlcicsIG5leHQ6ICdAcG9wJyB9XVxuICAgICAgICBdLFxuICAgICAgICB3aGl0ZXNwYWNlOiBbXG4gICAgICAgICAgICBbL1sgXFx0XFxyXFxuXSsvLCAnJ10sXG4gICAgICAgICAgICBbLzwhLS0vLCB7IHRva2VuOiAnY29tbWVudCcsIG5leHQ6ICdAY29tbWVudCcgfV1cbiAgICAgICAgXSxcbiAgICAgICAgY29tbWVudDogW1xuICAgICAgICAgICAgWy9bXjxcXC1dKy8sICdjb21tZW50LmNvbnRlbnQnXSxcbiAgICAgICAgICAgIFsvLS0+LywgeyB0b2tlbjogJ2NvbW1lbnQnLCBuZXh0OiAnQHBvcCcgfV0sXG4gICAgICAgICAgICBbLzwhLS0vLCAnY29tbWVudC5jb250ZW50LmludmFsaWQnXSxcbiAgICAgICAgICAgIFsvWzxcXC1dLywgJ2NvbW1lbnQuY29udGVudCddXG4gICAgICAgIF1cbiAgICB9XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4902\n")}}]);