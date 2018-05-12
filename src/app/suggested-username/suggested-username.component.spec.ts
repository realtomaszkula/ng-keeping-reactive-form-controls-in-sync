import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SuggestedUsernameComponent } from './suggested-username.component';
import { SuggestedUsernameModule } from './suggested-username.module';

describe('SuggestedUsernameComponent', () => {
  let component: SuggestedUsernameComponent;
  let fixture: ComponentFixture<SuggestedUsernameComponent>;
  let firstNameCtrl: FormControl;
  let lastNameCtrl: FormControl;
  let usernameCtrl: FormControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SuggestedUsernameModule, NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const { form } = component;

    firstNameCtrl = form.get('firstName') as FormControl;
    lastNameCtrl = form.get('lastName') as FormControl;
    usernameCtrl = form.get('username') as FormControl;
  });

  describe('should suggest username based on first and last name', () => {
    it('when last && first names are truthy', () => {
      firstNameCtrl.setValue('Ned');
      lastNameCtrl.setValue('Stark');

      expect(usernameCtrl.value).toEqual('Ned-Stark');
    });
  });

  describe('should suggest empty username', () => {
    it('when first name is falsy', () => {
      firstNameCtrl.setValue('');
      lastNameCtrl.setValue('Stark');

      expect(usernameCtrl.value).toEqual('');
    });

    it('when last name is falsy', () => {
      firstNameCtrl.setValue('Ned');
      lastNameCtrl.setValue('');

      expect(usernameCtrl.value).toEqual('');
    });
  });
});
