(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6722],{6722:t=>{t.exports='<h5 class="title">Horizontal</h5>\n\n<section class="horizontal">\n    <nav\n        tuiTabs\n        [(activeItemIndex)]="horizontalActiveIndex"\n    >\n        <button tuiTab>Item 1</button>\n        <button tuiTab>Item 2</button>\n        <button tuiTab>Item 3</button>\n        <button tuiTab>Item 4</button>\n        <button tuiTab>Item 5</button>\n        <button tuiTab>Item 6</button>\n        <button tuiTab>Item 7</button>\n        <button tuiTab>Item 8</button>\n        <button tuiTab>Item 9 with name so long it spans multiple lines</button>\n        <button tuiTab>Item 10</button>\n        <button tuiTab>Item 11</button>\n        <button tuiTab>Item 12</button>\n        <button tuiTab>Item 13</button>\n    </nav>\n</section>\n\n<tui-input-number\n    decimal="never"\n    class="horizontal tui-space_top-4 tui-space_bottom-4"\n    [max]="12"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="horizontalActiveIndex"\n>\n    horizontalActiveIndex\n</tui-input-number>\n\n<h5 class="title">Vertical</h5>\n\n<tui-scrollbar class="vertical">\n    <nav\n        tuiTabs\n        vertical="left"\n        [(activeItemIndex)]="verticalActiveIndex"\n    >\n        <button tuiTab>Item 1</button>\n        <button tuiTab>Item 2</button>\n        <button tuiTab>Item 3</button>\n        <button tuiTab>Item 4</button>\n        <button tuiTab>Item 5</button>\n        <button tuiTab>Item 6</button>\n        <button tuiTab>Item 7</button>\n        <button tuiTab>Item 8</button>\n        <button tuiTab>Item 9 with name so long it spans multiple lines</button>\n        <button tuiTab>Item 10</button>\n        <button tuiTab>Item 11</button>\n        <button tuiTab>Item 12</button>\n        <button tuiTab>Item 13</button>\n    </nav>\n</tui-scrollbar>\n\n<tui-input-number\n    decimal="never"\n    class="input tui-space_top-4"\n    [max]="12"\n    [min]="0"\n    [step]="1"\n    [(ngModel)]="verticalActiveIndex"\n>\n    verticalActiveIndex\n</tui-input-number>\n'}}]);