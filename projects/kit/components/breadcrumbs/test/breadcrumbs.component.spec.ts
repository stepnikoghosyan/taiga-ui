import {NgFor} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';
import {TuiItem} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {TuiLink} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiBreadcrumbs} from '@taiga-ui/kit';
import {TuiPageObject} from '@taiga-ui/testing';

const ITEMS = [
    {
        caption: 'Selects',
        routerLink: '/components/select',
    },
    {
        caption: 'Multi',
        routerLink: '/components/multi-select',
    },
    {
        caption: 'With tags',
        routerLink: '/components/multi-select',
    },
];

describe('Breadcrumbs Wrapper', () => {
    @Component({
        standalone: true,
        imports: [NgFor, RouterTestingModule, TuiBreadcrumbs, TuiItem, TuiLink],
        template: `
            <tui-breadcrumbs
                automation-id="tui-breadcrumbs-wrapper__component"
                [size]="size"
            >
                <ng-container *ngFor="let item of items">
                    <a
                        *tuiItem
                        tuiLink
                        [routerLink]="item.routerLink"
                    >
                        {{ item.caption }}
                    </a>
                </ng-container>
            </tui-breadcrumbs>
        `,
    })
    class Test {
        @ViewChild(TuiBreadcrumbs, {static: true})
        public component!: TuiBreadcrumbs;

        public items = ITEMS;

        public size: TuiSizeL = 'm';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    const testContext = {
        get prefix() {
            return 'tui-breadcrumbs-wrapper__';
        },
    };

    function getBreadcrumbs(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}component`)!;
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('size:', () => {
        it('default is medium', () => {
            expect(getBreadcrumbs().attributes['data-size']).toBe('m');
        });

        it('large is set for size = "l"', () => {
            testComponent.size = 'l';
            fixture.detectChanges();

            expect(getBreadcrumbs().attributes['data-size']).toBe('l');
        });
    });

    describe('icon:', () => {
        it('the last element is missing', () => {
            const itemsArrayLength = ITEMS.length;
            const iconsArrayLength = fixture.debugElement.queryAll(
                By.css('.t-icon'),
            ).length;

            expect(iconsArrayLength).toBe(itemsArrayLength - 1);
        });
    });
});
