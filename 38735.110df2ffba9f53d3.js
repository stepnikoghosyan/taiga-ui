(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38735],{38735:t=>{t.exports='<tui-combo-box\n    [formControl]="control"\n    [stringify]="stringify"\n>\n    Type a name\n    <tui-data-list-wrapper\n        *tuiDataList\n        [itemContent]="stringify | tuiStringifyContent"\n        [items]="items | tuiFilterByInput"\n    />\n</tui-combo-box>\n<p class="tui-space_top-2">Selected value: {{ control.value | json }}</p>\n'}}]);