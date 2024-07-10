import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    ViewChild,
} from '@angular/core';
import {USER_AGENT, WINDOW} from '@ng-web-apis/common';
import {CHROMIUM_EDGE_START_VERSION, tuiIsEdgeOlderThan} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiBrightness,
    TuiSizeXXL,
    TuiSizeXXS,
} from '@taiga-ui/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

import {TUI_PROGRESS_OPTIONS, TuiProgressOptions} from '../progress.options';

@Component({
    selector: 'tui-progress-circle',
    templateUrl: './progress-circle.template.html',
    styleUrls: ['./progress-circle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiProgressCircleComponent {
    @ViewChild('progressCircle', {static: true})
    private readonly progressCircle!: ElementRef<SVGCircleElement>;

    @Input()
    value = 0;

    @Input()
    max = 1;

    @Input()
    @HostBinding('style.--tui-progress-color')
    color: string | null = this.options.color;

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeXXL | TuiSizeXXS = this.options.size;

    readonly animationDelay$ = of(true).pipe(delay(0));

    constructor(
        @Inject(USER_AGENT) private readonly userAgent: string,
        @Inject(WINDOW) private readonly win: Window,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PROGRESS_OPTIONS)
        private readonly options: TuiProgressOptions,
    ) {}

    @HostBinding('style.--progress-ratio')
    get progressRatio(): number {
        const ratio = this.value / this.max;

        return Number.isFinite(ratio) ? ratio : 0;
    }

    // TODO: drop support of legacy Edge (EdgeHTML) in v4.x
    get oldEdgeRadiusFallback(): number | null {
        if (!tuiIsEdgeOlderThan(CHROMIUM_EDGE_START_VERSION, this.userAgent)) {
            return null;
        }

        const strokeWidth = parseInt(
            this.win.getComputedStyle(this.progressCircle.nativeElement).strokeWidth,
            10,
        );

        return (this.el.nativeElement.offsetWidth - strokeWidth) / 2;
    }
}
