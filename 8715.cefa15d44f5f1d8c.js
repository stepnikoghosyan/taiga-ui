(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8715],{8715:t=>{t.exports='<div\n    tuiCardMedium\n    tuiSurface="elevated"\n>\n    <tui-avatar-stack direction="left">\n        <tui-avatar\n            *ngFor="let url of urls"\n            size="s"\n            [src]="url | tuiFallbackSrc: \'@tui.user\' | async"\n            [style.background]="url | tuiAutoColor"\n        />\n    </tui-avatar-stack>\n\n    <h2 tuiTitle>\n        Title\n        <span tuiSubtitle>Subtitle</span>\n    </h2>\n</div>\n\n<div\n    tuiCardMedium\n    tuiSurface="elevated"\n>\n    <h2 tuiTitle>\n        Title\n        <span tuiSubtitle>Subtitle</span>\n    </h2>\n\n    <tui-avatar-stack direction="left">\n        <tui-avatar\n            *ngFor="let url of urls"\n            size="s"\n            [src]="url | tuiFallbackSrc: \'@tui.user\' | async"\n            [style.background]="url | tuiAutoColor"\n        />\n    </tui-avatar-stack>\n</div>\n'}}]);