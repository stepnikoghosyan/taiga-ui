(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50035],{50035:n=>{n.exports='<label tuiLabel>\n    <input\n        tuiSwitch\n        type="checkbox"\n        [(ngModel)]="skeleton"\n    />\n    Show skeleton\n</label>\n<p>\n    <tui-avatar\n        src="AI"\n        [tuiSkeleton]="skeleton"\n    />\n    <tui-avatar\n        src="https://avatars.githubusercontent.com/u/11832552"\n        [tuiSkeleton]="skeleton"\n    />\n    <tui-avatar\n        src="❤️"\n        [tuiSkeleton]="skeleton"\n    />\n    <tui-avatar\n        appearance="primary"\n        src="$"\n        [tuiSkeleton]="skeleton"\n    />\n</p>\n<section\n    tuiCardLarge\n    tuiSurface="flat"\n    [tuiSkeleton]="skeleton"\n>\n    <h2 tuiHeader>\n        <span tuiTitle>\n            Card\n            <span tuiSubtitle>Subtitle</span>\n        </span>\n    </h2>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua.\n</section>\n<p>\n    <button\n        tuiButton\n        [tuiSkeleton]="skeleton"\n    >\n        Awesome\n    </button>\n    <button\n        appearance="secondary"\n        tuiButton\n        [tuiSkeleton]="skeleton"\n    >\n        Cool\n    </button>\n</p>\n<p>\n    <tui-chip [tuiSkeleton]="skeleton">Chip</tui-chip>\n    <tui-badge [tuiSkeleton]="skeleton">Dale</tui-badge>\n</p>\n'}}]);