(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25090],{25090:n=>{n.exports='<div\n    tuiCardLarge\n    tuiSurface="elevated"\n    class="card"\n>\n    <strong>S-size</strong>\n\n    <tui-range\n        id="s-size-range"\n        size="s"\n        [max]="100"\n        [(ngModel)]="smallRangeValue"\n    />\n\n    <div>\n        Control value:\n        <output for="s-size-range">\n            <code>{{ smallRangeValue | json }}</code>\n        </output>\n    </div>\n</div>\n\n<div\n    tuiCardLarge\n    tuiSurface="elevated"\n    class="card"\n>\n    <strong>M-size</strong>\n\n    <tui-range\n        id="m-size-range"\n        size="m"\n        [formControl]="bigRangeControl"\n        [max]="100"\n    />\n\n    <div>\n        Control value:\n        <output for="m-size-range">\n            <code>{{ bigRangeControl.value | json }}</code>\n        </output>\n    </div>\n</div>\n'}}]);