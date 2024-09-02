(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53338],{53338:n=>{n.exports='\x3c!-- Ignore this part, it is only here to position drawer inside the example block --\x3e\n<div class="custom-portal"><ng-container #viewContainer /></div>\n<header tuiNavigationHeader>\n    <button\n        title="Menu"\n        tuiIconButton\n        tuiNavigationDrawer\n        [(open)]="open"\n    >\n        <tui-data-list>\n            <tui-opt-group\n                *ngFor="let group of drawer | keyvalue"\n                [label]="group.key"\n            >\n                <button\n                    *ngFor="let item of group.value"\n                    tuiOption\n                    (click)="open = false"\n                >\n                    <img [src]="item.icon" />\n                    {{ item.name }}\n                </button>\n            </tui-opt-group>\n            <tui-opt-group>\n                <label tuiOption>\n                    <input\n                        size="s"\n                        tuiSwitch\n                        type="checkbox"\n                        [(ngModel)]="switch"\n                    />\n                    Dark mode\n                </label>\n            </tui-opt-group>\n        </tui-data-list>\n    </button>\n    <span tuiNavigationLogo>\n        <tui-icon icon="@tui.home" />\n        <span tuiFade>A very very long product name</span>\n        <tui-badge>Test</tui-badge>\n    </span>\n    <button\n        appearance="secondary"\n        tuiButton\n        tuiChevron\n        tuiDropdownOpen\n        [tuiDropdown]="products"\n    >\n        <span tuiFade>A very very long project</span>\n        <ng-template #products>\n            <tui-data-list size="s">\n                <button tuiOption>\n                    A very very long project\n                    <tui-icon\n                        icon="@tui.check"\n                        [style.font-size.em]="1"\n                        [style.margin-left.rem]="0.5"\n                    />\n                </button>\n                <button tuiOption>Something else</button>\n            </tui-data-list>\n        </ng-template>\n    </button>\n    <hr />\n    <button\n        appearance="secondary"\n        iconStart="@tui.plus"\n        tuiButton\n    >\n        Create\n    </button>\n    <button\n        iconStart="@tui.bell"\n        tuiIconButton\n    >\n        Notifications\n        <tui-badge-notification />\n    </button>\n    <button\n        iconStart="@tui.ellipsis"\n        tuiIconButton\n    >\n        More\n    </button>\n    <tui-avatar src="AI" />\n</header>\n<div [style.display]="\'flex\'">\n    <aside\n        [style.height.rem]="27"\n        [tuiNavigationAside]="expanded"\n    >\n        <header>\n            <button\n                iconStart="@tui.home"\n                tuiAsideItem\n            >\n                <span tuiFade>A very very long product name</span>\n            </button>\n        </header>\n        <button\n            iconStart="@tui.search"\n            tuiAsideItem\n        >\n            Search\n        </button>\n        <a\n            iconStart="@tui.users"\n            tuiAsideItem\n            [routerLink]="routes.Navigation"\n        >\n            Groups\n        </a>\n        <tui-aside-group>\n            <button\n                iconStart="@tui.settings"\n                tuiAsideItem\n                tuiChevron\n            >\n                Settings\n                <ng-template>\n                    <button tuiAsideItem>Account</button>\n                    <button tuiAsideItem>Notifications</button>\n                    <button tuiAsideItem>Privacy</button>\n                </ng-template>\n            </button>\n        </tui-aside-group>\n        <button\n            iconStart="@tui.heart"\n            tuiAsideItem\n        >\n            <span tuiFade>By default ellipsis is used but you can use fade too</span>\n        </button>\n        <button\n            iconEnd="@tui.chevron-right"\n            iconStart="@tui.ellipsis"\n            tuiAsideItem\n            tuiDropdownHover\n            tuiDropdownOpen\n            [tuiDropdown]="more"\n        >\n            More\n            <ng-template\n                #more\n                let-close\n            >\n                <tui-data-list tuiDataListDropdownManager>\n                    <button\n                        iconStart="@tui.pencil"\n                        tuiAsideItem\n                        tuiOption\n                    >\n                        Write\n                    </button>\n                    <button\n                        iconStart="@tui.pie-chart"\n                        tuiAsideItem\n                        tuiOption\n                        [tuiDropdown]="submenu"\n                    >\n                        Categories\n                        <ng-template #submenu>\n                            <tui-data-list>\n                                <button\n                                    tuiAsideItem\n                                    (click)="close()"\n                                >\n                                    Fiction (will close menu)\n                                </button>\n                                <button tuiAsideItem>Non-Fiction</button>\n                                <button tuiAsideItem>Children</button>\n                            </tui-data-list>\n                        </ng-template>\n                    </button>\n                </tui-data-list>\n            </ng-template>\n        </button>\n        <hr />\n        <button\n            iconStart="@tui.plus"\n            tuiAsideItem\n        >\n            Add\n        </button>\n        <footer>\n            <button\n                iconStart="@tui.star"\n                tuiAsideItem\n            >\n                Favorites\n            </button>\n            <button\n                tuiAsideItem\n                [iconStart]="expanded ? \'@tui.chevron-left\' : \'@tui.chevron-right\'"\n                (click)="expanded = !expanded"\n            >\n                {{ expanded ? \'Collapse\' : \'Expand\' }}\n            </button>\n        </footer>\n    </aside>\n    <main tuiNavigationMain>\n        <nav\n            tuiNavigationNav\n            [style.position]="\'sticky\'"\n        >\n            <a routerLink=".">\n                <tui-icon icon="@tui.chevron-left" />\n                Back\n            </a>\n            /\n            <span tuiNavigationLogo>\n                <span tuiFade>Groups</span>\n                <tui-badge iconStart="@tui.lock">Status</tui-badge>\n            </span>\n            <hr />\n            <tui-tabs tuiFade>\n                <button tuiTab>Default view</button>\n                <button tuiTab>Details</button>\n                <button tuiTab>Followers</button>\n            </tui-tabs>\n            <button\n                appearance="secondary"\n                tuiButton\n            >\n                Secondary\n            </button>\n            <button tuiButton>Primary</button>\n        </nav>\n        <div\n            *tuiRepeatTimes="let index of 10"\n            tuiCardLarge\n            tuiHeader\n            tuiSurface="elevated"\n        >\n            <h2 tuiTitle>\n                Some random content\n                <span tuiSubtitle>A subtitle</span>\n            </h2>\n        </div>\n    </main>\n</div>\n'}}]);