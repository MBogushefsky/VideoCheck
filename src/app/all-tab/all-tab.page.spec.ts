import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AllTabPage } from './all-tab.page';

describe('AllTabPage', () => {
  let component: AllTabPage;
  let fixture: ComponentFixture<AllTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
