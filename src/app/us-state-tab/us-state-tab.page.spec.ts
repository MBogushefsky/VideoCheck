import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { USStateTabPage } from './us-state-tab.page';

describe('USStateTabPage', () => {
  let component: USStateTabPage;
  let fixture: ComponentFixture<USStateTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [USStateTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(USStateTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
