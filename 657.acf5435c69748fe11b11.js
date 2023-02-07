(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{cmU3:function(n,e,o){"use strict";o.r(e),e.default="import {Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    tiptapEditorStyles,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_STYLES,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-editor-example-5',\n    templateUrl: './index.html',\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_STYLES,\n            useValue: tiptapEditorStyles,\n        },\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tiptap/starter-kit').then(({default: module}) => module),\n                import('@tiptap/extension-placeholder').then(({Placeholder}) =>\n                    Placeholder.configure({\n                        emptyNodeClass: 't-editor-placeholder',\n                        // eslint-disable-next-line @typescript-eslint/quotes\n                        placeholder: \"Type '/' for command\", // Notion like\n                        includeChildren: true,\n                    }),\n                ),\n                import('@taiga-ui/addon-editor/extensions/group').then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({nested: false, createOnEnter: true}),\n                ),\n            ],\n        },\n    ],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiEditorNewExample5 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            '<div data-type=\"group\"><p>This is a boring paragraph.</p></div><div data-type=\"group\"><p>And another draggable paragraph.</p></div><div data-type=\"group\"><p>Let\u2019s finish with a boring paragraph.</p></div>',\n        );\n    }\n}\n"}}]);