import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CountryTabPage } from './country-tab.page';

describe('CountryTabPage', () => {
  let component: CountryTabPage;
  let fixture: ComponentFixture<CountryTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountryTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
